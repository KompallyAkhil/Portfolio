import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection = () => {
    return (
        
        <section id="contact" className="py-20 bg-neo-yellow border-b-3 border-black">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white border-3 border-black shadow-neo p-8 md:p-12">
                    <h2 className="text-4xl md:text-6xl font-display font-black mb-8 text-center uppercase">
                        Say Hello
                    </h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-bold mb-2 uppercase">Name</label>
                                <input type="text" className="neo-input" placeholder="JOHN DOE" />
                            </div>
                            <div>
                                <label className="block font-bold mb-2 uppercase">Email</label>
                                <input type="email" className="neo-input" placeholder="JOHN@EXAMPLE.COM" />
                            </div>
                        </div>

                        <div>
                            <label className="block font-bold mb-2 uppercase">Subject</label>
                            <select className="neo-input bg-white">
                                <option>JUST SAYING HI</option>
                                <option>PROJECT INQUIRY</option>
                                <option>FREELANCE WORK</option>
                                <option>OTHER</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-bold mb-2 uppercase">Message</label>
                            <textarea className="neo-input h-32 resize-none" placeholder="TELL ME SOMETHING COOL..."></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-neo-main text-white font-bold text-xl py-4 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center justify-center gap-3"
                        >
                            SEND IT <Send size={24} />
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
