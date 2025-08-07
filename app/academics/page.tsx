export default function Page() {
    return (
        <>
            <div className="main mt-[90vh] px-4 py-8 text-center">
                <h1 className="text-5xl font-bold text-[#d59f0f] mb-4">Academics</h1>

                {/* Academic Philosophy */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Academic Philosophy</h2>
                    <p className="text-gray-600">
                        At The Erudite World School, we believe in nurturing curiosity, critical thinking, and lifelong learning.
                        Our curriculum is designed to provide students with a solid foundation of knowledge, skills, and values 
                        that empower them to succeed in an ever-changing world.
                    </p>
                </section>

                {/* Curriculum Highlights */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Curriculum Highlights</h2>
                    <p className="text-gray-600">
                        Our curriculum offers a balanced mix of STEM, humanities, arts, and athletics, promoting a well-rounded
                        education. We emphasize hands-on learning, collaborative projects, and the integration of technology to 
                        enhance the learning experience.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                        <li>Comprehensive STEM programs with advanced labs and technology.</li>
                        <li>Language Arts that foster communication, creativity, and critical analysis.</li>
                        <li>Fine Arts and Performing Arts programs to nurture creative expression.</li>
                        <li>Athletic programs that encourage physical health and teamwork.</li>
                    </ul>
                </section>

                {/* Academic Programs */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Academic Programs</h2>
                    <p className="text-gray-600">
                        Erudite School offers a range of programs to cater to diverse interests and academic goals:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 text-left">
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Honors Program</h3>
                            <p className="text-gray-600 mt-2">
                                Designed for students who seek a more challenging academic experience with accelerated coursework
                                and research opportunities.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">STEM Program</h3>
                            <p className="text-gray-600 mt-2">
                                Provides rigorous training in Science, Technology, Engineering, and Mathematics, including
                                robotics, coding, and advanced mathematics.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">Arts & Humanities</h3>
                            <p className="text-gray-600 mt-2">
                                Encourages exploration of history, literature, philosophy, and the arts, fostering well-rounded
                                cultural and critical perspectives.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">International Baccalaureate (IB)</h3>
                            <p className="text-gray-600 mt-2">
                                A globally recognized program that prepares students for university and beyond with an
                                interdisciplinary approach to learning.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Faculty Spotlight */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Faculty</h2>
                    <p className="text-gray-600">
                        Our dedicated faculty brings a wealth of knowledge and experience to the classroom. Committed to 
                        fostering a love of learning, they support students through every stage of their educational journey.
                    </p>
                </section>

                {/* Academic Resources */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Academic Resources</h2>
                    <p className="text-gray-600">
                        We provide extensive resources to support student success, including a modern library, online research 
                        databases, tutoring services, and a learning support center.
                    </p>
                </section>

                
            </div>
        </>
    );
}
