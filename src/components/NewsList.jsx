import React, { useEffect } from 'react';
import { newsData } from '../data/newsData';

export default function NewsList({ onSelectArticle }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter to separate the featured article (ID 9) and the rest
    const featuredNews = newsData.find(n => n.id === 9) || newsData[0];
    const otherNews = newsData.filter(n => n.id !== featuredNews.id).sort((a, b) => {
        // Handle custom date formats just in case, but standard parsing works for ours
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <div className="w-full bg-white min-h-screen pt-[160px] pb-[100px]">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto">
                <h1 className="text-[40px] md:text-[50px] font-sans font-normal tracking-[-0.04em] text-black mb-[40px] md:mb-[80px]">
                    News
                </h1>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] xl:gap-[80px] items-start">

                    {/* Featured Article - Left Side */}
                    {featuredNews && (
                        <div
                            className="w-full lg:w-[50%] xl:w-[55%] flex flex-col cursor-pointer group"
                            onClick={() => onSelectArticle(featuredNews)}
                        >
                            <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden mb-6 relative">
                                {featuredNews.image ? (
                                    <img
                                        src={featuredNews.image}
                                        alt={featuredNews.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200"></div>
                                )}
                            </div>

                            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-tight text-black font-inter font-normal tracking-[-0.02em] mb-3">
                                <span className="inline pb-[2px] bg-gradient-to-r from-black to-black bg-no-repeat [background-position:0_100%] [background-size:0%_1.5px] group-hover:[background-size:100%_1.5px] transition-all duration-500 ease-out">
                                    {featuredNews.title}
                                </span>
                            </h3>

                            <p className="text-[14px] md:text-[15px] text-[#333] font-inter tracking-[0.02em] font-light">
                                {featuredNews.date}
                            </p>
                        </div>
                    )}

                    {/* Other Articles Grid - Right Side */}
                    <div className="w-full lg:w-[50%] xl:w-[45%] grid grid-cols-1 md:grid-cols-2 gap-x-[30px] lg:gap-x-[40px] gap-y-[50px] lg:gap-y-[60px]">
                        {otherNews.map((news) => (
                            <div
                                key={news.id}
                                className="flex flex-col cursor-pointer group h-full"
                                onClick={() => onSelectArticle(news)}
                            >
                                <h3 className="text-[22px] md:text-[24px] pr-2 leading-[1.4] text-[#222] font-inter font-medium tracking-[-0.02em] mb-3">
                                    <span className="inline pb-[2px] bg-gradient-to-r from-black to-black bg-no-repeat [background-position:0_100%] [background-size:0%_1.5px] group-hover:[background-size:100%_1.5px] transition-all duration-500 ease-out">
                                        {news.title}
                                    </span>
                                </h3>

                                {(() => {
                                    const preview = news.content.find(item => item.type === 'subtitle')?.text
                                        || news.content.find(item => item.type === 'paragraph')?.text;
                                    if (preview) {
                                        return (
                                            <p className="text-[17px] md:text-[17px] pr-2 text-gray-500 mb-4 font-normal tracking-[-0.01em] leading-[1.6] line-clamp-2">
                                                {preview}
                                            </p>
                                        );
                                    }
                                    return null;
                                })()}

                                <p className="text-[13px] md:text-[14px] text-[#333] font-inter tracking-[0.02em] font-light mt-auto">
                                    {news.date}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
