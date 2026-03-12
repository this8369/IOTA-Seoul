import re
import os

def update_titles(filepath, replacements, img_insert=None):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacing h2 blocks
    for kr_text, en_text in replacements:
        # Search for an h2 block that contains the english text (in part or full)
        # We can just look for the first line of the english text
        search_key = en_text.split('<br')[0].strip()
        pattern = r'(<h2[^>]*>).*?(' + re.escape(search_key) + r'.*?)(</h2>)'
        
        match = re.search(pattern, content, flags=re.DOTALL)
        if match:
            new_h2_content = f"""
                            {{lang === 'kr' ? (
                                <>{kr_text}</>
                            ) : (
                                <>{en_text}</>
                            )}}
                        """
            new_block = f"{match.group(1)}{new_h2_content}</h2>"
            content = content[:match.start()] + new_block + content[match.end():]
        else:
            print(f"[{filepath}] Could not find: {search_key}")

    if img_insert:
        content = content.replace(img_insert['target'], img_insert['replacement'])

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

iota_one_replacements = [
    (
        r"중앙광장:<br />도시와 자연을 잇는 웅장한 무대",
        r"Central Plaza:<br />A Grand Stage Between City and Nature"
    ),
    (
        r"Rooftop Garden:<br className=\"md:hidden\" /> 오피스 문 앞으로 다가온 자연",
        r"Rooftop Garden:<br className=\"md:hidden\" /> Nature at Your Office Doorstep"
    ),
    (
        r"Rooftop Garden:<br className=\"md:hidden\" /> 남산의 파노라마 뷰를 품은 사색의 공간",
        r"Rooftop Garden:<br className=\"md:hidden\" /> Overlooking Namsan"
    ),
    (
        r"UAM 버티포트:<br className=\"md:hidden\" /> 미래 모빌리티를 향한 혁신적 허브",
        r"UAM Vertiport"
    ),
    (
        r"호텔 포디움 가든:<br className=\"md:hidden\" /> 남산으로 둘러쌓인 프라이빗 오아시스",
        r"Hotel Podium Garden:<br className=\"md:hidden\" /> A Private Oasis Framed by Namsan"
    ),
    (
        r"남산의 석양으로 물드는 호텔 포디움 가든",
        r"The Hotel Podium Garden at Dusk"
    ),
    (
        r"도심 한가운데서 마주하는 압도적인 개방감의 로비 경험",
        r"An Expansive Lobby Experience at the Heart of the City"
    ),
    (
        r"코어 진입부:<br className=\"md:hidden\" /> 수직적 깊이감으로 완성된 정제된 입면",
        r"Core Access:<br className=\"md:hidden\" /> A Refined Façade Forged by Vertical Depth"
    ),
    (
        r"협업과 영감을 깨우는 오픈 라운지",
        r"An Open Lounge for Collaboration and Inspiration"
    ),
    (
        r"호텔 메인 로비:<br className=\"md:hidden\" /> 남산의 풍경과 리츠칼튼의 품격이 닿는 곳",
        r"Main Hotel Lobby:<br className=\"md:hidden\" /> Where Namsan's Scenery Meets The Ritz-Carlton's Prestige"
    ),
    (
        r"Hotel VIP Lounge:<br className=\"md:hidden\" /> 도심의 정점에서 누리는 프라이빗 럭셔리",
        r"Hotel VIP Lounge:<br className=\"md:hidden\" /> Private Luxury at the Pinnacle of the City"
    ),
    (
        r"몰입과 회복을 돕는 웰니스 센터",
        r"A Wellness Center for Immersion and Recovery"
    ),
    (
        r"웰니스 센터 이노베이션 허브 –<br className=\"md:hidden\" /> 영감이 혁신으로 이어지는 교류의 장",
        r"Wellness Center Innovation Hub –<br className=\"md:hidden\" /> Where Collaboration Inspires Innovation"
    ),
    (
        r"웰니스 센터 멤버스 클럽 –<br className=\"md:hidden\" /> 최상위 비즈니스를 위한 프라이빗 라운지",
        r"Wellness Center Member's Club –<br className=\"md:hidden\" /> A Private Hub for Rest and Connection"
    ),
    (
        r"이머시브 갤러리:<br className=\"md:hidden\" /> 예술과 기술, 그리고 감성의 경이로운 융합",
        r"Immersive Gallery:<br className=\"md:hidden\" /> A Convergence of Art, Tech, and Emotion"
    )
]

