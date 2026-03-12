import os

filepath = 'src/index.css'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Currently --font-inter is just "Inter", sans-serif
# If user agent is windows, they won't have San Francisco or Apple SD Gothic Neo.
# We can redefine font-inter to fallback to Pretendard specifically on Windows for Korean text, but normally fallback strings handle this.
# A simpler way is to put Pretendard directly into the fallback list of --font-inter!
# --font-inter: "Inter", "Pretendard Variable", Pretendard, sans-serif;
# This means: For English characters, use Inter. For Korean characters (which Inter lacks), fall back to Pretendard!
# On Mac, Pretendard will override Apple SD Gothic Neo, giving a consistent look.
# But wait, the user wants it to apply ONLY on Windows if possible, or maybe everywhere?
# User said: "혹시 윈도우에서만 pretendard로 적용 가능해?" -> "Can it be applied to Pretendard ONLY on Windows?"

# We can detect Windows via pure CSS? No, we must use JS.
# Let's add a JS snippet in index.html that adds a class "is-windows" to the body if navigator.userAgent contains Windows.
# Then in index.css, target .is-windows font-families.

pass
