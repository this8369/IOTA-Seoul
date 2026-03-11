import React, { useEffect, useState } from 'react';
import { newsData } from '../data/newsData';

export default function NewsList({ onSelectArticle }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [playingVideoId, setPlayingVideoId] = useState(null);

    // We now have two featured articles (ID 12 and ID 9) to display on the left side
    const featuredNews = newsData.filter(n => n.id === 12 || n.id === 9).sort((a, b) => new Date(b.date) - new Date(a.date));
    const featuredIds = featuredNews.map(n => n.id);

    const otherNews = newsData.filter(n => !featuredIds.includes(n.id)).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <div className="w-full bg-white min-h-screen pt-[160px] pb-[100px]">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto">
                <h1 className="text-[40px] md:text-[50px] font-sans font-normal tracking-[-0.04em] text-black mb-[40px] md:mb-[80px]">
                    News & Insights
                </h1>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] xl:gap-[80px] items-start">

                    {/* Featured Articles - Left Side */}
                    <div className="w-full lg:w-[50%] xl:w-[55%] flex flex-col gap-[60px] lg:gap-[80px]">
                        {featuredNews.map(news => (
                            <div
                                key={news.id}
                                className="w-full flex flex-col group"
                            >
                                <div
                                    className={`w-full aspect-[16/10] bg-gray-100 overflow-hidden mb-6 relative ${!playingVideoId || playingVideoId !== news.id ? 'cursor-pointer' : ''}`}
                                    onClick={() => {
                                        if (news.isVideoLink && playingVideoId !== news.id) {
                                            setPlayingVideoId(news.id);
                                        } else if (!news.isVideoLink && playingVideoId !== news.id) {
                                            if (news.isDirectLink) {
                                                window.open(news.originalUrl, '_blank');
                                            } else {
                                                onSelectArticle(news);
                                            }
                                        }
                                    }}
                                >
                                    {playingVideoId === news.id && news.isVideoLink ? (
                                        <iframe
                                            src={news.videoUrl}
                                            className="w-full h-full border-none"
                                            allow="autoplay; fullscreen"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <>
                                            {news.image ? (
                                                <img
                                                    src={news.image}
                                                    alt={news.title}
                                                    className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${news.isVideoLink ? 'brightness-90' : ''}`}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200"></div>
                                            )}
                                            {news.isVideoLink && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-black bg-opacity-60 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent translate-x-1"></div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>

                                <h3
                                    className="text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] text-black font-inter font-normal tracking-[-0.02em] mb-3 cursor-pointer"
                                    onClick={() => {
                                        if (news.isVideoLink) {
                                            if (playingVideoId !== news.id) setPlayingVideoId(news.id);
                                        } else if (news.isDirectLink) {
                                            window.open(news.originalUrl, '_blank');
                                        } else {
                                            onSelectArticle(news);
                                        }
                                    }}
                                >
                                    <span className={`inline pb-[2px] bg-gradient-to-r from-black to-black bg-no-repeat [background-position:0_100%] [background-size:0%_1.5px] transition-all duration-500 ease-out ${playingVideoId !== news.id ? 'group-hover:[background-size:100%_1.5px]' : ''}`}>
                                        {news.title}
                                    </span>
                                </h3>

                                <p className="text-[14px] md:text-[15px] text-[#333] font-inter tracking-[0.02em] font-light">
                                    {news.date}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Other Articles Grid - Right Side */}
                    <div className="w-full lg:w-[50%] xl:w-[45%] grid grid-cols-1 md:grid-cols-2 gap-x-[30px] lg:gap-x-[40px] gap-y-[50px] lg:gap-y-[60px]">
                        {otherNews.map((news) => (
                            <div
                                key={news.id}
                                className="flex flex-col cursor-pointer group h-full"
                                onClick={() => {
                                    if (news.isDirectLink) {
                                        window.open(news.originalUrl, '_blank');
                                    } else {
                                        onSelectArticle(news);
                                    }
                                }}
                            >
                                <h3 className="text-[22px] md:text-[24px] pr-2 leading-[1.35] text-[#222] font-inter font-medium tracking-[-0.02em] mb-3">
                                    <span className="inline pb-[2px] bg-gradient-to-r from-black to-black bg-no-repeat [background-position:0_100%] [background-size:0%_1.5px] group-hover:[background-size:100%_1.5px] transition-all duration-500 ease-out">
                                        {news.title}
                                    </span>
                                </h3>

                                {(() => {
                                    const preview = news.content.find(item => item.type === 'subtitle')?.text
                                        || news.content.find(item => item.type === 'paragraph')?.text;
                                    if (preview) {
                                        return (
                                            <p className="text-[17px] md:text-[17px] pr-2 text-gray-500 mb-4 font-normal tracking-[-0.01em] leading-[1.54] line-clamp-2">
                                                {preview}
                                            </p>
                                        );
                                    }
                                    return null;
                                })()}

                                <p className="text-[13px] md:text-[14px] text-[#333] font-inter tracking-[0.02em] font-light mt-0">
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
