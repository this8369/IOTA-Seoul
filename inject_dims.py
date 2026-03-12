import os
import re
import subprocess

def get_image_dimensions(image_path):
    # try sips
    try:
        out = subprocess.check_output(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', image_path], stderr=subprocess.DEVNULL).decode('utf-8')
        width = int(re.search(r'pixelWidth: (\d+)', out).group(1))
        height = int(re.search(r'pixelHeight: (\d+)', out).group(1))
        return width, height
    except Exception as e:
        print(f"Error getting dimensions for {image_path}: {e}")
        return None, None

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match <HoverImage ... src="./img/..." ... />
    # We want to insert width="X" height="Y" if not present.
    # Same for <img src="./img/..." ... />
    
    modified = False
    
    def replacer(match):
        nonlocal modified
        full_tag = match.group(0)
        
        # Don't touch if width/height already exists
        if 'width=' in full_tag and 'height=' in full_tag:
            return full_tag
            
        src = match.group('src')
        
        # Resolve path
        if src.startswith('./img/'):
            img_path = os.path.join('public', src[2:])
        elif src.startswith('/img/'):
            img_path = os.path.join('public', src[1:])
        else:
            return full_tag
            
        if not os.path.exists(img_path):
            return full_tag
            
        width, height = get_image_dimensions(img_path)
        if width and height:
            # Inject width and height
            # insert right after src="xxxx"
            replacement = f' src="{src}" width="{width}" height="{height}"'
            new_tag = full_tag.replace(f'src="{src}"', replacement)
            modified = True
            return new_tag
        return full_tag

    # Regex to find <img ... src="..." ...> and <HoverImage ... src="..." ...>
    # Note: Regex parsing HTML is brittle but works for controlled codebase.
    pattern = re.compile(r'<(img|HoverImage)\b[^>]*?src=["\'](?P<src>[^"\']+)["\'][^>]*?>')
    new_content = pattern.sub(replacer, content)

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def main():
    components_dir = 'src/components'
    for root, dirs, files in os.walk(components_dir):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.js'):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
