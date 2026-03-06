import React from 'react';

export default function SectionAIReady() {
    return (
        <section className="section w-full h-auto bg-white pt-[100px] md:pt-[150px] pb-[100px]" id="section-aiready">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-center border-t-[1px] border-black pt-12">

                {/* ANIMATED IMAGE AREA (PC Only Focus) */}
                <div id="ai-scroll-area" className="hidden lg:block w-full relative h-[300vh] bs-fade-up">
                    <div className="w-full h-[100vh] sticky top-0 left-0 flex flex-col justify-center overflow-hidden py-[5vh]">

                        {/* Title - right above the image */}
                        <div className="w-full mb-[30px] shrink-0">
                            <h2 className="text-[32px] md:text-[45px] lg:text-[46px] xl:text-[50px] font-extrabold text-black tracking-[-0.02em] font-inter leading-tight">
                                AI Driven Biomorphic Workplace Framework
                            </h2>
                        </div>

                        {/* Images */}
                        <div className="relative w-full flex-1 min-h-0 flex items-center justify-center">
                            <img src="./img/AI_ready_building01.jpg" alt="AI Ready 1" id="ai-img-1"
                                className="absolute object-contain w-full h-full transition-opacity duration-1000 ease-in-out" />
                            <img src="./img/AI_ready_building02.jpg" alt="AI Ready 2" id="ai-img-2"
                                className="absolute object-contain w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out" />
                            <img src="./img/AI_ready_building03.jpg" alt="AI Ready 3" id="ai-img-3"
                                className="absolute object-contain w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out" />
                        </div>

                        {/* BOTTOM TEXT CONTENT (Starts below image area) - exactly 30px top margin */}
                        <div className="w-full flex flex-col mt-[30px] shrink-0">
                            <h3 className="text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-bold text-[#1a65a4] tracking-[-0.03em] mb-2 leading-tight break-keep kr-target-text en-only-hide"
                                data-kr="AI Ready Building : 데이터 기반 의사결정과 자동화를 구현하는 지능형 빌딩 운영체계"
                                data-en="AI Ready Building : An AI-Driven Building Ecosystem Enabling Autonomous Operations and Data-Based Decisions">
                                AI Ready Building : 데이터 기반 의사결정과 자동화를 구현하는 지능형 빌딩 운영체계
                            </h3>
                            <h4 className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-bold text-gray-700 italic tracking-[-0.01em] mb-6 font-inter"
                                data-en="An AI-Driven Building Ecosystem Enabling Autonomous Operations and Data-Based Decisions"
                                data-kr="An AI-Driven Building Ecosystem Enabling Autonomous Operations and Data-Based Decisions">
                                An AI-Driven Building Ecosystem Enabling Autonomous Operations and Data-Based Decisions
                            </h4>

                            <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
                                {/* LEFT KR TEXT */}
                                <div className="w-full lg:w-[48%] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-medium text-black leading-[1.6] tracking-[-0.02em] break-keep kr-target-text en-only-hide">
                                    <p className="mb-2">
                                        IOTA Seoul은 AI 기반의 데이터 순환 구조를 통해 건물이 스스로 학습하고 운영되는 지능형 오피스로 진화합니다.<br className="hidden md:block" />
                                        IoT 센서와 디지털 트윈을 통해 실시간 데이터를 수집하고, AI Agent가 이를 분석하여 건물의 에너지, 공기질, 보안, 이동, 유지보수를 자동으로 제어합니다.
                                    </p>
                                    <p>
                                        관리자는 통합된 Building OS를 통해 모든 시스템을 단일 인터페이스로 관리할 수 있으며, 사용자는 자동으로 관리되는 최적의 웰니스 업무 환경을 경험할 수 있습니다.<br className="hidden md:block" />
                                        이를 통해 기업은 운영 효율성과 ESG 성과를 동시에 강화할 수 있습니다.
                                    </p>
                                </div>

                                {/* RIGHT EN TEXT */}
                                <div className="w-full lg:w-[48%] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-normal text-gray-800 leading-[1.6] tracking-[-0.01em] font-inter">
                                    <p className="mb-2">
                                        IOTA Seoul evolves into an intelligent office that learns and operates autonomously through an AI-driven data ecosystem.<br className="hidden md:block" />
                                        Through IoT sensors and digital twins, the building continuously collects real-time data, which the AI Agent analyzes to automatically manage energy, air quality, security, mobility, and maintenance.
                                    </p>
                                    <p>
                                        Administrators can oversee all systems through a unified Building OS, while users experience an optimally managed wellness-focused work environment.<br className="hidden md:block" />
                                        This intelligent framework enables enterprises to enhance both operational efficiency and ESG performance simultaneously.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Fallback for beneath lg (user will address mobile later) */}
                <div className="lg:hidden w-full flex flex-col mb-12 bs-fade-up delay-200">
                    <div className="w-full mb-[30px]">
                        <h2 className="text-[32px] md:text-[45px] font-extrabold text-black tracking-[-0.02em] font-inter leading-tight">
                            AI Driven Biomorphic Workplace Framework
                        </h2>
                    </div>
                    <img src="./img/AI_ready_building03.jpg" alt="AI Ready 3" className="w-full h-auto object-contain" />
                    <div className="w-full flex flex-col mt-[30px]">
                        <h3 className="text-[20px] md:text-[24px] font-bold text-[#1a65a4] tracking-[-0.03em] mb-2 leading-tight break-keep kr-target-text en-only-hide"
                            data-kr="AI Ready Building : 데이터 기반 의사결정과 자동화를 구현하는 지능형 빌딩 운영체계"
                            data-en="AI Ready Building : An AI-Driven Building Ecosystem Enabling Autonomous Operations and Data-Based Decisions">
                            AI Ready Building : 데이터 기반 의사결정과 자동화를 구현하는 지능형 빌딩 운영체계
                        </h3>
                        <h4 className="text-[14px] md:text-[16px] font-bold text-gray-700 italic tracking-[-0.01em] mb-6 font-inter"
                            data-en="An AI-Driven Building Ecosystem Enabling Autonomous Operations and Data-Based Decisions"
                            data-kr="An AI-Driven Building Ecosystem Enabling Autonomous Operations and Data-Based Decisions">
                            An AI-Driven Building Ecosystem Enabling Autonomous Operations and Data-Based Decisions
                        </h4>

                        <div className="w-full flex flex-col justify-between items-start gap-8">
                            {/* LEFT KR TEXT */}
                            <div className="w-full text-[15px] font-medium text-black leading-[1.7] tracking-[-0.02em] break-keep kr-target-text en-only-hide">
                                <p className="mb-4">
                                    IOTA Seoul은 AI 기반의 데이터 순환 구조를 통해 건물이 스스로 학습하고 운영되는 지능형 오피스로 진화합니다.<br className="hidden md:block" />
                                    IoT 센서와 디지털 트윈을 통해 실시간 데이터를 수집하고, AI Agent가 이를 분석하여 건물의 에너지, 공기질, 보안, 이동, 유지보수를 자동으로 제어합니다.
                                </p>
                                <p>
                                    관리자는 통합된 Building OS를 통해 모든 시스템을 단일 인터페이스로 관리할 수 있으며, 사용자는 자동으로 관리되는 최적의 웰니스 업무 환경을 경험할 수 있습니다.<br className="hidden md:block" />
                                    이를 통해 기업은 운영 효율성과 ESG 성과를 동시에 강화할 수 있습니다.
                                </p>
                            </div>

                            {/* RIGHT EN TEXT */}
                            <div className="w-full text-[14px] font-normal text-gray-800 leading-[1.7] tracking-[-0.01em] font-inter">
                                <p className="mb-4">
                                    IOTA Seoul evolves into an intelligent office that learns and operates autonomously through an AI-driven data ecosystem.<br className="hidden md:block" />
                                    Through IoT sensors and digital twins, the building continuously collects real-time data, which the AI Agent analyzes to automatically manage energy, air quality, security, mobility, and maintenance.
                                </p>
                                <p>
                                    Administrators can oversee all systems through a unified Building OS, while users experience an optimally managed wellness-focused work environment.<br className="hidden md:block" />
                                    This intelligent framework enables enterprises to enhance both operational efficiency and ESG performance simultaneously.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
