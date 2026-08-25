import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Code2, ArrowUpRight, Terminal } from "lucide-react";

import {
  getGithubProfile,
  getLeetcodeProfile,
  type GithubProfile,
  type LeetcodeProfile,
} from "@/lib/profiles.functions";

type State<T> = { data: T | null; loading: boolean; error: boolean };

function useProfile<T>(fn: () => Promise<T>) {
  const [state, setState] = useState<State<T>>({ data: null, loading: true, error: false });
  useEffect(() => {
    let active = true;
    fn()
      .then((data) => active && setState({ data, loading: false, error: false }))
      .catch(() => active && setState({ data: null, loading: false, error: true }));
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return state;
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background px-3 py-2.5">
      <div className="font-display text-lg font-semibold tabular-nums text-foreground">{value}</div>
      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function CardShell({
  name,
  handle,
  href,
  icon: Icon,
  children,
  footer,
}: {
  name: string;
  handle: string;
  href: string;
  icon: typeof Github;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className="rounded-md border border-border bg-background/60"
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <Icon size={17} className="text-foreground/80" />
        <div className="min-w-0">
          <div className="text-sm font-medium leading-none">{name}</div>
          <div className="mt-1 font-mono text-[11px] text-muted-foreground">{handle}</div>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          data-cursor
          aria-label={`${name} profile`}
          className="ml-auto inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
        >
          Visit
          <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="p-4">{children}</div>
      {footer ? <div className="border-t border-border px-4 py-3">{footer}</div> : null}
    </motion.div>
  );
}

function Placeholder({ error, href }: { error: boolean; href: string }) {
  return (
    <p className="font-mono text-xs text-muted-foreground">
      {error ? (
        <>
          Stats unavailable right now -{" "}
          <a href={href} target="_blank" rel="noreferrer noopener" className="underline">
            view profile
          </a>
          .
        </>
      ) : (
        "Loading..."
      )}
    </p>
  );
}

function GithubCard() {
  const { data, loading, error } = useProfile<GithubProfile>(() => getGithubProfile());
  return (
    <CardShell
      name="GitHub"
      handle="@parvjainnn"
      href="https://github.com/parvjainnn"
      icon={Github}
      footer={
        data?.repos.length ? (
          <ul className="space-y-1.5">
            {data.repos.map((r) => (
              <li key={r.name} className="flex items-center gap-2 text-xs">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="truncate font-mono text-foreground/85 transition-colors hover:text-foreground"
                >
                  {r.name}
                </a>
                {r.language ? (
                  <span className="ml-auto shrink-0 font-mono text-[10px] text-muted-foreground">
                    {r.language}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null
      }
    >
      {loading || error || !data ? (
        <Placeholder error={error} href="https://github.com/parvjainnn" />
      ) : (
        <>
          {data.bio ? (
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{data.bio}</p>
          ) : null}
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
            <Metric label="Repos" value={String(data.publicRepos)} />
            <Metric label="Followers" value={String(data.followers)} />
            <Metric label="Following" value={String(data.following)} />
          </div>
        </>
      )}
    </CardShell>
  );
}

function LeetcodeCard() {
  const { data, loading, error } = useProfile<LeetcodeProfile>(() => getLeetcodeProfile());
  const breakdown = data
    ? [
        { label: "Easy", value: data.easy },
        { label: "Medium", value: data.medium },
        { label: "Hard", value: data.hard },
      ]
    : [];
  return (
    <CardShell
      name="LeetCode"
      handle="u/parvjainnn"
      href="https://leetcode.com/u/parvjainnn/"
      icon={Code2}
      footer={
        data ? (
          <ul className="space-y-1.5">
            {breakdown.map((b) => (
              <li key={b.label} className="flex items-center gap-2 text-xs">
                <span className="font-mono text-foreground/85">{b.label}</span>
                <span className="ml-auto shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground">
                  {b.value} solved
                </span>
              </li>
            ))}
            {data.languages.length ? (
              <li className="flex items-center gap-2 pt-1 text-xs">
                <span className="font-mono text-foreground/85">Languages</span>
                <span className="ml-auto min-w-0 truncate font-mono text-[10px] text-muted-foreground">
                  {data.languages.map((l) => l.name).join(", ")}
                </span>
              </li>
            ) : null}
          </ul>
        ) : null
      }
    >
      {loading || error || !data ? (
        <Placeholder error={error} href="https://leetcode.com/u/parvjainnn/" />
      ) : (
        <>
          <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
            {data.solved} problems solved across easy, medium and hard sets - consistent DSA practice
            in {data.languages[0]?.name ?? "Python"} alongside contest participation.
          </p>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
            <Metric label="Solved" value={String(data.solved)} />
            <Metric
              label="Global rank"
              value={data.ranking ? data.ranking.toLocaleString("en-US") : "-"}
            />
            <Metric
              label="Contest rating"
              value={data.contestRating ? String(Math.round(data.contestRating)) : "-"}
            />
          </div>
        </>
      )}
    </CardShell>
  );
}


export function CodingProfiles() {
  return (
    <section id="coding" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label mb-3 inline-flex items-center gap-2">
              <Terminal size={12} /> 07 / Coding Profiles
            </p>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Where the commits live.
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground">Live from public profiles</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <GithubCard />
          <LeetcodeCard />
        </div>
      </div>
    </section>
  );
}
