"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeInSection } from "../ui/FadeInSection";

export default function Experience() {
    const experiences = [
        {
            title: "Supervised Machine Learning Certification",
            company: "Coursera",
            date: "2024",
            description: "Completed training focused on regression, classification, model evaluation, and practical implementation of supervised learning algorithms using Python.",
            type: "certification"
        },
        {
            title: "Machine Learning & Data Science Bootcamp",
            company: "Udemy",
            date: "2024",
            description: "Gained hands-on experience in data preprocessing, model building, and end-to-end machine learning workflows using Python, Pandas, NumPy, and Scikit-learn.",
            type: "certification"
        },
        {
            title: "Deep Learning & NLP Certification",
            company: "Udemy",
            date: "2024",
            description: "Learned neural networks, deep learning fundamentals, and natural language processing techniques for real-world AI applications.",
            type: "certification"
        },
        {
            title: "Agentic AI Internship",
            company: "Innomatics Research Labs",
            date: "2026 - Present",
            description: "Undergoing hands-on training in Agentic AI systems, focusing on multi-agent architectures, LLM orchestration, autonomous decision-making, and real-world intelligent agent deployment.",
            type: "training"
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            <FadeInSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Experience & Achievements" subtitle="A brief timeline of my professional journey and notable milestones." />

                <div className="mt-16 relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/10 to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-center cursor-pointer group ${isEven ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[-5px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(252,163,17,1)] z-10 hidden md:block group-hover:scale-150 transition-transform duration-300" />

                                    {/* Date (Desktop) */}
                                    <div className={`hidden md:block w-1/2 ${isEven ? "text-left pl-12" : "text-right pr-12"}`}>
                                        <span className="text-accent font-mono text-sm uppercase tracking-wider bg-accent/10 py-1 px-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                                            {exp.date}
                                        </span>
                                    </div>

                                    {/* Content Card */}
                                    <div className="md:w-1/2 w-full pl-8 md:pl-0">
                                        <div className={`bg-secondary/30 p-8 rounded-2xl border border-white/5 group-hover:border-accent/40 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_-15px_rgba(252,163,17,0.3)] transition-all duration-300 backdrop-blur-sm ${isEven ? "md:mr-12" : "md:ml-12"
                                            }`}>
                                            <div className="md:hidden mb-4">
                                                <span className="text-accent font-mono text-xs uppercase tracking-wider bg-accent/10 py-1 px-3 rounded-full">
                                                    {exp.date}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-pure mb-1 group-hover:text-accent transition-colors duration-300">{exp.title}</h3>
                                            <h4 className="text-lg text-accent/80 font-medium mb-4">{exp.company}</h4>
                                            <p className="text-soft/80 leading-relaxed text-sm group-hover:text-soft transition-colors duration-300">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
}
