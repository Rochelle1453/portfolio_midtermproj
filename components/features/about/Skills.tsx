import { Section } from "@/components/common/Section";

import { Layout, Pencil, User, PenTool, Image } from "lucide-react";

const skills = [
    { name: "Frontend\nDevelopment", icon: Layout },
    { name: "UI/UX\nDesign", icon: PenTool },
    { name: "Problem\nSolving", icon: User },
    { name: "Graphics /\nIllustration", icon: Image },
    { name: "Creative\nThinking", icon: Pencil },
];

export function Skills() {
    return (
        <Section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-15    italic">Skills</h2>

            <div className="flex justify-center gap-30 flex-wrap">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-purple-300 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition">
                                <Icon size={36} className="text-gray-800 dark:text-black" />
                            </div>

                            <p className="text-lg italic text-center whitespace-pre-line md:text-xl/relaxed">
                                {skill.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}