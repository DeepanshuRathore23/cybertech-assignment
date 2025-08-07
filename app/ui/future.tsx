import Link from "next/link";

function Future() {
    return (
        <>
            <div className="main m-4">
                {/* Vertical Line */}
                <div className="line flex justify-center">
                    <div className="w-1 h-16 sm:h-32 bg-[#d59f0f]"></div>
                </div>

                {/* Headline */}
                <div className="bright-future mt-10 sm:mt-20 space-y-2 sm:space-y-3 text-center">
                    <div className="text-3xl sm:text-5xl font-bold">YOUR FUTURE IS BRIGHT</div>
                    <div className="text-3xl sm:text-5xl font-bold">WITH TEWS</div>
                </div>

                {/* Buttons */}
                <div className="btns flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-20 mt-6 sm:mt-10 font-bold">
                    <div className="about-us">
                        <Link href="/about">
                            <button className="bg-[#d59f0f] text-white px-4 sm:px-6 py-1 rounded-full hover:bg-black border-2 hover:border-black border-[#d59f0f] transition-all duration-300 ease-in-out">
                                ABOUT US
                            </button>
                        </Link>
                        
                    </div>
                    <div className="apply">
                        <Link href="/academics">
                            <button className="text-[#d59f0f] px-4 sm:px-6 py-1 rounded-full hover:bg-black hover:border-black border-2 border-[#d59f0f] transition-all duration-300 ease-in-out">
                                EXPLORE ACADEMICS
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Future;
