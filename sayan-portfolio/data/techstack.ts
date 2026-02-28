// data/techStack.ts

export type TechCategory =
    | "Languages"
    | "Web Technologies"
    | "Machine Learning & AI"
    | "Databases"
    | "Tools & Technologies";

export interface TechItem {
    name: string;
    category: TechCategory;
}

export const techStack: TechItem[] = [
    // Languages
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },

    // Web Technologies
    { name: "HTML", category: "Web Technologies" },
    { name: "CSS", category: "Web Technologies" },
    { name: "JavaScript", category: "Web Technologies" },
    { name: "REST APIs", category: "Web Technologies" },
    { name: "Flask", category: "Web Technologies" },
    { name: "FastAPI", category: "Web Technologies" },

    // Machine Learning & AI
    { name: "Scikit-learn", category: "Machine Learning & AI" },
    { name: "Pandas", category: "Machine Learning & AI" },
    { name: "NumPy", category: "Machine Learning & AI" },
    { name: "LangChain", category: "Machine Learning & AI" },
    { name: "RAG", category: "Machine Learning & AI" },
    { name: "Vector Databases", category: "Machine Learning & AI" },

    // Databases
    { name: "MySQL", category: "Databases" },
    { name: "MongoDB", category: "Databases" },

    // Tools & Technologies
    { name: "VS Code", category: "Tools & Technologies" },
    { name: "Jupyter Notebook", category: "Tools & Technologies" },
    { name: "Git", category: "Tools & Technologies" },
    { name: "GitHub", category: "Tools & Technologies" },
    { name: "Docker", category: "Tools & Technologies" },
    { name: "AWS", category: "Tools & Technologies" },
];