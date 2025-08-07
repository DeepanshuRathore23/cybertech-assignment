export default function Page() {
    return (
        <>
            <div className="main mt-[90vh] px-4 py-8 text-center">
                <h1 className="text-5xl font-bold text-[#d59f0f] mb-4">Admissions</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Welcome to Our Admissions Office</h2>
                    <p className="text-gray-600">
                        We're excited to welcome new students to The Erudite World School! Here, you’ll find all the details 
                        about our admissions process, important dates, and how to apply.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Application Process</h2>
                    <ol className="list-decimal list-inside text-gray-600">
                        <li>Complete the online application form.</li>
                        <li>Submit required documents (transcripts, recommendations, etc.).</li>
                        <li>Schedule an interview with our admissions team.</li>
                        <li>Receive admission decision.</li>
                    </ol>
                </section>

                

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Admission Criteria</h2>
                    <p className="text-gray-600">
                        We look for students with strong academic records, a commitment to extracurricular involvement, 
                        and a passion for learning. Admission decisions are based on a holistic review of each applicant.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Tuition Fee</h2>
                    <p className="text-gray-600">
                        Our tuition fees vary by program and grade level. For more details on fees, please contact our admissions office.
                    </p>
                </section>

                
            </div>
        </>
    );
}
