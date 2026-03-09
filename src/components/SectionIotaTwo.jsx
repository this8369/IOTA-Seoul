import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import HoverImage from './HoverImage';

export default function SectionIotaTwo() {
    const { lang } = useLanguage();

    return (
        <>
            <section className="section w-full h-auto bg-white pt-[50px] md:pt-[100px] pb-[100px] md:pb-[150px]" id="section-iotatwo">

                {/* Top Large Title */}
                <div className="w-full flex justify-center py-[200px] md:py-[300px] bs-fade-up">
                    <h1 className="text-[70px] sm:text-[100px] md:text-[180px] lg:text-[250px] 2xl:text-[350px] leading-none font-inter font-thin text-black tracking-[-0.03em] uppercase">
                        IOTA Two
                    </h1>
                </div>

                <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-start">

                    {/* First Item Area */}
                    <div className="flex flex-col w-full bs-fade-up">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-black tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            {lang === 'kr' ? (
                                <>1층 진입부:<br className="md:hidden" /> 도시의 흐름을 잇는 개방형 진입 구조</>
                            ) : (
                                <>Ground Level Entry:<br className="md:hidden" /> An Open Structure Linking the Urban Flow</>
                            )}
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-gray-600 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        IOTA Two의 1층 진입부는 건물을 들어올린 듯한 파일로티 구조로 계획되어, 남산의 녹지축에서 서울역 광장으로 이어지는 도심 보행 네트워크를 끊임없이 연결합니다.<br className="hidden md:block" />
                                        이 열린 도시 레벨의 설계는 건축물 하나의 '경계'가 아닌 '흐름'으로 해석하며, 이오타 서울 전역에 걸친 공공적 연속성(Public Continuity)을 강화합니다.<br className="hidden md:block" />
                                        이를 통해 이용자는 남산의 자연에서 서울역 중심까지, 하나의 유기적 오픈 스페이스를 경험하게 됩니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        The ground level of IOTA Two is designed with a pilotis architectural form, lifting the building to create an uninterrupted open space connecting Namsan's green axis to Seoul Station Plaza.<br className="hidden md:block" />
                                        This elevated structure transforms the threshold between architecture and city into a continuous urban flow, enhancing the sense of public permeability and spatial openness throughout the IOTA Seoul development.<br className="hidden md:block" />
                                        Pedestrians experience a seamless transition from nature to the urban core-a new spatial continuity redefining the interface between landscape and architecture.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* First Image Area */}
                    <HoverImage src="./img/iotatwo_01.jpg" alt="Ground Level Entry" />
                </div>

                {/* Second Item Area (Full Width) */}
                <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-start bs-fade-up mt-24 md:mt-32 mb-6 md:mb-8">
                    <h2 className="text-[28px] md:text-[40px] font-inter font-light text-black tracking-[-0.03em] leading-[1.2] break-keep mb-6 md:mb-8">
                        Gateway Park:<br className="md:hidden" /> Connecting City and Nature
                    </h2>

                    <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-gray-600 leading-[1.8] tracking-[-0.01em] font-inter">
                        {lang === 'kr' ? (
                            <div className="break-keep">
                                <p className="mb-4">
                                    IOTA Two의 게이트웨이 파크(Gateway Park)는 남산의 녹지와 서울역 광장을 유기적으로 연결하는 도심 속 개방형 공공 공간입니다.<br className="hidden md:block" />
                                    계단형 테라스와 다층적 식재 구조를 통해 이용자는 자연스럽게 도심의 레벨 차를 따라 이동하며, 남산에서 서울역까지 이어지는 녹지 흐름(Green Continuum)을 경험합니다.<br className="hidden md:block" />
                                    단순한 개방공간 또는 접근 동선이 아니라, 업무와 일상, 시민과 입주자가 교차하는 도시의 완충이자 교류의 장으로 기능합니다.
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p className="mb-4">
                                    The Gateway Park at IOTA Seoul forms an open urban landscape that seamlessly links the greenery of Namsan with the civic plaza of Seoul Station.<br className="hidden md:block" />
                                    Through its terraced design and multi-layered planting, visitors experience a gentle transition across the city's natural elevation, creating a continuous green corridor from mountain to metropolis.<br className="hidden md:block" />
                                    More than a passageway, the park acts as an urban interface—a shared ground where work, leisure, and community converge, blurring the boundaries between architecture, landscape, and everyday life.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Second Image Area (Full Width) */}
                <div className="w-full">
                    <HoverImage src="./img/iotatwo_02.jpg" alt="Gateway Park" className="w-full h-auto object-cover block" wrapperClassName="w-full relative overflow-hidden group cursor-pointer" />
                </div>

                <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-start">

                    {/* Third Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-black tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Corporate Multi-Use Arena:<br className="md:hidden" /> Versatile, Urban, Inspiring
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-gray-600 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        IOTA Two에 위치한 다목적 아레나는 서울역 시티뷰를 배경으로, 농구, 배드민턴, 테니스 등 단체 스포츠는 물론 기업의 타운홀 미팅, 발표 행사 등 다양한 활동에 맞춰 유연하게 변모할 수 있는 입주사 전용 공간입니다.<br className="hidden md:block" />
                                        탁 트인 공간감과 개방형 구조는 뉴욕 시그램 빌딩의 멀티홀을 연상시키며, 도심 속에서 에너지와 소통을 모두 아우르는 ‘워크 앤 플레이’ 공간으로 기능합니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        Located in IOTA Two with sweeping views of Seoul Station, this multi-use arena is a flexible, tenant-only space designed for both movement and meaning.<br className="hidden md:block" />
                                        Whether hosting a town hall, a corporate presentation, or a casual game of basketball or tennis, the arena transforms effortlessly to meet the evolving needs of modern enterprises.<br className="hidden md:block" />
                                        Reminiscent of the iconic multipurpose space in the Seagram Building, it offers a rare balance of productivity, wellness, and community—right in the heart of the city.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Third Image Area */}
                    <HoverImage src="./img/iotatwo_03.jpg" alt="Corporate Multi-Use Arena" />

                    {/* Fourth Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-black tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Sky Garden:<br className="md:hidden" /> Where Nature Meets Skyline
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-gray-600 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        이오타서울의 32층부터 34층을 자연스럽게 연결하는 스카이가든은 녹지와 쉼터가 어우러진 입체 보행 동선을 따라 누구나 자유롭게 걷고 휴식할 수 있는 오픈 공간입니다.<br className="hidden md:block" />
                                        입주사 임직원은 물론 외부 방문객도 이용 가능한 이 공간은 서울역과 남산을 동시에 조망할 수 있는 파노라믹 시티뷰를 제공하며, 도심 한복판에서 자연과 일상이 만나는 경험을 제공합니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        Spanning the 32nd to 34th floors of IOTA Seoul, the Sky Garden is a continuous, landscaped walkway open to both tenants and the public.<br className="hidden md:block" />
                                        Its intuitive vertical circulation and lush greenery create an elevated sanctuary where visitors can relax, recharge, and reconnect with nature. Framed by sweeping panoramic views of Namsan and Seoul Station,<br className="hidden md:block" />
                                        this rooftop garden redefines what it means to pause and breathe—right in the heart of the city.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Fourth Image Area */}
                    <HoverImage src="./img/iotatwo_04.jpg" alt="Sky Garden" />

                    <div className="mt-8 md:mt-12 w-full">
                        <HoverImage src="./img/iotatwo_05.jpg" alt="Sky Garden Details" />
                    </div>

                    {/* Fifth Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-black tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Event Space:<br className="md:hidden" /> Where Brands Shine, Culture Thrives, and the City Connects.
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-gray-600 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        IOTA Two 최상층에 위치한 이벤트 스페이스는 서울 도심을 한눈에 내려다보는 파노라믹 시티뷰와 몰입형 미디어 월, 무빙 라이트 시스템 등 최첨단 무대 인프라를 갖춘 복합 문화 공간입니다.<br className="hidden md:block" />
                                        브랜드 런칭, 컨퍼런스, 공연, 아트쇼 등 다양한 행사를 유치할 수 있으며, 토라노몬 힐스의 ‘Tokyo Node’처럼 비즈니스와 문화가 교차하는 도시의 새로운 상징이 될 것입니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        Located at the top of IOTA Seoul, the event space offers a panoramic skyline view and immersive media infrastructure—including full-surround digital walls and adaptive lighting systems.<br className="hidden md:block" />
                                        Designed to host everything from brand showcases and corporate forums to live performances and digital art installations, this venue aspires to become a cultural landmark, much like 'Tokyo Node' at Toranomon Hills.<br className="hidden md:block" />
                                        It’s where business meets creativity, and where Seoul’s future is staged.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Fifth Image Area */}
                    <HoverImage src="./img/iotatwo_06.jpg" alt="Event Space" />

                    {/* Sixth Item Area */}
                    <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                        <h2 className="text-[28px] md:text-[40px] font-inter font-light text-black tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                            Sky Garden & Event Space:<br className="md:hidden" /> An Elevated Cultural Destination Above the City
                        </h2>

                        <div className="w-full max-w-[1300px] text-[14px] md:text-[17px] font-extralight text-gray-600 leading-[1.8] tracking-[-0.01em] font-inter mb-10 md:mb-14">
                            {lang === 'kr' ? (
                                <div className="break-keep">
                                    <p className="mb-4">
                                        IOTA 서울의 스카이가든과 이벤트 스페이스는 도심의 가장 높은 지점에서 자연과 예술, 그리고 도시의 풍경을 함께 경험할 수 있는 열린 문화 공간입니다.<br className="hidden md:block" />
                                        남산과 서울 전경이 한눈에 펼쳐지는 이곳은 비즈니스 행사, 브랜드 런칭, 프라이빗 리셉션 등 다양한 프로그램을 통해 도심 속 새로운 커뮤니티 허브이자 상징적 랜드마크로 자리합니다.<br className="hidden md:block" />
                                        야간에는 투명한 파빌리온 구조가 빛으로 물들어 서울 도심의 스카이라인을 완성하는 <strong>빛의 정원(Luminous Garden)</strong>으로 변모합니다.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="mb-4">
                                        The Sky Garden and Event Space at IOTA Seoul serve as an open cultural venue above the city, where nature, art, and panoramic urban views come together in one extraordinary setting.<br className="hidden md:block" />
                                        Overlooking both Namsan and the Seoul skyline, this elevated venue hosts business gatherings, brand events, and private receptions, becoming a new community hub and architectural landmark within the city.<br className="hidden md:block" />
                                        By night, the glass pavilion glows softly against the skyline, transforming into a luminous garden in the sky that defines Seoul’s new horizon.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sixth Image Area */}
                    <HoverImage src="./img/iotatwo_07.jpg" alt="Sky Garden and Event Space" />

                </div>

            </section>
        </>
    );
}
