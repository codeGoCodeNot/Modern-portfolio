export type StatId =
  | "experience"
  | "projectsCompleted"
  | "technologiesUsed"
  | "codeCommits"
  | "coffee";

export type StatItem = {
  id: StatId;
  num: number;
  text: string;
};

export const statsItem: StatItem[] = [
  {
    id: "experience",
    num: 0,
    text: "Years of experience",
  },
  {
    id: "projectsCompleted",
    num: 0,
    text: "Projects completed",
  },
  {
    id: "technologiesUsed",
    num: 0,
    text: "Technologies used",
  },
  {
    id: "codeCommits",
    num: 0,
    text: "Code commits",
  },
  {
    id: "coffee",
    num: 3,
    text: "Coffees consumed daily",
  },
];
