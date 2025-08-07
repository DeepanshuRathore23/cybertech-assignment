export default function Page() {
    return (
        <>
            <div className="main mt-[90vh] px-4 py-8 text-center">
                <h1 className="text-5xl font-bold text-[#d59f0f] mb-4">Student Life</h1>

                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">A Vibrant Campus Experience</h2>
                    <p className="text-gray-600">
                        At The Erudite World School, we believe in fostering a well-rounded student experience that goes beyond academics. 
                        Our students are encouraged to explore their passions, build lifelong friendships, and engage in a variety of enriching activities.
                    </p>
                </section>

                {/* Clubs and Organizations */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Clubs and Organizations</h2>
                    <p className="text-gray-600">
                        With over 30 student clubs and organizations, Erudite School offers something for everyone. Whether you are interested in leadership, service, or creativity, there's a community for you.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Student Government</h3>
                            <p className="text-gray-600 mt-2">Lead and organize events, represent your peers, and influence change within the school.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Robotics Club</h3>
                            <p className="text-gray-600 mt-2">Explore the world of robotics through hands-on projects and competitions.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Creative Writing Club</h3>
                            <p className="text-gray-600 mt-2">Develop your writing skills while collaborating with other budding authors.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Environmental Club</h3>
                            <p className="text-gray-600 mt-2">Get involved in environmental sustainability projects and awareness campaigns.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Debate Team</h3>
                            <p className="text-gray-600 mt-2">Sharpen your public speaking and critical thinking skills in national and international debates.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Art Club</h3>
                            <p className="text-gray-600 mt-2">Express your creativity and learn new techniques in a supportive artistic community.</p>
                        </div>
                    </div>
                </section>

                {/* Events and Activities */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Campus Events</h2>
                    <p className="text-gray-600">
                        Our school hosts a variety of exciting events throughout the year, including cultural festivals, talent shows, fundraisers, and more. These events provide students with opportunities to get involved, showcase their talents, and make memories with friends.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Annual Talent Show</h3>
                            <p className="text-gray-600 mt-2">A night to showcase the diverse talents of our students, from music to dance to drama.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">International Week</h3>
                            <p className="text-gray-600 mt-2">Celebrate cultures from around the world with food, performances, and activities.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Community Service Day</h3>
                            <p className="text-gray-600 mt-2">Students participate in a day of volunteering and giving back to the local community.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Spring Formal</h3>
                            <p className="text-gray-600 mt-2">A fun and elegant evening for students to celebrate the end of the school year.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Sports Day</h3>
                            <p className="text-gray-600 mt-2">An exciting day filled with athletic competitions and team spirit.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Holiday Bazaar</h3>
                            <p className="text-gray-600 mt-2">A fun shopping experience with handmade goods, local vendors, and seasonal treats.</p>
                        </div>
                    </div>
                </section>

                {/* Student Well-Being */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Student Well-Being</h2>
                    <p className="text-gray-600">
                        We prioritize the mental, emotional, and physical well-being of our students. Our counseling services, wellness programs, and health resources ensure that every student has the support they need to thrive.
                    </p>
                </section>

                {/* Leadership Opportunities */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Leadership Opportunities</h2>
                    <p className="text-gray-600">
                        Erudite School provides ample opportunities for students to take on leadership roles, whether through student government, club leadership, sports captaincies, or community service projects.
                    </p>
                </section>

                
            </div>
        </>
    );
}
