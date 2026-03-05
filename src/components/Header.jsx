import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
    const { lang, setLang } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const switchLang = (newLang) => {
        setLang(newLang);
        setMobileMenuOpen(false);
    };

    const handleScrollTo = (e, targetId) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        if (targetId === 'top') {
            const scrollContainer = document.getElementById('scroll-container');
            if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <>
            <header id="main-header"
                className="fixed top-0 left-0 w-full bg-white text-black z-50 py-[35px] transition-transform ease-in-out"
                style={{ transform: 'translateY(-100%)' }}>
                <div className="w-full max-w-[1600px] mx-auto px-6 xl:px-0 flex justify-between items-center">
                    <a href="#"
                        onClick={(e) => handleScrollTo(e, 'top')}
                        className="text-xl font-bold tracking-normal cursor-pointer hover:opacity-80 transition-opacity">
                        IOTA Seoul
                    </a>
                    <div className="hidden md:flex items-center space-x-10">
                        <nav className="flex space-x-8 text-[16px] font-normal text-gray-800">
                            <a href="#section2" onClick={(e) => handleScrollTo(e, 'section2')} className="hover:text-gray-500 transition-colors duration-200">
                                Location
                            </a>
                            <a href="#" className="hover:text-gray-500 transition-colors duration-200">
                                Businesses
                            </a>
                            <a href="#" className="hover:text-gray-500 transition-colors duration-200">
                                Insights
                            </a>
                            <a href="#" className="hover:text-gray-500 transition-colors duration-200">
                                Careers
                            </a>
                            <a href="#" className="hover:text-gray-500 transition-colors duration-200">
                                News
                            </a>
                        </nav>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <div className="relative group text-[14px]">
                            <button className="flex items-center space-x-1 font-bold text-gray-800 hover:text-gray-500 focus:outline-none pb-2 -mb-2">
                                <span>{lang.toUpperCase()}</span>
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute right-0 mt-2 w-16 bg-white border border-gray-100 shadow-lg hidden group-hover:block py-1 z-50 rounded-sm">
                                <button className="block w-full text-left px-3 py-1 hover:bg-gray-50 text-gray-600" onClick={() => switchLang('en')}>EN</button>
                                <button className="block w-full text-left px-3 py-1 hover:bg-gray-50 text-gray-600" onClick={() => switchLang('kr')}>KR</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center space-x-4">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none">
                            <svg className="w-6 h-6 border rounded" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div id="mobile-menu"
                className={`fixed top-[90px] left-0 w-full bg-white shadow-lg flex-col py-6 space-y-4 z-40 transition-transform md:hidden text-center justify-center items-center ${mobileMenuOpen ? 'flex' : 'hidden'}`}>
                <a href="#section2" onClick={(e) => handleScrollTo(e, 'section2')} className="text-[16px] font-normal text-gray-800">Location</a>
                <a href="#" className="text-[16px] font-normal text-gray-800">Businesses</a>
                <a href="#" className="text-[16px] font-normal text-gray-800">Insights</a>
                <a href="#" className="text-[16px] font-normal text-gray-800">Careers</a>
                <a href="#" className="text-[16px] font-normal text-gray-800">News</a>
                <div className="flex space-x-6 pt-4 border-t border-gray-200 justify-center">
                    <button className="text-sm font-bold text-gray-800 hover:text-gray-500" onClick={() => switchLang('en')}>EN</button>
                    <button className="text-sm font-bold text-gray-800 hover:text-gray-500" onClick={() => switchLang('kr')}>KR</button>
                </div>
            </div>
        </>
    );
}
