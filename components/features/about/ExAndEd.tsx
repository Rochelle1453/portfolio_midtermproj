import Image from "next/image";
import { Section } from "@/components/common/Section";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

type Education = {
  school: string;
  location: string;
  period: string;
};

const experiences: Experience[] = [
  {
    title: "Motor Insurance Assistant",
    company: "Chamberlyn SP Cordova - Cebu City",
    period: "2024 - 2025",
    description: [
      "MV Registration Renewal",
      "Licensing",
    ],
  },
];

const education: Education[] = [
  {
    school: "Pilipog Elementary School",
    location: "Pilipog, Cordova Cebu",
    period: "2011 - 2017",
  },
  {
    school: "Cordova National High School",
    location: "Day-as, Cordova Cebu",
    period: "2017 - 2023",
  },
  {
    school: "Bachelor of Science in Information Technology",
    location: "Cordova Public College",
    period: "2023 - Present",
  },
];

export function WorkEducation() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center justify-center gap-0">
        
        {/* IMAGE */}
        <Image
          src="/WorkEducation.png"
          alt="Profile"
          width={500}
          height={800}
          className="object-contain -mr-0 md:-mr-30 w-auto h-auto"
        />

        {/* CONTENT */}
        <div className="border-2 border-purple-400 rounded-t-[200px] rounded-b-lg px-10 py-30 max-w-md w-full">
          
          {/* WORK EXPERIENCE */}
          <h2 className="text-3xl italic font-semibold mb-6 text-start">
            Working Experience
          </h2>

          <div className="relative border-l-2 border-gray-300 pl-6 space-y-6 mb-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative space-y-3">
                <span className="absolute -left-[1.95rem] text-primary bg-background flex items-center justify-center text-s">
  ★
</span>
                
                <p className="text-sm">{exp.period}</p>
                <p className="text-sm font-medium">{exp.title}</p>
                <p className="text-sm">{exp.company}</p>

                {exp.description.map((item, i) => (
                  <p key={i} className="text-sm ml-6 list-disc">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <h2 className="text-3xl italic font-semibold mb-6 text-start">
            Education
          </h2>

          <div className="relative border-l-2 border-gray-300 pl-6 space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="relative space-y-3">
                <span className="absolute -left-[1.95rem] text-primary bg-background flex items-center justify-center text-s">
  ★
</span>
                
                <p className="text-sm">{edu.period}</p>
                <p className="text-sm font-medium">{edu.school}</p>
                <p className="text-sm">{edu.location}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}