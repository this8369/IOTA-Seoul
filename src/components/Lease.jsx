import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Footer from './Footer';
import emailjs from '@emailjs/browser';

export default function Lease() {
    const { lang } = useLanguage();
    const [isChecked, setIsChecked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!isChecked) {
            alert(lang === 'kr' ? '개인정보 수집 및 이용에 동의해주세요.' : 'Please agree to the privacy policy.');
            return;
        }

        setIsSubmitting(true);

        // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
        // Example: emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
        emailjs.sendForm('service_l80n3q9', 'template_p3f93s8', formRef.current, 'Lh9-MhXoT76_EwJ2m')
            .then((result) => {
                alert(lang === 'kr' ? '문의가 성공적으로 접수되었습니다. 관리자 확인 후 연락드리겠습니다.' : 'Your inquiry has been successfully submitted. We will contact you shortly.');
                formRef.current.reset();
                setIsChecked(false);
                setIsSubmitting(false);
            }, (error) => {
                alert(lang === 'kr' ? '시스템 오류로 전송에 실패했습니다. IOTATF_Team@igisam.com 으로 직접 문의 부탁드립니다.' : 'Failed to send inquiry due to a system error. Please contact us directly at IOTATF_Team@igisam.com.');
                console.error(error);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="w-full min-h-screen bg-white text-black font-sans relative overflow-x-hidden pt-[110px] md:pt-[150px] flex flex-col items-center">

            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1000px] flex flex-col items-start min-h-[70vh]">

                {/* Title Section */}
                <h1 className="text-[35px] md:text-[50px] font-bold tracking-[-0.03em] mb-4">
                    {lang === 'kr' ? '임대차 문의' : 'Lease Inquiry'}
                </h1>
                <p className="text-[15px] md:text-[17px] text-gray-600 mb-12 font-light">
                    {lang === 'kr'
                        ? '임차에 대한 문의를 작성해주시면 관리자 확인 후 메일 혹은 유선으로 답변 드리겠습니다.'
                        : 'Please submit your leasing inquiry, and our management team will respond via email or phone after review.'}
                </p>

                {/* Privacy Policy Box */}
                <div className="w-full mb-10">
                    <h3 className="text-[15px] font-bold mb-3">{lang === 'kr' ? '개인정보 수집·이용 동의' : 'Privacy Policy Consent'}</h3>
                    <div className="w-full h-[200px] overflow-y-auto border border-gray-200 bg-gray-50 p-5 rounded-md text-[13px] leading-[1.6] text-gray-700 custom-scrollbar whitespace-pre-line break-keep font-light">
                        {lang === 'kr' ? `[IOTA SEOUL] 개인정보 처리방침 (Updated 2026.03.11)

1. 개인정보의 수집 및 이용 목적
IOTA SEOUL(이하 "본 서비스")은 다음의 목적을 위해 최소한의 개인정보를 처리합니다.
- 비전북(Vision Book) 제공: 디지털 비전북 다운로드 링크 제공 및 권한 관리
- 임대차 문의 응대: 오피스/리테일 임대차 관련 상담, 제안서 발송 및 의사소통 경로 확보
- 투자 및 마케팅 전략 수립: 잠재 임차인 및 투자자 수요 분석, 향후 관련 자산 정보 및 마케팅 자료(뉴스레터 등) 발송

2. 수집하는 개인정보 항목 및 방법
서비스 이용 목적에 따라 수집 항목을 다음과 같이 구분합니다.
[비전북 다운로드] 필수: 성명, 소속(회사명), 이메일 주소 / 선택: 직함, 관심 분야
[임대차 문의] 필수: 성명, 소속, 이메일 주소, 연락처 / 선택: 희망 면적, 입주 예정 시기, 문의 상세 내용
[자동 수집] 필수: IP 주소, 쿠키, 방문 기록, 기기 정보
- 수집방법: 웹사이트 내 '비전북 신청' 및 '임대차 문의' 전용 입력 폼(Form)

3. 개인정보의 국외 이전
본 서비스는 글로벌 웹 호스팅 인프라(GitHub Pages)를 활용함에 따라, 수집된 정보가 보안이 강화된 해외 서버(미국, GitHub 및 Google Cloud)에 저장될 수 있음을 고지합니다. 이는 안정적인 서비스 제공 및 데이터 백업을 위한 조치입니다.

4. 개인정보의 처리 위탁
- 수탁업체: GitHub, Inc. / Google / Tally.so (폼 빌더 활용 시)
- 위탁 업무: 데이터 저장, 웹사이트 호스팅, 방문자 통계 분석 및 데이터베이스 관리

5. 개인정보의 보유 및 이용기간
- 임대차 문의 정보: 상담 종료 후 1년 (단, 향후 임대차 계약 체결 및 사후 관리를 위해 동의한 경우 동의 철회 시까지 보관)
- 비전북 이용 정보: 서비스 종료 시 또는 사용자의 동의 철회 시까지
- 웹사이트 방문 기록: 통신비밀보호법에 의거하여 3개월

6. 개인정보의 파기절차 및 방법
이용 목적이 달성된 개인정보는 즉시 파기함을 원칙으로 합니다. 전자적 파일은 복원이 불가능한 기술적 방법으로 영구 삭제하며, 출력물은 파쇄 또는 소각 처리합니다.

7. 개인정보 자동 수집 장치(쿠키)의 운영
본 서비스는 이용자의 편의성 향상과 서비스 개선을 위해 '쿠키(cookie)'를 사용합니다. 이용자는 브라우저 설정을 통해 쿠키 수집을 거부할 수 있습니다.

8. 데이터 보안 및 관리 대책
- 기술적 조치: 모든 데이터는 HTTPS(SSL) 암호화 구간을 통해 전송되어 탈취를 방지합니다.
- 관리적 조치: 임대차 문의 등 민감한 비즈니스 데이터는 인가된 관리자만이 접근 가능하도록 2단계 인증(2FA) 및 계정 권한 관리를 시행합니다.

9. 개인정보 보호책임자 및 담당부서
- 개인정보 보호책임자: 이지스자산운용 IOTA SEOUL 프로젝트 담당자
- 개인정보 관리담당자: 이지스자산운용 IOTA SEOUL 운영 및 임대 담당자
- 이메일: IOTATF_Team@igisam.com

10. 고지의 의무
본 방침은 2026년 3월 11일부터 적용됩니다. 내용의 수정이 있을 경우 최소 7일 전 홈페이지를 통해 고지하겠습니다.`
                            : `[IOTA SEOUL] Privacy Policy (Updated Mar 11, 2026)

1. Purpose of Collection and Use of Personal Information
IOTA SEOUL processes the minimum personal information necessary for the following purposes:
- Vision Book Download
- Lease Inquiry Reponses
- Investment & Marketing Strategy

2. Items and Methods of Personal Information Collection
[Vision Book] Req: Name, Company, Email / Opt: Title, Field of Interest
[Lease Inquiry] Req: Name, Company, Email, Phone / Opt: Expected Size, Target Move-in, Inquiry Details
[Auto] Req: IP, Cookies, Device Info
- Method: Website Inquiry Forms

3. Cross-Border Data Transfer
Due to global hosting (GitHub Pages), data may be securely stored in overseas servers (US, GitHub, Google Cloud) for stable service provision.

4. Consignment of Personal Information Processing
- Consignee: GitHub, Inc. / Google / Tally.so
- Task: Database storage, hoisting, analytics.

5. Retention Period
- Lease inquiry: 1 year after consultation ends.
- Vision Book data: Until service ends or consent withdrawal.
- Traffic data: 3 months under the Protection of Communications Secrets Act.

6. Destruction Procedure
Information is destroyed permanently via irreversible technical methods immediately after its purpose is fulfilled.

7. Cookies
We use cookies to enhance user convenience. You can decline cookie collection through browser settings.

8. Data Security
- Technical: All data is encrypted via HTTPS(SSL).
- Admin: Only authorized personnel with 2FA possess access to sensitive business data.

9. Privacy Officer
- Officer: IGIS Asset Management IOTA SEOUL Project Manager
- Email: IOTATF_Team@igisam.com

10. Notification Duty
Effective March 11, 2026. Changes will be announced 7 days in advance via website.`}
                    </div>
                    <label className="flex items-center gap-2 mt-4 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            className="w-4 h-4 cursor-pointer border-gray-300 rounded focus:ring-black accent-black"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                        />
                        <span className="text-[14px] text-black">
                            {lang === 'kr' ? '개인정보 수집 및 이용에 동의합니다.' : 'I agree to the collection and use of my personal information.'}
                        </span>
                    </label>
                </div>

                {/* Inquiry Form */}
                <form ref={formRef} className="w-full flex flex-col gap-6 mb-20" onSubmit={sendEmail}>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[14px] font-bold">{lang === 'kr' ? '작성자' : 'Name'}</label>
                            <input type="text" name="user_name" required placeholder={lang === 'kr' ? '성함을 입력해주세요' : 'Enter your name'} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[14px] font-bold">{lang === 'kr' ? '소속(회사명)' : 'Company Name'}</label>
                            <input type="text" name="user_company" placeholder={lang === 'kr' ? '소속을 입력해주세요' : 'Enter your company name'} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[14px] font-bold">{lang === 'kr' ? '이메일' : 'Email'}</label>
                            <input type="email" name="user_email" required placeholder={lang === 'kr' ? '답변 받으실 이메일을 입력해주세요' : 'Enter your email address'} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[14px] font-bold">{lang === 'kr' ? '연락처' : 'Phone Number'}</label>
                            <input type="tel" name="user_phone" required placeholder={lang === 'kr' ? '연락처를 입력해주세요' : 'Enter your phone number'} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <label className="text-[14px] font-bold">{lang === 'kr' ? '문의 내용' : 'Inquiry Details'}</label>
                        <textarea name="message" required placeholder={lang === 'kr' ? '희망 면적, 입주 예정 시기 등 상세 문의 내용을 입력해주세요.' : 'Please enter target size, move-in schedule, and other details.'} className="w-full h-[150px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting} className={`w-[150px] mt-4 self-center md:self-end text-white py-4 px-6 rounded-md font-bold tracking-wide transition-colors ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-[#333]'}`}>
                        {isSubmitting
                            ? (lang === 'kr' ? '전송중...' : 'Sending...')
                            : (lang === 'kr' ? '제출하기' : 'Submit')}
                    </button>

                </form>

            </div>

            <Footer />
        </div>
    );
}
