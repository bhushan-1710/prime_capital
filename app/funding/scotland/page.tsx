import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Islamic Finance in Scotland',
  description:
    'Selected Islamic property-finance introductions for Scottish clients and assets, including bridging finance and larger project pathways.',
  alternates: {
    canonical: 'https://primecapitalpartners.co.uk/funding/scotland',
  },
  openGraph: {
    title: 'Islamic Finance in Scotland | Prime Capital Partners',
    description:
      'Selected Islamic property-finance introductions for Scottish clients and assets, including bridging finance and larger project pathways.',
    url: 'https://primecapitalpartners.co.uk/funding/scotland',
  },
};

export default function ScotlandPage() {
  const hubs = ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Highlands', 'Perthshire', 'St Andrews & Coastal Belt'];

  return (
    <div className="sky-page-wrapper">
      {/* Header */}
      <section className="sky-container mb-12">
        <div className="max-w-3xl">
          <div className="sky-pill-badge mb-4">SCOTLAND PATHWAY</div>
          <h1 className="sky-display mb-6">
            Islamic finance, returning to Scotland.
          </h1>
          <p className="sky-body text-base sm:text-lg max-w-2xl text-[var(--text-body)]">
            A private route to selected Islamic property-finance opportunities for Scottish clients and assets, introduced through authorised providers.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="sky-container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Information Card */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-[28px] border border-[var(--border-hairline)] shadow-sm flex flex-col gap-6">
            <div className="sky-pill-badge w-fit">CURRENT AVAILABILITY</div>
            <h2 className="sky-h2 text-2xl sm:text-3xl text-[var(--text-heading)]">
              Bridging Live Now · Additional Pathways Following
            </h2>
            <p className="sky-body text-base leading-relaxed text-[var(--text-body)]">
              Bridging finance is live now for time-sensitive Scottish property transactions. Additional home purchase, buy-to-let, commercial and refinancing pathways are being introduced through authorised providers.
            </p>

            {/* Large Projects Card */}
            <div className="p-6 sm:p-8 rounded-[20px] bg-[var(--bg-page)] border border-[var(--border-hairline)] flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-blue)]">
                Large Projects
              </span>
              <h3 className="sky-h3 text-xl font-bold text-[var(--text-heading)]">
                £3 Million and Above
              </h3>
              <p className="sky-body text-sm leading-relaxed text-[var(--text-body)]">
                Tailored introductions for selected commercial assets, portfolios, development and refinancing opportunities, subject to funder appetite and due diligence.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border-hairline)] flex flex-wrap gap-4 items-center justify-between">
              <Link href="/funding/scotland/bridging" className="sky-btn-primary">
                <span>View Bridging Details</span>
                <span>→</span>
              </Link>
              <Link href="/connect" className="text-sm font-semibold text-[var(--accent-blue)] hover:underline">
                Direct Scottish Enquiry →
              </Link>
            </div>
          </div>

          {/* Regional Presence Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-[var(--card-light)] p-8 rounded-[28px] text-[var(--text-heading)] flex flex-col gap-4 border border-[var(--border-hairline)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-heading)]/70">Target Regions</span>
              <ul className="flex flex-col gap-2.5 text-sm font-medium">
                {hubs.map((hub) => (
                  <li key={hub} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-heading)]" />
                    <span>{hub}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--card-dark)] text-white p-8 rounded-[28px] shadow-sm flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--badge-bg)]/80">Corporate Presence</span>
              <h4 className="text-lg font-bold text-white">Registered in Scotland</h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Prime Capital Partners Group Ltd is registered in Scotland (SC902802), combining regional understanding with transatlantic capital access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Notice */}
      <section className="sky-container">
        <div className="p-8 rounded-[24px] bg-white border border-[var(--border-hairline)] text-xs text-[var(--text-body)] leading-relaxed">
          <strong>Regulatory Notice:</strong> Prime Capital Partners is a trading name of Prime Capital Partners Group Ltd, registered in Scotland (SC902802). Unregulated introducer. All regulated finance is arranged exclusively via FCA-authorised institutions.
        </div>
      </section>
    </div>
  );
}
