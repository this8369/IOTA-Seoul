import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ onNavigateToNews, onNavigateToHome, currentPage }) {
    const { lang, setLang } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    const menuData = [
        {
            title: "New Heart of Seoul",
            items: [
                { label: "Build with Foster + Partners", id: "section-foster" },
                { label: "Property Overview", id: "section3" },
                { label: "Brand Guidelines", id: "section4" },
                { label: "SYBD", id: "section2" },
                { label: "Green", id: "section-green" },
                { label: "Unmatched Scale", id: "section-scale" }
            ]
        },
        {
            title: "Next-Gen Workplace",
            items: [
                { label: "New Office Standard for the AI Era", id: "section-nextgen-standard" },
                { label: "AI Driven Workplace Framework", id: "section-aiready" },
                { label: "Air Quality Management", id: "section-airquality" },
                { label: "Seamless User Experience", id: "section-smartinterface" },
                { label: "Net-Zero Ready", id: "section-netzero" },
                { label: "Privacy-Focused Restroom", id: "section-restroom" },
                { label: "Korea's Largest Elevator", id: "section-elevator" },
                { label: "AI-Driven Building HVAC", id: "section-hvac" }
            ]
        },
        {
            title: "Design & Service",
            items: [
                { label: "Architectural Legends", id: "section-design" },
                { label: "Global Top-Tier Construction Company", id: "section-construction" },
                { label: "Upper Luxury Hospitality", id: "section-hotel" }
            ]
        }
    ];

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
            if (window.scrollY === 0) {
                current = '';
            }
            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        const scroller = window;
        if (scroller) {
            scroller.addEventListener('scroll', checkScroll, { passive: true });
            // Small delay to allow initial render
            setTimeout(checkScroll, 100);
            return () => scroller.removeEventListener('scroll', checkScroll);
        }
    }, [currentPage, activeSection]);

    const switchLang = (newLang) => {
        if (lang === newLang) return;

        // Visual blink effect
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'black';
        overlay.style.opacity = '0.3';
        overlay.style.zIndex = '999999';
        overlay.style.pointerEvents = 'none';
        overlay.style.transition = 'opacity 0.3s ease-out';
        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 300);
        }, 150);

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

        const isTop = targetId === 'top';
        const newUrl = isTop ? window.location.pathname : `#${targetId}`;
        const currentCheck = isTop ? window.location.pathname : window.location.hash;

        if (window.location.hash !== (isTop ? '' : `#${targetId}`)) {
            window.history.pushState(null, '', newUrl);
        }

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
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    } else if (target) {
                        target.scrollIntoView({ behavior: 'instant', block: 'start' });
                    }
                }
            }, 50);
            return;
        }

        if (targetId === 'top') {
            window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'instant', block: 'start' });
            }
        }
    };

    const handleNewsClick = (e) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const newHash = '#news';
        if (window.location.hash !== newHash) {
            window.history.pushState(null, '', newHash);
        }
        if (onNavigateToNews) onNavigateToNews();
    };

    return (
        <>
            <header id="main-header"
                className="fixed top-0 left-0 bg-white text-black z-50 py-[25px] md:py-[35px] transition-transform ease-in-out"
                style={{ transform: 'translateY(-100%)', width: 'calc(100vw - var(--scrollbar-width, 0px))' }}>
                <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex justify-between items-center transition-all duration-300">
                    <a href="#"
                        onClick={(e) => handleScrollTo(e, 'top')}
                        className="text-xl font-bold tracking-normal cursor-pointer hover:opacity-80 transition-opacity">
                        IOTA Seoul
                    </a>
                    <div className="hidden min-[1100px]:flex items-center space-x-10">
                                                <div 
                            className="flex space-x-8 text-[17px] xl:text-[19px] font-normal text-black tracking-[-0.03em] font-sans"
                            onMouseEnter={() => setIsMegaMenuOpen(true)}
                            onMouseLeave={() => setIsMegaMenuOpen(false)}
                        >
                            {menuData.map((col, idx) => (
                                <div key={idx} className="relative group/menu py-2 cursor-pointer flex items-center">
                                    <span className="hover:opacity-60 transition-opacity">{col.title}</span>
                                </div>
                            ))}
                            <div className="relative group/menu py-2 cursor-pointer flex items-center">
                                <a href="#news" onClick={handleNewsClick} className="hover:opacity-60 transition-opacity">News</a>
                            </div>
                            <div className="relative group/menu py-2 cursor-pointer flex items-center">
                                <a href="#" onClick={(e) => { e.preventDefault(); alert('Lease page coming soon!'); }} className="hover:opacity-60 transition-opacity">Lease</a>
                            </div>

                            {/* Dropdown Mega Menu */}
                            <div 
                                className={`absolute left-0 top-[100%] w-full bg-white transition-all duration-300 overflow-hidden ${isMegaMenuOpen ? 'max-h-[600px] opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t border-gray-100' : 'max-h-0 opacity-0'}`}
                                style={{ zIndex: 40 }}
                            >
                                <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto py-12 flex justify-start pl-[50px] xl:pl-[120px] gap-12 xl:gap-20">
                                    {menuData.map((col, idx) => (
                                        <div key={idx} className="flex flex-col w-[260px] xl:w-[320px]">
                                            <h4 className="text-[20px] xl:text-[22px] font-bold text-black mb-6 tracking-[-0.03em]">{col.title}</h4>
                                            <ul className="flex flex-col space-y-4">
                                                {col.items.map((item, itemIdx) => (
                                                    <li key={itemIdx}>
                                                        <a 
                                                            href={`#${item.id}`} 
                                                            onClick={(e) => {
                                                                setIsMegaMenuOpen(false);
                                                                handleScrollTo(e, item.id);
                                                            }}
                                                            className="text-[15px] xl:text-[17px] text-gray-700 hover:text-black font-light transition-all tracking-[-0.03em]"
                                                        >
                                                            {item.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
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
                    <div className="min-[1100px]:hidden flex items-center space-x-4">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none w-[40px] h-10 flex flex-col justify-center items-end gap-[8px]">
                            <span className="block w-[39px] h-[2px] bg-black"></span>
                            <span className="block w-[39px] h-[2px] bg-black"></span>
                        </button>
                    </div>
                </div>
            </header>

            <div id="mobile-menu"
                className={`fixed top-[74px] md:top-[90px] left-0 w-full bg-white shadow-lg flex-col py-6 space-y-4 z-40 transition-transform ${mobileMenuOpen ? 'flex' : 'hidden'} min-[1100px]:hidden text-center justify-center items-center`}>
                                <div className="w-full flex-col h-[70vh] overflow-y-auto px-6 py-4 hide-scrollbar flex items-start text-left">
                    {menuData.map((col, idx) => (
                        <div key={idx} className="w-full mb-6">
                            <h4 className="text-[18px] font-bold text-black mb-3 border-b border-gray-100 pb-2">{col.title}</h4>
                            <div className="flex flex-col space-y-3">
                                {col.items.map((item, itemIdx) => (
                                    <a 
                                        key={itemIdx}
                                        href={`#${item.id}`} 
                                        onClick={(e) => handleScrollTo(e, item.id)} 
                                        className={`text-[15px] text-gray-600 hover:text-black hover:font-bold transition-all tracking-tight`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="w-full mb-6 mt-4">
                        <a href="#" onClick={handleNewsClick} className={`text-[18px] font-bold text-black mb-4 block`}>News</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); alert('Lease page coming soon!'); setMobileMenuOpen(false); }} className={`text-[18px] font-bold text-black block`}>Lease</a>
                    </div>
                </div>
                <div className="flex space-x-8 pt-6 border-t border-gray-200 justify-center">
                    <button className="text-[20px] font-bold text-gray-800 hover:text-gray-500" onClick={() => switchLang('en')}>EN</button>
                    <button className="text-[20px] font-bold text-gray-800 hover:text-gray-500" onClick={() => switchLang('kr')}>KR</button>
                </div>
            </div>
        </>
    );
}
