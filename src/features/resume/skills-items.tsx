import { FaHtml5, FaCss3, FaJs, FaFigma, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiBetterauth,
  SiLucia,
  SiTypescript,
  SiSupabase,
  SiPostgresql,
  SiVite,
} from "react-icons/si";
import { Code2 } from "lucide-react";

type SkillItem = {
  icon: React.ComponentType;
  name: string;
};

type SkillCategory = {
  category: string;
  items: SkillItem[];
};

type SkillsData = {
  title: string;
  description: string;
  categories: SkillCategory[];
};

export const skills: SkillsData = {
  title: "My Skills",
  description:
    "Technologies and tools I use to build modern web applications:",
  categories: [
    {
      category: "Languages",
      items: [
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3, name: "CSS3" },
        { icon: FaJs, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { icon: FaReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiVite, name: "Vite" },
        { icon: Code2, name: "React Router" },
        { icon: Code2, name: "TanStack Query" },
        { icon: Code2, name: "Zustand" },
      ],
    },
    {
      category: "Styling & Design",
      items: [
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: Code2, name: "shadcn/ui" },
        { icon: FaFigma, name: "Figma" },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiPrisma, name: "Prisma" },
        { icon: Code2, name: "Drizzle ORM" },
        { icon: SiSupabase, name: "Supabase" },
        { icon: SiPostgresql, name: "PostgreSQL" },
      ],
    },
    {
      category: "Authentication",
      items: [
        { icon: SiBetterauth, name: "BetterAuth" },
        { icon: Code2, name: "Clerk" },
        { icon: SiLucia, name: "Lucia" },
      ],
    },
    {
      category: "Tools",
      items: [{ icon: FaGitAlt, name: "Git" }],
    },
  ],
};
