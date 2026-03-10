import { useLanguage } from '../context/LanguageContext';

export default function SectionAIReady() {
    const { lang } = useLanguage();

    return (
        <section className="section w-full h-auto bg-white pt-[100px] md:pt-[150px] pb-[100px]" id="section-aiready">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-center border-t-[1px] border-black pt-12">

                {/* ANIMATED IMAGE AREA (PC Only Focus) */}
                <div id="ai-scroll-area" className="hidden lg:block w-full relative h-[300vh] bs-fade-up">
                    <div className="w-full h-[100vh] sticky top-0 left-0 flex flex-col justify-center overflow-hidden py-[5vh]">

                        {/* Title - right above the image */}
                        <div className="w-full mb-[30px] shrink-0 text-center">
                            <h2 className="text-[32px] md:text-[45px] lg:text-[46px] xl:text-[50px] font-extrabold text-black tracking-[-0.03em] font-inter leading-tight">
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
                        <div className="w-full max-w-[1100px] mx-auto flex flex-col mt-[30px] shrink-0 text-left px-4 md:px-0">
                            {lang === 'kr' ? (
                                <>
                                    <h3 className="text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-bold text-[#1a65a4] tracking-[-0.03em] mb-2 leading-tight break-keep">
                                        AI Ready Building : 데이터 기반 의사결정과 자동화를 구현하는 지능형 빌딩 운영체계
                                    </h3>
                                    <h4 className="text-[17px] md:text-[19px] lg:text-[19px] xl:text-[19px] font-bold text-gray-700 tracking-[-0.01em] mb-6 font-inter">
                                        An AI-Driven Building Ecosystem Enabling Autonomous Operations<br />and Data-Based Decisions
                                    </h4>

                                    <div className="w-full text-[17px] md:text-[19px] font-extralight text-black leading-[1.57] tracking-[-0.02em] break-keep">
                                        <p className="mb-2">
                                            IOTA Seoul은 AI 기반의 데이터 순환 구조를 통해 건물이 스스로 학습하고 운영되는 지능형 오피스로 진화합니다.<br className="hidden md:block" />
                                            IoT 센서와 디지털 트윈을 통해 실시간 데이터를 수집하고, AI Agent가 이를 분석하여 건물의 에너지, 공기질, 보안, 이동, 유지보수를 자동으로 제어합니다.
                                        </p>
                                        <p>
                                            관리자는 통합된 Building OS를 통해 모든 시스템을 단일 인터페이스로 관리할 수 있으며, 사용자는 자동으로 관리되는 최적의 웰니스 업무 환경을 경험할 수 있습니다.<br className="hidden md:block" />
                                            이를 통해 기업은 운영 효율성과 ESG 성과를 동시에 강화할 수 있습니다.
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-[17px] md:text-[20px] lg:text-[24px] xl:text-[26px] font-bold text-[#1a65a4] tracking-[-0.01em] mb-6 font-inter leading-tight">
                                        An AI-Driven Building Ecosystem Enabling Autonomous Operations<br />and Data-Based Decisions
                                    </h3>

                                    <div className="w-full text-[17px] md:text-[19px] font-extralight text-gray-800 leading-[1.57] tracking-[-0.01em] font-inter">
                                        <p className="mb-2">
                                            IOTA Seoul evolves into an intelligent office that learns and operates autonomously through an AI-driven data ecosystem.<br className="hidden md:block" />
                                            Through IoT sensors and digital twins, the building continuously collects real-time data, which the AI Agent analyzes to automatically manage energy, air quality, security, mobility, and maintenance.
                                        </p>
                                        <p>
                                            Administrators can oversee all systems through a unified Building OS, while users experience an optimally managed wellness-focused work environment.<br className="hidden md:block" />
                                            This intelligent framework enables enterprises to enhance both operational efficiency and ESG performance simultaneously.
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                </div>

                {/* MOBILE ANIMATED IMAGE AREA (iPad & below) */}
                <div id="ai-scroll-area-m" className="lg:hidden w-full relative h-[300vh] bs-fade-up delay-200">
                    <div className="w-full h-[100dvh] sticky top-0 left-0 flex flex-col justify-between overflow-hidden py-4 md:py-8">
                        <div className="w-full mb-2 shrink-0 text-center">
                            <h2 className="text-[26px] md:text-[34px] font-extrabold text-black tracking-[-0.03em] font-inter leading-tight">
                                AI Driven Biomorphic Workplace Framework
                            </h2>
                        </div>

                        <div className="relative w-[calc(100%+48px)] -ml-[24px] md:w-[calc(100%+100px)] md:-ml-[50px] flex-1 min-h-0 flex items-center justify-center">
                            <img src="./img/AI_ready_building_m_01.jpg" alt="AI Ready Mobile 1" id="ai-img-m-1"
                                className="absolute object-contain w-full h-full transition-opacity duration-1000 ease-in-out" />
                            <img src="./img/AI_ready_building_m_02.jpg" alt="AI Ready Mobile 2" id="ai-img-m-2"
                                className="absolute object-contain w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out" />
                            <img src="./img/AI_ready_building_m_03.jpg" alt="AI Ready Mobile 3" id="ai-img-m-3"
                                className="absolute object-contain w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out" />
                        </div>

                        <div className="w-full max-w-[1100px] mx-auto flex flex-col mt-2 md:mt-4 shrink-0 text-left">
                            {lang === 'kr' ? (
                                <>
                                    <h3 className="text-[17px] md:text-[19px] font-bold text-[#1a65a4] tracking-[-0.03em] mb-1 leading-tight break-keep">
                                        AI Ready Building : 데이터 기반 의사결정과 자동화를 구현하는 지능형 빌딩 운영체계
                                    </h3>
                                    <h4 className="text-[17px] md:text-[19px] font-bold text-gray-700 tracking-[-0.01em] mb-3 font-inter">
                                        An AI-Driven Building Ecosystem Enabling Autonomous Operations<br />and Data-Based Decisions
                                    </h4>

                                    <div className="w-full text-[15px] md:text-[17px] font-normal text-black leading-[1.57] tracking-[-0.02em] break-keep">
                                        <p className="mb-1">
                                            IOTA Seoul은 AI 기반의 데이터 순환 구조를 통해 건물이 스스로 학습하고 운영되는 지능형 오피스로 진화합니다. IoT 센서와 디지털 트윈을 통해 실시간 데이터를 수집하고, AI Agent가 이를 분석하여 건물의 에너지, 공기질, 보안, 이동, 유지보수를 자동으로 제어합니다.
                                        </p>
                                        <p>
                                            관리자는 통합된 Building OS를 통해 모든 시스템을 단일 인터페이스로 관리할 수 있으며, 사용자는 자동으로 관리되는 최적의 웰니스 업무 환경을 경험할 수 있습니다. 이를 통해 기업은 운영 효율성과 ESG 성과를 동시에 강화할 수 있습니다.
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-[17px] md:text-[19px] font-bold text-[#1a65a4] tracking-[-0.01em] mb-3 font-inter leading-tight">
                                        An AI-Driven Building Ecosystem Enabling Autonomous Operations<br />and Data-Based Decisions
                                    </h3>

                                    <div className="w-full text-[17px] md:text-[19px] font-extralight text-gray-800 leading-[1.57] tracking-[-0.01em] font-inter">
                                        <p className="mb-1">
                                            IOTA Seoul evolves into an intelligent office that learns and operates autonomously through an AI-driven data ecosystem. Through IoT sensors and digital twins, the building continuously collects real-time data, which the AI Agent analyzes to automatically manage energy, air quality, security, mobility, and maintenance.
                                        </p>
                                        <p>
                                            Administrators can oversee all systems through a unified Building OS, while users experience an optimally managed wellness-focused work environment. This intelligent framework enables enterprises to enhance both operational efficiency and ESG performance simultaneously.
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
