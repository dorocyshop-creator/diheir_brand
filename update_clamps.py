import re

with open('src/app/components/diheir/DiheirPage.tsx', 'r') as f:
    content = f.read()

def replace_clamp(match):
    original = match.group(0)
    x_str = match.group(1)
    y_str = match.group(2)
    z_str = match.group(3)
    
    x = float(x_str)
    
    # Ignore if minimum is 0
    if x == 0:
        return original
        
    vw_val = round(x / 7.68, 4)
    # Format to remove trailing .0
    vw_str = f"{vw_val:g}"
    
    # Find out if we have spaces (e.g. inline style)
    # The regex allows spaces, let's see how the original looked
    # If the original has a space after the first comma, we can keep it, 
    # but to be safe for Tailwind, let's just output it exactly without spaces 
    # around min(), but keeping the original commas.
    
    # We replace Xpx with min(Xpx,Vvw)
    # Be careful to preserve the rest
    
    # Let's construct the new minimum string
    new_min = f"min({x_str}px,{vw_str}vw)"
    
    # Now replace the first argument in the original string
    # "clamp(20px,5vw,40px)" -> "clamp(min(20px,2.6vw),5vw,40px)"
    # We can do this safely using string replacement on the match
    replaced = re.sub(r'([0-9.]+)px', new_min, original, count=1)
    
    return replaced

# Regex looks for clamp(Xpx, Yvw, Zpx) with optional spaces
new_content = re.sub(r'clamp\(\s*([0-9.]+)px\s*,\s*([0-9.]+)vw\s*,\s*([0-9.]+)px\s*\)', replace_clamp, content)

with open('src/app/components/diheir/DiheirPage.tsx', 'w') as f:
    f.write(new_content)

print("Updated DiheirPage.tsx clamps!")
