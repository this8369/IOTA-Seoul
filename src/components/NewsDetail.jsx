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
                    className="text-gray-400 hover:text-black transition-colors duration-200 text-[13px] font-bold tracking-wider uppercase mb-12 inline-flex items-center gap-2"
                >
                    <span>←</span> Back to News
                </button>

                <h1 className="text-[32px] md:text-[52px] lg:text-[60px] font-sans font-normal text-black leading-[1.1] tracking-[-0.04em] text-center max-w-[900px] mx-auto mb-[80px] md:mb-[120px]">
                    {article.title}
                </h1>

                <div className="flex flex-col md:flex-row items-start lg:gap-24 md:gap-12 gap-8">
                    {/* Left Column - Date */}
                    <div className="w-full md:w-[200px] flex-shrink-0">
                        <p className="text-[13px] font-bold text-black uppercase tracking-wider">
                            {article.date}
                        </p>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full max-w-[700px] flex flex-col gap-6">
                        {article.content.map((block, idx) => {
                            if (block.type === 'bullet') {
                                return (
                                    <div key={idx} className="flex gap-4 items-start pl-4 md:pl-0">
                                        <span className="text-[12px] mt-1 relative top-[1px]">▪</span>
                                        <p className="text-[15px] md:text-[16px] text-[#222] font-inter italic font-light leading-[1.6]">
                                            {block.text}
                                        </p>
                                    </div>
                                );
                            }
                            if (block.type === 'paragraph') {
                                return (
                                    <p key={idx} className="text-[15px] md:text-[15px] text-[#222] font-inter font-normal leading-[1.8] tracking-[-0.01em]">
                                        {block.text}
                                    </p>
                                );
                            }
                            if (block.type === 'quote') {
                                return (
                                    <p key={idx} className="text-[15px] md:text-[15px] text-[#222] font-inter italic font-light leading-[1.8] tracking-[-0.01em] my-4 px-4 border-l-2 border-gray-300">
                                        {block.text}
                                    </p>
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
                                    className="text-blue-600 hover:text-blue-800 underline underline-offset-4 text-[15px] font-bold"
                                >
                                    Read original press release
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
