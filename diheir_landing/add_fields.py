import re

html_path = "/Users/apple/Desktop/diheir_landing/diheir_landing.html"
with open(html_path, "r") as f:
    html = f.read()

# We want to insert the 3 new fields before the "요청사항" row.
# Let's find the "요청사항" row and prepend our new HTML.
target_row = """              <!-- Row 5 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">요청사항</p>"""

new_fields = """              <!-- Row: 유입 경로 -->
              <div class="flex flex-col md:flex-row md:items-start justify-between w-full pt-1 md:pt-0">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-3 md:mb-0 md:mt-1.5 shrink-0">유입 경로</p>
                <div class="flex flex-wrap gap-2 w-full">
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.663394179" value="인스타그램" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">인스타그램</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.663394179" value="네이버 검색" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">네이버 검색</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.663394179" value="지인 추천" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">지인 추천</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.663394179" value="도로시 쇼핑몰" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">도로시 쇼핑몰</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.663394179" value="기타" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">기타</span>
                  </label>
                </div>
              </div>

              <!-- Row: 관심 카테고리 -->
              <div class="flex flex-col md:flex-row md:items-start justify-between w-full pt-1 md:pt-0">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-3 md:mb-0 md:mt-1.5 shrink-0">관심분야</p>
                <div class="flex flex-wrap gap-2 w-full">
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1832948341" value="반지·프로포즈" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">반지·프로포즈</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1832948341" value="목걸이" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">목걸이</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1832948341" value="귀걸이" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">귀걸이</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1832948341" value="팔찌" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">팔찌</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1832948341" value="커스터마이징" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">커스터마이징</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1832948341" value="선물용" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">선물용</span>
                  </label>
                </div>
              </div>

              <!-- Row: 예산 범위 -->
              <div class="flex flex-col md:flex-row md:items-start justify-between w-full pt-1 md:pt-0">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-3 md:mb-0 md:mt-1.5 shrink-0">예산 범위</p>
                <div class="flex flex-wrap gap-2 w-full">
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1465868753" value="50만원 미만" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">50만원 미만</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1465868753" value="50만원 ~ 100만원" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">50만원 ~ 100만원</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1465868753" value="100만원 ~ 300만원" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">100만원 ~ 300만원</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1465868753" value="300만원 ~ 500만원" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">300만원 ~ 500만원</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1465868753" value="500만원 이상" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">500만원 이상</span>
                  </label>
                  <label class="cursor-pointer">
                    <input type="radio" name="entry.1465868753" value="논의 후 결정" class="peer hidden" />
                    <span class="px-4 py-1.5 border border-[#444429]/40 rounded-full text-[13px] md:text-[14px] text-[#444429] peer-checked:bg-[#383629] peer-checked:text-[#c8c9bc] transition-colors inline-block">논의 후 결정</span>
                  </label>
                </div>
              </div>

""" + target_row

html = html.replace(target_row, new_fields)

with open(html_path, "w") as f:
    f.write(html)
print("Added new form fields.")
