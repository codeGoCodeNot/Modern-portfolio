import axios from "axios";
import {
  GithubCommitSearchResponse,
  GithubLiveStats,
  GithubRepoResponse,
} from "../type";

export const fetchGithubJson = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get<T>(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  return data;
};

export const GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "codeGoCodeNot";

export const fetchGithubStats = async (): Promise<GithubLiveStats> => {
  const [repos, commitsData] = await Promise.all([
    fetchGithubJson<GithubRepoResponse[]>(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`,
    ),
    fetchGithubJson<GithubCommitSearchResponse>(
      `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}`,
    ),
  ]);

  const ownedRepos = repos.filter((repo) => !repo.fork);

  const technologiesUsed = new Set(
    ownedRepos
      .map((repo) => repo.language)
      .filter((language): language is string => Boolean(language)),
  ).size;

  return {
    projectsCompleted: ownedRepos.length,
    technologiesUsed,
    codeCommits: commitsData.total_count ?? 0,
  };
};
