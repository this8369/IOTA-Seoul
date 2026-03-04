import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Make the step 2 container pointer-events-none and absolute by default so it doesn't push down layout
# We already did replace but need to make sure the scroll trigger covers the background
html = html.replace('<!-- SCROLL TRIGGER -->', '')
html = html.replace('<div id="sybd-trigger"', '<!-- OLD TRIGGER -->\n<div id="sybd-trigger"')

new_css_style = """
    <style>
        .sybd-step {
            transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .sybd-step.up-out {
            transform: translateY(-80px);
            opacity: 0;
            pointer-events: none;
        }
        .sybd-step.down-in {
            transform: translateY(80px);
            opacity: 0;
            pointer-events: none;
        }
        .sybd-step.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
        }
    </style>
"""

if '<style>' not in html:
    html = html.replace('</head>', new_css_style + '\n</head>')

# Re-write the SYBD HTML block to clearly use CSS classes for toggling
s5_pattern = r'(<!-- SECTION 5 \(SYBD\) -->\s*<section class="w-full bg-white text-black relative" id="section5">)(.*?)(</section>)'
match = re.search(s5_pattern, html, re.DOTALL)

if match:
    old_s5 = match.group(2)
    s1_start = old_s5.find('<div\n                        class="w-full lg:w-[50%]')
    if s1_start == -1: s1_start = old_s5.find('<div id="sybd-step-1" class="absolute top-0 left-0 w-full h-full')

    step1_inner = """
                            <div class="font-bold text-[20px] md:text-[22px] text-gray-800 mb-2 font-inter tracking-tight">
                                New Economy Cluster</div>
                            <h2 class="text-[40px] md:text-[60px] lg:text-[84px] font-extrabold leading-none mb-10 text-black tracking-[-0.02em] font-inter">
                                SYBD <span class="text-[11px] md:text-[13px] font-normal text-gray-500 align-middle tracking-normal">*Seoul Yongsan Business District</span>
                            </h2>
                            <div class="mb-4">
                                <h3 class="text-[18px] md:text-[22px] font-bold text-[#3B7062] tracking-[-0.02em]"
                                    data-kr="글로벌 인재, 혁신 기업을 위한 새로운 업무 지구로의 부상"
                                    data-en="Becoming the New Business District for Global Talent and Innovative Companies">
                                    글로벌 인재, 혁신 기업을 위한 새로운 업무 지구로의 부상
                                </h3>
                                <div class="text-[14px] md:text-[16px] text-black mt-[10px] font-inter font-bold tracking-tight">
                                    Seoul's Next Global Business Hub</div>
                            </div>
                            <div class="text-[13px] md:text-[15px] text-black leading-relaxed tracking-[-0.02em] space-y-4 mb-10 font-normal kr-target-text">
                                <p class="kr-target-text transition-all duration-300"
                                    data-kr="서울역과 용산역을 잇는 교통의 결절지인 SYBD는 뉴욕의 그랜드 센트럴에서 허드슨 야드를 아우르는 글로벌 업무지구와 같이 서울의 차기 글로벌 비즈니스 허브로 도약할 것입니다."
                                    data-en="Connecting Seoul Station and Yongsan Station, SYBD (Seoul Yongsan Business District) is becoming the most desired retail and office locations within the city. Just as Hudson Yards extends from Grand Central Terminal in New York to form a world-class business cluster, SYBD is poised to become Seoul's next-generation global business hub, seamlessly integrating transit, commerce, and innovation.">
                                    서울역과 용산역을 잇는 교통의 결절지인 SYBD는 뉴욕의 그랜드 센트럴에서 허드슨 야드를 아우르는 글로벌 업무지구와 같이 서울의 차기 글로벌 비즈니스 허브로 도약할 것입니다.
                                </p>
                            </div>
                            <!-- Chart Comparison -->
                            <div class="w-full h-[280px] md:h-[340px] flex font-inter text-[11px] md:text-[12px] font-medium text-black tracking-tight justify-between items-stretch relative mt-4 mb-[70px] lg:mb-0">
                                <!-- Manhattan -->
                                <div class="w-[48%] flex flex-col items-center h-full">
                                    <div class="mb-3 text-[14px] md:text-[16px]">Manhattan</div>
                                    <div class="bg-[#2B3531] text-white px-2 py-2 w-full text-center tracking-normal">Grand Central Station</div>
                                    <div class="w-px bg-black relative flex-[2] min-h-[40px] my-1">
                                        <div class="absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-black animate-arrow-top"></div>
                                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 whitespace-nowrap text-center leading-[1.2] isolate before:absolute before:inset-0 before:bg-white before:opacity-80 before:-z-10 rounded">
                                            3km<br><span class="font-normal text-[10px]">(10,000 feet)</span>
                                        </div>
                                    </div>
                                    <div class="bg-[#3A4A41] text-white px-2 py-2 w-full text-center tracking-normal">Penn Station</div>
                                    <div class="w-px bg-black relative flex-[1] min-h-[20px] my-1">
                                        <div class="absolute -bottom-[1px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-black animate-arrow-bottom"></div>
                                    </div>
                                    <div class="bg-[#2B3531] text-white px-2 py-2 w-full text-center tracking-normal mt-auto shrink-0">Hudson Yards Station</div>
                                </div>
                                <!-- Seoul -->
                                <div class="w-[48%] flex flex-col items-center h-full">
                                    <div class="mb-3 text-[14px] md:text-[16px]">Seoul</div>
                                    <div class="bg-[#2B3531] text-white px-2 py-2 w-full text-center tracking-normal">Seoul Station</div>
                                    <div class="w-px bg-black relative flex-[3] min-h-[80px] my-1">
                                        <div class="absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-black animate-arrow-top"></div>
                                        <div class="absolute -bottom-[1px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-black animate-arrow-bottom"></div>
                                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 whitespace-nowrap text-center leading-[1.2] isolate before:absolute before:inset-0 before:bg-white before:opacity-80 before:-z-10 rounded">
                                            2.7km<br><span class="font-normal text-[10px]">(9,000 feet)</span>
                                        </div>
                                    </div>
                                    <div class="bg-[#2B3531] text-white px-2 py-2 w-full text-center tracking-normal mt-auto shrink-0">Yongsan Station</div>
                                </div>
                            </div>
    """

    step2_inner = """
                            <div class="font-bold text-[20px] md:text-[22px] text-gray-800 mb-2 font-inter tracking-tight" data-kr="Unrivaled Accessibility" data-en="Unrivaled Accessibility">
                                Unrivaled Accessibility</div>
                            <h2 class="text-[40px] md:text-[50px] lg:text-[60px] font-extrabold leading-tight mb-2 text-black tracking-[-0.02em] font-inter mt-4">
                                Korea's Central Station<br>and Mega Transport Hub
                            </h2>
                            <div class="mb-4 mt-6">
                                <h3 class="text-[18px] md:text-[22px] font-bold text-[#3B7062] tracking-[-0.02em] leading-snug"
                                    data-kr="국가중앙역 + 광역교통 중심지의 독보적 접근성 제공<br><span class='text-black font-semibold text-[16px] md:text-[18px]'>The Nation's Ultimate Transit Hub - Unmatched, Unrivaled</span>"
                                    data-en="The Nation's Ultimate Transit Hub - Unmatched, Unrivaled<br><span class='text-black font-semibold text-[16px] md:text-[18px]'>국가중앙역 + 광역교통 중심지의 독보적 접근성 제공</span>">
                                    국가중앙역 + 광역교통 중심지의 독보적 접근성 제공<br>
                                    <span class="text-black font-semibold text-[16px] md:text-[18px]">The Nation's Ultimate Transit Hub - Unmatched, Unrivaled</span>
                                </h3>
                            </div>
                            <div class="text-[14px] md:text-[15px] font-medium text-black leading-relaxed tracking-[-0.02em] space-y-4 mb-8">
                                <p class="kr-target-text transition-all duration-300"
                                    data-kr="서울역은 총 11개 노선을 보유한 명실상부한 교통의 중심지로 인근에 위치한 용산역과 함께 우수한 광역 교통 인프라를 형성합니다.<br>또한, GTX-A/B, 신분당선 개발로 수도권 동남부 권역(강남-분당-판교 인근)으로부터 30분 내 접근이 가능하며<br>인천공항, 김포공항 까지 직접 연결되어 글로벌 혁신기업을 위한 최적의 입지 조건을 갖추고 있습니다."
                                    data-en="Seoul Station is Korea's foremost transportation hub, directly connected to 11 transit lines, including KTX, airport rail, and multiple metro routes. Together with nearby Yongsan Station, it forms an exceptional multimodal infrastructure at the center of the capital. With the addition of GTX-A/B and the Shinbundang Line, the site offers 30-minute access to key southeastern districts such as Gangnam, Bundang, and Pangyo. It also enables direct connections to both Incheon and Gimpo International Airports, making it an ideal location for global innovation-driven enterprises.">
                                    서울역은 총 11개 노선을 보유한 명실상부한 교통의 중심지로 인근에 위치한 용산역과 함께 우수한 광역 교통 인프라를 형성합니다.<br>
                                    또한, GTX-A/B, 신분당선 개발로 수도권 동남부 권역(강남-분당-판교 인근)으로부터 30분 내 접근이 가능하며<br>
                                    인천공항, 김포공항 까지 직접 연결되어 글로벌 혁신기업을 위한 최적의 입지 조건을 갖추고 있습니다.
                                </p>
                            </div>
                            <div class="w-full flex flex-col gap-2 mt-2">
                                <img src="img/airport.png" alt="Airports" class="w-full h-auto object-contain">
                                <div class="w-full flex gap-4">
                                    <div class="w-1/2 text-[12px] md:text-[14px] text-black font-medium tracking-tight">approx. 43 minutes.</div>
                                    <div class="w-1/2 text-[12px] md:text-[14px] text-black font-medium tracking-tight">approx. 22 minutes.</div>
                                </div>
                            </div>
    """

    new_s5_full = f"""
            <!-- Container spanning 200vh to allow scroll room for the effect -->
            <div class="w-full relative h-[200vh]" id="sybd-scroll-area">
                
                <!-- STICKY BLOCK -->
                <div class="w-full h-[100vh] sticky top-0 left-0 overflow-hidden bg-white">
                    
                    <!-- LEFT TEXT PANELS -->
                    <div class="absolute top-0 left-0 w-full h-full lg:w-[50%] z-20 overflow-hidden pointer-events-none">
                    
                        <!-- STEP 1 (Starts active, goes UP to disappear) -->
                        <div id="sybd-step-1" class="sybd-step active absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 md:px-[60px] lg:px-[180px] bg-white lg:bg-transparent">
{step1_inner}
                        </div>
                        
                        <!-- STEP 2 (Starts down invisibly, comes UP to appear) -->
                        <div id="sybd-step-2" class="sybd-step down-in absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 md:px-[60px] lg:px-[180px] bg-white lg:bg-transparent">
{step2_inner}
                        </div>
                        
                    </div>
                    
                    <!-- RIGHT BACKGROUND MAPS -->
                    <div class="absolute top-0 right-0 w-full lg:w-[70%] h-full z-10 lg:block pointer-events-none">
                        <img src="img/sybd3.jpg" alt="SYBD Map 3" class="absolute top-0 left-0 w-full h-full object-cover lg:object-[right_center] object-[center_center]" style="object-position: right center;">
                        <img src="img/sybd4.jpg" alt="SYBD Map 4" id="sybd-img-4" class="absolute top-0 left-0 w-full h-full object-cover lg:object-[center_center] object-[center_center] opacity-0 transition-opacity duration-1000 ease-in-out">
                    </div>

                </div>
                
                <!-- SCROLL TRIGGER: Placed exactly at 100vh down, so crossing it triggers the change -->
                <div id="sybd-trigger" class="absolute top-[100vh] w-full h-[10px] pointer-events-none bg-transparent"></div>
            </div>
"""
    html = html[:match.start(2)] + new_s5_full + html[match.end(2):]

    # Replace JS script
    # To fix multiple possible leftovers, wipe out any JS using IntersectionObserver for sybd
    js_pattern_start = r'// SYBD Wheel Animation'
    js_pattern_end = r'window\.switchLanguage\s*=\s*function'
    match_js = re.search(f'({js_pattern_start}.*?)({js_pattern_end})', html, re.DOTALL)

    if match_js:
        new_js = """// SYBD Intersection Observer
            const trigger = document.getElementById('sybd-trigger');
            const step1 = document.getElementById('sybd-step-1');
            const step2 = document.getElementById('sybd-step-2');
            const img4 = document.getElementById('sybd-img-4');

            if (trigger) {
                const obs = new IntersectionObserver((entries) => {
                    entries.forEach(e => {
                        // isIntersecting logic with rootMargin creates reliable triggers
                        // But since it's just a line halfway down the 200vh container:
                        // If we scroll past the trigger line (top > 0), we want step 2
                        // A safer way is checking bounding client rect of container
                        
                    });
                }, { threshold: 0 });
                obs.observe(trigger);
            }
            
            // Safer way: attach scroll listener purely for this specific section's scroll progress
            const sArea = document.getElementById('sybd-scroll-area');
            if (sArea) {
                window.addEventListener('scroll', () => {
                    const rect = sArea.getBoundingClientRect();
                    // rect.top goes from 0 to -100vh as we scroll through the 200vh area
                    // if rect.top <= -vh/3 we switch to step 2
                    if (rect.top <= -window.innerHeight * 0.3) {
                        if(step1) {
                            step1.classList.remove('active');
                            step1.classList.add('up-out');
                        }
                        if(step2) {
                            step2.classList.remove('down-in');
                            step2.classList.add('active');
                        }
                        if(img4) img4.style.opacity = '1';
                    } else {
                        if(step1) {
                            step1.classList.remove('up-out');
                            step1.classList.add('active');
                        }
                        if(step2) {
                            step2.classList.remove('active');
                            step2.classList.add('down-in');
                        }
                        if(img4) img4.style.opacity = '0';
                    }
                }, {passive:true});
            }

            """
        html = html[:match_js.start(1)] + new_js + html[match_js.start(2):]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Done CSS animation fix")

