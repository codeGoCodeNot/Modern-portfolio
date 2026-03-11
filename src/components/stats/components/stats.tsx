"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";

import { fetchGithubStats, GITHUB_USERNAME } from "../queries/fetch-json";
import { statsItem } from "../stats-item";
import { GithubLiveStats } from "../type";

const EMPTY_GITHUB_STATS: GithubLiveStats = {
  projectsCompleted: 0,
  technologiesUsed: 0,
  codeCommits: 0,
};

const Stats = () => {
  const [countKey, setCountKey] = useState(0);

  // Re-animate CountUp every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => setCountKey((k) => k + 1), 30_000);
    return () => clearInterval(interval);
  }, []);

  const { data: githubStats = EMPTY_GITHUB_STATS } = useQuery({
    queryKey: ["github-stats", GITHUB_USERNAME],
    queryFn: fetchGithubStats,
    refetchInterval: 60_000,
    staleTime: 30_000,
  });

  const liveStatsById: Record<string, number> = {
    projectsCompleted: githubStats.projectsCompleted,
    technologiesUsed: githubStats.technologiesUsed,
    codeCommits: githubStats.codeCommits,
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {statsItem.map((item) => (
            <div
              key={item.id}
              className="flex-1 flex gap-x-4 items-center justify-center lg:justify-start"
            >
              <CountUp
                key={`${item.id}-${countKey}`}
                end={liveStatsById[item.id] ?? item.num}
                duration={3}
                delay={1}
                className={`text-2xl lg:text-4xl font-bold ${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} `}
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
