'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

function Welcome() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="main flex flex-col lg:flex-row p-3 overflow-hidden items-center lg:items-start mb-2">
                
                {/* Left Section: Image */}
                <div className={`left w-full lg:w-2/5 p-5 lg:pl-5 lg:ml-5 duration-1000 ${scrolled ? 'translate-x-0' : '-translate-x-full'}`}>
                    <img src='/homeImage1.png' alt="Welcome Student" className="w-full h-auto lg:h-4/5 mt-4" />
                </div>

                {/* Right Section: Welcome Message */}
                <div className={`right mt-10 lg:mt-[10vh] w-full lg:w-2/3 lg:mr-8 duration-1000 ${scrolled ? 'translate-x-0' : 'translate-x-full'}`}>
                    
                    {/* Welcome Header */}
                    <div className="welcome-head flex flex-col lg:flex-row items-center mb-4">
                        <div className="welcoming font-bold text-2xl lg:text-3xl">WELCOME</div>
                        <div className="welcoming font-bold text-2xl lg:text-3xl ml-1">TO</div>
                        <div className="line w-full h-px bg-gray-300 my-3 lg:ml-12"></div>
                    </div>

                    {/* School Name and Description */}
                    <div className="welcome-to flex flex-col lg:flex-row">
                        
                        {/* School Name */}
                        <div className="school_name w-full lg:w-1/2 text-4xl lg:text-5xl font-bold  mt-6 text-[#d59f0f] text-center lg:text-left">
                            <div className="sub-name mt-2">THE ERUDITE</div>
                            <div className="sub-name mt-2">WORLD</div>
                            <div className="sub-name mt-2">SCHOOL</div>
                        </div>

                        {/* Description */}
                        <div className="desc w-full lg:w-1/2 mt-8 lg:mt-10 text-center lg:text-left">
                            <p className="mb-3">
                                We are excited that you are considering The Erudite World School (TEWS) for your child's education. Located on Yamuna Nagar Road, near Bata Chowk in Paonta Sahib, Sirmour, Himachal Pradesh (HP), 173025, our school offers a nurturing, co-educational environment focused on academic excellence and holistic development.
                            </p>
                            <p>
                                Serving students from various nearby areas, we are proud to be part of the vibrant educational community in Himachal Pradesh and look forward to partnering with you in your child's growth and learning journey.
                            </p>

                            {/* Buttons */}
                            <div className="flex justify-center lg:justify-start space-x-6 mt-5 font-bold">
                                <Link href="/Erudite_School/about">
                                    <button className="about-us bg-[#d59f0f] text-white px-6 py-2 rounded-full hover:bg-black border-2 hover:border-black border-[#d59f0f] transition-all duration-300 ease-in-out">
                                        ABOUT US
                                    </button>
                                </Link>

                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd8Lb-Z-6O820DpJcYjkP-bamxUL4wBVwmvHqBGvmhjIbUQsg/viewform" target='_blank'>
                                    <button className="apply text-[#d59f0f] px-6 py-2 rounded-full hover:bg-black hover:border-black border-2 border-[#d59f0f] transition-all duration-300 ease-in-out">
                                        APPLY TO TEWS
                                    </button>
                                </a>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;
