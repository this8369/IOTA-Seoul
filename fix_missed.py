import os

iota_one = 'src/components/SectionIotaOne.jsx'

reps = [
    (
        '''Core Access:<br className="md:hidden" /> {lang === 'kr' ? "수직적 깊이감이 만든 정제된 입면" : "A Refined Façade Forged by Vertical Depth"}''',
        '''{lang === 'kr' ? (
                                <>코어 진입부:<br className="md:hidden" /> 수직적 깊이감으로 완성된 정제된 입면</>
                            ) : (
                                <>Core Access:<br className="md:hidden" /> A Refined Façade Forged by Vertical Depth</>
                            )}'''
    ),
    (
        '''An Open Lounge for<br className="md:hidden" /> Collaboration and Inspiration''',
        '''{lang === 'kr' ? (
                                <>협업과 영감을 깨우는 오픈 라운지</>
                            ) : (
                                <>An Open Lounge for<br className="md:hidden" /> Collaboration and Inspiration</>
                            )}'''
    ),
    (
        '''Main Hotel Lobby:<br className="md:hidden" /> {lang === 'kr' ? "남산의 풍경과 리츠칼튼의 품격이 만나는 공간" : "Where Namsan's Scenery Meets The Ritz-Carlton's Prestige"}''',
        '''{lang === 'kr' ? (
                                <>호텔 메인 로비:<br className="md:hidden" /> 남산의 풍경과 리츠칼튼의 품격이 닿는 곳</>
                            ) : (
                                <>Main Hotel Lobby:<br className="md:hidden" /> Where Namsan's Scenery Meets The Ritz-Carlton's Prestige</>
                            )}'''
    ),
    (
        '''Hotel VIP Lounge:<br className="md:hidden" /> {lang === 'kr' ? "도심의 정점에서 누리는 프라이빗 럭셔리" : "Private Luxury at the Pinnacle of the City"}''',
        '''{lang === 'kr' ? (
                                <>Hotel VIP Lounge:<br className="md:hidden" /> 도심의 정점에서 누리는 프라이빗 럭셔리</>
                            ) : (
                                <>Hotel VIP Lounge:<br className="md:hidden" /> Private Luxury at the Pinnacle of the City</>
                            )}'''
    )
]

with open(iota_one, 'r', encoding='utf-8') as f:
    c = f.read()

for t, r in reps:
    if t in c:
        c = c.replace(t, r)
    else:
        print("Missing:", t[:20])

with open(iota_one, 'w', encoding='utf-8') as f:
    f.write(c)
