import React from "react";
import { Link } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import aboutImage from "../../../assets/aboutImage2.jpg";
import docTitle from "../../../Hooks/Title";
const About = () => {
    docTitle("About | EduGleam")
  return (
    <section className="pt-16 px-6 ">
      <div className="sm:mx-4 flex flex-col gap-12">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <MotionConfig transition={{ type: "spring" }}>
            <motion.div
              whileInView={{ x: [-500, 0] }}
              transition={{ duration: 2, ease: "linear" }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full lg:w-1/2 relative"
            >
              <img
                className=" w-full lg:w-11/12 h-[300px] rounded-md object-cover object-left"
                src={aboutImage}
                alt="Scholarship Image"
              />
            </motion.div>
          </MotionConfig>

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-primary font-poppins">
              Empowering Your Academic Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-roboto">
              At Scholarship Management, we believe every student deserves the
              opportunity to succeed. Our platform provides access to a wide
              variety of scholarships designed to help you achieve your academic
              and career goals. Whether you're looking for financial assistance
              or specialized programs, we're here to guide you every step of the
              way.
            </p>
          </div>
        </div>

        {/* Regulations Section */}
        <div>
          <h3 className="text-3xl font-bold text-primary font-poppins">
            Scholarship Regulations
          </h3>
          <p className="text-lg text-gray-700 dark:text-white font-roboto mt-4">
            In order to apply for scholarships on our platform, there are
            certain rules and regulations that must be followed. These ensure
            fairness and transparency for all applicants.
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 dark:text-white font-roboto">
            <li>
              Applicants must be currently enrolled in an accredited institution
              or planning to enroll for the upcoming semester.
            </li>
            <li>
              Scholarships are available for undergraduate, graduate, and
              doctoral students.
            </li>
            <li>
              Each scholarship may have specific eligibility criteria, such as
              academic performance, field of study, or financial need.
            </li>
            <li>
              Applicants must submit all required documents (e.g., academic
              transcripts, recommendation letters, etc.) by the deadline.
            </li>
            <li>
              False or misleading information will result in immediate
              disqualification from the application process.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary mt-12 font-poppins">
            Payment Information
          </h3>
          <p className="text-lg text-gray-700 dark:text-white font-roboto mt-4 ">
            Our platform connects students with scholarship opportunities, but
            we do not handle payments directly. However, if awarded a
            scholarship, payment terms will be determined by the respective
            scholarship provider. Below are the general payment procedures:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 dark:text-white font-roboto">
            <li>
              <strong>Disbursement:</strong> Payment is typically disbursed
              directly to the student’s educational institution or bank account,
              depending on the scholarship’s terms.
            </li>
            <li>
              <strong>Amount:</strong> Scholarship amounts vary based on the
              provider and the specific scholarship program.
            </li>
            <li>
              <strong>Payment Schedule:</strong> The scholarship payment
              schedule is determined by the scholarship provider. Some offer
              one-time payments, while others may disburse funds over multiple
              semesters.
            </li>
            <li>
              <strong>Application Fees:</strong> Our platform does not charge
              any application fees. Any fees associated with specific
              scholarships will be listed in the individual scholarship details.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary mt-12 font-poppins">
            Top-Class University Opportunities
          </h3>
          <p className="text-lg text-gray-700 dark:text-white font-roboto mt-4">
            Our platform connects students with scholarship opportunities at the
            most prestigious universities worldwide. We partner with top
            universities to provide scholarships that give students access to
            world-class education. Here are some of the top universities
            offering scholarships through our platform:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 dark:text-white">
            <li>
              <strong>Harvard University:</strong> Scholarships for
              undergraduate and graduate students in various fields.
            </li>
            <li>
              <strong>Stanford University:</strong> Opportunities for
              research-based scholarships in science, engineering, and
              technology.
            </li>
            <li>
              <strong>Oxford University:</strong> Scholarships for international
              students in a variety of disciplines.
            </li>
            <li>
              <strong>MIT:</strong> Full-tuition scholarships for students
              pursuing degrees in STEM fields.
            </li>
            <li>
              <strong>Cambridge University:</strong> Programs supporting
              underprivileged students with a passion for academic excellence.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary mt-12 font-poppins">
            Most Popular Subjects for Scholarships
          </h3>
          <p className="text-lg text-gray-700 dark:text-white font-roboto mt-4">
            Scholarships are available in a wide range of subjects. However,
            certain fields of study tend to receive more scholarships due to
            their demand and importance. Here are the most popular subjects for
            scholarships:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 dark:text-white font-roboto">
            <li>
              <strong>Engineering:</strong> Scholarships are available for
              electrical, mechanical, civil, and computer engineering.
            </li>
            <li>
              <strong>Medical Sciences:</strong> Scholarships for students
              pursuing degrees in medicine, nursing, and public health.
            </li>
            <li>
              <strong>Computer Science & IT:</strong> Financial aid for students
              studying software engineering, data science, and cybersecurity.
            </li>
            <li>
              <strong>Business & Economics:</strong> Scholarships for students
              interested in business administration, economics, and finance.
            </li>
            <li>
              <strong>Environmental Science:</strong> Opportunities for students
              passionate about environmental protection and sustainability.
            </li>
            <li>
              <strong>Law:</strong> Financial aid for students pursuing law
              degrees, including international law and human rights law.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary mt-12 font-poppins">
            Our Work Process
          </h3>
          <p className="text-lg text-gray-700 dark:text-white font-roboto mt-4">
            Our process is designed to make the scholarship application journey
            simple, clear, and effective. Here’s how we work with students to
            provide them with the best opportunities:
          </p>
          <ol className="list-decimal pl-6 mt-4 text-lg text-gray-700 dark:text-white font-roboto">
            <li>
              <strong>Step 1: Registration</strong> - Create an account on our
              platform and complete your profile with the necessary details.
            </li>
            <li>
              <strong>Step 2: Scholarship Search</strong> - Browse through a
              list of available scholarships that match your qualifications,
              needs, and interests.
            </li>
            <li>
              <strong>Step 3: Application Submission</strong> - Submit your
              application along with all required documents, including your
              academic transcripts and recommendation letters.
            </li>
            <li>
              <strong>Step 4: Review Process</strong> - Our team and scholarship
              providers will review your application. If needed, additional
              information may be requested.
            </li>
            <li>
              <strong>Step 5: Award Notification</strong> - Once the scholarship
              is awarded, you will be notified via email and through your
              account dashboard.
            </li>
            <li>
              <strong>Step 6: Scholarship Acceptance</strong> - After receiving
              the award, you will need to accept the scholarship and follow the
              payment instructions from the provider.
            </li>
          </ol>
        </div>


        <div className="mt-12">
          <Link to={"/scholarships"}>
            <button className="inline-block font-roboto font-medium bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300">
              Explore Scholarships
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
