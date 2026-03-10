import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SectionAirQuality() {
    const { lang } = useLanguage();

    return (
        <section className="section w-full h-auto bg-white pt-12 pb-[100px]" id="section-airquality">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto pt-4 md:pt-12 bs-fade-up">

                {/* Title */}
                <div className="w-full max-w-[800px] mx-auto text-left mb-10 bs-fade-up px-4 md:px-0">
                    <h2 className="text-[38px] md:text-[55px] lg:text-[64px] font-extrabold text-black tracking-[-0.03em] font-inter leading-[1.18]">
                        AI-Driven Indoor<br />Air Quality Management
                    </h2>
                </div>

                {/* Top Video Area */}
                <div className="relative w-full max-w-[800px] mx-auto mb-12 bs-fade-up delay-100 flex justify-center">
                    <video
                        src="./img/good_air.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Bottom Content Area */}
                <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center bs-fade-up delay-200">

                    {lang === 'kr' ? (
                        <div className="w-full flex flex-col items-center">
                            <h3 className="text-[24px] md:text-[28px] lg:text-[30px] font-bold text-[#1a65a4] tracking-[-0.03em] mb-3 leading-tight break-keep">
                                스마트 센싱으로 구현하는 청정하고 쾌적한 공간
                            </h3>
                            <h4 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-gray-700 tracking-[-0.01em] mb-8 font-inter">
                                Achieving Continuous Clean Air and Optimal Comfort through Real-Time Sensing
                            </h4>

                            <div className="w-full text-[17px] md:text-[19px] font-extralight text-black leading-[1.55] tracking-[-0.02em] break-keep flex flex-col items-center">
                                <p className="mb-2">
                                    IOTA Seoul은 빌딩 내 전 구역의 공기질을 상시 모니터링하고, AI 알고리즘이 온도·습도·미세먼지·유해가스 등 실내 공기질 항목을 자동 제어합니다.
                                </p>
                                <p className="mb-2">
                                    재실 시간의 <span className="font-bold">95% 이상에서 쾌적 상태를 유지</span>하며, 실시간 센서 데이터는 중앙 Building OS와 연동되어 공조 시스템을 지능 조정합니다.
                                </p>
                                <p>
                                    이를 통해 사용자는 항상 최적의 공기질 환경에서 업무 집중도와 웰빙 환경을 유지할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col items-center">
                            <h3 className="text-[24px] md:text-[28px] lg:text-[30px] font-bold text-[#1a65a4] tracking-[-0.01em] mb-8 leading-tight break-keep font-inter text-center">
                                Achieving Continuous Clean Air and Optimal Comfort through Real-Time Sensing
                            </h3>

                            <div className="w-full text-[17px] md:text-[19px] font-extralight text-gray-800 leading-[1.55] tracking-[-0.01em] font-inter flex flex-col items-center">
                                <p className="mb-2">
                                    IOTA Seoul continuously monitors air quality across all zones, with AI algorithms autonomously controlling temperature, humidity, fine dust, and harmful gases.
                                </p>
                                <p className="mb-2">
                                    The system maintains <span className="font-bold">comfort conditions for over 95% of occupancy time</span>,<br />while real-time sensor data is integrated into the central Building OS for automatic HVAC adjustments.
                                </p>
                                <p>
                                    This ensures occupants can maintain peak concentration and wellness within an optimized indoor environment.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Grid Title */}
                    <div className="w-full max-w-[800px] mx-auto flex flex-col items-center sm:flex-row sm:justify-start sm:items-baseline gap-2 mb-4 mt-16 font-inter px-4 md:px-0">
                        <h5 className="font-bold text-[14px] md:text-[16px] text-black tracking-tight leading-none text-center sm:text-left">
                            Target Indoor Air Quality Performance
                        </h5>
                        <span className="text-[11px] md:text-[12px] text-gray-500 font-normal">
                            [Maintained ≥95% of Occupied Time]
                        </span>
                    </div>

                    {/* Grid Layout (3 cols x 2 rows with 1px gap for borders) */}
                    <div className="w-full max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-gray-200">
                        {/* PM2.5 */}
                        <div className="bg-[#f0f5fa] flex flex-col items-center justify-center py-6 px-4">
                            <span className="text-[12px] text-gray-600 mb-1 font-medium font-inter">PM2.5</span>
                            <span className="text-[18px] md:text-[22px] font-bold text-black tracking-tight leading-none font-inter">≤ 15 μg/m³</span>
                        </div>
                        {/* PM10 */}
                        <div className="bg-[#f0f5fa] flex flex-col items-center justify-center py-6 px-4">
                            <span className="text-[12px] text-gray-600 mb-1 font-medium font-inter">PM10</span>
                            <span className="text-[18px] md:text-[22px] font-bold text-black tracking-tight leading-none font-inter">≤ 30 μg/m³</span>
                        </div>
                        {/* TVOC */}
                        <div className="bg-[#f0f5fa] flex flex-col items-center justify-center py-6 px-4">
                            <span className="text-[12px] text-gray-600 mb-1 font-medium font-inter">TVOC</span>
                            <span className="text-[18px] md:text-[22px] font-bold text-black tracking-tight leading-none font-inter">≤ 300 μg/m³</span>
                        </div>
                        {/* CO */}
                        <div className="bg-[#f0f5fa] flex flex-col items-center justify-center py-6 px-4">
                            <span className="text-[12px] text-gray-600 mb-1 font-medium font-inter">CO</span>
                            <span className="text-[18px] md:text-[22px] font-bold text-black tracking-tight leading-none font-inter">≤ 6 ppm</span>
                        </div>
                        {/* O3 */}
                        <div className="bg-[#f0f5fa] flex flex-col items-center justify-center py-6 px-4">
                            <span className="text-[12px] text-gray-600 mb-1 font-medium font-inter">O<sub className="text-[10px]">3</sub></span>
                            <span className="text-[18px] md:text-[22px] font-bold text-black tracking-tight leading-none font-inter">≤ 80 μg/m³</span>
                        </div>
                        {/* NO2 */}
                        <div className="bg-[#f0f5fa] flex flex-col items-center justify-center py-6 px-4">
                            <span className="text-[12px] text-gray-600 mb-1 font-medium font-inter">NO<sub className="text-[10px]">2</sub></span>
                            <span className="text-[18px] md:text-[22px] font-bold text-black tracking-tight leading-none font-inter">≤ 30 μg/m³</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
