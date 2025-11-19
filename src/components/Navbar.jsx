import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];
      
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-neo-white border-b-3 border-black px-4 py-3 md:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-display font-bold italic hover:text-neo-main transition-colors">
                    Akhil Kompally's Portfolio
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="font-bold text-lg hover:text-neo-main hover:underline decoration-3 underline-offset-4 transition-all"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 border-2 border-black shadow-neo active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all bg-neo-yellow"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-neo-white border-b-3 border-black shadow-neo md:hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-xl font-bold border-2 border-black p-3 hover:bg-neo-accent hover:shadow-neo-hover transition-all text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
