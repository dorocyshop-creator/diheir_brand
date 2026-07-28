import re

with open("temp_jsx_to_html.html", "r") as f:
    html = f.read()

# Remove the function wrapper and return statements
# Find start of DiheirSpace return
start = html.find('<section id="reservation"')
end = html.rfind('</section>') + len('</section>')

html = html[start:end]

# Basic JSX to HTML
html = html.replace("className=", "class=")
html = html.replace("className", "class")
html = html.replace(" htmlFor=", " for=")
html = html.replace("{imgDiheirspaceBg}", '"./component/diheirspace/diheirspace.jpg"')
html = html.replace("${SERIF}", "font-serif")
html = html.replace("${SANS}", "font-sans")
html = html.replace("class=${SERIF}", 'class="font-serif"')
html = html.replace("class=${SANS}", 'class="font-sans"')

# Replace inline styles: style={{ fontSize: "30vw", letterSpacing: "-0.02em" }}
def style_replacer(match):
    inner = match.group(1)
    inner = inner.replace('"', '')
    inner = inner.replace("fontSize:", "font-size:")
    inner = inner.replace("letterSpacing:", "letter-spacing:")
    inner = inner.replace("marginTop:", "margin-top:")
    inner = inner.replace(",", ";")
    return f'style="{inner.strip()}"'

html = re.sub(r'style=\{\{\s*(.*?)\s*\}\}', style_replacer, html)

# Replace <FadeUp> with <div class="reveal">
html = re.sub(r'<FadeUp.*?>', '<div class="reveal">', html)
html = html.replace('</FadeUp>', '</div>')

# Replace <ReservationCard /> and <GoogleSubmitForm /> and <PrivacyPolicyModal /> with empty strings for now and I will manually inject their HTML or simply expand them now.
# Actually, the user says "그대로 복붙해줘", I should probably include the form structure.
# Let's extract GoogleSubmitForm
with open("temp_jsx_to_html.html", "r") as f:
    full_code = f.read()

form_start = full_code.find('<form')
form_end = full_code.find('</form>', form_start) + len('</form>')
form_html = full_code[form_start:form_end]

# Convert form_html
form_html = form_html.replace("className=", "class=")
form_html = form_html.replace(" htmlFor=", " for=")
form_html = re.sub(r'style=\{\{\s*(.*?)\s*\}\}', style_replacer, form_html)
form_html = form_html.replace("${labelClass}", "text-[clamp(min(18px,2.34375vw),3vw,28px)] max-[768px]:text-[clamp(20px,5.5vw,24px)]")
form_html = form_html.replace("${inputClass}", "w-[64%] pb-[10px] focus:border-b-[3px] max-[768px]:w-full max-[768px]:pb-[2vw] max-[768px]:focus:border-b-2")
form_html = form_html.replace("${inputTextClass}", "text-[clamp(min(16px,2.083vw),2.5vw,24px)] max-[768px]:text-[clamp(14px,3.9vw,18px)]")
form_html = form_html.replace("${gapClass}", "gap-[clamp(min(24px,3.125vw),4vw,44px)] w-[clamp(min(600px,78.125vw),80vw,800px)] max-[768px]:gap-[32px] max-[768px]:w-full")
form_html = form_html.replace("${SERIF}", "font-serif")
form_html = form_html.replace("${SANS}", "font-sans")

# We have two instances of the form in DiheirSpace (PC and Mobile)
# I will just write a placeholder and insert the form manually or with script.
# Let's just output the DiheirSpace section to a file, and I will manually stitch it.

with open("diheirspace_section.html", "w") as f:
    f.write(html)
