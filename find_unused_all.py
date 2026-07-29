import os
import re

src_dir = 'src'
public_dir = 'public'

# Gather all source files
source_files = []
for root, _, files in os.walk(src_dir):
    for f in files:
        if f.lower().endswith(('.tsx', '.ts', '.jsx', '.js', '.css', '.html')):
            source_files.append(os.path.join(root, f))
source_files.append('index.html')

# Read all content
content = ""
for f in source_files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content += file.read() + "\n"
    except Exception as e:
        pass

# Find all assets
asset_files = []
dirs_to_check = [src_dir, public_dir]
for d in dirs_to_check:
    for root, _, files in os.walk(d):
        for f in files:
            # Skip frames folder as they are dynamically loaded by number
            if 'frames' in root:
                continue
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.svg', '.webp', '.mp4', '.gif', '.woff', '.woff2')):
                asset_files.append(os.path.join(root, f))

unused_assets = []
for asset in asset_files:
    filename = os.path.basename(asset)
    # Exclude fonts if they are named dynamically or generic
    if filename in content:
        continue
    # Extra check without extension
    name_without_ext = os.path.splitext(filename)[0]
    if name_without_ext in content:
        continue
    unused_assets.append(asset)

print("--- Unused Assets ---")
for u in unused_assets:
    print(u)
