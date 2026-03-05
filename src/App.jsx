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
    </div>
  );
}
