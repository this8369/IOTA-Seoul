import React, { useEffect } from 'react';
import { newsData } from '../data/newsData';

export default function NewsList({ onSelectArticle }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white min-h-screen pt-[160px] pb-[100px]">
            <div className="w-[calc(100%-48px)] md:w-[calc(100%-100px)] max-w-[1600px] mx-auto">
                <h1 className="text-[40px] md:text-[50px] font-sans font-normal tracking-[-0.04em] text-black mb-[60px] md:mb-[100px]">
                    News
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[30px] gap-y-[80px]">
                    {newsData.map((news) => (
                        <div
                            key={news.id}
                            className="flex flex-col cursor-pointer group"
                            onClick={() => onSelectArticle(news)}
                        >
                            <h3 className="text-[21px] md:text-[23px] pr-5 leading-tight text-[#222] font-inter font-normal tracking-[-0.01em] group-hover:text-blue-700 transition-colors duration-200">
                                {news.title}
                            </h3>
                            <p className="text-[14px] md:text-[15px] text-[#333] mt-6 font-inter tracking-[0.02em] font-thin">
                                {news.date}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
