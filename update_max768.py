import re

with open('src/app/components/diheir/DiheirPage.tsx', 'r') as f:
    content = f.read()

def replace_max768(match):
    original = match.group(0)
    prop = match.group(1)
    val = float(match.group(2))
    
    if val == 0:
        return original
        
    vw_val = round(val / 7.68, 4)
    vw_str = f"{vw_val:g}"
    
    return f"max-[768px]:{prop}-[{vw_str}vw]"

# Regex looks for max-[768px]:<prop>-[<val>px]
# e.g., max-[768px]:w-[300px] -> prop = 'w', val = '300'
new_content = re.sub(r'max-\[768px\]:([a-z-]+)-\[([0-9.]+)px\]', replace_max768, content)

with open('src/app/components/diheir/DiheirPage.tsx', 'w') as f:
    f.write(new_content)

print("Updated max-[768px] classes!")
