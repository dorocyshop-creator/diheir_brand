import re

html_path = "/Users/apple/Desktop/diheir_landing/diheir_landing.html"
index_path = "/Users/apple/Desktop/diheir_landing/index.html"

with open(html_path, "r") as f:
    html = f.read()

# Match the entire footer block
old_footer_pattern = r'<footer class="relative w-full overflow-hidden bg-\[#383629\].*?</footer>'

new_footer = """<footer class="relative w-full bg-[#383629] px-[8vw] md:px-[80px] lg:px-[120px] py-[10vw] md:py-[100px] flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-0" data-name="footer">
      <!-- Left Side: Company Info -->
      <div class="flex flex-col gap-1 text-[#c1c4ad]/80 text-[12px] md:text-[14px] leading-relaxed font-sans tracking-tight reveal">
        <p>법인명(상호) : 디에르(DIHEIR)</p>
        <p>대표자(성명) : 조윤경</p>
        <p>사업자등록번호 : 758-26-01812 <a href="#" class="inline-block ml-1 opacity-80 hover:opacity-100 transition-opacity">[사업자정보확인]</a></p>
        <p>책임자 : 조윤경</p>
        <p>주소 : 서울특별시 강남구 도산대로59길 16, 지하 1층 (청담동, 테이블2025)</p>
        <p>대표번호 : 010-8947-2520</p>
        <p>개인정보 보호책임자 : 조상환</p>
        
        <p class="mt-6 md:mt-8 text-[#c1c4ad]/50 text-[11px] md:text-[13px] font-serif tracking-widest uppercase">© 2026 DIHEIR. ALL RIGHTS RESERVED.</p>
      </div>

      <!-- Right Side: Logo -->
      <div class="w-[180px] md:w-[250px] lg:w-[320px] shrink-0 reveal" style="transition-delay: 0.2s;">
        <img alt="Diheir Logo" src="./component/diheirspace/diheir_logo.png" class="w-full object-contain md:object-right" />
      </div>
    </footer>"""

html = re.sub(old_footer_pattern, new_footer, html, flags=re.DOTALL)

with open(html_path, "w") as f:
    f.write(html)
with open(index_path, "w") as f:
    f.write(html)

print("Replaced footer.")
