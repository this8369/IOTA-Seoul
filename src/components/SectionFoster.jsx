import React, { useState } from 'react';

export default function SectionFoster() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="section w-full h-auto bg-black text-white pt-[100px] md:pt-[150px] pb-[150px] md:pb-[200px]" id="section-foster">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex flex-col">

                {/* Titles and Descriptions in one row on lg size */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12 bs-fade-up">
                    <div className="flex flex-col shrink-0">
                        <h2 className="text-[31px] md:text-[54px] lg:text-[67px] font-bold leading-[1.1] font-inter tracking-[-0.03em]">
                            Build with
                        </h2>
                        <h2 className="text-[31px] md:text-[54px] lg:text-[67px] font-bold leading-[1.1] font-inter tracking-[-0.03em] lg:ml-24">
                            Foster + Partners
                        </h2>
                    </div>

                    {/* Description Texts moved to the right with adjusted size and width */}
                    <div className="mt-8 lg:mt-0 text-[17px] md:text-[19px] font-light text-gray-300 leading-[1.6] space-y-4 lg:max-w-[676px] xl:max-w-[772px] bs-fade-up delay-200 break-keep">
                        <p className="kr-target-text transition-all duration-300"
                            data-en="Designs have been revealed for IOTA Seoul I, a mixed-use development on a landmark site between Seoul Station and Namsan, a 270-metre-high peak in Jung-Gu.<br/>Historically, the site acted as an important gateway to Seoul when arriving by train."
                            data-kr="IOTA 서울 I은 서울역과 남산 사이의 상징적인 부지에 조성되는 대규모 복합개발 프로젝트입니다. 이 부지는 과거 철도를 통해 서울로 진입하는 관문이었던 역사적 장소로, 도시의 중요한 축을 형성해 왔습니다.">
                            Designs have been revealed for IOTA Seoul I, a mixed-use development on a landmark site between Seoul Station and Namsan, a 270-metre-high peak in Jung-Gu.<br />Historically, the site acted as an important gateway to Seoul when arriving by train.
                        </p>
                        <p className="kr-target-text transition-all duration-300"
                            data-en="The project creates a green oasis in the heart of the city – and restores the area's historic connection with Namsan and its surrounding public park."
                            data-kr="프로젝트는 도심 속 녹지 오아시스를 조성하고 남산과 공원으로 이어지는 자연과 도시의 연결성을 회복함으로써, 서울의 역사성과 미래 비전을 함께 담아내는 새로운 도시 랜드마크를 제시합니다.">
                            The project creates a green oasis in the heart of the city – and restores the area's historic connection with Namsan and its surrounding public park.
                        </p>
                    </div>
                </div>

            </div>

            {/* Video Container (Full width on mobile) */}
            <div className="w-full md:w-[calc(100%-100px)] max-w-[1600px] mx-auto aspect-video relative bg-gray-900 group cursor-pointer overflow-hidden bs-fade-up delay-400" onClick={() => setIsPlaying(true)}>
                {!isPlaying ? (
                    <>
                        {/* We use the custom thumbnail image requested by user */}
                        <img
                            src="./img/foster+partners.jpg"
                            alt="Foster + Partners Video"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            fetchPriority="high"
                            loading="eager"
                        />
                        {/* Overlay play button */}
                        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-14 h-14 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                            <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] md:border-t-[14px] md:border-b-[14px] md:border-l-[22px] border-t-transparent border-b-transparent border-l-black ml-1 md:ml-2"></div>
                        </div>
                    </>
                ) : (
                    <iframe
                        className="w-full h-full absolute top-0 left-0"
                        src="https://www.youtube.com/embed/vuxdaHaYbtY?autoplay=1"
                        title="Foster + Partners YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                )}
            </div>

        </section>
    );
}
