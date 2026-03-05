import React from 'react';

export default function SectionGreen() {
    return (
        <section className="section w-full h-auto bg-white pt-[100px] md:pt-[150px] pb-[100px]" id="section-green">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col">

                {/* TEXT CONTENT */}
                <div className="w-full flex flex-col mb-12 bs-fade-up">
                    <h2 className="text-[26px] md:text-[36px] lg:text-[45px] font-extrabold text-[#2F4F4F] mb-2 leading-tight tracking-[-0.02em] font-inter"
                        data-en="Directly Connected to Namsan Park"
                        data-kr="Directly Connected to Namsan Park">
                        Directly Connected to Namsan Park
                    </h2>

                    <h3 className="text-[17px] md:text-[20px] lg:text-[22px] font-bold text-[#3B7062] mb-8 tracking-tight leading-snug"
                        data-kr="서울의 심장이자, 최대 녹지(87만평) 남산공원과 연결"
                        data-en="Connected to Seoul's Heart and Its Largest Green Space – Namsan Park">
                        Connected to Seoul's Heart and Its Largest Green Space – Namsan Park
                    </h3>

                    <div className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-black leading-[1.7] md:leading-[1.8] space-y-4 tracking-[-0.02em] max-w-[1200px]">
                        <p className="kr-target-text transition-all duration-300"
                            data-kr="이오타서울은 87만 평 규모의 서울 최대 녹지, 남산공원과 직접 연결되는 <span class='font-bold'>유일한 트로피 복합자산입니다.</span><br/>서울의 심장부인 서울역권 중심에 위치하면서도, 도심 속에서 누릴 수 있는 가장 넓고 쾌적한 자연환경과의 연결성을 제공합니다.<br/>이러한 자연 인프라는 웰니스 중심의 업무 환경을 지향하는 <span class='font-bold'>글로벌 기업에게 탁월한 가치를</span> 제공하며, &quot;도심 속 그린 리트리트(Green Retreat)&quot;로서의 독보적 차별성을 만듭니다."
                            data-en="IOTA Seoul is the only trophy-grade mixed-use development directly connected to Namsan Park, <span class='font-bold'>Seoul's largest urban green space</span> spanning 710 AC.<br/>Located in the city's urban core near Seoul Station, it uniquely combines metropolitan accessibility with immersive natural surroundings rarely found in major capital cities.<br/>This proximity to nature offers <span class='font-bold'>exceptional value to global companies</span> seeking wellness-focused, productivity-enhancing work environments, positioning IOTA as a true &quot;Green Retreat in the City&quot; with unmatched differentiation.">
                            IOTA Seoul is the only trophy-grade mixed-use development directly connected to Namsan Park, <span className="font-bold">Seoul's largest urban green space</span> spanning 710 AC.<br />
                            Located in the city's urban core near Seoul Station, it uniquely combines metropolitan accessibility with immersive natural surroundings rarely found in major capital cities.<br />
                            This proximity to nature offers <span className="font-bold">exceptional value to global companies</span> seeking wellness-focused, productivity-enhancing work environments, positioning IOTA as a true "Green Retreat in the City" with unmatched differentiation.
                        </p>
                    </div>
                </div>

                {/* IMAGES CONTAINER with crossfade */}
                <div id="green-scroll-area" className="w-full relative bs-fade-up delay-200 mt-4">
                    <img src="./img/namsan_map1.jpg" alt="Namsan Map 1" id="green-img-1"
                        className="w-full h-auto object-contain transition-opacity duration-1000 ease-in-out" />
                    <img src="./img/namsan_map2.jpg" alt="Namsan Map 2" id="green-img-2"
                        className="absolute top-0 left-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" />
                </div>

            </div>
        </section>
    );
}
