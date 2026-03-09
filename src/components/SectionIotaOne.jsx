import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SectionIotaOne() {
    const { lang } = useLanguage();

    return (
        <section className="section w-full h-auto bg-black pt-[50px] md:pt-[100px] pb-[100px] md:pb-[150px]" id="section-iotaone">

            {/* Top Large Title */}
            <div className="w-full flex justify-center py-[200px] md:py-[300px] bs-fade-up">
                <h1 className="text-[60px] md:text-[80px] lg:text-[100px] font-inter font-thin text-white tracking-[-0.03em] uppercase">
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
                <div className="w-full relative overflow-hidden group bs-fade-up delay-200">
                    <img
                        src="./img/iotaone_01.jpg"
                        alt="Central Plaza"
                        className="w-full aspect-[4/3] md:aspect-auto md:h-auto object-cover block transform transition-transform duration-[2s] group-hover:scale-[1.03]"
                    />
                </div>

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
                <div className="w-full relative overflow-hidden group bs-fade-up delay-200">
                    <img
                        src="./img/iotaone_02.jpg"
                        alt="Rooftop Garden"
                        className="w-full aspect-[4/3] md:aspect-auto md:h-auto object-cover block transform transition-transform duration-[2s] group-hover:scale-[1.03]"
                    />
                </div>

                {/* Third Item Area (Title Only) */}
                <div className="flex flex-col w-full bs-fade-up mt-24 md:mt-32">
                    <h2 className="text-[28px] md:text-[40px] font-inter font-light text-white tracking-[-0.03em] leading-[1.2] mb-6 md:mb-8 break-keep">
                        Rooftop Garden:<br className="md:hidden" /> Nature at Your Office Doorstep
                    </h2>
                </div>

                {/* Third Image Area */}
                <div className="w-full relative overflow-hidden group bs-fade-up delay-200">
                    <img
                        src="./img/iotaone_03.jpg"
                        alt="Rooftop Garden View"
                        className="w-full aspect-[4/3] md:aspect-auto md:h-auto object-cover block transform transition-transform duration-[2s] group-hover:scale-[1.03]"
                    />
                </div>

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
                <div className="w-full relative overflow-hidden group bs-fade-up delay-200 mb-10 md:mb-0">
                    <img
                        src="./img/iotaone_04.png"
                        alt="UAM Vertiport"
                        className="w-full aspect-[4/3] md:aspect-auto md:h-auto object-cover block transform transition-transform duration-[2s] group-hover:scale-[1.03]"
                    />
                </div>

            </div>
        </section>
    );
}
