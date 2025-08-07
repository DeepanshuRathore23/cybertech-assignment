export default function Page() {
    return (
        <>
            <div className="main mt-[90vh] px-4 py-8 text-center">
                <h1 className="text-5xl font-bold text-[#d59f0f] mb-4">Extracurricular Activities</h1>

                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Explore Your Passions Beyond the Classroom</h2>
                    <p className="text-gray-600">
                        At Erudite School, we believe in the power of extracurricular activities to foster creativity, teamwork, and leadership. Our students have the opportunity to pursue their passions and discover new interests.
                    </p>
                </section>

                {/* Activity Categories */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Programs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Performing Arts</h3>
                            <p className="text-gray-600 mt-2">Join our theater productions, choir, or dance troupe and bring your talent to the stage.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Visual Arts</h3>
                            <p className="text-gray-600 mt-2">Explore painting, sculpture, digital art, and more in our well-equipped art studio.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">STEM Clubs</h3>
                            <p className="text-gray-600 mt-2">Get involved in robotics, coding, and science fairs with like-minded peers.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Sports Teams</h3>
                            <p className="text-gray-600 mt-2">From basketball to track and field, find your sport and become part of our team spirit.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Debate and Model UN</h3>
                            <p className="text-gray-600 mt-2">Develop your public speaking and critical thinking skills in national competitions.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Community Service</h3>
                            <p className="text-gray-600 mt-2">Join service projects and make a difference in our community.</p>
                        </div>
                    </div>
                </section>

                {/* Benefits of Participation */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Participate?</h2>
                    <p className="text-gray-600 mb-4">
                        Extracurriculars provide students with a platform to enhance their skills, build friendships, and create lasting memories. Participation helps foster teamwork, responsibility, and a sense of community.
                    </p>
                </section>

                {/* Student Testimonials */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Student Experiences</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <p className="text-gray-600">"Joining the robotics club helped me explore my passion for technology and learn teamwork." - Alex, 10th Grade</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <p className="text-gray-600">"Performing in the annual play was unforgettable, and it helped me gain confidence." - Mia, 11th Grade</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <p className="text-gray-600">"Being on the soccer team taught me discipline and gave me lifelong friends." - Liam, 9th Grade</p>
                        </div>
                    </div>
                </section>

                {/* How to Join */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">How to Get Involved</h2>
                    <p className="text-gray-600">
                        To join an extracurricular activity, visit the school office or reach out to the program coordinators. Club meetings and practice schedules are available in the student portal.
                    </p>
                </section>

                
            </div>
        </>
    );
}

