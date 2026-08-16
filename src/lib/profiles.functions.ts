import { createServerFn } from "@tanstack/react-start";

export type GithubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  publicRepos: number;
  followers: number;
  following: number;
  repos: { name: string; language: string | null; stars: number; url: string }[];
};

export type LeetcodeProfile = {
  username: string;
  solved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number | null;
  languages: { name: string; solved: number }[];
  contestRating: number | null;
};

export const getGithubProfile = createServerFn({ method: "GET" }).handler(
  async (): Promise<GithubProfile> => {
    const headers = { Accept: "application/vnd.github+json", "User-Agent": "parv-portfolio" };
    const [userRes, repoRes] = await Promise.all([
      fetch("https://api.github.com/users/parvjainnn", { headers }),
      fetch("https://api.github.com/users/parvjainnn/repos?per_page=100&sort=updated", { headers }),
    ]);
    if (!userRes.ok) throw new Error(`GitHub API ${userRes.status}`);
    const u = await userRes.json();
    const repos = repoRes.ok ? await repoRes.json() : [];

    return {
      login: u.login,
      name: u.name ?? null,
      bio: u.bio ?? null,
      publicRepos: u.public_repos,
      followers: u.followers,
      following: u.following,
      repos: (Array.isArray(repos) ? repos : [])
        .filter((r: any) => !r.fork)
        .slice(0, 4)
        .map((r: any) => ({
          name: r.name,
          language: r.language ?? null,
          stars: r.stargazers_count ?? 0,
          url: r.html_url,
        })),
    };
  },
);

export const getLeetcodeProfile = createServerFn({ method: "GET" }).handler(
  async (): Promise<LeetcodeProfile> => {
    const query = `query($u:String!){
      matchedUser(username:$u){
        username
        profile{ ranking }
        submitStatsGlobal{ acSubmissionNum{ difficulty count } }
        languageProblemCount{ languageName problemsSolved }
      }
      userContestRanking(username:$u){ rating }
    }`;

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "content-type": "application/json", Referer: "https://leetcode.com" },
      body: JSON.stringify({ query, variables: { u: "parvjainnn" } }),
    });
    if (!res.ok) throw new Error(`LeetCode API ${res.status}`);
    const json: any = await res.json();
    const user = json?.data?.matchedUser;
    if (!user) throw new Error("LeetCode profile unavailable");

    const stats: Record<string, number> = {};
    for (const s of user.submitStatsGlobal?.acSubmissionNum ?? []) stats[s.difficulty] = s.count;

    return {
      username: user.username,
      solved: stats.All ?? 0,
      easy: stats.Easy ?? 0,
      medium: stats.Medium ?? 0,
      hard: stats.Hard ?? 0,
      ranking: user.profile?.ranking ?? null,
      languages: (user.languageProblemCount ?? []).map((l: any) => ({
        name: l.languageName,
        solved: l.problemsSolved,
      })),
      contestRating: json?.data?.userContestRanking?.rating ?? null,
    };
  },
);
