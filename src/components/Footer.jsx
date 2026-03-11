import React from 'react';

export default function Footer() {
    return (
        <div className="w-full bg-white pt-12 md:pt-16 pb-8 md:pb-12 mt-[100px] flex flex-col items-center">
            <footer className="w-full text-center text-[#777] text-[13px] font-inter font-light tracking-wide px-4 leading-[1.8]">
                <span className="block font-bold text-[#333] tracking-normal mb-1">IOTA SEOUL</span>
                <span className="block">A strategic digital vision book platform developed by IGIS Asset Management.</span>
                <span className="block mt-1">© 2026 IOTA SEOUL & IGIS Asset Management. All rights reserved.</span>
            </footer>
        </div>
    );
}
