import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col pt-20 relative overflow-hidden bg-neo-bg">

            {/* Hero Intro */}
            <div className="container mx-auto px-4 text-center z-10 flex-grow flex flex-col justify-center items-center min-h-[80vh]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block bg-neo-main text-white px-4 py-1 border-3 border-black mb-6 font-bold shadow-neo transform -rotate-2">
                        Hi !! This is <motion.span
                            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
                        >👋</motion.span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-6 leading-none uppercase">
                        Akhil<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-main to-neo-accent stroke-black" style={{ WebkitTextStroke: '3px black' }}>
                            Kompally
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-10 bg-white border-3 border-black p-4 shadow-neo">
                        I build things for the web. Sometimes they break, but mostly they look cool.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20">
                        <a href="https://drive.google.com/file/d/1hlacdU7imhof8EHahynIfzGpggrDWZxm/view" target='_blank' className="neo-btn text-xl">
                            VIEW RESUME
                        </a>
                        <a href="#projects" className="px-6 py-3 bg-white text-black font-bold border-3 border-black shadow-neo transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-neo-hover active:translate-x-[5px] active:translate-y-[5px] active:shadow-none text-xl">
                            VIEW PROJECTS
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Marquee Separator */}
            <div className="w-full bg-neo-yellow border-y-3 border-black py-3 overflow-hidden whitespace-nowrap mb-20">
                <motion.div
                    className="inline-block"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-2xl font-bold mx-8">
                            ★ AVAILABLE FOR HIRE ★ REACT ★ TAILWIND ★ DESIGN ★
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Merged About Content */}
            <div id="about" className="container mx-auto px-4 pb-20">
                <h2 className="text-5xl md:text-7xl font-display font-black mb-16 text-center uppercase">
                    Who Am I?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="neo-card bg-neo-yellow rotate-1"
                    >
                        <h3 className="text-3xl font-bold mb-4 border-b-3 border-black pb-2">THE STORY</h3>
                        <p className="text-lg font-medium leading-relaxed">
                            I'm a developer who believes that web design should be fun, bold, and memorable.
                            I started coding because I wanted to break things, but eventually learned how to put them back together.
                            Now, I build digital experiences that stand out in a sea of sameness.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="neo-card bg-neo-accent -rotate-1"
                    >
                        <h3 className="text-3xl font-bold mb-4 border-b-3 border-black pb-2">THE MISSION</h3>
                        <p className="text-lg font-medium leading-relaxed">
                            To create websites that are not just functional, but also have personality.
                            I combine clean code with chaotic energy to deliver results that leave an impression.
                            Let's make the internet weird again (in a good way).
                        </p>
                    </motion.div>
                </div>

                <div className="mt-16 flex justify-center">
                    <div className="bg-black text-white p-8 border-3 border-neo-main shadow-neo transform rotate-2 max-w-2xl text-center">
                        <p className="text-2xl font-display uppercase">
                            "Design is intelligence made visible." <br />
                            <span className="text-neo-main">- Alina Wheeler</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Elements (retained) */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-neo-yellow border-3 border-black rounded-full opacity-50 hidden md:block pointer-events-none"></div>
            <div className="absolute top-1/2 right-10 w-32 h-32 bg-neo-accent border-3 border-black opacity-50 hidden md:block pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;
