html_path = "/Users/apple/Desktop/diheir_landing/diheir_landing.html"
with open(html_path, "r") as f:
    html = f.read()

# Replace the Date min logic
old_date_logic = """  // Set minimum date for date inputs to today
  const todayDate = new Date();
  const tzOffset = todayDate.getTimezoneOffset() * 60000;
  const localISOTime = (new Date(Date.now() - tzOffset)).toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(el => {
    el.min = localISOTime;
    el.max = '9999-12-31'; // Limits year input to 4 digits
    // Disallow manual typing of past dates as a fallback
    el.addEventListener('change', function() {
      if (this.value < localISOTime) {
        this.value = '';
        alert('오늘 이후의 날짜만 선택 가능합니다.');
      }
    });
  });"""

new_date_logic = """  // Set minimum datetime for datetime-local inputs
  const todayDate = new Date();
  const tzOffset = todayDate.getTimezoneOffset() * 60000;
  
  let minDate = new Date(todayDate);
  let mm = minDate.getMinutes();
  if (mm > 30) { minDate.setHours(minDate.getHours() + 1); minDate.setMinutes(0); }
  else { minDate.setMinutes(30); }
  const minISOTime = (new Date(minDate.getTime() - tzOffset)).toISOString().slice(0, 16);
  
  document.querySelectorAll('input[type="datetime-local"]').forEach(el => {
    el.min = minISOTime;
    el.max = '9999-12-31T23:59';
    
    el.addEventListener('change', function() {
      if (!this.value) return;
      const selected = new Date(this.value);
      const now = new Date();
      if (selected < now) {
        alert('과거 시간은 예약할 수 없습니다.');
        this.value = ''; return;
      }
      if (selected.getDay() === 1) {
        alert('매주 월요일은 정기 휴무입니다.');
        this.value = ''; return;
      }
      const hh = selected.getHours();
      const mm = selected.getMinutes();
      const timeNum = hh * 100 + mm;
      if (timeNum < 1030 || timeNum > 1930) {
        alert('예약 가능한 시간은 AM 10:30 ~ PM 07:30 입니다.');
        this.value = ''; return;
      }
      if (mm !== 0 && mm !== 30) {
        alert('예약은 30분 단위로만 가능합니다.');
        this.value = ''; return;
      }
    });
  });"""

html = html.replace(old_date_logic, new_date_logic)

# Replace handleDateChange and handleDsSubmit
old_handlers = """  window.handleDateChange = function(e, type) {
    const val = e.target.value;
    if (val) {
      const parts = val.split('-');
      document.querySelector('.date-year-' + type).value = parts[0];
      document.querySelector('.date-month-' + type).value = parts[1];
      document.querySelector('.date-day-' + type).value = parts[2];
    }
  };

  window.handleDsSubmit = function(e, type) {
    const form = e.currentTarget;
    setTimeout(() => {
      alert("예약이 정상적으로 접수되었습니다.");
      form.reset();
      document.querySelector('.date-year-' + type).value = "";
      document.querySelector('.date-month-' + type).value = "";
      document.querySelector('.date-day-' + type).value = "";
    }, 500);
  };"""

new_handlers = """  window.handleDateChange = function(e, type) {
    const val = e.target.value; // e.g. "2026-07-28T14:30"
    if (val) {
      const [datePart, timePart] = val.split('T');
      const parts = datePart.split('-');
      document.querySelector('.date-year-' + type).value = parts[0];
      document.querySelector('.date-month-' + type).value = parts[1];
      document.querySelector('.date-day-' + type).value = parts[2];
      e.target.closest('form').dataset.selectedTime = timePart || "";
    }
  };

  window.handleDsSubmit = function(e, type) {
    const form = e.currentTarget;
    const timePart = form.dataset.selectedTime;
    const reqInput = form.querySelector('input[name="entry.399277218"]');
    const originalReq = reqInput.value;
    
    if (timePart) {
      reqInput.value = `[예약시간: ${timePart}] ` + originalReq;
    }
    
    setTimeout(() => {
      alert("예약이 정상적으로 접수되었습니다.");
      form.reset();
      reqInput.value = originalReq;
      document.querySelector('.date-year-' + type).value = "";
      document.querySelector('.date-month-' + type).value = "";
      document.querySelector('.date-day-' + type).value = "";
    }, 500);
  };"""

html = html.replace(old_handlers, new_handlers)

with open(html_path, "w") as f:
    f.write(html)
print("Updated datetime logic and handlers.")
