import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ onNavigateToNews, onNavigateToHome, currentPage }) {
    const { lang, setLang } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const initialTransform = React.useRef((currentPage !== 'home') ? 'translateY(0)' : 'translateY(-100%)');

    const menuDataEn = [
        {
            title: "New Heart of Seoul",
            id: "section2",
            items: [
                { label: "Build with Foster + Partners", id: "section-foster" },
                { label: "Property Overview", id: "section3" },
                { label: "Brand Guidelines", id: "section4" },
                { label: "SYBD", id: "section5" },
                { label: "Green", id: "section-green" },
                { label: "Unmatched Scale", id: "section-scale" }
            ]
        },
        {
            title: "Next-Gen Workplace",
            id: "section-nextgen",
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
            id: "section-design",
            items: [
                { label: "Architectural Legends", id: "section-design" },
                { label: "Global Top-Tier Construction Company", id: "section-construction" },
                { label: "Upper Luxury Hospitality", id: "section-hotel" }
            ]
        },
        {
            title: "News",
            type: "news",
            items: [
                { label: "News & Insights", id: "news", type: "news" }
            ]
        },
        {
            title: "Lease",
            type: "alert",
            message: "Lease page coming soon!",
            items: [
                { label: "Lease Inquiry", id: "lease-alert", type: "alert", message: "Lease page coming soon!" },
                { label: "Vision Book Download", id: "vision-book", type: "download", url: "./PDF/IOTA Seoul Visionbook_compressed.pdf" }
            ]
        }
    ];

    const menuDataKr = [
        {
            title: "New Heart of Seoul",
            id: "section2",
            items: [
                { label: "포스터 앤 파트너스 설계", id: "section-foster" },
                { label: "건축 개요", id: "section3" },
                { label: "브랜드 아이덴티티", id: "section4" },
                { label: "글로벌 업무지구", id: "section5" },
                { label: "도심 속 자연", id: "section-green" },
                { label: "압도적인 스케일", id: "section-scale" }
            ]
        },
        {
            title: "Next-Gen Workplace",
            id: "section-nextgen",
            items: [
                { label: "AI 시대의 새로운 오피스 표준", id: "section-nextgen-standard" },
                { label: "AI 인프라 기반 어메니티", id: "section-aiready" },
                { label: "초정밀 공기질 관리 시스템", id: "section-airquality" },
                { label: "심리스 디지털 사용자 경험", id: "section-smartinterface" },
                { label: "넷제로 친환경 빌딩 구현", id: "section-netzero" },
                { label: "프라이버시 집중형 화장실", id: "section-restroom" },
                { label: "국내 최고 사양 엘리베이터", id: "section-elevator" },
                { label: "입주사 맞춤형 공조 시스템", id: "section-hvac" }
            ]
        },
        {
            title: "Design & Service",
            id: "section-design",
            items: [
                { label: "세계적인 건축 거장의 만남", id: "section-design" },
                { label: "글로벌 탑티어 건설사 참여", id: "section-construction" },
                { label: "최상위 럭셔리 호스피탈리티", id: "section-hotel" }
            ]
        },
        {
            title: "News",
            type: "news",
            items: [
                { label: "News & Insights", id: "news", type: "news" }
            ]
        },
        {
            title: "Lease",
            type: "alert",
            message: "준비 중인 페이지입니다.",
            items: [
                { label: "임대차 문의", id: "lease-alert", type: "alert", message: "준비 중인 페이지입니다." },
                { label: "Vision Book Download", id: "vision-book", type: "download", url: "./PDF/IOTA Seoul Visionbook_compressed.pdf" }
            ]
        }
    ];

    const currentMenuData = lang === 'kr' ? menuDataKr : menuDataEn;

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
        const header = document.getElementById('main-header');
        if (header) {
            header.style.transform = "translateY(0)";
        }
        clearTimeout(window.navigatingTimeout);
        window.navigatingTimeout = setTimeout(() => {
            window.isNavigating = false;
        }, 1500);

        if (currentPage !== 'home') {
            if (onNavigateToHome) onNavigateToHome();
            window.isNewsPage = false;
            window.isLeasePage = false;

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
                style={{ transform: initialTransform.current, width: 'calc(100vw - var(--scrollbar-width, 0px))' }}>
                <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto flex justify-between items-center transition-all duration-300">
                    <a href="#"
                        onClick={(e) => handleScrollTo(e, 'top')}
                        className="text-xl font-bold tracking-normal cursor-pointer hover:opacity-80 transition-opacity">
                        IOTA Seoul
                    </a>
                    <div className="hidden min-[1100px]:flex items-center gap-[30px]">
                        <div
                            className="flex gap-[32px] text-[16px] font-normal text-black tracking-[-0.03em] font-sans"
                            onMouseEnter={() => setIsMegaMenuOpen(true)}
                            onMouseLeave={() => { setIsMegaMenuOpen(false); setHoveredIndex(null); }}
                        >
                            {currentMenuData.map((col, idx) => (
                                <div
                                    key={idx}
                                    className="relative group/menu py-2 cursor-pointer flex items-center"
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onClick={(e) => {
                                        setIsMegaMenuOpen(false);
                                        if (col.type === 'news') {
                                            e.preventDefault();
                                            handleNewsClick(e);
                                        } else if (col.type === 'alert') {
                                            e.preventDefault();
                                            alert(col.message);
                                        } else if (col.id) {
                                            e.preventDefault();
                                            handleScrollTo(e, col.id);
                                        }
                                    }}
                                >
                                    <span className="relative pb-0 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:-bottom-[-2px] after:left-0 after:bg-black after:origin-bottom-left after:transition-transform after:duration-300 group-hover/menu:after:scale-x-100 transition-colors hover:text-black">
                                        {col.title}
                                    </span>
                                </div>
                            ))}

                            {/* Dropdown Mega Menu */}
                            <div
                                className={`absolute left-0 !ml-0 top-[100%] w-full bg-white transition-all duration-300 overflow-hidden ${isMegaMenuOpen ? 'max-h-[600px] opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t border-gray-100' : 'max-h-0 opacity-0'}`}
                                style={{ zIndex: 40 }}
                            >
                                <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto pt-10 pb-[50px] flex justify-start gap-[140px]">
                                    {currentMenuData.map((col, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col shrink-0 min-w-max"
                                            onMouseEnter={() => setHoveredIndex(idx)}
                                        >
                                            <h4
                                                className="text-[16px] xl:text-[18px] font-semibold mb-5 tracking-[-0.03em] text-black w-fit cursor-pointer"
                                                onClick={(e) => {
                                                    setIsMegaMenuOpen(false);
                                                    if (col.type === 'news') {
                                                        e.preventDefault();
                                                        handleNewsClick(e);
                                                    } else if (col.type === 'alert') {
                                                        e.preventDefault();
                                                        alert(col.message);
                                                    } else if (col.id) {
                                                        e.preventDefault();
                                                        handleScrollTo(e, col.id);
                                                    }
                                                }}
                                            >
                                                <span className={`relative pb-0 after:content-[''] after:absolute after:w-full after:h-[1.5px] after:-bottom-[-2px] after:left-0 after:bg-black after:origin-bottom-left after:transition-transform after:duration-300 ${hoveredIndex === idx ? 'after:scale-x-100' : 'after:scale-x-0'}`}>
                                                    {col.title}
                                                </span>
                                            </h4>
                                            <ul className="flex flex-col space-y-3">
                                                {col.items.map((item, itemIdx) => {
                                                    const isNews = item.type === 'news';
                                                    const isAlert = item.type === 'alert';
                                                    const isDownload = item.type === 'download';

                                                    const clickHandler = (e) => {
                                                        if (isNews) {
                                                            setIsMegaMenuOpen(false);
                                                            handleNewsClick(e);
                                                        } else if (isAlert) {
                                                            e.preventDefault();
                                                            setIsMegaMenuOpen(false);
                                                            alert(item.message);
                                                        } else if (isDownload) {
                                                            setIsMegaMenuOpen(false);
                                                        } else {
                                                            setIsMegaMenuOpen(false);
                                                            handleScrollTo(e, item.id);
                                                        }
                                                    };

                                                    return (
                                                        <li key={itemIdx}>
                                                            <a
                                                                href={isNews ? "#news" : isAlert ? "#" : isDownload ? item.url : `#${item.id}`}
                                                                target={isDownload ? "_blank" : undefined}
                                                                onClick={clickHandler}
                                                                className="text-[13px] xl:text-[15px] text-gray-700 font-light tracking-[-0.03em] group/sub inline-block w-fit"
                                                            >
                                                                <span className="relative pb-0 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:-bottom-[-1px] after:left-0 after:bg-black after:origin-bottom-left after:transition-transform after:duration-300 group-hover/sub:after:scale-x-100 group-hover/sub:text-black transition-colors">
                                                                    {item.label}
                                                                </span>
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <div className="relative group text-[14px]">
                            <button className="flex items-center space-x-1 font-bold text-gray-800 hover:text-gray-500 focus:outline-none pb-2 -mb-2 relative -top-[1px]">
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
                    {currentMenuData.map((col, idx) => (
                        <div key={idx} className="w-full mb-6">
                            <h4 className="text-[18px] font-bold text-black mb-3 border-b border-gray-100 pb-2">{col.title}</h4>
                            <div className="flex flex-col space-y-3">
                                {col.items.map((item, itemIdx) => {
                                    if (item.type === 'news') {
                                        return (
                                            <a
                                                key={itemIdx}
                                                href="#news"
                                                onClick={(e) => handleNewsClick(e)}
                                                className={`text-[15px] text-gray-600 hover:text-black hover:font-bold transition-all tracking-tight`}
                                            >
                                                {item.label}
                                            </a>
                                        );
                                    } else if (item.type === 'alert') {
                                        return (
                                            <a
                                                key={itemIdx}
                                                href="#"
                                                onClick={(e) => { e.preventDefault(); alert(item.message); setMobileMenuOpen(false); }}
                                                className={`text-[15px] text-gray-600 hover:text-black hover:font-bold transition-all tracking-tight`}
                                            >
                                                {item.label}
                                            </a>
                                        );
                                    } else if (item.type === 'download') {
                                        return (
                                            <a
                                                key={itemIdx}
                                                href={item.url}
                                                target="_blank"
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`text-[15px] text-gray-600 hover:text-black hover:font-bold transition-all tracking-tight`}
                                            >
                                                {item.label}
                                            </a>
                                        );
                                    } else {
                                        return (
                                            <a
                                                key={itemIdx}
                                                href={`#${item.id}`}
                                                onClick={(e) => handleScrollTo(e, item.id)}
                                                className={`text-[15px] text-gray-600 hover:text-black hover:font-bold transition-all tracking-tight`}
                                            >
                                                {item.label}
                                            </a>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-8 pt-6 border-t border-gray-200 justify-center">
                    <button className="text-[20px] font-bold text-gray-800 hover:text-gray-500" onClick={() => switchLang('en')}>EN</button>
                    <button className="text-[20px] font-bold text-gray-800 hover:text-gray-500" onClick={() => switchLang('kr')}>KR</button>
                </div>
            </div>
        </>
    );
}
