import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Prevent Font Awesome from adding its CSS automatically
config.autoAddCss = false;

function Footer() {
    return (
        <>
            <div className="bg-[#4d4d4d] w-full mt-20 pt-10 px-6 text-white flex flex-wrap lg:flex-nowrap text-sm">
                
                {/* Logo and About Section */}
                <div className="w-full lg:w-1/4 m-2 flex flex-col items-center lg:items-start">
                    <div className="school-logo">
                        <img src='/school_logo.png' alt="" className="h-24 w-24 lg:h-24 lg:w-24" />
                    </div>
                    <div className="about-school mt-6 text-center lg:text-left">
                        At The Erudite World School, students receive so much more than an ordinary education. We pride ourselves on creating a unique, exciting environment that embraces all types of learners and promotes growth both academically and personally. Students and families are also welcomed into a dynamic and supportive community.
                    </div>
                </div>

                {/* Address and Contact Information Section */}
                <div className="w-full lg:w-1/4 m-2 text-center lg:text-left">
                    <div className="line h-px bg-gray-500 mt-6 mb-4"></div>
                    <div className="address">
                        Yamuna Nagar Road, Near Bata Chowk, Paonta Sahib, Sirmour, HP, 173025
                    </div>
                    <div className="phone mt-4">
                        Phone1: 9418-1586-04
                    </div>
                    <div className="phone mt-1">
                        Phone2: 7591-0015-33
                    </div>
                    <div className="mail mt-4">
                        <span>Email: </span>
                        <a href="mailto:EruditeWS.20@gmail.com" className="hover:text-[#d59f0f]">EruditeWS.20@gmail.com</a>
                        <div></div>
                        <a href="mailto:EruditeWS.20@gmail.com" className="hover:text-[#d59f0f]">eruditeworldschool@gmail.com</a>
                    </div>
                    <div className="line h-px bg-gray-500 mt-6"></div>
                </div>

                {/* Quick Links Section */}
                <div className="w-full lg:w-1/4 m-2 text-center lg:text-left">
                    <div className="line h-px bg-gray-500 mb-4"></div>
                    <Link href="/about" className="hover:text-[#d59f0f] transition-colors duration-300 block my-2">About TEWS</Link>
                    <div className="line h-px bg-gray-500 my-4"></div>
                    <Link href="/admissions" className="hover:text-[#d59f0f] transition-colors duration-300 block my-2">Admissions</Link>
                    <div className="line h-px bg-gray-500 my-4"></div>
                    <Link href="/academics" className="hover:text-[#d59f0f] transition-colors duration-300 block my-2">Academics</Link>
                    <div className="line h-px bg-gray-500 my-4"></div>
                    <Link href="/studentLife" className="hover:text-[#d59f0f] transition-colors duration-300 block my-2">Student Life</Link>
                    <div className="line h-px bg-gray-500 my-4"></div>
                    <Link href="/athletics" className="hover:text-[#d59f0f] transition-colors duration-300 block my-2">Athletics</Link>
                    <div className="line h-px bg-gray-500"></div>
                </div>

                {/* Social Media and Map Section */}
                <div className="w-full lg:w-1/4 m-2 flex flex-col items-center">
                    <div className="social flex space-x-8 justify-center lg:justify-start mb-8">
                        <a className="hover:text-[#d59f0f] transition-colors duration-300" href="https://www.facebook.com/LRTEWS" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a className="hover:text-[#d59f0f] transition-colors duration-300" href="https://www.youtube.com/@theeruditeworldschool4741" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>
                    <div className="map w-full max-w-xs lg:max-w-sm mx-auto">
                        <div className="relative pb-[56.25%] h-0 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13759.460639916162!2d77.56703404474821!3d30.43769037470503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f23d533dbc55d%3A0x5e7db0ac5b4d117!2sThe%20Erudite%20World%20School!5e0!3m2!1sen!2sin!4v1731124150901!5m2!1sen!2sin"
                                className="absolute top-0 left-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="copyright h-14 w-full bg-[#383838] flex justify-center text-white items-center">
                © Copyright 2024 The Erudite World School. All Rights Reserved.
            </div>
        </>
    );
}

export default Footer;
