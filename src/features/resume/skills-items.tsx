import { FaHtml5, FaCss3, FaJs, FaFigma, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiBetterauth,
  SiLucia,
} from "react-icons/si";

type Skill = {
  title: string;
  description: string;
  skillList: { icon: React.ComponentType; name: string }[];
};

export const skills: Skill = {
  title: "My Skills",
  description: "I am proficient in the following technologies and tools:",
  skillList: [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3, name: "CSS3" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiPrisma, name: "Prisma" },
    { icon: SiBetterauth, name: "BetterAuth" },
    { icon: SiLucia, name: "Lucia" },
    { icon: FaFigma, name: "Figma" },
  ],
};
