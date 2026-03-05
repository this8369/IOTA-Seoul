import { useEffect } from 'react';

export function useAnimations() {
    useEffect(() => {
        const header = document.getElementById("main-header");
        const scrollContainer = document.getElementById("scroll-container");
        const scrollArrow = document.getElementById("scroll-arrow");
        let lastScrollTop = 0;

        if (scrollArrow) {
            setTimeout(() => {
                scrollArrow.classList.remove('opacity-0');
            }, 2000);
        }

        const handleScroll = () => {
            if (!scrollContainer || !header) return;
            let st = scrollContainer.scrollTop;

            // Header visibility
            if (st <= 50) {
                header.style.transform = "translateY(-100%)";
                header.style.transitionDuration = "200ms";
            } else {
                if (st < lastScrollTop) {
                    header.style.transform = "translateY(0)";
                    header.style.transitionDuration = "500ms";
                } else if (st > lastScrollTop) {
                    header.style.transform = "translateY(-100%)";
                    header.style.transitionDuration = "200ms";
                }
            }
            lastScrollTop = st;

            // Reliable Scroll Tracking for SYBD
            const sArea = document.getElementById('sybd-scroll-area');
            const step1 = document.getElementById('sybd-step-1');
            const step2 = document.getElementById('sybd-step-2');
            const img3 = document.getElementById('sybd-img-3');
            const img4 = document.getElementById('sybd-img-4');

            if (sArea) {
                const rect = sArea.getBoundingClientRect();
                if (rect.top < - (window.innerHeight * 0.5)) {
                    if (step1 && !step1.classList.contains('up-out')) {
                        step1.classList.remove('active');
                        step1.classList.add('up-out');
                    }
                    if (step2 && !step2.classList.contains('active')) {
                        step2.classList.remove('down-in');
                        step2.classList.add('active');
                        step2.style.pointerEvents = 'auto';
                    }
                    if (img4) img4.style.opacity = '1';
                    if (img3) img3.style.opacity = '0';
                } else {
                    if (step1 && !step1.classList.contains('active')) {
                        step1.classList.remove('up-out');
                        step1.classList.add('active');
                    }
                    if (step2 && !step2.classList.contains('down-in')) {
                        step2.classList.remove('active');
                        step2.classList.add('down-in');
                        step2.style.pointerEvents = 'none';
                    }
                    if (img4) img4.style.opacity = '0';
                    if (img3) img3.style.opacity = '1';
                }
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });

        const targets = document.querySelectorAll("#section3, #section4, #section6, .bs-fade-up, .bs-draw-line, .curtain-container, .bs-scale-up, .bs-slide-left");
        targets.forEach(el => observer.observe(el));

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
            observer.disconnect();
        };
    }, []);
}
