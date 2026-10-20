import re

html_path = "/Users/apple/Desktop/diheir_landing/diheir_landing.html"
with open(html_path, "r") as f:
    html = f.read()

# 1. Add Flatpickr CDN links in the <head>
head_addition = """  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <script src="https://npmcdn.com/flatpickr/dist/l10n/ko.js"></script>
  <style>
    /* Diheir Theme for Flatpickr */
    .flatpickr-calendar {
      background: #f7f7ec !important;
      border: 1px solid #383629 !important;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2) !important;
      font-family: inherit !important;
    }
    .flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay {
      background: #383629 !important;
      border-color: #383629 !important;
      color: #c8c9bc !important;
    }
    .flatpickr-day:hover {
      background: rgba(56, 54, 41, 0.1) !important;
    }
    .flatpickr-current-month .flatpickr-monthDropdown-months, .flatpickr-current-month .numInputWrapper {
      color: #383629 !important;
    }
    .flatpickr-day {
      color: #383629;
    }
    span.flatpickr-weekday {
      color: #383629 !important;
      font-weight: 600;
    }
    .flatpickr-day.flatpickr-disabled {
      color: rgba(56, 54, 41, 0.3) !important;
    }
    .flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month {
      color: #383629 !important;
      fill: #383629 !important;
    }
  </style>
</head>"""
html = html.replace('</head>', head_addition)


# 2. Replace the HTML row for Date
old_date_row = """              <!-- Row 3 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">방문일</p>
                <input required type="datetime-local" step="1800" class="date-input-unified border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429]" onchange="handleDateChange(event, 'unified')" />
                <input type="hidden" name="entry.626727524_year" class="date-year-unified" />
                <input type="hidden" name="entry.626727524_month" class="date-month-unified" />
                <input type="hidden" name="entry.626727524_day" class="date-day-unified" />
              </div>"""

new_date_row = """              <!-- Row 3 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">방문일시</p>
                <div class="flex items-end gap-3 w-full">
                  <input required type="text" id="diheir-date-picker" placeholder="날짜 선택" class="border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429] placeholder:text-[#444429]/70 cursor-pointer" readonly />
                  <select required id="diheir-time-picker" class="border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-[110px] md:w-[130px] shrink-0 pb-2 text-[15px] md:text-[16px] focus:border-[#444429] cursor-pointer appearance-none">
                    <option value="" disabled selected>시간 선택</option>
                  </select>
                </div>
                <input type="hidden" name="entry.626727524_year" class="date-year-unified" />
                <input type="hidden" name="entry.626727524_month" class="date-month-unified" />
                <input type="hidden" name="entry.626727524_day" class="date-day-unified" />
              </div>"""
html = html.replace(old_date_row, new_date_row)


# 3. Replace the JS logic at the bottom
old_js_logic_pattern = re.compile(r'// Set minimum datetime for datetime-local inputs.*?\}\);\s*\}\);', re.DOTALL)
new_js_logic = """// Custom Date & Time Picker Logic (Flatpickr)
  const timeSelect = document.getElementById('diheir-time-picker');
  const allTimes = [
    "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", 
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", 
    "17:30", "18:00", "18:30", "19:00", "19:30"
  ];

  function populateTimes(selectedDateStr) {
    timeSelect.innerHTML = '<option value="" disabled selected>시간 선택</option>';
    if (!selectedDateStr) return;
    
    const selectedDate = new Date(selectedDateStr);
    const now = new Date();
    const isToday = selectedDate.toDateString() === now.toDateString();
    const currentNum = now.getHours() * 100 + now.getMinutes();
    
    allTimes.forEach(t => {
      const parts = t.split(':');
      const hh = parseInt(parts[0], 10);
      const mm = parseInt(parts[1], 10);
      const tNum = hh * 100 + mm;
      
      if (isToday && tNum <= currentNum) {
        return; // skip past times for today
      }
      
      const ampm = hh < 12 ? '오전' : '오후';
      const displayH = hh > 12 ? hh - 12 : hh;
      const displayM = mm === 0 ? '00' : '30';
      const option = document.createElement('option');
      option.value = t;
      option.textContent = `${ampm} ${displayH}:${displayM}`;
      timeSelect.appendChild(option);
    });
  }

  if (document.getElementById('diheir-date-picker')) {
    flatpickr("#diheir-date-picker", {
      locale: "ko",
      minDate: "today",
      disable: [
        function(date) { return date.getDay() === 1; } // Disable Mondays
      ],
      onChange: function(selectedDates, dateStr, instance) {
        // Set hidden fields for Google form
        if (selectedDates.length > 0) {
          const d = selectedDates[0];
          document.querySelector('.date-year-unified').value = d.getFullYear();
          document.querySelector('.date-month-unified').value = String(d.getMonth() + 1).padStart(2, '0');
          document.querySelector('.date-day-unified').value = String(d.getDate()).padStart(2, '0');
        }
        // Update available times
        populateTimes(dateStr);
      }
    });
  }
  
  // Track selected time globally for submission
  timeSelect?.addEventListener('change', function(e) {
    e.target.closest('form').dataset.selectedTime = e.target.value;
  });"""
html = re.sub(old_js_logic_pattern, new_js_logic, html)


# 4. We also need to clean up handleDateChange which is now obsolete but we should keep it empty so it doesn't error
old_handle_date_change = """  window.handleDateChange = function(e, type) {
    const val = e.target.value; // e.g. "2026-07-28T14:30"
    if (val) {
      const [datePart, timePart] = val.split('T');
      const parts = datePart.split('-');
      document.querySelector('.date-year-' + type).value = parts[0];
      document.querySelector('.date-month-' + type).value = parts[1];
      document.querySelector('.date-day-' + type).value = parts[2];
      e.target.closest('form').dataset.selectedTime = timePart || "";
    }
  };"""
new_handle_date_change = """  window.handleDateChange = function(e, type) {
    // Obsolete: Handled by Flatpickr onChange
  };"""
html = html.replace(old_handle_date_change, new_handle_date_change)


with open(html_path, "w") as f:
    f.write(html)
print("Updated UI to Flatpickr and Custom Select.")
