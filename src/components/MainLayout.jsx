import React from 'react';
import Section1 from './Section1';
import SectionFoster from './SectionFoster';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import SectionSkyline from './SectionSkyline';
import SectionGreen from './SectionGreen';
import SectionGreenAmenity from './SectionGreenAmenity';
import SectionNamsan from './SectionNamsan';
import SectionScale from './SectionScale';
import SectionLargePlate from './SectionLargePlate';
import SectionNextGen from './SectionNextGen';
import SectionNextGenStandard from './SectionNextGenStandard';
import SectionAIReady from './SectionAIReady';
import SectionAirQuality from './SectionAirQuality';
import SectionSmartInterface from './SectionSmartInterface';
import SectionNetZero from './SectionNetZero';
import SectionRestroom from './SectionRestroom';
import SectionElevator from './SectionElevator';
import SectionHVAC from './SectionHVAC';
import SectionDesign from './SectionDesign';
import SectionConstruction from './SectionConstruction';
import SectionHotel from './SectionHotel';
import SectionIotaOne from './SectionIotaOne';
import SectionIotaTwo from './SectionIotaTwo';

export default function MainLayout() {
    return (
        <>
            <Section1 />
            <SectionFoster />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <SectionSkyline />
            <SectionGreen />
            <SectionGreenAmenity />
            <SectionNamsan />
            <SectionScale />
            <SectionLargePlate />
            <SectionNextGen />
            <SectionNextGenStandard />
            <SectionAIReady />
            <SectionAirQuality />
            <SectionSmartInterface />
            <SectionNetZero />
            <SectionRestroom />
            <SectionElevator />
            <SectionHVAC />
            <SectionDesign />
            <SectionConstruction />
            <SectionHotel />
            <SectionIotaOne />
            <SectionIotaTwo />
            <div className="w-full bg-[#2a3134] pt-12 md:pt-24 mt-[100px] md:mt-[200px] pb-8 md:pb-12 flex flex-col items-center">
                <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto relative mb-12 md:mb-24">
                    <img src="./img/partnership.jpg" alt="Partnerships" className="w-full h-auto block" />
                </div>
                <footer className="w-full text-center text-white/50 text-[11px] md:text-[13px] font-inter font-light tracking-wide px-4 leading-[1.8]">
                    <span className="font-bold text-white/70 tracking-normal text-[12px] md:text-[14px]">IOTA SEOUL</span><br className="md:hidden" />
                    <span className="hidden md:inline"> | </span>A strategic digital vision book platform developed by IGIS Asset Management.<br />
                    <span className="text-white/30 text-[10px] md:text-[12px]">© 2026 IOTA SEOUL & IGIS Asset Management. All rights reserved.</span>
                </footer>
            </div>
        </>
    );
}
