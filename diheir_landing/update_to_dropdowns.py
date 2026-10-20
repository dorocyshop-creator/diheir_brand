import re

html_path = "/Users/apple/Desktop/diheir_landing/diheir_landing.html"
with open(html_path, "r") as f:
    html = f.read()

# Pattern for the entire newly added block
old_fields_pattern = r'<!-- Row: 유입 경로 -->.*?<!-- Row 5 -->'

new_fields = """<!-- Row: 유입 경로 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">유입 경로</p>
                <select name="entry.663394179" class="border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429] cursor-pointer bg-no-repeat bg-right" style="background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22%23444429%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M7.247%2011.14L2.451%205.658C1.885%205.013%202.345%204%203.204%204h9.592a1%201%200%200%201%20.753%201.659l-4.796%205.48a1%201%200%200%201-1.506%200z%22%2F%3E%3C%2Fsvg%3E'); background-position-y: 6px; appearance: none; -webkit-appearance: none;">
                  <option value="" disabled selected>선택해주세요.</option>
                  <option value="인스타그램">인스타그램</option>
                  <option value="네이버 검색">네이버 검색</option>
                  <option value="지인 추천">지인 추천</option>
                  <option value="도로시 쇼핑몰">도로시 쇼핑몰</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              <!-- Row: 관심 카테고리 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">관심분야</p>
                <select name="entry.1832948341" class="border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429] cursor-pointer bg-no-repeat bg-right" style="background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22%23444429%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M7.247%2011.14L2.451%205.658C1.885%205.013%202.345%204%203.204%204h9.592a1%201%200%200%201%20.753%201.659l-4.796%205.48a1%201%200%200%201-1.506%200z%22%2F%3E%3C%2Fsvg%3E'); background-position-y: 6px; appearance: none; -webkit-appearance: none;">
                  <option value="" disabled selected>선택해주세요.</option>
                  <option value="반지·프로포즈">반지·프로포즈</option>
                  <option value="목걸이">목걸이</option>
                  <option value="귀걸이">귀걸이</option>
                  <option value="팔찌">팔찌</option>
                  <option value="커스터마이징">커스터마이징</option>
                  <option value="선물용">선물용</option>
                </select>
              </div>

              <!-- Row: 예산 범위 -->
              <div class="flex items-end justify-between w-full">
                <p class="font-sans text-[#444429] text-[15px] md:text-[17px] min-w-[70px] md:min-w-[90px] mb-2">예산 범위</p>
                <select name="entry.1465868753" class="border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-full pb-2 text-[15px] md:text-[16px] focus:border-[#444429] cursor-pointer bg-no-repeat bg-right" style="background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22%23444429%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M7.247%2011.14L2.451%205.658C1.885%205.013%202.345%204%203.204%204h9.592a1%201%200%200%201%20.753%201.659l-4.796%205.48a1%201%200%200%201-1.506%200z%22%2F%3E%3C%2Fsvg%3E'); background-position-y: 6px; appearance: none; -webkit-appearance: none;">
                  <option value="" disabled selected>선택해주세요.</option>
                  <option value="50만원 미만">50만원 미만</option>
                  <option value="50만원 ~ 100만원">50만원 ~ 100만원</option>
                  <option value="100만원 ~ 300만원">100만원 ~ 300만원</option>
                  <option value="300만원 ~ 500만원">300만원 ~ 500만원</option>
                  <option value="500만원 이상">500만원 이상</option>
                  <option value="논의 후 결정">논의 후 결정</option>
                </select>
              </div>

              <!-- Row 5 -->"""

html = re.sub(old_fields_pattern, new_fields, html, flags=re.DOTALL)

with open(html_path, "w") as f:
    f.write(html)
print("Updated to dropdowns.")
