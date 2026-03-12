import os

filepath = 'src/components/Section2.jsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace font-bold with font-sans font-semibold, and font-extrabold with font-sans font-bold inside data-kr
# It's better to just string-replace the specific classes inside data-kr.
# 1st paragraph kr:
target1 = "<span class='font-bold text-[#7b7b7d]'><strong class='font-extrabold text-black'>이오타 서울</strong>은 최첨단 오피스와 최고급 호텔, 프리미엄 주거가 결합된 연면적 14만 평 규모의 <strong class='font-extrabold text-black'>대규모 복합개발 프로젝트</strong>입니다. 남산의 광활한 녹지와 광역 교통의 허브인 서울역과 인접한 입지에 자리하며, 지속가능한 설계를 기반으로 문화 매식 리테일 엔터테인먼트가 유기적으로 어우러진 복합 환경을 구현합니다. 이를 통해 글로벌 기업과 인재들에게 <strong class='font-extrabold text-black'>비즈니스와 라이프스타일이 자연스럽게 연결되는 최적의 업무 생활 플랫폼</strong>을 제공합니다.</span>"
rep1 = target1.replace("font-bold", "font-sans font-semibold tracking-normal").replace("font-extrabold", "font-sans font-bold")

target2 = "<span class='font-bold text-[#7b7b7d]'>서울의 역사적 맥락과 미래 비전을 동시에 담아내는 <strong class='font-extrabold text-black'>상징적 랜드마크</strong>로서, IOTA 서울은 연중 다양한 프로그램과 공간 경험을 통해 방문객과 입주사, 지역사회에 새로운 활력을 제시할 것입니다. 궁극적으로 <strong class='font-extrabold text-black'>글로벌 오피스의 새로운 기준</strong>을 제시하는 복합 자산으로 자리매김할 것입니다.</span>"
rep2 = target2.replace("font-bold", "font-sans font-semibold tracking-normal").replace("font-extrabold", "font-sans font-bold")

if target1 in content and target2 in content:
    content = content.replace(target1, rep1).replace(target2, rep2)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Replaced successfully!")
else:
    print("Could not find exact strings!")
