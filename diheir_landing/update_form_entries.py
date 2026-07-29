import re

for path in ["/Users/apple/Desktop/diheir_landing/diheir_landing.html", "/Users/apple/Desktop/diheir_landing/index.html"]:
    with open(path, "r") as f:
        html = f.read()

    html = html.replace('name="entry.663394179"', 'name="entry.146229832"')
    html = html.replace('name="entry.1832948341"', 'name="entry.1755025064"')
    html = html.replace('name="entry.1465868753"', 'name="entry.339840614"')

    with open(path, "w") as f:
        f.write(html)

print("Updated form entry IDs.")
