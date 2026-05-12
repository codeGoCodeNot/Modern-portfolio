export type StatId =
  | "projectsCompleted"
  | "codeCommits"
  | "coffee";

export type StatItem = {
  id: StatId;
  num: number;
  text: string;
};

export const statsItem: StatItem[] = [
  {
    id: "projectsCompleted",
    num: 0,
    text: "Projects completed",
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
