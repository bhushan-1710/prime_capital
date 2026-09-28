import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Understand. Introduce. Coordinate. Learn how Prime Capital Partners brings measured advice, private introductions and structured coordination to private capital transactions.',
  alternates: {
    canonical: 'https://primecapitalpartners.co.uk/how-we-work',
  },
  openGraph: {
    title: 'How We Work | Prime Capital Partners',
    description:
      'Understand. Introduce. Coordinate. Learn how Prime Capital Partners brings measured advice, private introductions and structured coordination to private capital transactions.',
    url: 'https://primecapitalpartners.co.uk/how-we-work',
  },
};

export default function HowWeWorkPage() {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      body: 'We establish the asset, structure, timing and objectives before any introduction is considered. We listen before we introduce. A poor fit wastes everyone’s time, so this foundation is never rushed.',
      note: null,
    },
    {
      num: '02',
      title: 'Introduce',
      body: 'Where appropriate, we connect the mandate with relevant capital, authorised providers or principals. Introductions are conducted privately, directly and with clear alignment.',
      note: 'All regulated finance activities are arranged exclusively by FCA-authorised counterparties, not by Prime Capital Partners.',
    },
    {
      num: '03',
      title: 'Coordinate',
      body: 'We keep communication moving between the parties through the process to completion — ensuring questions are resolved swiftly and momentum is maintained.',
      note: null,
    },
  ];

  return (
    <div className="sky-page-wrapper">
      {/* Header */}
      <section className="sky-container mb-16">
        <div className="max-w-3xl">
          <div className="sky-pill-badge mb-4">HOW WE WORK</div>
          <h1 className="sky-display mb-6">
            Understand. Introduce. Coordinate.
          </h1>
          <p className="sky-body text-base sm:text-lg max-w-2xl text-[var(--text-body)]">
            We advise on position and timing, open doors to relevant counterparties, and coordinate private capital introductions where absolute discretion matters.
          </p>
        </div>
      </section>

      {/* 3 Step Cards */}
      <section className="sky-container mb-20">
        <div className="flex flex-col gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white p-8 sm:p-12 rounded-[28px] border border-[var(--border-hairline)] shadow-sm flex flex-col md:flex-row gap-8 items-start justify-between"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--card-light)] text-[var(--text-heading)] font-bold text-xl flex items-center justify-center shrink-0">
                {step.num}
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <h2 className="sky-h2 text-2xl sm:text-3xl text-[var(--text-heading)]">{step.title}</h2>
                <p className="sky-body text-base leading-relaxed text-[var(--text-body)]">
                  {step.body}
                </p>
                {step.note && (
                  <div className="mt-3 p-4 rounded-xl bg-[var(--bg-page)] border-l-4 border-[var(--accent-blue)] text-xs text-[var(--text-body)]">
                    {step.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discretion Section */}
      <section className="sky-container">
        <div className="bg-[var(--card-dark)] text-white p-10 sm:p-14 rounded-[32px] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--badge-bg)]/80 mb-2 block">
              Core Discipline
            </span>
            <h2 className="sky-h2 text-white mb-4">
              Opportunities Are Never Broadcast
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              We do not list mandates publicly or circulate tear sheets broadly. Every single introduction is curated for a specific counterparty based on measured alignment and verified intent.
            </p>
          </div>

          <div className="shrink-0">
            <Link href="/connect" className="sky-btn-glass text-[var(--text-heading)]">
              <span>Begin a Conversation</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
