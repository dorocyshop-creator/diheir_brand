import re

for path in ["/Users/apple/Desktop/diheir_landing/diheir_landing.html", "/Users/apple/Desktop/diheir_landing/index.html"]:
    with open(path, "r") as f:
        html = f.read()

    # Find the wrongly placed footer and replace it with just </section>
    wrong_footer_pattern = r'</section>\n\n<!-- ══ 새 풋터 ══════════════════════════════════════════ -->\n<footer.*?</footer>\n'
    html = re.sub(wrong_footer_pattern, '</section>\n', html, flags=re.DOTALL)

    new_footer = """
<!-- ══ 새 풋터 ══════════════════════════════════════════ -->
<footer class="relative w-full bg-[#383629] px-[8vw] md:px-[80px] lg:px-[120px] py-[10vw] md:py-[100px] flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-0" data-name="footer" style="z-index: 10;">
  <!-- Left Side: Company Info -->
  <div class="flex flex-col gap-1 text-[#c1c4ad]/80 text-[12px] md:text-[14px] leading-relaxed font-sans tracking-tight ds-fade-up" style="transition-duration: 1.0s;">
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
  <div class="w-[180px] md:w-[250px] lg:w-[320px] shrink-0 ds-fade-up" style="transition-delay: 0.2s; transition-duration: 1.0s;">
    <img alt="Diheir Logo" src="./component/diheirspace/diheir_logo.png" class="w-full object-contain md:object-right" />
  </div>
</footer>
"""

    # Insert it right before the floating badge
    html = html.replace('<!-- ══ 플로팅 혜택 배지 ══════════════════════════════════ -->', new_footer + '\n<!-- ══ 플로팅 혜택 배지 ══════════════════════════════════ -->')

    with open(path, "w") as f:
        f.write(html)

print("Fixed footer placement.")
