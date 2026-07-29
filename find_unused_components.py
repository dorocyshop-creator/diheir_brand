import os

src_dir = 'src'

# Gather all source files
source_files = []
for root, _, files in os.walk(src_dir):
    for f in files:
        if f.lower().endswith(('.tsx', '.ts', '.jsx', '.js')):
            source_files.append(os.path.join(root, f))

# Read all content
content = ""
for f in source_files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content += file.read() + "\n"
    except Exception as e:
        pass

unused_components = []
for file in source_files:
    filename = os.path.basename(file)
    name_without_ext = os.path.splitext(filename)[0]
    
    # Exclude entry points
    if name_without_ext in ['main', 'App', 'index']:
        continue
        
    # Check if the component name is mentioned in the code
    if name_without_ext not in content.replace(f"export function {name_without_ext}", "").replace(f"export default function {name_without_ext}", ""):
        # A very basic check: does the string appear anywhere else?
        # Actually this might be too naive. Let's just do a string count
        count = content.count(name_without_ext)
        # If it only appears in its own export statement, it's unused.
        # But let's just check for exact string matches of the filename without extension.
        if count <= 1:
            unused_components.append(file)

print("--- Unused Components (Heuristic) ---")
for u in unused_components:
    print(u)
