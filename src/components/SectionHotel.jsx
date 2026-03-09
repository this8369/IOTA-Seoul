import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SectionHotel() {
    const { lang } = useLanguage();

    return (
        <section className="section w-full h-auto bg-white pt-[100px] md:pt-[150px] pb-[100px] md:pb-[150px]" id="section-hotel">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto">
                <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-8 md:gap-0">
                    <div className="flex-1 w-full max-w-[1100px] bs-fade-up">
                        <h2 className="text-[32px] md:text-[46px] font-serif font-medium text-black tracking-[-0.01em] leading-tight mb-8 break-keep">
                            Ultra-Luxury Hospitality Meets the Workplace
                        </h2>

                        {lang === 'kr' ? (
                            <>
                                <h3 className="text-[17px] md:text-[20px] font-bold text-[#8a5d4a] tracking-[-0.01em] mb-1 break-keep">
                                    세계에서 가장 럭셔리한 호텔 브랜드 '리츠칼튼 서울' 입점
                                </h3>
                                <p className="text-[14px] md:text-[16px] font-bold text-black tracking-[-0.01em] mb-8 font-inter break-keep">
                                    Grand Opening is IOTA : The Ritz-Carlton - where World-Class Luxury Arrives
                                </p>
                                <div className="text-[13px] md:text-[15px] xl:text-[17px] font-extralight text-black leading-[1.8] tracking-[-0.02em] break-keep">
                                    <p className="mb-5">
                                        이오타서울 오피스 입주사와 임직원들은 호텔 컨시어지 서비스를 기반으로 웰니스 라운지, 프라이빗 비즈니스 라운지, 예약형 회의실, 리프레시 공간 등<br className="hidden xl:block" />리츠칼튼의 서비스 노하우가 녹아든 어메니티를 일상적으로 누리게 됩니다.
                                    </p>
                                    <p className="font-inter text-[13px] xl:text-[15px]">
                                        Tenants and their employees will enjoy daily access to amenities infused with The Ritz-Carlton's signature service philosophy—including hotel-style concierge services,<br className="hidden xl:block" />a wellness lounge, private business lounges, reservable meeting rooms, and refresh zones.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-[17px] md:text-[20px] font-bold text-[#8a5d4a] tracking-[-0.01em] mb-1 break-keep font-inter">
                                    Grand Opening is IOTA : The Ritz-Carlton - where World-Class Luxury Arrives
                                </h3>
                                <p className="text-[14px] md:text-[16px] font-bold text-black tracking-[-0.01em] mb-8 font-inter break-keep">
                                    The World's Most Luxurious Hotel Brand 'The Ritz-Carlton Seoul'
                                </p>
                                <div className="text-[13px] md:text-[15px] xl:text-[16px] font-extralight text-black leading-[1.8] tracking-[-0.01em] break-keep font-inter">
                                    <p className="mb-5">
                                        Tenants and their employees will enjoy daily access to amenities infused with The Ritz-Carlton's signature service philosophy—including hotel-style concierge services,<br className="hidden xl:block" />a wellness lounge, private business lounges, reservable meeting rooms, and refresh zones.
                                    </p>
                                    <p className="font-sans text-[13px] xl:text-[15px]">
                                        이오타서울 오피스 입주사와 임직원들은 호텔 컨시어지 서비스를 기반으로 웰니스 라운지, 프라이빗 비즈니스 라운지, 예약형 회의실, 리프레시 공간 등<br className="hidden xl:block" />리츠칼튼의 서비스 노하우가 녹아든 어메니티를 일상적으로 누리게 됩니다.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Logo Area */}
                    <div className="w-full md:w-auto flex justify-end bs-fade-up delay-200">
                        <img src="./img/logo_ritzcarlton.png" alt="The Ritz-Carlton Logo" className="w-[120px] md:w-[160px] object-contain" />
                    </div>
                </div>

                {/* Main Image Area */}
                <div className="w-full relative overflow-hidden group bs-fade-up delay-300">
                    <img
                        src="./img/ritzcarlton01.jpg"
                        alt="The Ritz-Carlton Residence"
                        className="w-full h-auto object-cover block transform transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-4 md:bottom-4 md:right-4 z-10 text-[6px] md:text-[10px] text-white/90 font-inter tracking-[0.1em] text-right font-extralight drop-shadow-md">
                        THE RITZ-CARLTON RESIDENCES SOUTH BEACH_MIAMI
                    </div>
                </div>
            </div>
        </section>
    );
}
