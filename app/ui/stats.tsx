'use client'
import React, { useState } from "react";

function Stats() {
    const [activeTab, setActiveTab] = useState('Academics');  // default tab is academics

    return (
        <>
            <div className="main">

                {/* Tab Headings */}
                <div className="head flex flex-col sm:flex-row">
                    <div className="head h-16 w-full sm:w-1/4 flex items-center justify-center text-[#969696] bg-gray-300">
                        Select a tab
                    </div>
                    <button onClick={() => setActiveTab('Academics')} className={`head h-16 w-full sm:w-1/4 flex items-center justify-center text-[#d59f0f] text-xl sm:text-2xl font-bold ${activeTab === 'Academics' ? 'bg-[#FCF9F2]' : ''}`}>
                        Academics
                    </button>
                    <button onClick={() => setActiveTab('Athletics')} className={`head h-16 w-full sm:w-1/4 flex items-center justify-center text-[#653331] text-xl sm:text-2xl font-bold ${activeTab === 'Athletics' ? 'bg-[#F5EEED]' : ''}`}>
                        Athletics
                    </button>
                    <button onClick={() => setActiveTab('Extracurricular')} className={`head h-16 w-full sm:w-1/4 flex items-center justify-center text-[#034C8C] text-xl sm:text-2xl font-bold ${activeTab === 'Extracurricular' ? 'bg-[#EDF5FC]' : ''}`}>
                        Extracurricular
                    </button>
                </div>

                {/* Academics Section */}
                <div className={`details flex flex-col sm:flex-row ${activeTab === 'Academics' ? '' : 'hidden'}`}>
                    <div className="left h-40 sm:h-[60vh] w-full sm:w-1/4 flex justify-center items-center text-white font-bold text-3xl sm:text-4xl bg-[#d59f0f] p-4 sm:pt-16 sm:pl-10 sm:pr-10">
                        STATS THAT SET US APART
                    </div>
                    <div className="academics-details h-auto sm:h-[60vh] w-full sm:w-3/4 flex flex-col sm:flex-row bg-[#FCF9F2]">
                        <div className="w-full sm:w-1/3 p-4 sm:p-10 text-center">
                            <div className="sub-head text-5xl sm:text-6xl font-bold text-[#d59f0f]">1000+</div>
                            <div className="info mt-4 text-base sm:text-lg">Over 1,000 hours of dedicated academic support are available each year through tutoring, study sessions, and mentoring.</div>
                        </div>
                        <div className="w-full sm:w-1/3 p-4 sm:p-10 text-center">
                            <div className="sub-head text-5xl sm:text-6xl font-bold text-[#d59f0f]">15 : 1</div>
                            <div className="info mt-4 text-base sm:text-lg">The average student-to-teacher ratio is 15:1, with an average class size of 20.</div>
                        </div>
                        <div className="w-full sm:w-1/3 p-4 sm:p-10 text-center">
                            <div className="sub-head text-5xl sm:text-6xl font-bold text-[#d59f0f]">12+</div>
                            <div className="info mt-4 text-base sm:text-lg">A strong emphasis on STEM with 12+ specialized courses in coding, robotics, and laboratory sciences.</div>
                        </div>
                    </div>
                </div>

                {/* Athletics Section */}
                <div className={`details flex flex-col sm:flex-row ${activeTab === 'Athletics' ? '' : 'hidden'}`}>
                    <div className="left h-40 sm:h-[60vh] w-full sm:w-1/4 flex justify-center items-center text-white font-bold text-3xl sm:text-4xl bg-[#653331] p-4 sm:pt-16 sm:pl-10 sm:pr-10">
                        STATS THAT SET US APART
                    </div>
                    <div className="academics-details h-auto sm:h-[60vh] w-full sm:w-3/4 flex flex-col sm:flex-row bg-[#F5EEED]">
                        <div className="w-full sm:w-1/3 p-4 sm:p-10 text-center">
                            <div className="sub-head text-5xl sm:text-6xl font-bold text-[#653331]">20+</div>
                            <div className="info mt-4 text-base sm:text-lg">TEWS offers 20+ athletic teams across various sports, including soccer, basketball, track, and swimming.</div>
                        </div>
                        <div className="w-full sm:w-1/3 p-4 sm:p-10 text-center">
                            <div className="sub-head text-5xl sm:text-6xl font-bold text-[#653331]">12</div>
                            <div className="info mt-4 text-base sm:text-lg">TEWS is home to many 12-season athletes who excel in balancing academics and athletics.</div>
                        </div>
                        <div className="w-full sm:w-1/3 p-4 sm:p-10 text-center">
                            <div className="sub-head text-5xl sm:text-6xl font-bold text-[#653331]">15+</div>
                            <div className="info mt-4 text-base sm:text-lg">Over 15 regional and district championships won in the past decade, including 2 state championships.</div>
                        </div>
                    </div>
                </div>

                {/* Extracurricular Section */}
                <div className={`details flex flex-col sm:flex-row ${activeTab === 'Extracurricular' ? '' : 'hidden'}`}>
                    <div className="left h-40 sm:h-[60vh] w-full sm:w-1/4 flex justify-center items-center text-white font-bold text-3xl sm:text-4xl bg-[#034C8C] p-4 sm:pt-16 sm:pl-10 sm:pr-10">
                        STATS THAT SET US APART
                    </div>
                    <div className="academics-details h-auto sm:h-[60vh] w-full sm:w-3/4 flex flex-col sm:flex-row bg-[#EDF5FC]">
                        <div className="w-full sm:w-1/3 p-4 sm:p-10 text-center">
                            <div className="sub-head text-5xl sm:text-6xl font-bold text-[#034C8C]">90%</div>
                            <div className="info mt-4 text-base sm:text-lg">Over 90% of our students are involved in at least one extracurricular activity or club.</div>
                        </div>
                        <div className="w-full sm:w-1/3 p-4 sm:p-10 text-center">
                            <div className="sub-head text-5xl sm:text-6xl font-bold text-[#034C8C]">10+</div>
                            <div className="info mt-4 text-base sm:text-lg">TEWS Students have the opportunity to join 10+ clubs, ranging from robotics to arts, and culinary to medical science.</div>
                        </div>
                        <div className="w-full sm:w-1/3 p-4 sm:p-10 text-center">
                            <div className="sub-head text-5xl sm:text-6xl font-bold text-[#034C8C]">5000+</div>
                            <div className="info mt-4 text-base sm:text-lg">TEWS Students collectively contribute over 5,000 hours of community service annually through service projects, volunteer clubs, and outreach programs.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stats;
