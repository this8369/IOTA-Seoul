import React from 'react';

export default function SectionGreen() {
    return (
        <section className="section w-full relative bg-white" id="section-green" style={{ height: '200vh' }}>
            <div id="green-scroll-area" className="w-full h-full relative">
                {/* STICKY CONTAINER */}
                <div className="sticky top-0 w-full h-screen overflow-hidden left-0">

                    {/* BACKGROUND MAPS */}
                    <div className="absolute inset-0 w-full h-full pb-[10vh] md:pb-0 z-0">
                        <img src="./img/namsan_map1.jpg" alt="Namsan Map 1" id="green-img-1"
                            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out" />
                        <img src="./img/namsan_map2.jpg" alt="Namsan Map 2" id="green-img-2"
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-1000 ease-in-out" />

                        {/* Gradient overlay for text readability on the left */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 md:from-black/40 to-transparent"></div>
                    </div>

                    {/* TEXT CONTENT CONTAINER */}
                    <div className="absolute inset-0 w-full h-full flex flex-col justify-end md:justify-center z-10 pointer-events-none pb-12 md:pb-0">
                        <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto px-6 xl:px-0">

                            {/* FLOATING TEXT PANEL */}
                            <div className="w-full md:w-[600px] lg:w-[700px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10 lg:p-12 bs-fade-up pointer-events-auto">

                                <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-extrabold text-[#2F4F4F] mb-1 leading-tight tracking-[-0.02em] font-inter"
                                    data-en="Directly Connected to Namsan Park"
                                    data-kr="Directly Connected to Namsan Park">
                                    Directly Connected to Namsan Park
                                </h2>

                                <h3 className="text-[17px] md:text-[20px] font-bold text-[#3B7062] mb-6 tracking-tight leading-snug"
                                    data-kr="서울의 심장이자, 최대 녹지(87만평) 남산공원과 연결"
                                    data-en="Connected to Seoul's Heart and Its Largest Green Space – Namsan Park">
                                    Connected to Seoul's Heart and Its Largest Green Space – Namsan Park
                                </h3>

                                <div className="w-[40px] h-[3px] bg-[#3B7062] mb-6"></div>

                                <div className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-gray-700 leading-[1.7] md:leading-[1.8] space-y-4 tracking-[-0.02em]">
                                    <p className="kr-target-text transition-all duration-300"
                                        data-kr="이오타서울은 87만 평 규모의 서울 최대 녹지, 남산공원과 직접 연결되는 <span class='text-black font-bold'>유일한 트로피 복합자산입니다.</span><br/>서울의 심장부인 서울역권 중심에 위치하면서도, 도심 속에서 누릴 수 있는 가장 넓고 쾌적한 자연환경과의 연결성을 제공합니다.<br/>이러한 자연 인프라는 웰니스 중심의 업무 환경을 지향하는 <span class='text-black font-bold'>글로벌 기업에게 탁월한 가치를</span> 제공하며, &quot;도심 속 그린 리트리트(Green Retreat)&quot;로서의 독보적 차별성을 만듭니다."
                                        data-en="IOTA Seoul is the only trophy-grade mixed-use development directly connected to Namsan Park, <span class='text-black font-bold'>Seoul's largest urban green space</span> spanning 710 AC.<br/>Located in the city's urban core near Seoul Station, it uniquely combines metropolitan accessibility with immersive natural surroundings rarely found in major capital cities.<br/>This proximity to nature offers <span class='text-black font-bold'>exceptional value to global companies</span> seeking wellness-focused, productivity-enhancing work environments, positioning IOTA as a true &quot;Green Retreat in the City&quot; with unmatched differentiation.">
                                        IOTA Seoul is the only trophy-grade mixed-use development directly connected to Namsan Park, <span className="text-black font-bold">Seoul's largest urban green space</span> spanning 710 AC.<br />
                                        Located in the city's urban core near Seoul Station, it uniquely combines metropolitan accessibility with immersive natural surroundings rarely found in major capital cities.<br />
                                        This proximity to nature offers <span className="text-black font-bold">exceptional value to global companies</span> seeking wellness-focused, productivity-enhancing work environments, positioning IOTA as a true "Green Retreat in the City" with unmatched differentiation.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
