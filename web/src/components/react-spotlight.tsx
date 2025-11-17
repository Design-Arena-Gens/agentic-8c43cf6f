'use client';

import { useEffect, useMemo, useState } from 'react';

type SpotlightItem = {
  title: string;
  description: string;
  metric: string;
  badge: string;
  gradient: string;
};

const spotlightItems: SpotlightItem[] = [
  {
    title: 'Design System Driven React',
    description:
      'Scaled a component library with slot-based APIs, motion primitives, and Storybook documentation to keep product and marketing aligned.',
    metric: '+42% delivery pace',
    badge: 'React',
    gradient: 'from-sky-400/20 via-cyan-500/15 to-fuchsia-500/10',
  },
  {
    title: 'Data Visual Exploration',
    description:
      'Built a canvas-powered insights dashboard with React Query, virtualization, and custom hooks that surface actionable metrics instantly.',
    metric: 'Sub-100ms insights',
    badge: 'React Query',
    gradient: 'from-amber-400/25 via-orange-500/15 to-rose-500/10',
  },
  {
    title: 'Accessibility-first UI',
    description:
      'Audited and refactored flows for WCAG AA compliance with keyboard-first navigation, semantic HTML, and automated testing guards.',
    metric: '0 critical a11y bugs',
    badge: 'Inclusive UX',
    gradient: 'from-emerald-400/25 via-lime-500/15 to-cyan-500/10',
  },
];

export default function ReactSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rotation = setInterval(() => {
      setActiveIndex((index) => (index + 1) % spotlightItems.length);
    }, 6000);
    return () => clearInterval(rotation);
  }, []);

  const activeItem = useMemo(() => spotlightItems[activeIndex], [activeIndex]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-white/[0.04] p-8 text-white shadow-[0_0_80px_-30px_rgba(56,189,248,0.75)] backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,234,212,0.25),transparent_55%),radial-gradient(circle_at_80%_120%,rgba(14,165,233,0.18),transparent_65%)]" />
      <div className="relative flex flex-col gap-8">
        <header className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
            React Practice
          </span>
          <span className="text-sm text-white/70">Auto-rotating highlights</span>
        </header>
        <article className="relative flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.75)]" />
            {activeItem.badge}
          </span>
          <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">{activeItem.title}</h3>
          <p className="text-sm leading-relaxed text-white/75 sm:text-base">{activeItem.description}</p>
          <span className="text-lg font-semibold text-cyan-200">{activeItem.metric}</span>
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${activeItem.gradient} opacity-80 transition-all duration-700`}
            aria-hidden="true"
          />
        </article>
        <nav className="flex flex-wrap gap-3">
          {spotlightItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition ${
                activeIndex === index ? 'bg-white/20 text-white shadow-[0_10px_40px_-20px_rgba(6,182,212,0.65)]' : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {item.badge}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
