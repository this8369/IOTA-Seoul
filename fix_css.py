with open("src/index.css", "r") as f:
    text = f.read()

# insert @layer base { before html, body, #root
import re
text = re.sub(r'(html,\s*body,\s*#root\s*\{)', r'@layer base {\n        \1', text)

# close it and start components
text = re.sub(r'(\.scroll-container\s*\{)', r'}\n\n        @layer components {\n        \1', text)

# put the first few classes into components too
text = re.sub(r'(\.sybd-step\s*\{)', r'@layer components {\n        \1', text)

# close the first component block before base
text = re.sub(r'(html,\s*body,\s*#root\s*\{)', r'}\n\n        \1', text)

# close the second component block at the end
text += "\n}\n"

with open("src/index.css", "w") as f:
    f.write(text)
