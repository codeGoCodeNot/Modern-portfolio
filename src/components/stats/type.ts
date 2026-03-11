export type GithubRepoResponse = {
  fork: boolean;
  language: string | null;
};

export type GithubCommitSearchResponse = {
  total_count: number;
};

export type GithubLiveStats = {
  projectsCompleted: number;
  technologiesUsed: number;
  codeCommits: number;
};
