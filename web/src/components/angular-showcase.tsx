'use client';

import { createElement, useEffect, useState } from 'react';

type AngularSignal<T> = () => T;

type AngularRuntime = {
  core: {
    Component: (metadata: Record<string, unknown>) => <T>(type: T) => T;
    NgModule: (metadata: Record<string, unknown>) => <T>(type: T) => T;
    signal: <T>(initial: T) => AngularSignal<T>;
    computed: <T>(compute: () => T) => AngularSignal<T>;
  };
  common: {
    CommonModule: unknown;
  };
  platformBrowser: {
    BrowserModule: unknown;
  };
  platformBrowserDynamic: {
    platformBrowserDynamic: () => {
      bootstrapModule: (moduleType: unknown) => Promise<unknown>;
    };
  };
};

type ScriptDescriptor = {
  id: string;
  src: string;
};

const angularScripts: ScriptDescriptor[] = [
  {
    id: 'zone-js',
    src: 'https://cdn.jsdelivr.net/npm/zone.js@0.14.4/bundles/zone.umd.min.js',
  },
  {
    id: 'rxjs',
    src: 'https://cdn.jsdelivr.net/npm/rxjs@7.8.1/dist/bundles/rxjs.umd.min.js',
  },
  {
    id: 'angular-core',
    src: 'https://cdn.jsdelivr.net/npm/@angular/core@17.3.4/bundles/core.umd.min.js',
  },
  {
    id: 'angular-common',
    src: 'https://cdn.jsdelivr.net/npm/@angular/common@17.3.4/bundles/common.umd.min.js',
  },
  {
    id: 'angular-compiler',
    src: 'https://cdn.jsdelivr.net/npm/@angular/compiler@17.3.4/bundles/compiler.umd.min.js',
  },
  {
    id: 'angular-platform-browser',
    src: 'https://cdn.jsdelivr.net/npm/@angular/platform-browser@17.3.4/bundles/platform-browser.umd.min.js',
  },
  {
    id: 'angular-platform-browser-dynamic',
    src: 'https://cdn.jsdelivr.net/npm/@angular/platform-browser-dynamic@17.3.4/bundles/platform-browser-dynamic.umd.min.js',
  },
];

const loadScript = (descriptor: ScriptDescriptor) =>
  new Promise<void>((resolve, reject) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    const existing = document.getElementById(descriptor.id) as HTMLScriptElement | null;
    if (existing) {
      if (existing.getAttribute('data-loaded') === 'true') {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${descriptor.src}`)), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.id = descriptor.id;
    script.src = descriptor.src;
    script.async = false;
    script.defer = false;
    script.crossOrigin = 'anonymous';

    script.onload = () => {
      script.setAttribute('data-loaded', 'true');
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${descriptor.src}`));
    document.body.appendChild(script);
  });

const ensureAngularRuntime = async () => {
  for (const descriptor of angularScripts) {
    await loadScript(descriptor);
  }
};

const bootstrapAngularWidget = () => {
  if (typeof window === 'undefined') return;
  const win = window as typeof window & {
    __angularShowcaseBootstrapped?: boolean;
    ng?: AngularRuntime;
  };

  if (win.__angularShowcaseBootstrapped || !win.ng) {
    return;
  }

  const runtime = win.ng;
  const { Component, NgModule, signal, computed } = runtime.core;
  const { CommonModule } = runtime.common;
  const { BrowserModule } = runtime.platformBrowser;
  const { platformBrowserDynamic } = runtime.platformBrowserDynamic;

  const AngularShowcaseComponent = Component({
    selector: 'angular-showcase',
    standalone: false,
    template: `
      <section class="angular-card">
        <header>
          <span class="tag">Angular Insight</span>
          <h3>{{ headline() }}</h3>
        </header>
        <p>{{ summary() }}</p>
        <ul>
          <li *ngFor="let point of highlights()">
            <span class="bullet"></span>
            {{ point }}
          </li>
        </ul>
      </section>
    `,
    styles: [
      `
        :host {
          display: block;
          font-family: inherit;
          color: inherit;
        }
        .angular-card {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        header {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .tag {
          align-self: flex-start;
          background: rgba(247, 37, 133, 0.1);
          color: #f72585;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          text-transform: uppercase;
        }
        h3 {
          font-size: clamp(1.35rem, 2vw, 1.65rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0;
          color: inherit;
        }
        p {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.6;
          font-size: 0.95rem;
        }
        ul {
          display: grid;
          gap: 0.85rem;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }
        .bullet {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 9999px;
          background: radial-gradient(circle at 35% 35%, #f72585, rgba(247, 37, 133, 0.35));
          box-shadow: 0 0 12px rgba(247, 37, 133, 0.45);
        }
      `,
    ],
  })(
    class {
      private readonly years = signal(3);

      readonly headline = computed(() => `Angular Architecture, ${this.years()} Years In`);

      readonly summary = computed(
        () =>
          `Guided Angular feature squads delivering accessible, maintainable design systems while embracing standalone components and signal-driven reactive patterns.`,
      );

      readonly highlights = computed(() => [
        'Crafted highly typed NgRx stores with signal bridges for predictable state.',
        'Migrated legacy modules to standalone APIs and introduced differential loading.',
        'Mentored teams on harnessing control flow blocks and micro-frontend strategies.',
      ]);
    },
  );

  const AngularShowcaseModule = NgModule({
    declarations: [AngularShowcaseComponent],
    imports: [BrowserModule, CommonModule],
    bootstrap: [AngularShowcaseComponent],
  })(class {});

  win.__angularShowcaseBootstrapped = true;
  platformBrowserDynamic()
    .bootstrapModule(AngularShowcaseModule)
    .then(() => {
      // no-op, bootstrap flag already set
    })
    .catch((error: unknown) => {
      win.__angularShowcaseBootstrapped = false;
      console.error('Angular bootstrap failed', error);
    });
};

export default function AngularShowcase() {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let active = true;
    ensureAngularRuntime()
      .then(() => {
        if (!active) return;
        bootstrapAngularWidget();
        setStatus('ready');
      })
      .catch((error) => {
        console.error(error);
        if (active) setStatus('error');
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111] via-[#0b0412] to-[#15152e] p-8 shadow-[0_40px_120px_-30px_rgba(147,51,234,0.45)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(247,37,133,0.25),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(58,134,255,0.2),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center gap-3 text-sm text-white/70">
          <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
          Angular runtime{' '}
          <span className={`font-semibold ${status === 'ready' ? 'text-emerald-300' : status === 'error' ? 'text-rose-300' : 'text-white/70'}`}>
            {status === 'ready' ? 'live' : status === 'error' ? 'failed' : 'loading'}
          </span>
        </div>
        <div className="mt-6">
          {createElement('angular-showcase')}
        </div>
        {status === 'error' && (
          <p className="mt-4 text-sm text-rose-200">
            Unable to load Angular widget. Please refresh the page to retry.
          </p>
        )}
      </div>
    </div>
  );
}
