import os
import glob
import re

def process_data_kr(match):
    content = match.group(1)
    
    # 1. Temporarily replace extrabold
    content = content.replace("font-extrabold", "TEMP_BOLD")
    
    # 2. Replace bold with semibold
    content = content.replace("font-bold", "font-semibold")
    
    # 3. Restore extrabold to bold
    content = content.replace("TEMP_BOLD", "font-bold")
    
    # 4. Add tracking-[-0.01em] if it has font-semibold but no tracking yet
    # We can just inject it where font-semibold is found
    content = content.replace("font-semibold", "font-semibold tracking-[-0.01em]")
    
    # Clean up multiple tracking-[-0.01em] if it already had one
    content = content.replace("tracking-[-0.01em] tracking-[-0.01em]", "tracking-[-0.01em]")
    # Also remove tracking-normal if present
    content = content.replace("tracking-normal", "")
    content = content.replace("  ", " ")

    return f'data-kr="{content}"'

def main():
    files = glob.glob('src/components/*.jsx')
    
    for filepath in files:
        with open(filepath, 'r', encoding='utf-8') as f:
            original = f.read()
            
        # Regex to find data-kr="..."
        # Since data-kr can span multiple lines, we use DOTALL
        pattern = re.compile(r'data-kr="(.*?)"', re.DOTALL)
        
        modified = pattern.sub(process_data_kr, original)
        
        if modified != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(modified)
            print(f"Updated {filepath}")

if __name__ == '__main__':
    main()
