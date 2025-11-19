import React from 'react';
import { Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/KompallyAkhil" },
        { icon: Twitter, href: "https://x.com/AkhilKompally" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/akhilkompally/" },
        { icon: Mail, href: "mailto:akhilkompally27@gmail.com" }
    ];

    return (
        <footer className="bg-neo-dark text-white py-12 border-t-3 border-black">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-display font-bold mb-2">Akhil Kompally's Portfolio</h2>
                    <p className="text-gray-400 mb-2">© {new Date().getFullYear()} All rights reserved.</p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                        <Phone size={16} />
                        <span>+91 8498072762</span>
                    </div>
                </div>

                <div className="flex gap-6">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
