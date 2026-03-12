import React from 'react';

export default function Footer({ className = "mt-[100px]" }) {
    return (
        <div className={`w-full bg-[#2a3134] pt-8 md:pt-12 pb-8 md:pb-12 flex flex-col items-center ${className}`}>
            <footer className="w-full text-center text-white/50 text-[12px] md:text-[14px] font-inter font-light tracking-[-0.02em] px-4 leading-[1.8]">
                <span className="font-bold text-white/70 tracking-[-0.02em] text-[13px] md:text-[15px]">IOTA SEOUL</span><br className="md:hidden" />
                <span className="hidden md:inline"> | </span>A strategic digital vision book platform developed by IGIS Asset Management.<br />
                <span className="text-white/30 text-[11px] md:text-[13px]">© 2026 IOTA SEOUL & IGIS Asset Management. All rights reserved.</span>
            </footer>
        </div>
    );
}
