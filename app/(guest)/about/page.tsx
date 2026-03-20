import { Profile } from "@/components/features/about/Profile";
import { Objective } from "@/components/features/about/Objective";
import { Skills } from "@/components/features/about/Skills";
import { Language } from "@/components/features/about/Language";
import { WorkEducation } from "@/components/features/about/ExAndEd";

export default function AboutPage() {
  return (
    <>
      <Profile />
      <Objective />
      <Skills />
      <Language />
      <WorkEducation />
    </>
  );
}