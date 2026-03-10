import React, { useEffect, useRef } from 'react';

export default function SectionGreenAmenity() {
    const sectionRef = useRef(null);

    const [stage, setStage] = React.useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setStage(1);
                setTimeout(() => {
                    setStage(2);
                }, 1500);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section w-full h-auto bg-white pt-[50px] md:pt-[100px] pb-[100px]" id="section-green-amenity" ref={sectionRef}>
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-center">

                {/* TEXT CONTENT */}
                <div className="w-full flex flex-col mb-16 bs-fade-up items-center">
                    <h2 className="text-[40px] md:text-[50px] lg:text-[59px] font-extrabold text-[#2F4F4F] mb-2 leading-tight tracking-[-0.03em] font-inter text-center"
                        data-en="Urban Office Meets Immersive Nature"
                        data-kr="Urban Office Meets Immersive Nature">
                        Urban Office Meets Immersive Nature
                    </h2>

                    <h3 className="text-[17px] md:text-[20px] lg:text-[22px] font-bold text-[#3B7062] mb-12 tracking-tight leading-snug text-center"
                        data-kr="서울에서 가장 큰 그린 어메니티"
                        data-en="Experience Seoul's Most Expansive Green Amenity">
                        Experience Seoul's Most Expansive Green Amenity
                    </h3>

                    <div className="text-[17px] md:text-[19px] font-medium text-black leading-[1.55] md:leading-[1.75] tracking-[-0.02em] max-w-[1300px]">
                        <p className="kr-target-text transition-all duration-300"
                            data-kr="이오타 서울은 3,130평 규모의 자체 공원형 녹지와 87만 평 규모의 남산공원이 마치 하나의 어메니티처럼 연결되어 있습니다.<br/>이는 단순한 조망권을 넘어, 남산공원이 마치 <span class='font-bold'>IOTA의 프라이빗 정원</span>처럼 기능하도록 설계되었습니다.<br/>글로벌 트렌드인 웰니스 중심의 업무환경 구현에 최적화된 조건으로, 프리미엄 테넌트에게 최고의 자산 가치를 제공합니다."
                            data-en="IOTA Seoul seamlessly connects 111,375 SF of dedicated open green space with the 710 AC expanse of Namsan Park, creating an unmatched urban green ecosystem.<br/>More than a scenic view, <span class='font-bold'>Namsan functions as an extension of IOTA's private landscape</span>—a true integration of nature into daily work life.<br/>This environment offers the ideal foundation for wellness-oriented workplace strategies, aligning with global tenant demands and maximizing long-term asset value.">
                            IOTA Seoul seamlessly connects 111,375 SF of dedicated open green space with the 710 AC expanse of Namsan Park, creating an unmatched urban green ecosystem.<br />
                            More than a scenic view, <span className="font-bold">Namsan functions as an extension of IOTA's private landscape</span>—a true integration of nature into daily work life.<br />
                            This environment offers the ideal foundation for wellness-oriented workplace strategies, aligning with global tenant demands and maximizing long-term asset value.
                        </p>
                    </div>
                </div>

                {/* 4 IMAGES HORIZONTAL LAYOUT */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                    {(() => {
                        const items = [
                            { en: "Namsan Connected to IOTA One Central Plaza", kr: "IOTA One 중앙광장과 연결된 남산" },
                            { en: "IOTA Two Central Plaza", kr: "IOTA Two 중앙광장" },
                            { en: "IOTA Two Roof-top Garden", kr: "IOTA Two Roof-top Garden" },
                            { en: "IOTA One Central Plaza", kr: "IOTA One 중앙광장" }
                        ];
                        return [1, 2, 3, 4].map((num, i) => (
                            <div key={num} className="flex flex-col items-center">
                                <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 rounded-none">
                                    {/* Green Box */}
                                    <div className={`amenity-green-box absolute inset-0 w-full h-full bg-[#3B7062] z-10 transition-transform ${stage === 0 ? 'translate-y-full duration-0' : stage === 1 ? 'translate-y-0 duration-[400ms] ease-[cubic-bezier(0,0.5,0,1)]' : '-translate-y-full duration-[600ms] ease-in-out'}`}
                                        style={{ transitionDelay: `${i * 300}ms` }}>
                                    </div>
                                    {/* Image */}
                                    <img src={`./img/green_0${num}.png`} alt={`Green Amenity ${num}`}
                                        className={`amenity-image absolute inset-0 w-full h-full object-cover z-0 ${stage >= 2 ? 'opacity-100' : 'opacity-0 duration-0'}`} />
                                </div>
                                <div className={`text-center transition-all ${stage === 2 ? 'opacity-100 translate-y-0 duration-[1000ms] ease-out' : 'opacity-0 translate-y-4 duration-0'}`} style={{ transitionDelay: stage === 2 ? '1800ms' : '0ms' }}>
                                    <p className="text-[14px] md:text-[15px] font-medium text-black tracking-[-0.01em]"
                                        data-kr={items[i].kr}
                                        data-en={items[i].en}>
                                        {items[i].en}
                                    </p>
                                </div>
                            </div>
                        ));
                    })()}
                </div>

            </div>
        </section>
    );
}
