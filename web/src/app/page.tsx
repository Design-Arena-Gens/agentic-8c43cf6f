import Link from "next/link";
import AngularShowcase from "@/components/angular-showcase";
import ReactSpotlight from "@/components/react-spotlight";

const stats = [
  { label: "Years shipping UI", value: "3+" },
  { label: "Product teams led", value: "6" },
  { label: "Accessibility score", value: "99 Lighthouse" },
  { label: "End users served", value: "2.1M+" },
];

const projects = [
  {
    title: "Untangle Analytics",
    period: "2023 · SaaS dashboard",
    description:
      "Delivered a cross-framework micro-frontend where Angular powered data orchestration and React drove immersive visual exploration.",
    stack: ["React 18", "Angular 17", "Nx Federation", "Tailwind CSS"],
    outcome: "Cut data exploration time by 60% thanks to shared design tokens.",
  },
  {
    title: "Pulse Design System",
    period: "2022 · Multiplatform UI kit",
    description:
      "Authored a dual React + Angular component suite with synchronized accessibility stories, automated visual regression testing, and CI release pipelines.",
    stack: ["Storybook", "Chromatic", "React Testing Library", "Jest"],
    outcome: "Unified customer experiences across 4 surfaces and boosted roadmap velocity.",
  },
];

const experience = [
  {
    company: "Orbit Labs",
    role: "Senior Frontend Developer",
    period: "2023 — Present",
    achievements: [
      "Modernized Angular legacy modules into standalone structure with typed signal stores.",
      "Introduced React Query-driven caching and Suspense-friendly APIs for the insights suite.",
      "Built progressive enhancement playbook covering accessibility and performance budgets.",
    ],
  },
  {
    company: "Helios Health",
    role: "Frontend Engineer",
    period: "2021 — 2023",
    achievements: [
      "Led React and Angular feature pods delivering patient engagement flows with 0 P0 incidents.",
      "Streamlined build pipelines with Nx and Turborepo to speed releases by 35%.",
      "Implemented a central theming system consumed by both frameworks with shared tokens.",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050510] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,101,242,0.12),transparent_45%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_50%),linear-gradient(180deg,rgba(15,23,42,0.85),rgba(5,5,16,0.95))]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-10 lg:px-16 lg:pt-28">
        <header className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="flex flex-col gap-8">
            <span className="inline-flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-white/70">
              Frontend Engineer
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Rowan Carter <span className="text-white/60">— React & Angular specialist crafting resilient product experiences.</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Three years pushing design systems, high-stakes dashboards, and growth experiments live. Rowan blends React’s rapid experimentation with Angular’s scalable architecture to ship inclusive, high-performing interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_45px_-20px_rgba(6,182,212,0.75)] transition hover:opacity-90"
              >
                Book a discovery call
              </Link>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View featured work
              </a>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_110px_-45px_rgba(15,118,110,0.9)] backdrop-blur">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
              <span>React & Angular fluency</span>
              <span>Crafted since 2021</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 shadow-inner"
                >
                  <span className="text-3xl font-semibold">{stat.value}</span>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/60">React Delivery</h2>
            <ReactSpotlight />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/60">Angular Leadership</h2>
            <AngularShowcase />
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="mt-3 max-w-2xl text-base text-white/70">
              Cross-framework deliveries proving Rowan’s ability to orchestrate teams, pipelines, and design systems that scale.
            </p>
          </div>
          <div className="grid gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_90px_-40px_rgba(147,51,234,0.65)] transition hover:border-cyan-400/40"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.2),transparent_60%)]" />
                <div className="relative flex flex-col gap-5">
                  <header className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/60">
                    <span>{project.period}</span>
                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-white/70">
                          {item}
                        </span>
                      ))}
                    </div>
                  </header>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-base text-white/75">{project.description}</p>
                  <p className="text-sm font-semibold text-cyan-200">{project.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Experience Timeline</h2>
            <p className="mt-3 max-w-2xl text-base text-white/70">
              Guiding squads through design system modernization, performance budgets, and resilient delivery culture.
            </p>
          </div>
          <div className="space-y-6">
            {experience.map((role) => (
              <article key={role.company} className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 shadow-[0_20px_80px_-50px_rgba(45,212,191,0.8)]">
                <header className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                    {role.company}
                  </span>
                  <span className="text-white/50">{role.period}</span>
                  <span className="text-white/80">{role.role}</span>
                </header>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/80 sm:text-base">
                  {role.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-400 shadow-[0_0_12px_rgba(6,182,212,0.75)]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_100px_-50px_rgba(59,130,246,0.75)] lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Collaborate
            </span>
            <h2 className="text-3xl font-semibold leading-tight">Let&apos;s ship something remarkable</h2>
            <p className="text-base text-white/70">
              Seeking contract or full-time opportunities where design systems, performance, and accessibility intersect. React and Angular workstreams welcome.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/75">
              <a href="mailto:hello@rowanbuilds.com" className="hover:text-cyan-300">
                hello@rowanbuilds.com
              </a>
              <a href="https://www.linkedin.com/in/rowan-carter" className="hover:text-cyan-300">
                linkedin.com/in/rowan-carter
              </a>
              <a href="https://github.com/rowanbuilds" className="hover:text-cyan-300">
                github.com/rowanbuilds
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-lg font-semibold text-white/80">Availability</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Project Leadership</span>
                <span className="text-emerald-300">Open</span>
              </li>
              <li className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Design System Sprints</span>
                <span className="text-emerald-300">Open</span>
              </li>
              <li className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Consulting Sessions</span>
                <span className="text-amber-300">Booking May</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
