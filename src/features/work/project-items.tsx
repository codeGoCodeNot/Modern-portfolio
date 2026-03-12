import Image from "next/image";

export const projects = [
  {
    number: "01",
    category: "Fullstack",
    title: "Tickethub v2",
    image: "/assets/tickethub.png",
    stack: [
      "Next.js, TypeScript, Tailwind CSS, Supabase, Prisma orm, tweakcn, shadcn/ui, resend, Inngest, BetterAuth",
    ],
    description:
      "A full ticketing app built with Next.js, TypeScript, Tailwind CSS, Supabase, and Prisma orm. It features user authentication, event creation, ticket purchasing, and order management.",
    githubLink: "https://github.com/codeGoCodeNot/TicketHub-v2",
    link: "https://tickethubv2.johnsenb.dev",
  },
  {
    number: "02",
    category: "Fullstack",
    title: "Work Showcase",
    image: "/assets/works.png",
    stack: [
      "Next.js, Drizzle ORM, Neon (Postgres), Clerk, Tailwind CSS, shadcn/ui",
    ],
    description:
      "Project portal for submitting, managing, and voting on projects.Built with Next.js, Drizzle ORM, Neon (Postgres), Clerk, Tailwind CSS, shadcn/ui.Features: Admin dashboard, approval workflows, dynamic routing, and advanced filtering.",
    githubLink: "https://github.com/codeGoCodeNot/Works",
    link: "https://works.johnsenb.dev",
  },
  {
    number: "03",
    category: "Fullstack",
    title: "Better Authentication",
    image: "/assets/minidashboard.png",
    stack: [
      "Next.js, TypeScript, Tailwind CSS, Better-auth.js, Prisma, PostgreSQL",
    ],
    description:
      "A Next.js app demonstrating enhanced authentication with Better-auth.js, Prisma, and PostgreSQL. Features include secure user registration, login, password reset, and social authentication options.",
    githubLink: "https://github.com/codeGoCodeNot/Better-auth-Practice",
    link: "https://minidashboard.johnsenb.dev",
  },
];
