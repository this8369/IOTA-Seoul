import React from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import SectionFoster from './components/SectionFoster';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import SectionSkyline from './components/SectionSkyline';
import SectionGreen from './components/SectionGreen';
import SectionGreenAmenity from './components/SectionGreenAmenity';
import SectionNamsan from './components/SectionNamsan';
import SectionScale from './components/SectionScale';
import SectionLargePlate from './components/SectionLargePlate';
import SectionNextGen from './components/SectionNextGen';
import SectionNextGenStandard from './components/SectionNextGenStandard';
import SectionAIReady from './components/SectionAIReady';
import SectionAirQuality from './components/SectionAirQuality';
import SectionSmartInterface from './components/SectionSmartInterface';
import SectionNetZero from './components/SectionNetZero';
import SectionRestroom from './components/SectionRestroom';
import SectionElevator from './components/SectionElevator';
import SectionHVAC from './components/SectionHVAC';
import SectionDesign from './components/SectionDesign';
import SectionConstruction from './components/SectionConstruction';
import SectionHotel from './components/SectionHotel';
import SectionIotaOne from './components/SectionIotaOne';
import SectionIotaTwo from './components/SectionIotaTwo';
import { useAnimations } from './hooks/useAnimations';

export default function App() {
  useAnimations();

  return (
    <div className="scroll-container font-sans" id="scroll-container">
      <Header />
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
      <div className="w-full bg-[#2a3134] pt-12 md:pt-24 mt-[200px] pb-8 md:pb-12 flex flex-col items-center">
        <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto relative mb-12 md:mb-24">
          <img src="./img/partnership.jpg" alt="Partnerships" className="w-full h-auto block" />
        </div>
        <footer className="w-full text-center text-white/50 text-[11px] md:text-[13px] font-inter font-light tracking-wide px-4">
          Copyright © IGIS Asset Management. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
