import os

filepath = 'src/components/Section2.jsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Revert font-sans and tracking changes, but keep font weights at semibold/bold instead of bold/extrabold
content = content.replace("font-sans font-semibold tracking-[-0.01em]", "font-semibold")
content = content.replace("font-sans font-bold", "font-bold")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Reverted font-sans and tracking, applied semibold/bold")
