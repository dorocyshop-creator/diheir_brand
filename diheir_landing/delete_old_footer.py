import re

for path in ["/Users/apple/Desktop/diheir_landing/diheir_landing.html", "/Users/apple/Desktop/diheir_landing/index.html"]:
    with open(path, "r") as f:
        html = f.read()

    # Find and remove the old footer
    old_footer_pattern = r'<!-- ══ FOOTER ══════════════════════════════════════════ -->\n<footer class="footer">.*?</footer>'
    
    html = re.sub(old_footer_pattern, '', html, flags=re.DOTALL)

    with open(path, "w") as f:
        f.write(html)

print("Deleted old footer.")
