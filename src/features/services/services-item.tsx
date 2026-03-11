export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  href: `/services/${string}`;
  highlights: string[];
  stack: string[];
  workflow: string[];
  idealFor: string[];
  layout: "workflow-first" | "fit-first";
  ctaLabel: string;
};

export const servicesItems: ServiceItem[] = [
  {
    id: "01",
    title: "Next.js Website Development",
    description:
      "Building modern, fast websites and web apps with Next.js and React.",
    href: "/services/nextjs-sites",
    highlights: [
      "Build responsive pages with App Router and clean component architecture.",
      "Optimize performance with image handling, caching, and route-level loading states.",
      "Ship production-ready deployments with maintainable patterns.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    workflow: [
      "Plan site architecture and route strategy around your goals.",
      "Build pages and shared components with clean TypeScript structure.",
      "Polish performance, SEO basics, and production readiness.",
    ],
    idealFor: [
      "Business websites and landing pages",
      "Portfolio and personal brand sites",
      "Small products that need fast iteration",
    ],
    layout: "workflow-first",
    ctaLabel: "Build my Next.js site",
  },
  {
    id: "02",
    title: "Tailwind CSS Styling",
    description:
      "Creating stylish, responsive layouts using Tailwind CSS utility classes.",
    href: "/services/tailwind-ui",
    highlights: [
      "Translate design ideas into reusable utility-first UI blocks.",
      "Improve spacing, typography, and visual hierarchy across breakpoints.",
      "Keep styles consistent with scalable class patterns and tokens.",
    ],
    stack: ["Tailwind CSS", "CSS", "Responsive Design", "UI Systems"],
    workflow: [
      "Audit your existing UI for spacing and consistency issues.",
      "Refactor components with reusable Tailwind utility patterns.",
      "Tune responsive behavior and interactive states for clarity.",
    ],
    idealFor: [
      "Teams with inconsistent front-end styles",
      "Projects migrating from ad-hoc CSS",
      "Interfaces that need a cleaner visual rhythm",
    ],
    layout: "fit-first",
    ctaLabel: "Refine my UI styling",
  },
  {
    id: "03",
    title: "Reusable React Components",
    description:
      "Developing functional, maintainable components for scalable projects.",
    href: "/services/react-components",
    highlights: [
      "Break large UI sections into reusable, testable components.",
      "Add prop-driven behavior and shared patterns for consistency.",
      "Improve maintainability by reducing duplication across pages.",
    ],
    stack: ["React", "TypeScript", "Component Design", "State Patterns"],
    workflow: [
      "Map duplicated UI patterns and define component boundaries.",
      "Implement reusable components with strong prop contracts.",
      "Integrate and document usage for faster team onboarding.",
    ],
    idealFor: [
      "Growing apps with duplicated UI",
      "Codebases that need better maintainability",
      "Teams preparing for scale",
    ],
    layout: "workflow-first",
    ctaLabel: "Create reusable components",
  },
  {
    id: "04",
    title: "API Data Fetching",
    description:
      "Integrating and displaying external data in web apps with fetch and React Query.",
    href: "/services/api-data",
    highlights: [
      "Connect UI to REST APIs with clear loading and error states.",
      "Use React Query for caching, retries, and smooth data updates.",
      "Model API responses into predictable front-end data flows.",
    ],
    stack: ["REST APIs", "React Query", "Axios", "TypeScript"],
    workflow: [
      "Define API contracts and fetch strategy per screen.",
      "Implement queries with cache and retry behavior.",
      "Stabilize edge cases with loading, empty, and error states.",
    ],
    idealFor: [
      "Dashboards with live API data",
      "Apps replacing mock data with real endpoints",
      "Projects needing predictable async state handling",
    ],
    layout: "fit-first",
    ctaLabel: "Integrate my API data",
  },
  {
    id: "05",
    title: "Basic Authentication",
    description:
      "Implementing user login and access with Auth.js or NextAuth for Next.js apps.",
    href: "/services/simple-auth",
    highlights: [
      "Set up sign-in and sign-out flows with protected routes.",
      "Integrate providers and session handling for user access control.",
      "Apply practical role checks for basic dashboard security.",
    ],
    stack: ["Auth.js", "NextAuth", "Next.js", "Session Management"],
    workflow: [
      "Define authentication flow and protected page requirements.",
      "Implement provider setup and server/client session handling.",
      "Apply route guards and role-based checks where needed.",
    ],
    idealFor: [
      "Member-only pages or dashboards",
      "Apps introducing user accounts",
      "Projects that need basic access control quickly",
    ],
    layout: "workflow-first",
    ctaLabel: "Set up authentication",
  },
];
