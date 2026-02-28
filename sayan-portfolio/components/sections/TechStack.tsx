"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeInSection } from "../ui/FadeInSection";
import { techStack, TechCategory } from "@/data/techstack";
import { useMemo } from "react";
import { IconType } from "react-icons";

/* =======================
   ICON IMPORTS
======================= */

import {
    FaPython,
    FaJava,
    FaReact,
    FaNodeJs,
    FaAws,
    FaDocker,
    FaDatabase,
    FaGlobe,
    FaGitAlt,
    FaGithub,
    FaToolbox,
} from "react-icons/fa";

import {
    SiScikitlearn,
    SiPandas,
    SiNumpy,
    SiMysql,
    SiMongodb,
    SiJupyter,
    SiPostgresql,
    SiRedis,
    SiKubernetes,
    SiFirebase,
    SiNextdotjs,
    SiTailwindcss,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbBrandOpenai } from "react-icons/tb";

/* =======================
   ICON REGISTRY (SCALABLE)
======================= */

const iconRegistry: Record<string, IconType> = {
    /* Languages */
    python: FaPython,
    java: FaJava,
    javascript: FaReact,
    typescript: FaReact,

    /* Backend / Frameworks */
    node: FaNodeJs,
    flask: FaGlobe,
    fastapi: FaGlobe,
    next: SiNextdotjs,

    /* ML / Data */
    "scikit-learn": SiScikitlearn,
    pandas: SiPandas,
    numpy: SiNumpy,
    jupyter: SiJupyter,
    "jupyter notebook": SiJupyter,
    openai: TbBrandOpenai,
    langchain: TbBrandOpenai,
    antigravity: TbBrandOpenai,

    /* Databases */
    mysql: SiMysql,
    mongodb: SiMongodb,
    postgresql: SiPostgresql,
    redis: SiRedis,
    "vector database": FaDatabase,
    pinecone: FaDatabase,
    chromadb: FaDatabase,

    /* DevOps / Cloud */
    docker: FaDocker,
    aws: FaAws,
    kubernetes: SiKubernetes,

    /* Version Control */
    git: FaGitAlt,
    github: FaGithub,

    /* Tools */
    "vs code": VscVscode,
    firebase: SiFirebase,
    tailwind: SiTailwindcss,
};

/* =======================
   MAIN COMPONENT
======================= */

export default function TechStack() {
    const groupedTech = useMemo(() => {
        return techStack.reduce((acc, tech) => {
            if (!acc[tech.category]) {
                acc[tech.category] = [];
            }
            acc[tech.category].push(tech.name);
            return acc;
        }, {} as Record<TechCategory, string[]>);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 },
    };

    return (
        <section id="tech-stack" className="py-24 bg-secondary/10">
            <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Technical Arsenal"
                    subtitle="The tools, languages, and frameworks I use to build robust solutions."
                />

                <div className="space-y-16 mt-12">
                    {(Object.entries(groupedTech) as [TechCategory, string[]][]).map(
                        ([category, skills]) => (
                            <div key={category}>
                                <h3 className="text-2xl font-bold mb-8 text-pure flex items-center border-b border-soft/10 pb-4">
                                    <span className="w-2 h-8 bg-accent mr-4 rounded-full inline-block shadow-[0_0_10px_rgba(252,163,17,0.5)]"></span>
                                    {category}
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="flex flex-col items-center justify-center p-6 bg-secondary/20 rounded-xl border border-white/5 hover:border-accent hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(252,163,17,0.25)] transition-all duration-300 group cursor-pointer"
                                        >
                                            <div className="w-12 h-12 flex items-center justify-center mb-4 rounded-full bg-primary/50 group-hover:bg-accent/10 transition-colors duration-300">
                                                <span className="text-accent text-2xl group-hover:scale-125 transition-transform duration-300">
                                                    {symbolMapper(skill)}
                                                </span>
                                            </div>
                                            <span className="text-soft font-medium text-sm text-center group-hover:text-pure transition-colors duration-300">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </FadeInSection>
        </section>
    );
}

/* =======================
   SMART ICON MAPPER
======================= */

function symbolMapper(skill: string) {
    const lowercase = skill.toLowerCase();

    for (const key in iconRegistry) {
        if (lowercase.includes(key)) {
            const Icon = iconRegistry[key];
            return <Icon />;
        }
    }

    return <FaToolbox />; // default fallback icon
}