iota_two_replacements = [
    (
        r"지상 진입부:<br className=\"md:hidden\" /> 도시의 흐름을 잇는 개방형 진입 구조",
        r"Ground Level Entry:<br className=\"md:hidden\" /> A Seamless Transition from City to Space"
    ),
    (
        r"Gateway Park:<br className=\"md:hidden\" /> 서울역에 열린 새로운 시민의 안식처",
        r"Gateway Park:<br className=\"md:hidden\" /> A New Civic Anchor at Seoul Station"
    ),
    (
        r"시티뷰 Multi-Use 아레나 :<br className=\"md:hidden\" /> 도심의 조망을 담은 가변적 코트",
        r"Corporate Multi-Use Arena:<br className=\"md:hidden\" /> Versatile, Urban, Inspiring"
    ),
    (
        r"Sky Garden:<br className=\"md:hidden\" /> 자연의 녹음과 도심의 스카이라인이 교차하는 입체 정원",
        r"Sky Garden:<br className=\"md:hidden\" /> Where Nature Meets Skyline"
    ),
    (
        r"Event Space:<br className=\"md:hidden\" /> 브랜드와 문화, 그리고 도시가 만나는 접점",
        r"Event Space:<br className=\"md:hidden\" /> Where Brands Shine, Culture Thrives, and the City Connects."
    ),
    (
        r"Sky Garden & Event Space:<br className=\"md:hidden\" /> 서울의 스카이라인을 소유하는 특별한 경험",
        r"Sky Garden & Event Space:<br className=\"md:hidden\" /> An Elevated Cultural Destination Above the City"
    ),
    (
        r"IOTA Two Main Lobby:<br className=\"md:hidden\" /> 도시의 활력과 자연의 여유가 만나는 곳",
        r"IOTA Two Main Lobby:<br className=\"md:hidden\" /> Where the City's Flow Meets Architecture"
    ),
    (
        r"메인 로비 코어 진입부:<br className=\"md:hidden\" /> 발걸음에 따라 전개되는 역동적인 건축 리듬",
        r"Main Lobby Core Access:<br className=\"md:hidden\" /> Architectural Rhythm in Motion"
    ),
    (
        r"오피스 오픈 라운지:<br className=\"md:hidden\" /> 네트워킹과 평온한 사색이 공존하는 공간",
        r"Office Open Lounge:<br className=\"md:hidden\" /> Where Connection Meets Calm"
    ),
    (
        r"오피스 엘리베이터 홀:<br className=\"md:hidden\" /> 기술과 자연의 균형, 정제된 환대의 공간",
        r"Office Elevator Hall:<br className=\"md:hidden\" /> Balanced Hospitality Driven by Nature and Detail"
    ),
]

# SectionIotaTwo.jsx has already been partly transformed to use {lang==='kr'?} layout for headers? Let's check.
# The user wants "오피스 진입공간(영작도 해주고)" above iotatwo_08.jpg .
img_insert = {
    'target': '<HoverImage  src="./img/iotatwo_08.jpg" width="3000" height="1942" alt="Sky Garden and Event Space Details" />',
    'replacement': '''
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-black tracking-[-0.03em] leading-tight mb-6 md:mb-8 break-keep">
                            {lang === 'kr' ? (
                                <>오피스 진입공간:<br className="md:hidden" /> 도시의 흐름과 사선 디자인의 조화</>
                            ) : (
                                <>Office Entry Space:<br className="md:hidden" /> A Harmonious Blend of Urban Flow and Diagonal Design</>
                            )}
                        </h2>
                        <HoverImage  src="./img/iotatwo_08.jpg" width="3000" height="1942" alt="Sky Garden and Event Space Details" />
'''
}

def clean_file(filepath):
    # just in case the previous script introduced duplicate {lang==='kr'? } inside {lang==='kr'?}
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We replace any previously replaced {lang==='kr'} in h2 back to english or so... 
    # Actually IotaTwo might have it right now.
    pass

update_titles('src/components/SectionIotaOne.jsx', iota_one_replacements)
update_titles('src/components/SectionIotaTwo.jsx', iota_two_replacements, img_insert)
