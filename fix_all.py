import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Width
html = html.replace('class="w-full md:w-[30%] flex flex-col justify-center items-center', 
                    'class="w-full md:w-[35%] flex flex-col justify-center items-center')

# 2. Extract step 1 text
s5_pattern = r'(<!-- SECTION 5 \(SYBD(?: - SCROLL DRIVEN)?\) -->\s*<section class="w-full bg-white text-black relative" id="section5">)(.*?)(</section>)'
match = re.search(s5_pattern, html, re.DOTALL)
if match:
    old_s5 = match.group(2)
    step1_start = old_s5.find('<div class="font-bold text-[20px]')
    step1_end = old_s5.find('<!-- Chart Comparison -->')
    step1_inner = old_s5[step1_start:step1_end].strip()

    # Create step 1 chart block
    chart_start = old_s5.find('<!-- Chart Comparison -->')
    chart_end = old_s5.find('</div>\n                    </div>\n                </div>', chart_start)
    chart_inner = old_s5[chart_start:chart_end].strip()
    
    # We will combine step1_inner and chart_inner to equal the whole step 1 content
    s1_full = step1_inner + "\n" + chart_inner

    # Deduplicate EN-only text from step 1
    # Replace the duplicate paragraphs with single merged paragraphs
    s1_full = s1_full.replace(
        '<p class="kr-target-text transition-all duration-300" data-kr="서울역과 용산역을 잇는 교통의 결절지인 SYBD는 뉴욕의 그랜드 센트럴에서 허드슨 야드를 아우르는 글로벌 업무지구와 같이 서울의 차기 글로벌 비즈니스 허브로 도약할 것입니다."\n                                data-en="Connecting Seoul Station and Yongsan Station, SYBD (Seoul Yongsan Business District) is becoming the most desired retail and office locations within the city. Just as Hudson Yards extends from Grand Central Terminal in New York to form a world-class business cluster, SYBD is poised to become Seoul's next-generation global business hub, seamlessly integrating transit, commerce, and innovation.">\n                                서울역과 용산역을 잇는 교통의 결절지인 SYBD는 뉴욕의 그랜드 센트럴에서 허드슨 야드를 아우르는 글로벌 업무지구와 같이 서울의 차기 글로벌 비즈니스 허브로\n                                도약할 것입니다.\n                            </p>',
        '<p class="kr-target-text transition-all duration-300"\n                                data-kr="서울역과 용산역을 잇는 교통의 결절지인 SYBD는 뉴욕의 그랜드 센트럴에서 허드슨 야드를 아우르는 글로벌 업무지구와 같이 서울의 차기 글로벌 비즈니스 허브로 도약할 것입니다."\n                                data-en="Connecting Seoul Station and Yongsan Station, SYBD (Seoul Yongsan Business District) is becoming the most desired retail and office locations within the city. Just as Hudson Yards extends from Grand Central Terminal in New York to form a world-class business cluster, SYBD is poised to become Seoul's next-generation global business hub, seamlessly integrating transit, commerce, and innovation.">\n                                서울역과 용산역을 잇는 교통의 결절지인 SYBD는 뉴욕의 그랜드 센트럴에서 허드슨 야드를 아우르는 글로벌 업무지구와 같이 서울의 차기 글로벌 비즈니스 허브로 도약할 것입니다.\n                            </p>'
    )
    s1_full = re.sub(r'<p class="en-only-text font-inter opacity-90 transition-all duration-300" data-kr="".*?</p>', '', s1_full, flags=re.DOTALL)


    step2_html = """
                        <div class="font-bold text-[20px] md:text-[22px] text-gray-800 mb-2 font-inter tracking-tight" data-kr="Unrivaled Accessibility" data-en="Unrivaled Accessibility">
                            Unrivaled Accessibility</div>
                        <h2
                            class="text-[40px] md:text-[50px] lg:text-[60px] font-extrabold leading-tight mb-2 text-black tracking-[-0.02em] font-inter mt-4">
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

                        <div
                            class="text-[14px] md:text-[15px] font-medium text-black leading-relaxed tracking-[-0.02em] space-y-4 mb-8">
                            <p class="kr-target-text transition-all duration-300"
                                data-kr="서울역은 총 11개 노선을 보유한 명실상부한 교통의 중심지로 인근에 위치한 용산역과 함께 우수한 광역 교통 인프라를 형성합니다.<br>또한, GTX-A/B, 신분당선 개발로 수도권 동남부 권역(강남-분당-판교 인근)으로부터 30분 내 접근이 가능하며<br>인천공항, 김포공항 까지 직접 연결되어 글로벌 혁신기업을 위한 최적의 입지 조건을 갖추고 있습니다."
                                data-en="Seoul Station is Korea's foremost transportation hub, directly connected to 11 transit lines, including KTX, airport rail, and multiple metro routes. Together with nearby Yongsan Station, it forms an exceptional multimodal infrastructure at the center of the capital. With the addition of GTX-A/B and the Shinbundang Line, the site offers 30-minute access to key southeastern districts such as Gangnam, Bundang, and Pangyo. It also enables direct connections to both Incheon and Gimpo International Airports, making it an ideal location for global innovation-driven enterprises.">
                                서울역은 총 11개 노선을 보유한 명실상부한 교통의 중심지로 인근에 위치한 용산역과 함께 우수한 광역 교통 인프라를 형성합니다.<br>
                                또한, GTX-A/B, 신분당선 개발로 수도권 동남부 권역(강남-분당-판교 인근)으로부터 30분 내 접근이 가능하며<br>
                                인천공항, 김포공항 까지 직접 연결되어 글로벌 혁신기업을 위한 최적의 입지 조건을 갖추고 있습니다.
                            </p>
                        </div>

                        <div class="w-full flex items-center mb-6">
                            <img src="img/train icon.png" alt="Train Icons" class="w-full max-w-[400px] h-auto object-contain">
                        </div>

                        <div class="w-full flex flex-col gap-2 mt-2">
                            <img src="img/airport.png" alt="Airports" class="w-full h-auto object-contain">
                            <div class="w-full flex gap-4">
                                <div class="w-1/2 text-[12px] md:text-[14px] text-black font-medium tracking-tight">approx. 43 minutes.</div>
                                <div class="w-1/2 text-[12px] md:text-[14px] text-black font-medium tracking-tight">approx. 22 minutes.</div>
                            </div>
                        </div>
"""
    
    new_s5 = f'''
            <div class="w-full relative lg:h-[200vh]" id="sybd-scroll-area">
                
                <div class="w-full relative lg:sticky lg:top-0 lg:left-0 lg:h-[100vh] overflow-hidden flex flex-col lg:block bg-white lg:bg-transparent">
                    
                    <!-- Foreground Layer: Text Content over Maps -->
                    <div class="w-full flex relative lg:absolute lg:top-0 lg:left-0 z-10 lg:h-full lg:pointer-events-none order-1 lg:order-none">
                        <!-- We use CSS Grid to overlap the two text blocks perfectly so the tallest dictates height -->
                        <div class="grid w-full lg:w-[50%] h-full bg-white lg:bg-transparent pointer-events-auto items-center">
                            
                            <!-- STEP 1 -->
                            <div id="sybd-step-1" class="col-start-1 row-start-1 w-full h-full flex flex-col justify-center px-6 md:px-[60px] lg:px-[180px] pt-[100px] lg:pt-0 pb-10 lg:pb-0 transition-opacity duration-[800ms] ease-in-out relative z-20">
{s1_full}
                                <!-- Mobile Only Scroll Dummy -->
                                <div id="sybd-trigger-mobile" class="w-full h-[1px] lg:hidden block pointer-events-none mt-10"></div>
                            </div>

                            <!-- STEP 2 -->
                            <div id="sybd-step-2" class="col-start-1 row-start-1 w-full h-full flex flex-col justify-center px-6 md:px-[60px] lg:px-[180px] pt-[100px] lg:pt-0 pb-10 lg:pb-0 transition-opacity duration-[800ms] ease-in-out opacity-0 pointer-events-none relative z-10">
{step2_html}
                            </div>

                        </div>
                    </div>

                    <!-- Background Overlap Layer -->
                    <div class="w-full h-auto lg:h-[100vh] lg:absolute lg:top-0 lg:right-0 lg:w-[70%] z-0 relative order-2 lg:order-none overflow-hidden bg-[#e0e0e0]">
                        <!-- fixed sybd3 map -->
                        <img src="img/sybd3.jpg" alt="SYBD Map 3" class="relative w-full h-auto lg:absolute lg:h-full lg:object-cover object-cover opacity-100 pointer-events-none lg:origin-right" style="object-position: right center;">
                        <!-- dissolving sybd4 map -->
                        <img src="img/sybd4.jpg" alt="SYBD Map 4" id="sybd-img-4" class="absolute top-0 left-0 w-full h-full lg:object-cover object-cover opacity-0 pointer-events-none transition-opacity duration-[800ms] ease-in-out" style="object-position: center center;">
                    </div>

                </div>

                <!-- Desktop Trigger -->
                <div id="sybd-trigger-desktop" class="hidden lg:block absolute top-[100vh] w-full h-[10vh] pointer-events-none"></div>

            </div>
'''
    html = html[:match.start(2)] + new_s5 + "\n" + html[match.end(2):]

