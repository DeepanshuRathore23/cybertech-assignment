export default function Page() {
    return (
        <>
            <div className="main mt-[90vh] px-4 py-8 text-center">
                <h1 className="text-5xl font-bold text-[#d59f0f] mb-4">Athletics</h1>

                {/* Overview Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Athletic Philosophy</h2>
                    <p className="text-gray-600">
                        At The Erudite World School, we believe in the power of sports to foster teamwork, discipline, and leadership.
                        Our athletic programs are designed to provide students with opportunities to excel physically,
                        develop valuable life skills, and represent the school in a positive light.
                    </p>
                </section>

                {/* Sports Teams */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Sports Teams</h2>
                    <p className="text-gray-600">
                        We offer a wide variety of sports for students to join at all skill levels, from beginner to elite competition.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                        <li>Basketball</li>
                        <li>Soccer</li>
                        <li>Volleyball</li>
                        <li>Track and Field</li>
                        <li>Tennis</li>
                        <li>Badminton</li>
                        <li>Chess</li>
                        
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Upcoming</h2>
                    
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                        <li>Horse Riding</li>
                        <li>Swimming</li>
                        <li>Baseball</li>
                    </ul>
                </section>

                {/* Athletic Facilities */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">State-of-the-Art Facilities</h2>
                    <p className="text-gray-600">
                        Our athletics program is supported by top-tier facilities, providing athletes with everything they need to train and compete at their best:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Gymnasium</h3>
                            <p className="text-gray-600 mt-2">
                                A fully equipped gym for basketball, volleyball, and other indoor sports, complete with bleachers and seating for spectators.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Outdoor Sports Fields</h3>
                            <p className="text-gray-600 mt-2">
                                Spacious fields for soccer, baseball, track and field events, and more, all designed for optimal performance.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Swimming Pool</h3>
                            <p className="text-gray-600 mt-2">
                                A competition-grade swimming pool for training and swim meets.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Fitness Center</h3>
                            <p className="text-gray-600 mt-2">
                                A modern fitness center with equipment for strength training, cardio, and conditioning.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Coaching Staff */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Coaching Staff</h2>
                    <p className="text-gray-600">
                        Our dedicated coaches are committed to helping student-athletes reach their full potential both on and off the field. 
                        With years of experience and a passion for mentoring, they provide expert training, guidance, and support to ensure success in competition and personal growth.
                    </p>
                </section>

                {/* Student Involvement */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Get Involved</h2>
                    <p className="text-gray-600">
                        Whether you're a seasoned athlete or just starting, Erudite School offers plenty of opportunities for students to get involved:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                        <li>Join a school team or club sport.</li>
                        <li>Attend games and support your peers as a fan.</li>
                        <li>Participate in intramural sports and recreational leagues.</li>
                        <li>Volunteer as a team manager or in event coordination.</li>
                    </ul>
                </section>

                

                
            </div>
        </>
    );
}
