import os
import glob

files = glob.glob('src/components/*.jsx')

def convert_font(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to change className containing font-inter applied to Korean text to conditionally apply font-sans only on Windows
    # However, a simpler CSS-based approach is to just apply font-sans to Korean text globally if user agent is Windows.
    # But react components can't easily do user agent detection in pure static CSS safely without hydration mismatch.
    return False

# CSS approach:
# We have `index.css`
