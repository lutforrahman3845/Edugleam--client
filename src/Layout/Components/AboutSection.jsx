import React from "react";
import aboutImage from "../../assets/aboutImage3.jpeg"; // Replace with your image path
import aboutImag2 from "../../assets/aboutImage4.jpeg"; // Replace with your image path
import { Link } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="pt-8 md:pt-16 px-4 lg:pt-20">
      <div className="sm:mx-4 flex flex-col md:flex-row-reverse items-center gap-8">
        <MotionConfig transition={{ type: "spring" }}>
          <motion.div
            whileInView={{ x: [500, 0] }}
            transition={{ duration: 2, ease: "linear" }}
            viewport={{ once: true, amount: 0.2 }}
            className="hidden lg:block w-full lg:w-1/2 relative shadow-sm"
          >
            <div>
              <img
                className="rounded-md  lg:w-11/12 xl:w-4/5 h-96 object-cover"
                src={aboutImage}
                alt="About Image"
              />
              <img
                className="absolute bottom-0 lg:right-0 xl:right-8  w-80 border rounded-md shadow-md"
                src={aboutImag2}
                alt="Additional Image"
              />
            </div>
          </motion.div>
        </MotionConfig>

        <div className="w-full lg:w-1/2">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-primary font-poppins">
              Unlock Your Academic Dreams
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg  font-roboto">
            EduGleam is dedicated to helping students achieve their academic dreams by providing information and access to the best scholarship opportunities. Whether you're a top performer, an aspiring international student, or from an underprivileged background, we have something for you.
            </p>

            {/* Dot Points with Redesign */}
            <div className="space-y-3 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="flex items-center justify-center p-2 bg-primary text-white rounded-full font-bold "></span>
                <p className="text-base md:text-lg text-gray-700 dark:text-white font-roboto">
                  <strong>Achieve Excellence:</strong> Full scholarships for
                  exceptional academic achievers.
                </p>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="flex items-center justify-center p-2 bg-primary text-white rounded-full font-bold "></span>
                <p className="text-base md:text-lg text-gray-700 dark:text-white font-roboto">
                  <strong>Global Exposure:</strong> Opportunities to study at
                  top-tier international institutions.
                </p>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="flex items-center justify-center p-2 bg-primary text-white rounded-full font-bold "></span>
                <p className="text-base md:text-lg text-gray-700 dark:text-white font-roboto">
                  <strong>Inclusive Support:</strong> Dedicated programs for
                  underprivileged students to succeed.
                </p>
              </div>
            </div>
            <Link to={"/scholarships"}>
              <button className="inline-block mt-8 font-roboto  bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300">
                Explore Scholarships
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
