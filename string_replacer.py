import os

def replace_all(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    for target, rep in replacements:
        if target in content:
            content = content.replace(target, rep)
        else:
            print(f"Warning: Could not find target in {filepath}:\n{target[:50]}")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

iota_one = 'src/components/SectionIotaOne.jsx'

reps_one = [
    # 1. Central Plaza
    (
        '''Central Plaza:<br />
                            A Grand Stage Between City and Nature''',
        '''{lang === 'kr' ? (
                                <>중앙광장:<br />도시와 자연을 잇는 웅장한 무대</>
                            ) : (
                                <>Central Plaza:<br />A Grand Stage Between City and Nature</>
                            )}'''
    ),
    # 3. UAM
    (
        '''UAM Vertiport
                        </h2>''',
        '''{lang === 'kr' ? (
                            <>UAM 버티포트:<br className="md:hidden" /> 미래 모빌리티를 향한 혁신적 허브</>
                        ) : (
                            <>UAM Vertiport</>
                        )}
                        </h2>'''
    ),
    # 4. Podium Garden
    (
        '''Hotel Podium Garden:<br className="md:hidden" /> A Private Oasis Framed by Namsan''',
        '''{lang === 'kr' ? (
                                <>호텔 포디움 가든:<br className="md:hidden" /> 남산으로 둘러쌓인 프라이빗 오아시스</>
                            ) : (
                                <>Hotel Podium Garden:<br className="md:hidden" /> A Private Oasis Framed by Namsan</>
                            )}'''
    ),
    # 5. Dusk Podium
    (
        '''The Hotel Podium Garden at Dusk''',
        '''{lang === 'kr' ? (
                                <>남산의 석양으로 물드는 호텔 포디움 가든</>
                            ) : (
                                <>The Hotel Podium Garden at Dusk</>
                            )}'''
    ),
    # 6. Lobby Exp
    (
        '''An Expansive Lobby Experience<br className="md:hidden" /> at the Heart of the City''',
        '''{lang === 'kr' ? (
                                <>도심 한가운데서 마주하는 압도적인 개방감의 로비 경험</>
                            ) : (
                                <>An Expansive Lobby Experience<br className="md:hidden" /> at the Heart of the City</>
                            )}'''
    ),
    # 7. Core Access
    (
        '''Core Access:<br className="md:hidden" /> A Refined Façade Forged by Vertical Depth''',
        '''{lang === 'kr' ? (
                                <>코어 진입부:<br className="md:hidden" /> 수직적 깊이감으로 완성된 정제된 입면</>
                            ) : (
                                <>Core Access:<br className="md:hidden" /> A Refined Façade Forged by Vertical Depth</>
                            )}'''
    ),
    # 8. Open Lounge
    (
        '''An Open Lounge<br className="md:hidden" /> for Collaboration and Inspiration''',
        '''{lang === 'kr' ? (
                                <>협업과 영감을 깨우는 오픈 라운지</>
                            ) : (
                                <>An Open Lounge<br className="md:hidden" /> for Collaboration and Inspiration</>
                            )}'''
    ),
    # 9. Main Hotel Lobby
    (
        '''Main Hotel Lobby:<br className="md:hidden" /> Where Namsan's Scenery Meets The Ritz-Carlton's Prestige''',
        '''{lang === 'kr' ? (
                                <>호텔 메인 로비:<br className="md:hidden" /> 남산의 풍경과 리츠칼튼의 품격이 닿는 곳</>
                            ) : (
                                <>Main Hotel Lobby:<br className="md:hidden" /> Where Namsan's Scenery Meets The Ritz-Carlton's Prestige</>
                            )}'''
    ),
    # 10. VIP Lounge
    (
        '''Hotel VIP Lounge:<br className="md:hidden" /> Private Luxury at the Pinnacle of the City''',
        '''{lang === 'kr' ? (
                                <>Hotel VIP Lounge:<br className="md:hidden" /> 도심의 정점에서 누리는 프라이빗 럭셔리</>
                            ) : (
                                <>Hotel VIP Lounge:<br className="md:hidden" /> Private Luxury at the Pinnacle of the City</>
                            )}'''
    ),
    # 11. Wellness Center
    (
        '''A Wellness Center<br className="md:hidden" /> for Immersion and Recovery''',
        '''{lang === 'kr' ? (
                                <>몰입과 회복을 돕는 웰니스 센터</>
                            ) : (
                                <>A Wellness Center<br className="md:hidden" /> for Immersion and Recovery</>
                            )}'''
    ),
    # 12. Innovation Hub
    (
        '''Wellness Center Innovation Hub<br className="md:hidden" /> – Where Collaboration Inspires Innovation''',
        '''{lang === 'kr' ? (
                                <>웰니스 센터 이노베이션 허브 –<br className="md:hidden" /> 영감이 혁신으로 이어지는 교류의 장</>
                            ) : (
                                <>Wellness Center Innovation Hub<br className="md:hidden" /> – Where Collaboration Inspires Innovation</>
                            )}'''
    ),
    # 13. Member's Club
    (
        '''Wellness Center Member's Club<br className="md:hidden" /> – A Private Hub for Rest and Connection''',
        '''{lang === 'kr' ? (
                                <>웰니스 센터 멤버스 클럽 –<br className="md:hidden" /> 최상위 비즈니스를 위한 프라이빗 라운지</>
                            ) : (
                                <>Wellness Center Member's Club<br className="md:hidden" /> – A Private Hub for Rest and Connection</>
                            )}'''
    ),
    # 14. Immersive Gallery
    (
        '''Immersive Gallery:<br className="md:hidden" /> A Convergence of Art, Tech, and Emotion''',
        '''{lang === 'kr' ? (
                                <>이머시브 갤러리:<br className="md:hidden" /> 예술과 기술, 그리고 감성의 경이로운 융합</>
                            ) : (
                                <>Immersive Gallery:<br className="md:hidden" /> A Convergence of Art, Tech, and Emotion</>
                            )}'''
    )
]

# We need a separate handling for Rooftop Garden
with open(iota_one, 'r', encoding='utf-8') as f:
    c = f.read()
target_rg = 'Rooftop Garden:<br className="md:hidden" /> Nature at Your Office Doorstep'
parts = c.split(target_rg)
if len(parts) == 3:
    r1 = '''{lang === 'kr' ? (
                                <>Rooftop Garden:<br className="md:hidden" /> 오피스 문 앞으로 다가온 자연</>
                            ) : (
                                <>Rooftop Garden:<br className="md:hidden" /> Nature at Your Office Doorstep</>
                            )}'''
    r2 = '''{lang === 'kr' ? (
                            <>Rooftop Garden:<br className="md:hidden" /> 남산의 파노라마 뷰를 품은 사색의 공간</>
                        ) : (
                            <>Rooftop Garden:<br className="md:hidden" /> Nature at Your Office Doorstep</>
                        )}'''
    c = parts[0] + r1 + parts[1] + r2 + parts[2]
with open(iota_one, 'w', encoding='utf-8') as f:
    f.write(c)

replace_all(iota_one, reps_one)


iota_two = 'src/components/SectionIotaTwo.jsx'

reps_two = [
    (
        '''<>1층 진입부:<br className="md:hidden" /> 도시의 흐름을 잇는 개방형 진입 구조</>
                            ) : (
                                <>Ground Level Entry:<br className="md:hidden" /> An Open Structure Linking the Urban Flow</>''',
        '''<>지상 진입부:<br className="md:hidden" /> 도시의 흐름을 잇는 개방형 진입 구조</>
                            ) : (
                                <>Ground Level Entry:<br className="md:hidden" /> A Seamless Transition from City to Space</>'''
    ),
    (
        '''Gateway Park:<br className="md:hidden" /> Connecting City and Nature''',
        '''{lang === 'kr' ? (
                        <>Gateway Park:<br className="md:hidden" /> 서울역에 열린 새로운 시민의 안식처</>
                    ) : (
                        <>Gateway Park:<br className="md:hidden" /> Connecting City and Nature</>
                    )}'''
    ),
    (
        '''Corporate Multi-Use Arena:<br className="md:hidden" /> Versatile, Urban, Inspiring''',
        '''{lang === 'kr' ? (
                                <>시티뷰 Multi-Use 아레나 :<br className="md:hidden" /> 도심의 조망을 담은 가변적 코트</>
                            ) : (
                                <>Corporate Multi-Use Arena:<br className="md:hidden" /> Versatile, Urban, Inspiring</>
                            )}'''
    ),
    (
        '''Sky Garden:<br className="md:hidden" /> Where Nature Meets Skyline''',
        '''{lang === 'kr' ? (
                                <>Sky Garden:<br className="md:hidden" /> 자연의 녹음과 도심의 스카이라인이 교차하는 입체 정원</>
                            ) : (
                                <>Sky Garden:<br className="md:hidden" /> Where Nature Meets Skyline</>
                            )}'''
    ),
    (
        '''Event Space:<br className="md:hidden" /> Where Brands Shine, Culture Thrives, and the City Connects.''',
        '''{lang === 'kr' ? (
                                <>Event Space:<br className="md:hidden" /> 브랜드와 문화, 그리고 도시가 만나는 접점</>
                            ) : (
                                <>Event Space:<br className="md:hidden" /> Where Brands Shine, Culture Thrives, and the City Connects.</>
                            )}'''
    ),
    (
        '''Sky Garden & Event Space:<br className="md:hidden" /> An Elevated Cultural Destination Above the City''',
        '''{lang === 'kr' ? (
                                <>Sky Garden & Event Space:<br className="md:hidden" /> 서울의 스카이라인을 소유하는 특별한 경험</>
                            ) : (
                                <>Sky Garden & Event Space:<br className="md:hidden" /> An Elevated Cultural Destination Above the City</>
                            )}'''
    ),
    (
        '''<>IOTA Two Main Lobby:<br className="md:hidden" /> Where the City's Flow Meets Architecture</>
                            ) : (
                                <>IOTA Two Main Lobby:<br className="md:hidden" /> Where the City's Flow Meets Architecture</>''',
        '''<>IOTA Two Main Lobby:<br className="md:hidden" /> 도시의 활력과 자연의 여유가 만나는 곳</>
                            ) : (
                                <>IOTA Two Main Lobby:<br className="md:hidden" /> Where the City's Flow Meets Architecture</>'''
    ),
    (
        '''Main Lobby Core Access:<br className="md:hidden" /> Architectural Rhythm in Motion''',
        '''{lang === 'kr' ? (
                                <>메인 로비 코어 진입부:<br className="md:hidden" /> 발걸음에 따라 전개되는 역동적인 건축 리듬</>
                            ) : (
                                <>Main Lobby Core Access:<br className="md:hidden" /> Architectural Rhythm in Motion</>
                            )}'''
    ),
    (
        '''Main Lobby Core Access: Architectural Rhythm in Motion''',
        '''{lang === 'kr' ? (
                                <>메인 로비 코어 진입부: 발걸음에 따라 전개되는 역동적인 건축 리듬</>
                            ) : (
                                <>Main Lobby Core Access: Architectural Rhythm in Motion</>
                            )}'''
    ),
    (
        '''Office Open Lounge:<br className="md:hidden" /> Where Connection Meets Calm''',
        '''{lang === 'kr' ? (
                                <>오피스 오픈 라운지:<br className="md:hidden" /> 네트워킹과 평온한 사색이 공존하는 공간</>
                            ) : (
                                <>Office Open Lounge:<br className="md:hidden" /> Where Connection Meets Calm</>
                            )}'''
    ),
]

replace_all(iota_two, reps_two)

# 88 -> SectionIotaTwo Office Entry image title
with open(iota_two, 'r', encoding='utf-8') as f:
    c = f.read()
target_img = '<HoverImage  src="./img/iotatwo_08.jpg" width="3000" height="1942" alt="Sky Garden and Event Space Details" />'
if target_img in c and '오피스 진입공간' not in c:
    new_img_block = """<h2 className="text-[28px] md:text-[40px] font-inter font-light text-black tracking-[-0.03em] leading-tight mb-6 md:mb-8 break-keep">
                            {lang === 'kr' ? (
                                <>오피스 진입공간</>
                            ) : (
                                <>Office Entry Space</>
                            )}
                        </h2>
                        """ + target_img
    c = c.replace(target_img, new_img_block)
    with open(iota_two, 'w', encoding='utf-8') as f:
        f.write(c)

print("Done string replacement script!")
