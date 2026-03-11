import React from 'react';

export default function Footer() {
    return (
        <div className="w-full bg-[#2a3134] pt-12 md:pt-24 mt-[100px] md:mt-[100px] pb-8 md:pb-12 flex flex-col items-center">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto relative mb-12 md:mb-24">
                <img src="./img/partnership.jpg" alt="Partnerships" className="w-full h-auto block" />
            </div>
            <footer className="w-full text-center text-white/50 text-[11px] md:text-[13px] font-inter font-light tracking-wide px-4 leading-[1.8]">
                <span className="font-bold text-white/70 tracking-normal text-[12px] md:text-[14px]">IOTA SEOUL</span><br className="md:hidden" />
                <span className="hidden md:inline"> | </span>A strategic digital vision book platform developed by IGIS Asset Management.<br />
                <span className="text-white/30 text-[10px] md:text-[12px]">© 2026 IOTA SEOUL & IGIS Asset Management. All rights reserved.</span>
            </footer>
        </div>
    );
}
