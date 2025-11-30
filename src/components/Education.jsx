import React from "react";
import { motion } from "framer-motion";
import collegeImage from "../assets/college.jpg";
const Education = () => {
    const educationData = [
        {
            college: "Keshav Memorial Engineering College",
            branch: "Btech in Computer Science and Engineering",
            year: "2022 - 2026",
            image: collegeImage
        },
    ];

    return (
        <div className="mt-20 max-w-4xl mx-auto text-black">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-10 text-left uppercase text-black">
                Education
            </h2>

            <div className="flex flex-col gap-6">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="neo-card bg-neo-accent flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors"
                    >
                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <div className="w-12 h-12 rounded-full bg-white border flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img
                                    src={edu.image}
                                    alt={edu.college}
                                    className="w-full h-full object-contain border-gray-900"
                                />
                            </div>

                            <div className="text-left">
                                <h3 className="text-xl md:text-2xl font-bold text-black">{edu.college}</h3>
                                <p className="text-lg text-black">
                                    {edu.branch}
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-auto text-left md:text-right mt-4 md:mt-0">
                            <p className="text-xl text-black font-mono">
                                {edu.year}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;