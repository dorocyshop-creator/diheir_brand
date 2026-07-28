import os
import re

src_dir = 'src'
imports_dir = 'src/imports'

# Get all image files in src/imports
image_files = []
for root, _, files in os.walk(imports_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.svg', '.webp')):
            image_files.append(os.path.join(root, f))

# Read all source files to find references
used_images = set()
for root, _, files in os.walk(src_dir):
    for f in files:
        if f.lower().endswith(('.tsx', '.ts', '.jsx', '.js', '.css', '.html')):
            file_path = os.path.join(root, f)
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
                for img_path in image_files:
                    img_name = os.path.basename(img_path)
                    # Simple check: is the filename present in the source code?
                    if img_name in content:
                        used_images.add(img_path)

unused_images = [img for img in image_files if img not in used_images]

print(f"Total images in {imports_dir}: {len(image_files)}")
print(f"Used images: {len(used_images)}")
print(f"Unused images: {len(unused_images)}")

if unused_images:
    print("\n--- UNUSED IMAGES ---")
    for img in unused_images:
        print(img)
