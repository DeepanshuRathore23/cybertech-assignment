'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import path from 'path';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundImages: { [key: string]: string } = {
    '/': '/school.jpeg',
    '/about': '/aboutBack.jpeg',
    '/admissions': '/admissionsBack.jpg',
    '/academics': '/academicsBack.jpeg',
    '/studentLife': '/studentLifeBack.jpg',
    '/athletics': '/athleticsBack.jpeg',
    '/contact': '/contactBack.jpeg',
    '/extracurricular': '/extracurricularBack.jpeg',
    '/events': '/e1image1.jpeg',
  };

  const backgroundSrc = backgroundImages[pathname] || '/school.jpeg';

  const Links = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Academics', href: '/academics' },
    { label: 'Athletics', href: '/athletics' },
    { label: 'Student Life', href: '/studentLife' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
    { label: 'login', href: '/login'},
  ];

  return (
    <>
            <div className="flex relative">
                {/* Video Background */}
                {pathname !== '/login' && pathname !== '/updateEvents' && (pathname === '/' ? (
                    <video
                    src="/video1.mp4"
                    className="absolute top-0 left-0 w-full h-[85vh] object-cover -z-10"
                    autoPlay
                    loop
                    muted
                />

                    
                ) : (
                    <img
                        src={backgroundImages[pathname]}
                        alt="background"
                        className="absolute top-0 left-0 w-full h-[85vh] object-cover -z-10"
                    />
                ))}
                
                {/* Dark Overlay for the Video Only */}
                {pathname !== '/login' && pathname !== '/updateEvents' && <div className="absolute top-0 left-0 w-full h-[85vh] bg-black opacity-30 -z-5"></div>}
                
                {/* Centered Text */}
                {pathname === '/' && 
                    <div className="absolute mt-[40vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 ">
                        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold">READY TO START YOUR NEXT</h1>
                        <h1 className='text-4xl md:text-6xl lg:text-6xl font-bold text-[#d59f0f]'>ADVENTURE?</h1>
                    </div>
                }


                {/* Navbar Content */}
                <div className={`fixed p-5 flex items-center w-full transition-all duration-300 ${isScrolled ? 'bg-[#F6F6F6]' : ''} z-30`}>
                    <div className="left mr-auto">
                        <img src='/school_logo.png' alt="logo" className={`transition-all duration-300 ${isScrolled ? 'h-14' : 'md:h-32 h-14'} w-auto`} />
                    </div>

                    {/* Center: Navigation Links with Vertical Separators */}
                    <div className={`hidden md:block center flex space-x-6 ${(isScrolled || pathname === '/login' || pathname === '/updateEvents') ? 'text-black' : 'text-white'}`}
                    >
                        <Link
                            href="/"
                            className={clsx(
                                `hover:text-[#d59f0f] transition-colors duration-300 `,
                                {
                                    'text-[#d59f0f]' : pathname === '/',
                                },
                            )}>
                                Home
                        </Link>

                        <Link 
                            href="/about" 
                            className={clsx(
                                `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 `,
                                {
                                    'text-[#d59f0f]' : pathname === '/about',
                                },
                            )}>
                                About Us
                        </Link>

                        <Link 
                            href="/admissions" 
                            className={clsx(
                                `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 `,
                                {
                                    'text-[#d59f0f]' : pathname === '/admissions',
                                },
                            )}>
                                Admissions
                        </Link>

                        <Link 
                            href="/academics" 
                            className={clsx(
                                `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 `,
                                {
                                    'text-[#d59f0f]' : pathname === '/academics',
                                },
                            )}>
                                Academics
                        </Link>

                        <Link 
                            href="/studentLife" 
                            className={clsx(
                                `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 `,
                                {
                                    'text-[#d59f0f]' : pathname === '/studentLife',
                                },
                            )}>
                                Student Life
                        </Link>

                        <Link 
                            href="/athletics" 
                            className={`border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300`}>
                                Athletics
                        </Link>

                        <Link 
                            href="/contact" 
                            className={clsx(
                                `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 `,
                                {
                                    'text-[#d59f0f]' : pathname === '/contact',
                                },
                            )}>
                                Contact
                        </Link>
                        <Link 
                            href="/events" 
                            className={clsx(
                                `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 `,
                                {
                                    'text-[#d59f0f]' : pathname === '/events',
                                },
                            )}>
                                Events
                        </Link>
                    </div>

                    <div className="right ml-auto">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd8Lb-Z-6O820DpJcYjkP-bamxUL4wBVwmvHqBGvmhjIbUQsg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                            <button className="text-white px-4 py-2 rounded-3xl bg-[#d59f0f] hover:bg-black transition-all duration-300 eas-in-out">
                                APPLY NOW
                            </button>
                        </a>
                        
                    </div>

                    <div className="md:hidden ml-6 z-80" >
                        {!isMenuOpen && <button onClick={() => setIsMenuOpen(true)} className='text-[#d59f0f] text-3xl'><Menu size={30}/></button>}
                        {isMenuOpen && <button onClick={() => setIsMenuOpen(false)} className='text-[#d59f0f] text-3xl z-50'><X size={30}/></button>}
                        
                    </div>
                </div>

            </div>

            {/* Mobile Menu: Links inside a white box when opened */}
            {isMenuOpen && (
            <div className='md:hidden bg-black'>
                {/* Centered Menu Modal */}
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80">
                    <div className="bg-white w-11/12 max-w-sm rounded-xl shadow-2xl p-6 relative animate-fade-in">
                        {/* Navigation Links */}
                        <nav className="flex flex-col space-y-5 mt-4 text-center text-lg font-semibold text-gray-800">
                        {Links.map((link) => (
                            <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-[#d59f0f] transition-colors duration-300"
                            >
                            {link.label}
                            </Link>
                        ))}
                        </nav>
                    </div>
                </div>
            </div>
            )}

                
            {pathname === '/' &&
                <div className="flex flex-wrap justify-center w-full p-1 mt-[78vh] mb-[5vh] md:space-x-4">
                  <div className="w-full sm:w-64 h-48 brightness-110 text-3xl pt-7 pl-5 font-bold text-white border border-white shadow-xl  mb-3" style={{ backgroundColor: '#d59f0f' }}>
                      WHERE WILL YOU VENTURE TO?
                  </div>
              
                  <Link href='/academics' className="w-full sm:w-64 h-48 bg-white brightness-110 border border-gray-300 shadow-xl hover:border-[#d59f0f] transition-colors duration-300 mx-4 sm:mx-0 mt-4 sm:mt-0 mb-3">
                      <div className="img flex justify-center">
                          <img src='/academics.png' alt="" className="h-20 w-20 mt-8" />
                      </div>
                      <div className="text flex justify-center mt-5 font-bold text-[#d59f0f] text-xl">
                          <h2>ACADEMICS</h2>
                      </div>
                  </Link>
              
                  <Link href='/athletics' className="w-full sm:w-64 h-48 bg-white brightness-110 border border-gray-300 shadow-xl hover:border-[#d59f0f] transition-colors duration-300 mx-4 sm:mx-0 mt-4 sm:mt-0  mb-3">
                      <div className="img flex justify-center">
                          <img src='/atheletics.png' alt="" className="h-20 w-20 mt-8" />
                      </div>
                      <div className="text flex justify-center mt-5 font-bold text-[#d59f0f] text-xl">
                          <h2>ATHLETICS</h2>
                      </div>
                  </Link>
              
                  <Link href='/extracurricular' className="w-full sm:w-64 h-48 bg-white brightness-110 border border-gray-300 shadow-xl hover:border-[#d59f0f] transition-colors duration-300 mx-4 sm:mx-0 mt-4 sm:mt-0 sm:mr-16 mb-3">
                      <div className="flex justify-center">
                          <img src='/extracurricular.png' alt="" className="h-20 w-20 mt-8" />
                      </div>
                      <div className="text flex justify-center mt-5 font-bold text-[#d59f0f] text-xl">
                          <h2>EXTRACURRICULAR</h2>
                      </div>
                  </Link>
                </div>
            
            }
        </>
  );
}
