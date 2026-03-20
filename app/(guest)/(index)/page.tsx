import { Contact } from "@/components/features/home/Contact";
import { Hero } from "@/components/features/home/Hero";
import { Projects } from "@/components/features/home/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}