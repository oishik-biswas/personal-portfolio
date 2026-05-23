import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Flame, Trophy } from "lucide-react";

const streaks = [
  {
    title: "GitHub streak",
    subtitle: "Open-source rhythm and contribution consistency.",
    href: "https://github.com/oishik-biswas",
    image:
      "https://streak-stats.demolab.com?user=oishik-biswas&theme=transparent&hide_border=true&ring=14b8a6&fire=f59e0b&currStreakLabel=14b8a6&sideLabels=64748b&dates=64748b",
    alt: "GitHub contribution streak for oishik-biswas",
  },
  {
    title: "LeetCode streak",
    subtitle: "Problem-solving progress with a visible practice trail.",
    href: "https://leetcode.com/u/_Oishik_/",
    image:
      "https://leetcard.jacoblin.cool/_Oishik_?theme=light&font=Inter&ext=heatmap",
    alt: "LeetCode streak and heatmap for _Oishik_",
  },
];

export default function StatsShowcase() {
  return (
    <section id="streaks" className="scroll-mt-28">
      <div className="section-heading">
        <p className="eyebrow inline-flex items-center gap-2">
          <Flame size={14} />
          Streaks
        </p>
        <h2 className="section-title">Consistency, where it is public.</h2>
        <p className="section-copy">
          GitHub and LeetCode get a dedicated space, with direct links for the
          full trail.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {streaks.map((streak) => (
          <article key={streak.title} className="section-card overflow-hidden">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-strong">
                  <Trophy size={16} />
                  {streak.title}
                </p>
                <p className="mt-1 text-sm text-muted">{streak.subtitle}</p>
              </div>
              <Link
                href={streak.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${streak.title}`}
                className="icon-link shrink-0"
              >
                <ExternalLink size={17} />
              </Link>
            </div>

            <Link href={streak.href} target="_blank" rel="noreferrer">
              <Image
                src={streak.image}
                alt={streak.alt}
                width={680}
                height={260}
                unoptimized
                loading="lazy"
                className="stats-image"
              />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
