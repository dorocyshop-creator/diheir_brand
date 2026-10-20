html_path = "/Users/apple/Desktop/diheir_landing/diheir_landing.html"
with open(html_path, "r") as f:
    html = f.read()

# Add style for custom checkbox if it doesn't exist
style_block = """
<style>
  .ds-checkbox {
    appearance: none;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 2px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .ds-checkbox:checked {
    background-color: #383629;
    border-color: #383629;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
"""

# Inject style block inside the section if not there
if "ds-checkbox:checked" not in html:
    html = html.replace('<section id="reservation"', style_block + '<section id="reservation"')

# Replace the long tailwind classes on checkboxes with ds-checkbox
old_cb_class = 'class="appearance-none border border-transparent bg-white checked:bg-[#383629] checked:border-[#383629] rounded-[2px] cursor-pointer w-[18px] h-[18px] shrink-0 flex items-center justify-center transition-colors"'
new_cb_class = 'class="ds-checkbox shrink-0 mt-0.5"'
html = html.replace(old_cb_class, new_cb_class)

# The second checkbox had a slightly different mt (mt-[2px])
old_cb_class2 = 'class="appearance-none border border-transparent bg-white checked:bg-[#383629] checked:border-[#383629] rounded-[2px] cursor-pointer w-[18px] h-[18px] shrink-0 flex items-center justify-center transition-colors mt-[2px]"'
html = html.replace(old_cb_class2, new_cb_class)

# Restore underline for privacy policy button
old_privacy_btn = 'class="hover:text-black transition-colors cursor-pointer">개인정보 처리방침</button>'
new_privacy_btn = 'class="hover:text-black transition-colors cursor-pointer underline underline-offset-4">개인정보 처리방침</button>'
html = html.replace(old_privacy_btn, new_privacy_btn)

with open(html_path, "w") as f:
    f.write(html)
print("Updated checkbox styling and underline.")
