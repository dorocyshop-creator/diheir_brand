html_str = """
<section id="reservation" class="relative w-full overflow-hidden bg-[#383629] pb-[100px]" data-name="diheirspace">
  
  <!-- Container for relative positioning -->
  <div class="relative w-full flex flex-col items-center pt-[60px] md:pt-[100px]">
    
    <!-- Background Text (Absolute to overlap image) -->
    <div class="absolute top-[40px] md:top-[60px] left-1/2 -translate-x-1/2 w-full flex justify-center z-[5] pointer-events-none reveal">
      <p class="font-serif text-center capitalize text-[#555342] whitespace-nowrap leading-none mix-blend-plus-lighter" style="font-size: clamp(120px, 22vw, 320px); letter-spacing: -0.02em">Diheirspace</p>
    </div>

    <!-- Main Landscape Image -->
    <div class="relative w-full max-w-[1400px] px-4 md:px-0 z-[1] reveal">
      <img alt="디에르 청담 공간" src="./component/diheirspace/diheirspace.jpg" class="w-full h-auto object-cover opacity-90" />
    </div>

    <!-- The unified Glass Card -->
    <!-- Pulling it up heavily to match the visual alignment -->
    <div class="relative mt-[-45vw] md:mt-[-550px] lg:mt-[-600px] w-full px-4 md:px-0 max-w-[850px] z-10 reveal">
      
      <div class="flex flex-col w-full rounded-[24px] md:rounded-[32px] border border-white/20 backdrop-blur-[16px] shadow-2xl p-[16px] md:p-[24px]" style="background: rgba(170, 166, 128, 0.1);">
        
        <!-- Top Form Section (Beige) -->
        <div class="bg-[#c8c9bc] w-full flex flex-col items-center pt-[10vw] pb-[8vw] md:pt-[70px] md:pb-[60px] px-[6vw] md:px-[60px] rounded-[12px] md:rounded-[16px]">
          <p class="font-serif text-[#383629] mb-[8vw] md:mb-[50px] text-center leading-none tracking-tight" style="font-size: clamp(32px, 6vw, 48px);">Reserve Appointment</p>
          
          <iframe name="hidden_iframe_unified" id="hidden_iframe_unified" style="display:none;" onload=""></iframe>
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSdk6sZtR3D9WEqknpSOKANA-DxMfnszfjWW8VjwO4QopDwIOA/formResponse" method="POST" target="hidden_iframe_unified" class="flex flex-col items-center w-full gap-[6vw] md:gap-[40px]" onsubmit="handleDsSubmit(event, 'unified')">
            
            <div class="flex flex-col gap-[5vw] md:gap-[30px] w-full">
              <!-- Row 1 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">이름</p>
                <input required type="text" name="entry.1054060175" placeholder="입력해주세요." class="border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429] placeholder:text-[#444429]/70" />
              </div>
              <!-- Row 2 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">연락처</p>
                <input required type="tel" name="entry.2074802535" placeholder="입력해주세요." maxlength="13" class="phone-input-unified border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429] placeholder:text-[#444429]/70" />
              </div>
              <!-- Row 3 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">방문일</p>
                <div class="relative w-full">
                  <input required type="text" placeholder="입력해주세요." class="absolute inset-0 border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429] placeholder:text-[#444429]/70 pointer-events-none" id="fake-date-unified" />
                  <input required type="date" class="date-input-unified border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429] opacity-0" onchange="handleDateChange(event, 'unified'); document.getElementById('fake-date-unified').value = this.value;" />
                </div>
                <input type="hidden" name="entry.626727524_year" class="date-year-unified" />
                <input type="hidden" name="entry.626727524_month" class="date-month-unified" />
                <input type="hidden" name="entry.626727524_day" class="date-day-unified" />
              </div>
              <!-- Row 4 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">이메일</p>
                <input required type="email" name="entry.134182212" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="이메일 주소에는 반드시 '@'가 포함되어야 합니다." placeholder="입력해주세요." class="border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429] placeholder:text-[#444429]/70" />
              </div>
              <!-- Row 5 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">요청사항</p>
                <input type="text" name="entry.399277218" placeholder="입력해주세요." class="border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429] placeholder:text-[#444429]/70" />
              </div>
            </div>

            <!-- Checkbox -->
            <div class="flex items-center justify-start w-full gap-3 mt-[2vw] md:mt-[10px]">
              <input id="privacy-agree-unified" required type="checkbox" name="entry.831169210" value="네" class="appearance-none border border-transparent bg-white checked:bg-[#383629] checked:border-[#383629] rounded-[2px] cursor-pointer w-[18px] h-[18px] shrink-0 flex items-center justify-center transition-colors" />
              <div class="font-sans text-[#444429] flex items-center text-[13px] md:text-[14px]">
                <button type="button" onclick="openPrivacyModal()" class="hover:text-black transition-colors cursor-pointer">개인정보 처리방침</button>
                <label for="privacy-agree-unified" class="cursor-pointer">에 동의</label>
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="bg-[#383629] text-[#c8c9bc] rounded-full flex items-center justify-center hover:bg-black transition-colors h-[42px] md:h-[48px] w-[140px] md:w-[150px] mt-[4vw] md:mt-[20px]">
              <span class="font-serif text-[15px] md:text-[17px] tracking-wide pt-0.5">Reservation</span>
            </button>
          </form>
        </div>

        <!-- Bottom Address Section -->
        <div class="bg-transparent w-full flex flex-col px-[4vw] md:px-[40px] pt-[8vw] md:pt-[50px] pb-[4vw] md:pb-[20px] text-[rgba(255,255,255,0.7)]">
          <p class="font-serif tracking-wide text-[20px] md:text-[24px] mb-3 text-[#f7f7ec]">DIHEIR Cheongdam</p>
          <div class="font-sans flex flex-col md:flex-row justify-between gap-2 md:gap-8 text-[12px] md:text-[13px] tracking-tight">
            <p class="leading-[1.6]">서울시 강남구 도산대로59길 16,<br />B1층 (청담동, 테이블2025)</p>
            <p class="leading-[1.6] md:text-right">AM 10:30 - PM 07:30 / 월·명절 연휴 휴무<br />Tel. 0507-1339-2520</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>

  <!-- Privacy Modal -->
  <div id="ds-privacy-modal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm hidden" onclick="closePrivacyModal()">
    <div class="relative w-full max-w-lg rounded-2xl bg-[#f7f7ec] p-6 md:p-8 shadow-2xl" onclick="event.stopPropagation()">
      <button class="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black" onclick="closePrivacyModal()">&times;</button>
      <h3 class="mb-4 text-xl font-bold text-[#383629]">개인정보 수집 및 이용 동의</h3>
      <div class="text-sm text-[#383629] space-y-4 leading-relaxed max-h-[70vh] overflow-y-auto">
        <p>디에르는 쇼룸 방문 예약 접수 및 상담 진행을 위하여 아래와 같이 개인정보를 수집·이용합니다.</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>수집 항목:</strong> 이름, 연락처(전화번호), 이메일 주소, 희망 예약 일시, 문의 내용 및 요청사항</li>
          <li><strong>수집·이용 목적:</strong> 방문 예약의 접수·확인 및 확정 안내, 예약 일정의 변경·취소 관련 연락, 상담 준비 및 문의 응대</li>
          <li><strong>보유·이용 기간:</strong> 수집·이용 목적 달성 시까지. 단, 상법 및 기타 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당 법적 목적의 범위 내에서만 안전하게 보관·이용합니다.</li>
        </ul>
        <p>귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를 거부할 경우 방문 예약 접수 및 상담 진행이 제한될 수 있습니다.</p>
      </div>
    </div>
  </div>
</section>
"""

with open("/Users/apple/Desktop/diheir_landing/diheir_landing.html", "r") as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if '<section id="reservation" class="relative w-full' in line and 'data-name="diheirspace"' in line:
        start_idx = i
    if start_idx != -1 and '</section>' in line and i > start_idx:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    lines = lines[:start_idx] + [html_str + "\n"] + lines[end_idx+1:]
    with open("/Users/apple/Desktop/diheir_landing/diheir_landing.html", "w") as f:
        f.writelines(lines)
    print("HTML patched successfully!")
else:
    print("Could not find diheirspace section!")
