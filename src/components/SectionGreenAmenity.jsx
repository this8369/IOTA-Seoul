import React, { useEffect, useRef } from 'react';

export default function SectionGreenAmenity() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger animation
                    const boxes = entry.target.querySelectorAll('.amenity-green-box');
                    const images = entry.target.querySelectorAll('.amenity-image');

                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = 'translateY(0)';
                            box.style.opacity = '1';
                        }, index * 200); // 0, 200, 400, 600
                    });

                    images.forEach((img, index) => {
                        setTimeout(() => {
                            img.style.transform = 'translateY(0)';
                            img.style.opacity = '1';
                        }, 800 + (index * 200)); // 800, 1000, 1200, 1400
                    });

                    // Optional: stop observing once triggered
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="section w-full h-auto bg-white pt-[50px] md:pt-[100px] pb-[100px]" id="section-green-amenity" ref={sectionRef}>
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-center">

                {/* TEXT CONTENT */}
                <div className="w-full flex flex-col mb-16 bs-fade-up items-center">
                    <h2 className="text-[40px] md:text-[50px] lg:text-[59px] font-extrabold text-[#2F4F4F] mb-2 leading-tight tracking-[-0.02em] font-inter text-center"
                        data-en="Urban Office Meets Immersive Nature"
                        data-kr="Urban Office Meets Immersive Nature">
                        Urban Office Meets Immersive Nature
                    </h2>

                    <h3 className="text-[17px] md:text-[20px] lg:text-[22px] font-bold text-[#3B7062] mb-12 tracking-tight leading-snug text-center"
                        data-kr="서울에서 가장 큰 그린 어메니티"
                        data-en="Experience Seoul's Most Expansive Green Amenity">
                        Experience Seoul's Most Expansive Green Amenity
                    </h3>

                    <div className="text-[15px] md:text-[16px] lg:text-[17px] font-medium text-black leading-[1.7] md:leading-[1.8] tracking-[-0.02em] max-w-[1300px]">
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
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                            {/* Green Box */}
                            <div className="amenity-green-box absolute inset-0 w-full h-full bg-[#3B7062] translate-y-full opacity-0"
                                style={{ transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease' }}>
                            </div>
                            {/* Image */}
                            <img src={`./img/green_0${num}.png`} alt={`Green Amenity ${num}`}
                                className="amenity-image absolute inset-0 w-full h-full object-cover translate-y-full opacity-0"
                                style={{ transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, opacity 0.8s ease 0.1s' }} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
