import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ onNavigateToNews, onNavigateToHome, currentPage }) {
    const { lang, setLang } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    React.useEffect(() => {
        if (currentPage !== 'home') {
            setActiveSection('news');
            return;
        }

        const checkScroll = () => {
            const sections = ['section2', 'section-green', 'section-scale', 'section-nextgen', 'section-design', 'section-hotel', 'section-iotaone', 'section-iotatwo'];
            const scrollContainer = document.getElementById('scroll-container');
            if (!scrollContainer) return;

            let current = '';
            for (let id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // If element top is above the middle of screen, it's active
                    if (rect.top <= window.innerHeight * 0.4) {
                        current = id;
                    }
                }
            }
            if (scrollContainer.scrollTop === 0) {
                current = '';
            }
            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        const scroller = document.getElementById('scroll-container');
        if (scroller) {
            scroller.addEventListener('scroll', checkScroll, { passive: true });
            // Small delay to allow initial render
            setTimeout(checkScroll, 100);
            return () => scroller.removeEventListener('scroll', checkScroll);
        }
    }, [currentPage, activeSection]);

    const switchLang = (newLang) => {
        setLang(newLang);
        setMobileMenuOpen(false);
        // Keep header during programmatic language switch
        window.isNavigating = true;
        clearTimeout(window.navigatingTimeout);
        window.navigatingTimeout = setTimeout(() => {
            window.isNavigating = false;
        }, 1500);
    };

    const handleScrollTo = (e, targetId) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        // Keep header during programmatic scroll
        window.isNavigating = true;
        clearTimeout(window.navigatingTimeout);
        window.navigatingTimeout = setTimeout(() => {
            window.isNavigating = false;
        }, 1500);

        if (currentPage !== 'home') {
            if (onNavigateToHome) onNavigateToHome();

            // Wait for DOM to render the home page sections before scrolling
            let checkCount = 0;
            const checkInterval = setInterval(() => {
                const target = document.getElementById(targetId === 'top' ? 'scroll-container' : targetId);
                checkCount++;

                if (target || checkCount > 50) {
                    clearInterval(checkInterval);
                    if (targetId === 'top') {
                        const scrollContainer = document.getElementById('scroll-container');
                        if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: 'auto' });
                        else window.scrollTo({ top: 0, behavior: 'auto' });
                    } else if (target) {
                        target.scrollIntoView({ behavior: 'auto', block: 'start' });
                    }
                }
            }, 50);
            return;
        }

        if (targetId === 'top') {
            const scrollContainer = document.getElementById('scroll-container');
            if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: 'auto' });
            else window.scrollTo({ top: 0, behavior: 'auto' });
        } else {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
        }
    };

    const handleNewsClick = (e) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        if (onNavigateToNews) onNavigateToNews();
    };

    return (
        <>
            <header id="main-header"
                className="fixed top-0 left-0 bg-white text-black z-50 py-[35px] transition-transform ease-in-out"
                style={{ transform: 'translateY(-100%)', width: 'calc(100vw - var(--scrollbar-width, 0px))' }}>
                <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex justify-between items-center transition-all duration-300">
                    <a href="#"
                        onClick={(e) => handleScrollTo(e, 'top')}
                        className="text-xl font-bold tracking-normal cursor-pointer hover:opacity-80 transition-opacity">
                        IOTA Seoul
                    </a>
                    <div className="hidden md:flex items-center space-x-10">
                        <nav className="flex space-x-8 text-[16px] font-normal text-gray-800">
                            <a href="#section2" onClick={(e) => handleScrollTo(e, 'section2')} className={`${activeSection === 'section2' ? 'text-black font-bold' : 'hover:text-gray-500'} transition-colors duration-200`}>
                                Location
                            </a>
                            <a href="#section-green" onClick={(e) => handleScrollTo(e, 'section-green')} className={`${activeSection === 'section-green' ? 'text-black font-bold' : 'hover:text-gray-500'} transition-colors duration-200`}>
                                Green
                            </a>
                            <a href="#section-scale" onClick={(e) => handleScrollTo(e, 'section-scale')} className={`${activeSection === 'section-scale' ? 'text-black font-bold' : 'hover:text-gray-500'} transition-colors duration-200`}>
                                Scale
                            </a>
                            <a href="#section-nextgen" onClick={(e) => handleScrollTo(e, 'section-nextgen')} className={`${activeSection === 'section-nextgen' ? 'text-black font-bold' : 'hover:text-gray-500'} transition-colors duration-200`}>
                                Next-Gen
                            </a>
                            <a href="#section-design" onClick={(e) => handleScrollTo(e, 'section-design')} className={`${activeSection === 'section-design' ? 'text-black font-bold' : 'hover:text-gray-500'} transition-colors duration-200`}>
                                Design
                            </a>
                            <a href="#section-hotel" onClick={(e) => handleScrollTo(e, 'section-hotel')} className={`${activeSection === 'section-hotel' ? 'text-black font-bold' : 'hover:text-gray-500'} transition-colors duration-200`}>
                                Ritz-Carlton
                            </a>
                            <a href="#section-iotaone" onClick={(e) => handleScrollTo(e, 'section-iotaone')} className={`${activeSection === 'section-iotaone' ? 'text-black font-bold' : 'hover:text-gray-500'} transition-colors duration-200`}>
                                IOTA One
                            </a>
                            <a href="#section-iotatwo" onClick={(e) => handleScrollTo(e, 'section-iotatwo')} className={`${activeSection === 'section-iotatwo' ? 'text-black font-bold' : 'hover:text-gray-500'} transition-colors duration-200`}>
                                IOTA Two
                            </a>
                            <a href="#" onClick={handleNewsClick} className={`${activeSection === 'news' ? 'text-black font-bold' : 'hover:text-gray-500'} transition-colors duration-200`}>
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
                <a href="#section2" onClick={(e) => handleScrollTo(e, 'section2')} className={`text-[16px] text-gray-800 ${activeSection === 'section2' ? 'font-bold' : 'font-normal'}`}>Location</a>
                <a href="#section-green" onClick={(e) => handleScrollTo(e, 'section-green')} className={`text-[16px] text-gray-800 ${activeSection === 'section-green' ? 'font-bold' : 'font-normal'}`}>Green</a>
                <a href="#section-scale" onClick={(e) => handleScrollTo(e, 'section-scale')} className={`text-[16px] text-gray-800 ${activeSection === 'section-scale' ? 'font-bold' : 'font-normal'}`}>Scale</a>
                <a href="#section-nextgen" onClick={(e) => handleScrollTo(e, 'section-nextgen')} className={`text-[16px] text-gray-800 ${activeSection === 'section-nextgen' ? 'font-bold' : 'font-normal'}`}>Next-Gen</a>
                <a href="#section-design" onClick={(e) => handleScrollTo(e, 'section-design')} className={`text-[16px] text-gray-800 ${activeSection === 'section-design' ? 'font-bold' : 'font-normal'}`}>Design</a>
                <a href="#section-hotel" onClick={(e) => handleScrollTo(e, 'section-hotel')} className={`text-[16px] text-gray-800 ${activeSection === 'section-hotel' ? 'font-bold' : 'font-normal'}`}>Ritz-Carlton</a>
                <a href="#section-iotaone" onClick={(e) => handleScrollTo(e, 'section-iotaone')} className={`text-[16px] text-gray-800 ${activeSection === 'section-iotaone' ? 'font-bold' : 'font-normal'}`}>IOTA One</a>
                <a href="#section-iotatwo" onClick={(e) => handleScrollTo(e, 'section-iotatwo')} className={`text-[16px] text-gray-800 ${activeSection === 'section-iotatwo' ? 'font-bold' : 'font-normal'}`}>IOTA Two</a>
                <a href="#" onClick={handleNewsClick} className={`text-[16px] text-gray-800 ${activeSection === 'news' ? 'font-bold' : 'font-normal'}`}>News</a>
                <div className="flex space-x-6 pt-4 border-t border-gray-200 justify-center">
                    <button className="text-sm font-bold text-gray-800 hover:text-gray-500" onClick={() => switchLang('en')}>EN</button>
                    <button className="text-sm font-bold text-gray-800 hover:text-gray-500" onClick={() => switchLang('kr')}>KR</button>
                </div>
            </div>
        </>
    );
}