# 3. Wipe out old JS and insert new IntersectionObserver script
script_pattern = r'(/\*\*\s*SYBD.*\*/|// SYBD Auto Animation\s*const sybdAutoContainer.*?)(window\.switchLanguage\s*=\s*function)'
match_script = re.search(r'(//\s*SYBD\s*Auto\s*Animation.*?)(?=window\.switchLanguage\s*=)', html, re.DOTALL)
if match_script:
    new_script = """            // SYBD Scroll Dissolve Animation
            const tDesktop = document.getElementById('sybd-trigger-desktop');
            const tMobile = document.getElementById('sybd-trigger-mobile');
            const s1 = document.getElementById('sybd-step-1');
            const s2 = document.getElementById('sybd-step-2');
            const img4 = document.getElementById('sybd-img-4');

            const handleIntersect = (isIntersecting) => {
                if (isIntersecting) {
                    if(s1) { s1.style.opacity = '0'; s1.style.pointerEvents = 'none'; }
                    if(s2) { s2.style.opacity = '1'; s2.style.pointerEvents = 'auto'; }
                    if(img4) { img4.style.opacity = '1'; }
                } else {
                    if(s1) { s1.style.opacity = '1'; s1.style.pointerEvents = 'auto'; }
                    if(s2) { s2.style.opacity = '0'; s2.style.pointerEvents = 'none'; }
                    if(img4) { img4.style.opacity = '0'; }
                }
            };

            const obsDesk = new IntersectionObserver((entries) => {
                if(window.innerWidth >= 1024) {
                    handleIntersect(entries[0].isIntersecting);
                }
            }, { root: null, rootMargin: '-30% 0px -30% 0px', threshold: 0 });

            const obsMob = new IntersectionObserver((entries) => {
                if(window.innerWidth < 1024) {
                    handleIntersect(entries[0].isIntersecting);
                }
            }, { root: null, rootMargin: '0px 0px -20% 0px', threshold: 0 });

            if(tDesktop) obsDesk.observe(tDesktop);
            if(tMobile) obsMob.observe(tMobile);

            """
    html = html[:match_script.start(1)] + new_script + html[match_script.end(1):]


# 4. Remove leftover old definitions that would cause errors since DOM elements missing
clean_defs = r"const sybdImg1 = document\.getElementById\('sybd-img-1'\);\s*const sybdImg2 = document\.getElementById\('sybd-img-2'\);\s*const sybdImg3 = document\.getElementById\('sybd-img-3'\);"
html = re.sub(clean_defs, "", html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("done")
