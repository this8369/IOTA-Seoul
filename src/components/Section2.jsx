import React from 'react';

export default function Section2() {
    return (
        <section className="section content-section h-auto mb-[100px] md:mb-[200px] pt-[30px] md:pt-[60px]" id="section2" style={{ minHeight: 'auto', paddingBottom: '0' }}>
            {/* Header Spacer */}
            <div className="h-[50px] md:h-[100px] w-full invisible"></div>
            <div className="w-full max-w-[1700px] mx-auto">
                <div className="w-full px-6 md:px-0 flex flex-col md:flex-row items-center mb-12">
                    {/* Left: Title and Description */}
                    <div className="w-full md:w-[60%] flex flex-col items-start justify-start">
                        <h1 className="text-[31px] md:text-[55px] lg:text-[67px] font-bold leading-tight text-black tracking-[-0.02em] font-inter bs-fade-up delay-100"
                            data-en="New Heart of Seoul" data-kr="New Heart of Seoul">New Heart of Seoul</h1>
                        <div id="desc-text"
                            className="font-inter w-full mt-6 md:mt-8 text-[14px] md:text-[17px] tracking-[-0.02em] font-light text-black leading-relaxed space-y-6 bs-fade-up delay-200">
                            <p className="kr-target-text transition-all duration-300"
                                data-en="IOTA Seoul is the next-generation landmark redefining the heart of Korea’s capital. Perfectly positioned between the iconic Namsan and Seoul Station, this architectural masterpiece seamlessly bridges Seoul’s rich heritage with its dynamic future."
                                data-kr="이오타 서울은 최첨단 오피스와 최고급 호텔, 프리미엄 주거가 결합된 연면적 14만 평 규모의 대규모 복합개발 프로젝트입니다. 남산의 광활한 녹지와 광역 교통의 허브인 서울역과 인접한 입지에 자리하며, 지속가능한 설계를 기반으로 문화 매식 리테일 엔터테인먼트가 유기적으로 어우러진 복합 환경을 구현합니다. 이를 통해 글로벌 기업과 인재들에게 비즈니스와 라이프스타일이 자연스럽게 연결되는 최적의 업무 생활 플랫폼을 제공합니다.">
                                IOTA Seoul is the next-generation landmark redefining the heart of Korea’s capital.
                            </p>
                            <p className="kr-target-text transition-all duration-300"
                                data-en="Spanning an impressive 4,948,871 square feet, IOTA Seoul sets a new benchmark for cutting-edge business districts. Designed with state-of-the-art technology and sustainability at its core, it offers premium office spaces, Seoul’s largest integrated green space connected to Namsan, wellness-driven retail, and world-class cultural destinations."
                                data-kr="서울의 역사적 맥락과 미래 비전을 동시에 담아내는 상징적 랜드마크로서, IOTA 서울은 연중 다양한 프로그램과 공간 경험을 통해 방문객과 입주사, 지역사회에 새로운 활력을 제시할 것입니다. 궁극적으로 글로벌 오피스의 새로운 기준을 제시하는 복합 자산으로 자리매김할 것입니다.">
                                Spanning an impressive 4,948,871 square feet, IOTA Seoul sets a new benchmark.
                            </p>
                            <p className="en-only-text transition-all duration-300"
                                data-en="More than just a development, IOTA Seoul is an evolution of urban living—a place where business, culture, and nature converge to inspire daily life."
                                data-kr="">
                                More than just a development, IOTA Seoul is an evolution of urban living—a place where
                                business,
                                culture, and nature converge to inspire daily life.
                            </p>
                        </div>
                    </div>
                    {/* Right: Stats */}
                    <div
                        className="w-full md:w-[40%] flex flex-col justify-center items-center mt-12 md:mt-0 ml-auto font-inter bs-fade-up delay-300">
                        <div
                            className="text-[50px] md:text-[65px] lg:text-[85px] xl:text-[105px] font-bold leading-none tracking-[-0.05em] flex items-baseline">
                            459,765
                            <span
                                className="text-[24px] md:text-[32px] lg:text-[40px] tracking-tight ml-2 relative -top-[0.2em] font-normal">m²</span>
                        </div>
                        <div className="text-[16px] md:text-[20px] lg:text-[26px] font-medium tracking-[-0.02em] mt-2">
                            Gross Floor Area
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-[30px]">
                    <div className="full-image-container relative overflow-hidden group">
                        <img src="./img/iota_full.jpg" alt="IOTA Full Background"
                            className="bs-scale-up w-full h-[100vw] md:h-auto object-cover block origin-center transform transition-transform duration-[2s] group-hover:scale-105" style={{ marginTop: '-30px' }} />
                    </div>
                    <div className="full-image-container relative overflow-hidden group">
                        <img src="./img/iota_full_3.jpg" alt="IOTA Full Background 3"
                            className="bs-scale-up w-full h-auto block origin-center transform transition-transform duration-[2s] group-hover:scale-105" />
                    </div>
                </div>
            </div>
        </section>
    );
}
