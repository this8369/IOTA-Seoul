import React, { useEffect } from 'react';

export default function NewsDetail({ article, onBack }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!article) return null;

    return (
        <div className="w-full bg-white min-h-screen pt-[160px] pb-[160px]">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-black transition-colors duration-200 text-[13px] font-bold tracking-wider uppercase mb-[60px] md:mb-[100px] inline-flex items-center gap-2"
                >
                    <span>←</span> Back to News
                </button>

                <div className="w-full flex flex-col xl:flex-row items-start justify-between">
                    {/* Left Column - Date */}
                    <div className="w-full xl:w-[200px] flex-shrink-0 mb-6 xl:mb-0 xl:mt-[20px]">
                        <p className="text-[13px] font-bold text-black uppercase tracking-wider">
                            {article.date}
                        </p>
                    </div>

                    {/* Middle Column - Title & Content */}
                    <div className="w-full max-w-[800px] lg:max-w-[900px] mx-auto flex flex-col">
                        <h1 className="text-[42px] md:text-[62px] lg:text-[70px] font-sans font-normal text-black leading-tight tracking-[-0.04em] text-center w-full mb-[60px] md:mb-[80px] break-keep">
                            {article.title}
                        </h1>

                        <div className="w-full flex flex-col gap-6">
                            {article.content.map((block, idx) => {
                                if (block.type === 'bullet') {
                                    return (
                                        <div key={idx} className="flex gap-4 items-start pl-4 md:pl-0">
                                            <span className="text-[16px] mt-1 relative top-[1px]">▪</span>
                                            <p className="text-[19px] md:text-[20px] text-[#222] font-inter italic font-light leading-[1.57]">
                                                {block.text}
                                            </p>
                                        </div>
                                    );
                                }
                                if (block.type === 'subtitle') {
                                    return (
                                        <div key={idx} className="flex gap-4 items-start pl-4 md:pl-0 mb-2">
                                            <p className="text-[19px] md:text-[20px] text-[#222] font-inter italic font-light leading-[1.57]">
                                                {block.text}
                                            </p>
                                        </div>
                                    );
                                }
                                if (block.type === 'paragraph') {
                                    return (
                                        <p key={idx} className="text-[19px] md:text-[19px] text-[#222] font-inter font-normal leading-[1.57] tracking-[-0.01em]">
                                            {block.text}
                                        </p>
                                    );
                                }
                                if (block.type === 'quote') {
                                    return (
                                        <p key={idx} className="text-[19px] md:text-[19px] text-[#222] font-inter italic font-light leading-[1.57] tracking-[-0.01em] my-4 px-4 border-l-2 border-gray-300">
                                            {block.text}
                                        </p>
                                    );
                                }
                                if (block.type === 'heading') {
                                    return (
                                        <h2 key={idx} className="text-[22px] md:text-[26px] font-bold text-black mt-8 mb-2 tracking-[-0.02em]">
                                            {block.text}
                                        </h2>
                                    );
                                }
                                return null;
                            })}

                            {article.originalUrl && article.originalUrl !== '#' && (
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <a
                                        href={article.originalUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#222] hover:text-[#555] underline underline-offset-4 text-[19px] font-bold"
                                    >
                                        Read original press release
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Invisible Placeholder to perfectly center the middle column natively */}
                    <div className="hidden xl:block w-[200px] flex-shrink-0"></div>
                </div>
            </div>
        </div>
    );
}
