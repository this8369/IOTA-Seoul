import React from 'react';

export default function SectionScale() {
    return (
        <section className="section w-full h-auto bg-black text-white pt-[100px] md:pt-[150px] pb-[100px] overflow-hidden" id="section-scale">

            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        display: inline-block;
                        white-space: nowrap;
                        animation: marquee 30s linear infinite;
                    }
                `}
            </style>

            {/* MARQUEE TEXT */}
            <div className="w-full relative mb-12 md:mb-20 bs-fade-up">
                <div className="flex w-fit animate-marquee">
                    <h2 className="text-[120px] md:text-[200px] lg:text-[250px] font-black text-white opacity-10 tracking-tighter leading-none whitespace-nowrap">
                        UNMATCHED SCALE UNMATCHED SCALE UNMATCHED SCALE UNMATCHED SCALE UNMATCHED SCALE&nbsp;
                    </h2>
                </div>
            </div>

            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-center">

                {/* LARGE SCALE IMAGE */}
                <div className="w-full mb-16 bs-fade-up delay-100">
                    <img src="./img/scale.jpg" alt="IOTA Seoul Scale" className="w-full h-auto object-cover rounded-sm" />
                </div>

                {/* TEXT CONTENT */}
                <div className="w-full max-w-[1200px] flex flex-col items-center text-center bs-fade-up delay-200">

                    <h3 className="text-[32px] md:text-[45px] lg:text-[55px] font-extrabold text-[#A3C9A8] mb-4 md:mb-6 tracking-tight font-inter leading-tight"
                        data-en="Iconic Trophy Asset in Seoul"
                        data-kr="도심 핵심지에서의 초대형 복합 사업">
                        Iconic Trophy Asset in Seoul
                    </h3>

                    <h4 className="text-[18px] md:text-[22px] lg:text-[26px] font-medium text-gray-300 mb-10 md:mb-14 tracking-tight leading-snug kr-target-text"
                        data-en="A flagship trophy mixed-use asset in the heart of Seoul"
                        data-kr="A flagship trophy mixed-use asset in the heart of Seoul">
                        A flagship trophy mixed-use asset in the heart of Seoul
                    </h4>

                    <div className="text-[15px] md:text-[17px] lg:text-[19px] font-medium text-gray-300 leading-[1.8] md:leading-[1.9] tracking-[-0.01em] max-w-[900px]">
                        <p className="kr-target-text transition-all duration-300 break-keep"
                            data-kr="이오타 서울은 초대형 남산 녹지를 앞마당에 둔 대형 오피스 2개동과 6성급 호텔 1개동 (리츠칼튼 예정), 다양한 웰니스 리테일 시설이 결합된 초대형 복합시설로 서울을 대표하는 트로피 에셋을 지향합니다."
                            data-en="IOTA Seoul is a massive mixed-use development, made up of 2 state-of-the-art, custom-designed office spaces and 1 ultra-luxury hotel (The Ritz-Carlton).">
                            IOTA Seoul is a massive mixed-use development, made up of 2 state-of-the-art, custom-designed office spaces and 1 ultra-luxury hotel (The Ritz-Carlton).
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
