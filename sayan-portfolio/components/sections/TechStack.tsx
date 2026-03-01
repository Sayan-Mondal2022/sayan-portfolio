"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeInSection } from "../ui/FadeInSection";
import { techStack, TechCategory } from "@/data/techstack";
import { useMemo } from "react";
import { IconType } from "react-icons";

import {
  FaPython,
  FaJava,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
  FaGlobe,
  FaGitAlt,
  FaGithub,
  FaToolbox,
  FaServer, 
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
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiFlask, 
  SiFastapi, 
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbBrandOpenai } from "react-icons/tb";

const iconRegistry: Record<string, IconType> = {
  /* Languages */
  python: FaPython,
  java: FaJava,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss3,

  /* Backend / Frameworks */
  node: FaNodeJs,
  flask: SiFlask,
  fastapi: SiFastapi ,
  next: SiNextdotjs,
  "rest apis": FaServer, 

  /* ML / Data */
  "scikit-learn": SiScikitlearn,
  pandas: SiPandas,
  numpy: SiNumpy,
  jupyter: SiJupyter,
  openai: TbBrandOpenai,
  langchain: TbBrandOpenai,

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


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};


export default function TechStack() {
  const groupedTech = useMemo(() => {
    return techStack.reduce((acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech.name);
      return acc;
    }, {} as Record<TechCategory, string[]>);
  }, [techStack]);

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
                  <span className="w-2 h-8 bg-accent mr-4 rounded-full" />
                  {category}
                </h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      className="flex flex-col items-center justify-center p-6 bg-secondary/20 rounded-xl border border-white/5 hover:border-accent hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-4 rounded-full bg-primary/50 group-hover:bg-accent/10 transition-colors duration-300">
                        <span className="text-accent group-hover:scale-125 transition-transform duration-300">
                          {renderIcon(skill)}
                        </span>
                      </div>

                      <span className="text-soft font-medium text-sm text-center group-hover:text-pure transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )
          )}
        </div>
      </FadeInSection>
    </section>
  );
}

function renderIcon(skill: string) {
  const lowercase = skill.toLowerCase();

  // Sort keys by length (longest first)
  const sortedKeys = Object.keys(iconRegistry).sort(
    (a, b) => b.length - a.length
  );

  const matchedKey = sortedKeys.find((key) =>
    lowercase.includes(key)
  );

  const Icon = matchedKey
    ? iconRegistry[matchedKey]
    : FaToolbox;

  return <Icon size={24} />;
}