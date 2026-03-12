import os

filepath = 'src/components/Section2.jsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace tracking-normal with tracking-[-0.01em]
content = content.replace("tracking-normal", "tracking-[-0.01em]")
# Replace typo
content = content.replace("문화 매식 리테일 엔터테인먼트가", "문화, 미식, 리테일, 엔터테인먼트가")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated spacing and typo.")
