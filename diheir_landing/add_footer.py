import re

html_path = "/Users/apple/Desktop/diheir_landing/diheir_landing.html"
with open(html_path, "r") as f:
    html = f.read()

footer_html = """
    <footer class="relative w-full overflow-hidden bg-[#383629] px-[clamp(min(20px,2.6042vw),6vw,110px)] py-[clamp(min(60px,7.8125vw),8vw,120px)]" data-name="footer">
      <div class="pointer-events-none absolute inset-0 w-full h-full reveal" style="transition-duration: 1.5s;">
        <img alt="" src="./component/diheirspace/footer_structure.png" class="w-full h-full object-contain object-bottom opacity-[0.12]" />
      </div>
      <div class="relative flex flex-col gap-[clamp(min(40px,5.2083vw),6vw,80px)]">
        <div class="reveal" style="transition-duration: 1.0s;">
          <nav class="font-serif flex flex-col gap-[clamp(min(20px,2.6042vw),3vw,60px)] capitalize text-[#c1c4ad] tracking-[-0.8px]" style="font-size: clamp(min(24px,3.125vw),3vw,40px)">
            <a href="#" class="w-fit transition-opacity hover:opacity-70">home</a>
            <a href="#" class="w-fit transition-opacity hover:opacity-70">Information</a>
            <a href="#" class="w-fit transition-opacity hover:opacity-70">Privacy Policy</a>
            <a href="#" class="w-fit transition-opacity hover:opacity-70">Terms of Use</a>
            <a href="#" class="w-fit transition-opacity hover:opacity-70">Quality Care</a>
            <a href="#" class="w-fit transition-opacity hover:opacity-70">contact</a>
          </nav>
        </div>
        <div class="reveal" style="transition-delay: 0.1s; transition-duration: 1.0s;">
          <div class="flex flex-col gap-3">
            <p class="font-serif capitalize text-[#c1c4ad] tracking-[-0.8px]" style="font-size: clamp(min(24px,3.125vw),3vw,40px)">SNS</p>
            <div class="flex items-center gap-6">
              <svg class="w-[clamp(min(48px,6.25vw),6vw,72px)] h-[clamp(min(48px,6.25vw),6vw,72px)]" fill="none" viewBox="0 0 72 72" aria-label="YouTube">
                <path d="M67.62 19.26C67.2453 17.8568 66.5093 16.5764 65.4855 15.5463C64.4617 14.5162 63.1858 13.7724 61.785 13.389C56.64 12 36 12 36 12C36 12 15.36 12 10.215 13.389C8.81418 13.7724 7.53829 14.5162 6.51449 15.5463C5.4907 16.5764 4.75475 17.8568 4.38 19.26C3 24.444 3 35.25 3 35.25C3 35.25 3 46.056 4.38 51.24C4.75429 52.6437 5.49003 53.9248 6.51386 54.9554C7.53768 55.9861 8.81382 56.7304 10.215 57.114C15.363 58.5 36 58.5 36 58.5C36 58.5 56.64 58.5 61.785 57.114C63.1862 56.7304 64.4623 55.9861 65.4861 54.9554C66.51 53.9248 67.2457 52.6437 67.62 51.24C69 46.062 69 35.25 69 35.25C69 35.25 69 24.444 67.62 19.26ZM29.25 45.063V25.44L46.5 35.253L29.25 45.063Z" stroke="#C1C4AD" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
              </svg>
              <svg class="w-[clamp(min(48px,6.25vw),6vw,72px)] h-[clamp(min(48px,6.25vw),6vw,72px)] p-2.5" fill="none" viewBox="0 0 55.5 55.5" aria-label="Instagram">
                <path d="M36.2353 36.2353C33.9848 38.4857 30.9326 39.75 27.75 39.75C24.5674 39.75 21.5152 38.4857 19.2647 36.2353C17.0143 33.9848 15.75 30.9326 15.75 27.75C15.75 24.5674 17.0143 21.5152 19.2647 19.2647C21.5152 17.0143 24.5674 15.75 27.75 15.75C30.9326 15.75 33.9848 17.0143 36.2353 19.2647C38.4857 21.5152 39.75 24.5674 39.75 27.75C39.75 30.9326 38.4857 33.9848 36.2353 36.2353Z" stroke="#C1C4AD" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                <path d="M0.75 39.75V15.75C0.75 11.7718 2.33035 7.95644 5.1434 5.1434C7.95644 2.33035 11.7718 0.75 15.75 0.75H39.75C43.7282 0.75 47.5436 2.33035 50.3566 5.1434C53.1696 7.95644 54.75 11.7718 54.75 15.75V39.75C54.75 43.7282 53.1696 47.5436 50.3566 50.3566C47.5436 53.1696 43.7282 54.75 39.75 54.75H15.75C11.7718 54.75 7.95644 53.1696 5.1434 50.3566C2.33035 47.5436 0.75 43.7282 0.75 39.75Z" stroke="#C1C4AD" stroke-width="1.5"></path>
                <path d="M44.25 11.28L44.28 11.247" stroke="#C1C4AD" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="reveal mt-[clamp(min(40px,5.2083vw),6vw,80px)] w-full max-w-[1548px] self-center" style="transition-delay: 0.2s; transition-duration: 1.0s;">
          <img alt="" src="./component/diheirspace/diheir_logo.png" class="w-full object-contain" />
        </div>
      </div>
    </footer>
"""

html = html.replace('</section>\n\n  <!-- Privacy Policy Modal -->', '</section>\n' + footer_html + '\n  <!-- Privacy Policy Modal -->')

with open(html_path, "w") as f:
    f.write(html)
with open("/Users/apple/Desktop/diheir_landing/index.html", "w") as f:
    f.write(html)
print("Added footer.")
