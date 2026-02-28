import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    {/* Brand/Logo Area */}
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-pure tracking-tighter mb-2">
                            Sayan<span className="text-accent"> Mondal</span>
                        </h2>
                        <p className="text-soft/60 text-sm max-w-xs">
                            Building intelligent, scalable, and beautifully designed digital experiences.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/Sayan-Mondal2022"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-soft hover:bg-accent hover:text-primary transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(252,163,17,0.5)]"
                            aria-label="GitHub"
                        >
                            <FiGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/sayan-sm"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-soft hover:bg-accent hover:text-primary transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(252,163,17,0.5)]"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-soft/50 text-xs">
                    <p>© {currentYear} Sayan Mondal. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">
                        Designed & Built with <span className="text-accent hover:animate-pulse">Next.js & Tailwind</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
