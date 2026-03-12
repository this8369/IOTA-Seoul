import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Footer from './Footer';
import emailjs from '@emailjs/browser';

export default function Partnership() {
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

        emailjs.sendForm('iotaseoul lease', 'template_gq5har4', formRef.current, 'vh-ovBANWDdS530In')
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
                    {lang === 'kr' ? '파트너십 문의' : 'Partnership Inquiry'}
                </h1>
                <p className="text-[15px] md:text-[17px] text-gray-600 mb-12 font-light">
                    {lang === 'kr'
                        ? 'IOTA Seoul과 함께 새로운 업무·도시 경험을 만들어갈 파트너를 찾습니다.'
                        : 'We are looking for partners to create a new workplace and urban experience with IOTA Seoul.'}
                </p>

                {/* Privacy Policy Box */}
                <div className="w-full mb-10">
                    <h3 className="text-[15px] font-bold mb-3">{lang === 'kr' ? '개인정보 수집·이용 동의' : 'Privacy Policy Consent'}</h3>
                    <div className="w-full h-[200px] overflow-y-auto border border-gray-200 bg-gray-50 p-5 rounded-md text-[13px] leading-[1.6] text-gray-700 custom-scrollbar whitespace-pre-line break-keep font-light">
                        {lang === 'kr' ? `[IOTA SEOUL] 개인정보 처리방침 (Updated 2026.03.11)

1. 개인정보의 수집 및 이용 목적
IOTA SEOUL(이하 "본 서비스")은 다음의 목적을 위해 최소한의 개인정보를 처리합니다.
- 파트너십 제안 접수 및 응대: 신규 서비스, 리테일, 웰니스 프로그램 제휴 등 제안 검토 및 회신
- 임대차 문의 응대: 오피스/리테일 임대차 관련 상담, 제안서 발송 및 의사소통 경로 확보
- 비전북(Vision Book) 제공: 디지털 비전북 다운로드 링크 제공 및 권한 관리

2. 수집하는 개인정보 항목 및 방법
[파트너십 문의] 필수: 회사명, 파트너십 유형, 성명(담당자), 연락처, 이메일, 제안 요약
[자동 수집] 필수: IP 주소, 쿠키, 방문 기록, 기기 정보
- 수집방법: 웹사이트 내 전용 입력 폼(Form)

3. 개인정보의 국외 이전
본 서비스는 글로벌 웹 호스팅 인프라(GitHub Pages)를 활용함에 따라, 수집된 정보가 보안이 강화된 해외 서버(미국, GitHub 및 Google Cloud)에 저장될 수 있음을 고지합니다. 이는 안정적인 서비스 제공 및 데이터 백업을 위한 조치입니다.

4. 개인정보의 처리 위탁
- 수탁업체: GitHub, Inc. / Google / emailjs
- 위탁 업무: 데이터 저장, 웹사이트 호스팅, 방문자 통계 분석 및 데이터베이스 관리

5. 개인정보의 보유 및 이용기간
- 문의 정보: 상담 종료 후 1년 (단, 향후 관련 업무 파트너십 추진을 위해 보관 동의 시 동의 철회 시까지 보관)
- 웹사이트 방문 기록: 통신비밀보호법에 의거하여 3개월

6. 개인정보의 파기절차 및 방법
이용 목적이 달성된 개인정보는 즉시 파기함을 원칙으로 합니다. 전자적 파일은 복원이 불가능한 기술적 방법으로 영구 삭제하며, 출력물은 파쇄 또는 소각 처리합니다.

7. 데이터 보안 및 관리 대책
모든 데이터는 HTTPS(SSL) 암호화 구간을 통해 전송되어 탈취를 방지합니다. 관리적 조치로서 접근 권한을 제한합니다.

8. 개인정보 보호책임자 및 담당부서
- 이메일: IOTATF_Team@igisam.com`
                            : `[IOTA SEOUL] Privacy Policy (Updated Mar 11, 2026)

1. Purpose of Collection and Use of Personal Information
IOTA SEOUL processes the minimum personal information necessary for the following purposes:
- Partnership Proposal Review & Response
- Vision Book Download & Lease Inquiry
- General Communication

2. Items and Methods of Personal Information Collection
[Partnership Inquiry] Req: Company Name, Type of Partnership, Name, Contact, Email, Proposal Summary
[Auto] Req: IP, Cookies, Device Info
- Method: Website Inquiry Forms

3. Cross-Border Data Transfer
Due to global hosting, data may be securely stored in overseas servers.

4. Consignment of Personal Information Processing
- Consignee: GitHub, Inc. / Google / emailjs
- Task: Database storage, hoisting, analytics.

5. Retention Period
- Inquiry details: 1 year after consultation ends.
- Traffic data: 3 months under the Protection of Communications Secrets Act.

6. Destruction Procedure
Information is destroyed permanently via irreversible technical methods immediately after its purpose is fulfilled.

7. Data Security
All data is encrypted via HTTPS(SSL).

8. Privacy Officer
- Email: IOTATF_Team@igisam.com`}
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
                            <label className="text-[14px] font-bold">{lang === 'kr' ? '회사명' : 'Company Name'}</label>
                            <input type="text" name="company_name" required placeholder={lang === 'kr' ? '회사명을 입력해주세요' : 'Enter your company name'} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors" />
                        </div>
                        <div className="w-full flex flex-col gap-2 relative">
                            <label className="text-[14px] font-bold">{lang === 'kr' ? '파트너십 유형' : 'Type of Partnership'}</label>
                            <div className="relative w-full">
                                <select name="partnership_type" required className="w-full px-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors bg-white appearance-none cursor-pointer">
                                    <option value="" disabled selected>{lang === 'kr' ? '선택해주세요' : 'Please select'}</option>
                                    <option value="Wellness">Wellness</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Service Program">Service Program</option>
                                    <option value="Other">Other</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[14px] font-bold">{lang === 'kr' ? '담당자 성명' : 'Contact Name'}</label>
                            <input type="text" name="contact_name" required placeholder={lang === 'kr' ? '담당자 성명을 입력해주세요' : 'Enter contact name'} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[14px] font-bold">{lang === 'kr' ? '담당자 이메일' : 'Email'}</label>
                            <input type="email" name="user_email" required placeholder={lang === 'kr' ? '답변 받으실 이메일을 입력해주세요' : 'Enter your email address'} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[14px] font-bold">{lang === 'kr' ? '연락처' : 'Phone Number'}</label>
                            <input type="tel" name="user_phone" required placeholder={lang === 'kr' ? '연락처를 입력해주세요' : 'Enter your phone number'} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <label className="text-[14px] font-bold">{lang === 'kr' ? '제안 요약' : 'Proposal Summary'}</label>
                        <textarea name="proposal_summary" required placeholder={lang === 'kr' ? '간략한 파트너십 제안 내용을 작성해주세요.' : 'Please briefly describe your proposal.'} className="w-full h-[150px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting} className={`w-[150px] mt-4 self-center md:self-end text-white py-4 px-6 rounded-md font-bold tracking-wide transition-colors ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-[#333]'}`}>
                        {isSubmitting
                            ? (lang === 'kr' ? '전송중...' : 'Sending...')
                            : (lang === 'kr' ? '제출하기' : 'Submit')}
                    </button>

                </form>

            </div>

            <Footer className="w-full mt-auto" variant="light" />
        </div>
    );
}
