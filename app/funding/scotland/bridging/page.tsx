import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Islamic Bridging Finance Scotland',
  description:
    'Property-backed Islamic bridging finance for selected time-sensitive Scottish transactions through authorised providers.',
  alternates: {
    canonical: 'https://primecapitalpartners.co.uk/funding/scotland/bridging',
  },
  openGraph: {
    title: 'Islamic Bridging Finance Scotland | Prime Capital Partners',
    description:
      'Property-backed Islamic bridging finance for selected time-sensitive Scottish transactions through authorised providers.',
    url: 'https://primecapitalpartners.co.uk/funding/scotland/bridging',
  },
};

const USE_CASES = [
  'Acquisition deadlines',
  'Auction purchases',
  'Chain breaks',
  'Refurbishment',
  'Development exits',
  'Short-term liquidity',
];

const CRITERIA = [
  { label: 'Facility Size', value: 'Typically £100,000 – £1,000,000' },
  { label: 'Max Finance-to-Value', value: 'Up to 75% FTV' },
  { label: 'Term Length', value: '3 – 12 months (up to 18 considered)' },
  { label: 'Charge Type', value: 'First or second charge may be considered' },
  { label: 'Security', value: 'Suitable Scottish property asset' },
  { label: 'Structure', value: 'Murabaha basis via authorised providers' },
];

export default function BridgingPage() {
  return (
    <div className="sky-page-wrapper">
      {/* Header */}
      <section className="sky-container mb-12">
        <div className="max-w-3xl">
          <div className="sky-pill-badge mb-4">SCOTLAND · ISLAMIC BRIDGING</div>
          <h1 className="sky-display mb-6">
            Short-term Islamic bridging finance.
          </h1>
          <p className="sky-body text-base sm:text-lg max-w-2xl text-[var(--text-body)]">
            Property-backed finance for time-sensitive Scottish transactions, structured on a Murabaha basis through authorised providers.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="sky-container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Card */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-[28px] border border-[var(--border-hairline)] shadow-sm flex flex-col gap-8">
            <div>
              <div className="sky-pill-badge mb-3">INDICATIVE CRITERIA</div>
              <h2 className="sky-h2 text-2xl sm:text-3xl text-[var(--text-heading)] mb-2">
                Facility Parameters
              </h2>
              <p className="sky-body text-xs text-[var(--text-label)] mb-6">
                *All figures are illustrative and indicative only, subject to formal provider underwriting and due diligence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CRITERIA.map((c) => (
                  <div key={c.label} className="p-4 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-hairline)]">
                    <div className="text-xs font-semibold text-[var(--accent-blue)] uppercase tracking-wider mb-1">
                      {c.label}
                    </div>
                    <div className="text-base font-bold text-[var(--text-heading)]">
                      {c.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[var(--text-body)]">
                Structured on a non-interest Murabaha mechanism via authorised lenders.
              </p>
              <Link href="/connect" className="sky-btn-primary shrink-0 w-full sm:w-auto text-center">
                <span>Enquire on Bridging</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Use Cases Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-[var(--card-dark)] text-white p-8 rounded-[28px] shadow-sm flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--badge-bg)]/80">
                Primary Use Cases
              </span>
              <ul className="flex flex-col gap-3 text-xs text-white/90">
                {USE_CASES.map((u) => (
                  <li key={u} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[28px] border border-[var(--border-hairline)] shadow-sm flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-blue)]">
                Timing &amp; Speed
              </span>
              <h3 className="text-lg font-bold text-[var(--text-heading)]">Time-Sensitive Closures</h3>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                When acquisition windows or auction deadlines require urgent execution, our direct introductions streamline underwriting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Notice */}
      <section className="sky-container">
        <div className="p-8 rounded-[24px] bg-white border border-[var(--border-hairline)] text-xs text-[var(--text-body)] leading-relaxed">
          <strong>Regulatory Notice:</strong> Prime Capital Partners acts strictly as an unregulated introducer. The bridging finance described here is arranged exclusively by FCA-authorised providers. Indicative terms only.
        </div>
      </section>
    </div>
  );
}
