import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import HoverImage from './HoverImage';

export default function SectionIotaOne() {
    const { lang } = useLanguage();

    return (
        <>
            <section className="section w-full h-auto bg-black pt-[50px] md:pt-[100px] pb-[100px] md:pb-[150px]" id="section-iotaone">

                {/* Top Large Title */}
                <div className="w-full flex justify-center py-[200px] md:py-[300px] bs-fade-up">
                    <h1 className="text-[70px] sm:text-[100px] md:text-[180px] lg:text-[250px] 2xl:text-[350px] leading-none font-inter font-thin text-white tracking-[-0.03em] uppercase">
                        IOTA One
                    </h1>
                </div>

                <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-start">

                    {/* First Item Area */}
                    <div className="flex flex-col w-full bs-fade-up">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Central Plaza:<br />
                            A Grand Stage Between City and Nature
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        이오타1의 중앙광장은 남산과 직접 연결되는 서울 도심 최대 규모의 오픈 플라자입니다. 탁 트인 공간에서는 브랜드 이벤트, 플리마켓, 공연 등 다양한 프로그램 운영이 가능하며, 서울역과의 연결로 뛰어난 접근성과 유동인구 확보가 가능합니다.
                                    </p>
                                    <p>
                                        비즈니스와 여가, 문화가 동시에 흐르는 이 곳은 이오타서울의 상징적인 커뮤니티 허브입니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        The central plaza of IOTA One is one of Seoul's largest open-air spaces, directly connected to Namsan Park. Its expansive layout enables a wide range of activities—from corporate events and cultural festivals to casual gatherings. With seamless pedestrian access to Seoul Station, the plaza offers unmatched connectivity and activation potential.
                                    </p>
                                    <p>
                                        It is the symbolic heart of IOTA Seoul, where business, leisure, and community converge.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* First Image Area */}
                    <HoverImage src="./img/iotaone_01.jpg" alt="Central Plaza" />

                    {/* Second Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Rooftop Garden:<br className="md:hidden" /> Nature at Your Office Doorstep
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        이오타1의 옥상정원은 사방이 녹지로 둘러싸인 조경형 휴식 공간으로, 업무 중에도 마치 남산 자락에 올라온 듯한 자연을 누릴 수 있습니다.
                                    </p>
                                    <p>
                                        서울 도심 한복판에서 진정한 '그린 리트릿'을 경험하며, 탁 트인 남산 전망과 함께 재충전과 영감을 동시에 얻을 수 있는 특별한 장소입니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        The rooftop garden of IOTA One offers a lush, landscaped retreat surrounded by greenery. It provides a serene atmosphere where tenants can recharge as if they've stepped into the hills of Namsan—without ever leaving the office.
                                    </p>
                                    <p>
                                        With unobstructed views of Namsan Park and an immersive natural setting, this space brings wellness, inspiration, and tranquility into the everyday work experience.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Second Image Area */}
                    <HoverImage src="./img/iotaone_02.jpg" alt="Rooftop Garden" />

                    {/* Third Item Area (Title Only) */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Rooftop Garden:<br className="md:hidden" /> Nature at Your Office Doorstep
                        </h2>
                    </div>

                    {/* Third Image Area */}
                    <HoverImage src="./img/iotaone_03.jpg" alt="Rooftop Garden View" />

                    {/* Fourth Item Area (UAM) */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            UAM Vertiport
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        도심항공교통(UAM) 시대를 대비하여, 옥상에 UAM 이착륙이 가능한 헬리포트형 선착장을 선제적으로 설계하였습니다.<br className="hidden md:block" />향후 모빌리티 기술 발전과 함께 하늘길이 열리면, 이오타서울은 서울 도심에서 가장 빠르게 UAM 정류가 가능한 오피스로 기능하게 됩니다.
                                    </p>
                                    <p>
                                        이는 비즈니스 속도와 연결성을 중시하는 글로벌 기업에게 탁월한 입지적 경쟁력이 될 것입니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        IOTA One is future-proofed with a rooftop vertiport designed for next-generation Urban Air Mobility (UAM).<br className="hidden md:block" />Anticipating the rise of airborne transport, this infrastructure will enable IOTA Seoul to become one of the first business complexes in the city capable of supporting UAM operations.
                                    </p>
                                    <p>
                                        As air mobility networks evolve, IOTA's early readiness offers unmatched value for future-focused enterprises seeking speed, accessibility, and connectivity at the highest level.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Fourth Image Area */}
                    <HoverImage src="./img/iotaone_04.png" alt="UAM Vertiport" />

                    {/* Fifth Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Hotel Podium Garden:<br className="md:hidden" /> A Private Oasis Framed by Namsan
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        이오타서울 호텔과 연결된 포디움 가든은 남산을 바로 마주한 조망과 고급 조경이 어우러진 야외 공간입니다.<br className="hidden md:block" />기업의 프라이빗 행사, 리셉션, 웨딩 등 다양한 이벤트가 가능한 서울 도심 내 보기 드문 고품격 오픈 스페이스로, 도시의 중심에서 자연과 함께하는 특별한 경험을 제공합니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        Directly connected to the IOTA Seoul hotel, the podium garden offers a rare outdoor setting with panoramic views of Namsan.<br className="hidden md:block" />Surrounded by lush landscaping, this open-air terrace provides a prestigious venue for corporate receptions, private events, and weddings.<br className="hidden md:block" />It is a seamless blend of nature and elegance—an exceptional place to host memorable occasions in the very heart of Seoul.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Fifth Image Area */}
                    <HoverImage src="./img/iotaone_05.jpg" alt="Hotel Podium Garden" />

                    {/* Sixth Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            The Hotel Podium Garden at Dusk
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        IOTA 서울의 호텔 포디엄 가든은 남산 조망을 확보한 야외 공간으로, 호텔의 연회장 및 라운지와 직접 연결되어 프라이빗 이벤트, 리셉션, 웨딩 등 다양한 형태의 행사를 수용할 수 있도록 설계되었습니다.<br className="hidden md:block" />정제된 조명과 조경 디자인을 통해 저녁 시간대에도 최적의 환경을 제공하며, 서울 도심 내에서 드물게 고급 야외 행사가 가능한 오픈 스페이스로 기능합니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        The Podium Garden at IOTA Seoul offers an open-air venue with direct views of Namsan seamlessly connected to the hotel’s function spaces and lounges.<br className="hidden md:block" />It is designed to accommodate private events, receptions, and weddings, with refined landscape and lighting systems providing optimal conditions after dusk.<br className="hidden md:block" />The space serves as one of Seoul’s few high-end outdoor venues capable of hosting premium events within the city’s urban core.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sixth Image Area */}
                    <HoverImage src="./img/iotaone_06.jpg" alt="The Hotel Podium Garden at Dusk" />

                    <div className="mt-8 md:mt-12 w-full">
                        <HoverImage src="./img/iotaone_07.jpg" alt="The Hotel Podium Garden at Dusk 2" />
                    </div>

                    {/* Seventh Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            An Expansive Lobby Experience<br className="md:hidden" /> at the Heart of the City
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        IOTA ONE의 오피스 메인 로비는 약 15미터의 층고와 전면유리 파사드를 통해 도심 한가운데에서도 개방감과 투명성을 극대화한 공간입니다.<br className="hidden md:block" />남산의 녹지와 시각적으로 연결되는 이 로비는 단순한 진입 공간을 넘어, 입주 기업과 방문객 모두에게 도시적 품격과 상징적 첫인상을 제공합니다.<br className="hidden md:block" />견고한 소재, 절제된 디테일, 그리고 자연광이 조화된 공간 구성은 IOTA ONE이 지향하는 '모던 헤리티지'의 정수를 보여줍니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        The main office lobby of IOTA ONE features a soaring 15-meter ceiling and full-height glass façades, creating a sense of openness and transparency rarely achieved in the urban core.<br className="hidden md:block" />Visually connected to the greenery of Namsan, the lobby serves not only as an entryway but as a spatial statement of prestige and identity for its tenants and visitors.<br className="hidden md:block" />Defined by robust materials, refined detailing, and natural light, it embodies the architectural essence of modern heritage that defines IOTA Seoul.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Seventh Image Area */}
                    <HoverImage src="./img/iotaone_08.jpg" alt="Expansive Lobby Experience" />

                    {/* Eighth Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Core Access:<br className="md:hidden" /> {lang === 'kr' ? "수직적 깊이감이 만든 정제된 입면" : "A Refined Façade Forged by Vertical Depth"}
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        IOTA 서울의 코어 진입부는 수직적 비례감과 리듬감 있는 입면 디자인을 통해 건축의 정제된 질서를 시각적으로 구현한 공간입니다. 불필요한 장식을 배제하고 소재의 질감과 빛의 방향성을 강조함으로써,<br className="hidden md:block" />입주자와 방문객 모두에게 단단한 구조미와 절제된 긴장감을 전달합니다. 이곳은 단순한 이동의 통로가 아니라, IOTA 서울이 지향하는 품격과 정체성을 매일의 경험 속에서 체화하게 하는 상징적 공간으로 작동합니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        The core access of IOTA Seoul embodies refined architectural order through its vertical proportions and rhythmic façade composition.<br className="hidden md:block" />By eliminating unnecessary ornamentation and emphasizing the texture of materials and the direction of light,<br className="hidden md:block" />the space conveys a sense of structural solidity and restrained tension to both occupants and visitors.<br className="hidden md:block" />More than a circulation path, it serves as a symbolic space where the dignity and identity that define IOTA Seoul are internalized through everyday experience.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Eighth Image Area */}
                    <HoverImage src="./img/iotaone_09.jpg" alt="Core Access" />

                    <div className="mt-8 md:mt-12 w-full">
                        <HoverImage src="./img/iotaone_10.jpg" alt="Core Access Details" />
                    </div>

                    {/* Ninth Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            An Open Lounge for<br className="md:hidden" /> Collaboration and Inspiration
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        오피스 오픈라운지는 업무와 휴식, 개인과 조직의 경계를 유연하게 잇는 공간입니다.<br className="hidden md:block" />비공식 미팅, 협업, 리프레시 등 다양한 목적의 활동을 수용하며, 입주 기업 간의 자연스러운 교류와 창의적 사고를 촉진합니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        The Office Open Lounge at IOTA Seoul connects work, rest, and collaboration within a single, fluid environment.<br className="hidden md:block" />Designed to accommodate informal meetings, team discussions, and moments of refreshment, it fosters natural interaction and creative synergy among tenants.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Ninth Image Area */}
                    <HoverImage src="./img/iotaone_11.jpg" alt="An Open Lounge for Collaboration and Inspiration" />

                    {/* Tenth Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Main Hotel Lobby:<br className="md:hidden" /> {lang === 'kr' ? "남산의 풍경과 리츠칼튼의 품격이 만나는 공간" : "Where Namsan's Scenery Meets The Ritz-Carlton's Prestige"}
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        IOTA 서울의 호텔 메인 로비는 남산의 녹지와 시각적으로 이어지는 탁월한 개방감을 통해, 도심 속에서도 자연과의 조화를 경험할 수 있는 환대의 무대를 제공합니다.<br className="hidden md:block" />리츠칼튼이 지향하는 절제된 품격과 세련된 서비스 철학은 자연광, 조경, 소재의 질감이 어우러진 로비 공간에 녹아 있습니다. 서울의 중심에서 휴식과 영감이 공존하는 새로운 럭셔리의 시작점입니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        The main hotel lobby of IOTA Seoul offers a rare sense of openness, seamlessly connected to the greenery of Namsan.<br className="hidden md:block" />It embodies the refined hospitality philosophy of The Ritz-Carlton, where nature, light, and material texture converge to create a calm yet sophisticated atmosphere.<br className="hidden md:block" />More than a point of arrival, it serves as a new threshold of urban luxury — a place where rest and inspiration coexist in the heart of Seoul.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tenth Image Area */}
                    <HoverImage src="./img/iotaone_12.jpg" alt="Main Hotel Lobby" />

                    {/* Eleventh Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Hotel VIP Lounge:<br className="md:hidden" /> {lang === 'kr' ? "도심의 정점에서 누리는 프라이빗 럭셔리" : "Private Luxury at the Pinnacle of the City"}
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        IOTA 서울의 VIP 라운지는 남산의 파노라믹 뷰를 배경으로, IOTA 서울과 리츠칼튼이 추구하는 가장 세련된 형태의 환대를 구현한 공간입니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        The VIP Lounge at IOTA Seoul captures the essence of The Ritz-Carlton's refined hospitality, framed by panoramic views of Namsan and the evening skyline.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Eleventh Image Area */}
                    <HoverImage src="./img/iotaone_13.jpg" alt="Hotel VIP Lounge" />

                </div>
            </section>
        </>
    );
}
