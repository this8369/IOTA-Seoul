import React from 'react';

export default function Footer({ className = "mt-[100px]", variant = "dark" }) {
    const isLight = variant === "light";
    const bgColor = isLight ? "bg-white" : "bg-[#2a3134]";
    const textColor = isLight ? "text-[#777]" : "text-white/50";
    const brandColor = isLight ? "text-[#333]" : "text-white/70";
    const copyrightColor = isLight ? "text-[#999]" : "text-white/30";

    return (
        <div className={`w-full ${bgColor} pt-8 md:pt-12 pb-8 md:pb-12 flex flex-col items-center ${className}`}>
            <footer className={`w-full text-center ${textColor} text-[12px] md:text-[14px] font-inter font-light tracking-[-0.02em] px-4 leading-[1.6]`}>
                <span className={`block font-bold ${brandColor} tracking-[-0.02em] text-[13px] md:text-[15px] mb-1`}>IOTA SEOUL</span>
                <span className="block mb-1">A strategic digital vision book platform developed by IGIS Asset Management.</span>
                <span className={`block ${copyrightColor} text-[11px] md:text-[13px]`}>© 2026 IOTA SEOUL & IGIS Asset Management. All rights reserved.</span>
            </footer>
        </div>
    );
}
