import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SectionDesign() {
    const { lang } = useLanguage();

    return (
        <section className="section w-full h-auto bg-black pt-[80px] md:pt-[120px] pb-0" id="section-design">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col items-center pt-12 bs-fade-up">

                {/* TEXT AREA */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-[52px] md:text-[70px] lg:text-[80px] font-extrabold text-[#e2d5c3] tracking-wider leading-[1.1] font-inter mb-4 mt-[400px]">
                        DESIGNED BY THE<br />WORLD'S FINEST EXPERT
                    </h2>

                    {lang === 'kr' && (
                        <p className="text-[15px] md:text-[18px] text-stone-300 font-medium tracking-tight break-keep">
                            세계 최고의 설계 철학과 시공 기술력
                        </p>
                    )}
                </div>

                {/* IMAGE AREA */}
                <div className="w-full max-w-[600px] mx-auto flex items-center justify-center bs-fade-up delay-200">
                    <img
                        src="./img/NormanFoster.jpg"
                        alt="Norman Foster"
                        className="w-full h-auto object-contain shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
}
