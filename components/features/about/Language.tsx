import { Section } from "@/components/common/Section";
import { Star } from "lucide-react";

const languages = [
  {
    name: "English",
    spoken: 2,
    written: 3,
  },
  {
    name: "Filipino",
    spoken: 3,
    written: 4,
  },
  {
    name: "Bisaya",
    spoken: 5,
    written: 5,
  },
];

function Stars({ count } : { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < count ? "fill-black text-black dark:fill-purple-500 dark:text-white" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
}

export function Language() {
  return (
    <Section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10 italic">
        Language
      </h2>

      <div className="flex justify-center gap-20 flex-wrap">
        {languages.map((lang, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-purple-300 px-6 py-2 rounded-full mb-4">
              <p className="font-medium dark:text-black">{lang.name}</p>
            </div>

            <div className="text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span>Spoken</span>
                <Stars count={lang.spoken} />
              </div>

              <div className="flex items-center gap-2">
                <span>Written</span>
                <Stars count={lang.written} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}