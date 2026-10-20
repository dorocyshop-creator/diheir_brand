html_path = "/Users/apple/Desktop/diheir_landing/diheir_landing.html"
with open(html_path, "r") as f:
    html = f.read()

# 1. Update Glass Card paddings
old_glass = 'class="flex flex-col w-full rounded-[24px] md:rounded-[32px] border border-white/20 backdrop-blur-[16px] shadow-2xl p-[16px] md:p-[24px]"'
new_glass = 'class="flex flex-col w-full rounded-[24px] md:rounded-[32px] border border-white/20 backdrop-blur-[16px] shadow-2xl px-[5vw] pt-[5vw] pb-[8vw] md:px-[58px] md:pt-[55px] md:pb-[60px]"'
html = html.replace(old_glass, new_glass)

# 2. Update Beige Box paddings
old_beige = 'class="bg-[#c8c9bc] w-full flex flex-col items-center pt-[10vw] pb-[8vw] md:pt-[70px] md:pb-[60px] px-[6vw] md:px-[60px] rounded-[12px] md:rounded-[16px]"'
new_beige = 'class="bg-[#c8c9bc] w-full flex flex-col items-center pt-[10vw] pb-[10vw] md:pt-[100px] md:pb-[100px] px-[6vw] md:px-[80px] rounded-[12px] md:rounded-[16px]"'
html = html.replace(old_beige, new_beige)

# 3. Update Button top margin to 100px
old_btn = 'class="bg-[#383629] text-[#c8c9bc] rounded-full flex items-center justify-center hover:bg-black transition-colors h-[42px] md:h-[48px] w-[140px] md:w-[150px] mt-[4vw] md:mt-[20px]"'
new_btn = 'class="bg-[#383629] text-[#c8c9bc] rounded-full flex items-center justify-center hover:bg-black transition-colors h-[42px] md:h-[48px] w-[140px] md:w-[160px] mt-[8vw] md:mt-[100px]"'
html = html.replace(old_btn, new_btn)

# 4. Update Address Box paddings (remove horizontal padding so it aligns with beige box edge, adjust vertical to make the gap 244px total)
# Previous: class="bg-transparent w-full flex flex-col px-[4vw] md:px-[40px] pt-[8vw] md:pt-[50px] pb-[4vw] md:pb-[20px] text-[rgba(255,255,255,0.7)]"
# We want 244px from bottom of beige box to bottom of glass card.
# The glass card now has md:pb-[60px]. So we need the address box to be 184px tall including its padding.
# Let's set pt-[70px] pb-[0px] px-[0].
old_address = 'class="bg-transparent w-full flex flex-col px-[4vw] md:px-[40px] pt-[8vw] md:pt-[50px] pb-[4vw] md:pb-[20px] text-[rgba(255,255,255,0.7)]"'
new_address = 'class="bg-transparent w-full flex flex-col pt-[8vw] md:pt-[70px] text-[rgba(255,255,255,0.7)]"'
html = html.replace(old_address, new_address)

with open(html_path, "w") as f:
    f.write(html)
print("Updated sizes successfully.")
