export default function Page() {
    return (
        <>
            <div className="main mt-[90vh] px-4 py-8 text-center">
                <h1 className="text-5xl font-bold text-[#d59f0f] mb-4">Contact Us</h1>

                {/* Introduction Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">We'd Love to Hear from You!</h2>
                    <p className="text-gray-600">
                        Whether you have questions about admissions, academics, or student life, we're here to help. Reach out to us through the contact form below or by using the contact details provided.
                    </p>
                </section>

                

                {/* Contact Information Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Contact Details</h2>
                    <div className="max-w-2xl mx-auto text-left space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl text-gray-700">📍</span>
                            <p className="text-gray-600">Yamuna Nagar Raod, Near Bata Chowk,Paonta Sahib, Sirmour, HP, 173025</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-xl text-gray-700">📞</span>
                            <p className="text-gray-600">9418-1586-04, 7591-0015-33</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-xl text-gray-700">📧</span>
                            <p className="text-gray-600">EruditeWS.20@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-xl text-gray-700">📧</span>
                            <p className="text-gray-600">eruditeworldschool@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-xl text-gray-700">⏰</span>
                            <p className="text-gray-600">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </section>

                

                
            </div>
        </>
    );
}
