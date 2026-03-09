import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SectionIotaOne() {
    const { lang } = useLanguage();

    return (
        <section className="section w-full h-auto bg-black pt-[100px] md:pt-[150px] pb-[100px] md:pb-[150px]" id="section-iotaone">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-start">

                {/* Text Area */}
                <div className="flex flex-col w-full bs-fade-up">
                    <h2 className="text-[32px] md:text-[52px] xl:text-[60px] font-inter font-bold text-white tracking-[-0.03em] leading-[1.15] mb-8 break-keep">
                        Central Plaza:<br />
                        A Grand Stage Between<br />
                        City and Nature
                    </h2>

                    <div className="w-full max-w-[1200px] text-[14px] md:text-[17px] font-extralight text-stone-300 leading-[1.8] tracking-[-0.01em] font-inter mb-12 md:mb-16">
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

                {/* Image Area */}
                <div className="w-full relative overflow-hidden group bs-fade-up delay-200">
                    <img
                        src="./img/iotaone_01.jpg"
                        alt="Central Plaza"
                        className="w-full aspect-[4/3] md:aspect-auto md:h-auto object-cover block transform transition-transform duration-[2s] group-hover:scale-[1.03]"
                    />
                </div>

            </div>
        </section>
    );
}
