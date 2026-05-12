export type GithubRepoResponse = {
  fork: boolean;
};

export type GithubCommitSearchResponse = {
  total_count: number;
};

export type GithubLiveStats = {
  projectsCompleted: number;
  codeCommits: number;
};
