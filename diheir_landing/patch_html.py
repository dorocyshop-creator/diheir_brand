with open("/Users/apple/Desktop/diheir_landing/diheir_landing.html", "r") as f:
    lines = f.readlines()

with open("diheirspace_final.html", "r") as f:
    diheirspace_html = f.read()

# 1. Replace the block from line 1471 to 1657
# Find exactly where <section id="reservation" class="diheirspace-section" data-name="diheirspace"> is
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if '<section id="reservation" class="diheirspace-section"' in line:
        start_idx = i
    if start_idx != -1 and '</section>' in line and i > start_idx:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    lines = lines[:start_idx] + [diheirspace_html + "\n"] + lines[end_idx+1:]
else:
    print("Could not find diheirspace-section!")

# 2. Insert Tailwind CSS and fonts before </head>
head_end_idx = -1
for i, line in enumerate(lines):
    if '</head>' in line:
        head_end_idx = i
        break

tailwind_injection = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;700&display=swap');
@font-face {
    font-family: 'DreamAvenue';
    src: url('./component/font/DreamAvenue/font.woff2') format('woff2'),
         url('./component/font/DreamAvenue/font.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          serif: ['DreamAvenue', 'sans-serif'],
          sans: ['"Noto Serif KR"', 'sans-serif'],
        }
      }
    }
  }
</script>
"""

if head_end_idx != -1:
    lines.insert(head_end_idx, tailwind_injection)
else:
    print("Could not find </head>!")

with open("/Users/apple/Desktop/diheir_landing/diheir_landing.html", "w") as f:
    f.writelines(lines)

print("HTML patched successfully!")
