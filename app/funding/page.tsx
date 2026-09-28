import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Funding Solutions',
  description:
    'Explore equity participation, Islamic finance introductions and selected funding pathways through Prime Capital Partners.',
  alternates: {
    canonical: 'https://primecapitalpartners.co.uk/funding',
  },
  openGraph: {
    title: 'Funding Solutions | Prime Capital Partners',
    description:
      'Explore equity participation, Islamic finance introductions and selected funding pathways through Prime Capital Partners.',
    url: 'https://primecapitalpartners.co.uk/funding',
  },
};

export default function FundingPage() {
  return (
    <div className="sky-page-wrapper">
      {/* Page Header */}
      <section className="sky-container mb-14">
        <div className="max-w-3xl">
          <div className="sky-pill-badge mb-4">FUNDING SOLUTIONS</div>
          <h1 className="sky-display mb-6">
            Funding, introduced with alignment.
          </h1>
          <p className="sky-body text-base sm:text-lg max-w-2xl text-[var(--text-body)]">
            Prime Capital connects selected principals with aligned capital and authorised finance providers. The focus is on fit, structure, timing and a clear path from first conversation to completion.
          </p>
        </div>
      </section>

      {/* Two Core Pillars: Equity & Islamic Finance */}
      <section className="sky-container mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Equity & Participation */}
          <div className="sky-card sky-card-light flex flex-col justify-between p-8 sm:p-10 rounded-[28px]">
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--icon-lavender-bg)', color: 'var(--icon-navy)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="sky-pill-badge mb-3">CO-INVESTMENT &amp; GROWTH</div>
              <h2 className="sky-h2 text-2xl sm:text-3xl mb-4">Equity &amp; Participation</h2>
              <p className="sky-body text-sm sm:text-base leading-relaxed mb-6">
                Co-investment, joint ventures, aligned partners and introductions to private, family office and institutional capital. We work with principals whose assets demand patient, aligned equity partners rather than standard retail debt.
              </p>
              <ul className="flex flex-col gap-2.5 mb-8 text-xs font-medium text-[var(--text-heading)]">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                  <span>Joint venture &amp; co-investment structuring</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                  <span>Private family office capital syndication</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                  <span>Institutional principal introductions</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/connect" className="sky-btn-primary w-full text-center">
                <span>Discuss Equity Mandate</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Pillar 2: Islamic Finance */}
          <div className="sky-card sky-card-dark flex flex-col justify-between p-8 sm:p-10 rounded-[28px]">
            <div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(224, 231, 249, 0.18)', color: '#FFFFFF' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
                </svg>
              </div>
              <div className="sky-pill-badge mb-3" style={{ backgroundColor: 'rgba(224, 231, 249, 0.12)', color: 'rgba(224, 231, 249, 0.8)', border: '1px solid rgba(224, 231, 249, 0.18)' }}>
                FAITH-ALIGNED CAPITAL
              </div>
              <h2 className="sky-h2 text-2xl sm:text-3xl mb-4" style={{ color: '#FFFFFF' }}>Islamic Finance</h2>
              <p className="sky-body text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'rgba(224, 231, 249, 0.85)' }}>
                Asset-backed structures using recognised Islamic finance approaches, introduced through authorised providers. Providing ethical, non-interest-based financing pathways for prime UK and Scottish real estate transactions.
              </p>
              <ul className="flex flex-col gap-2.5 mb-8 text-xs font-medium" style={{ color: 'rgba(224, 231, 249, 0.9)' }}>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Murabaha &amp; asset-backed structures</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Short-term bridging finance live now</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Introduced exclusively via authorised providers</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/funding/scotland" className="sky-btn-glass text-center flex-1">
                <span>Explore Scotland Pathway</span>
                <span>→</span>
              </Link>
              <Link href="/funding/scotland/bridging" className="text-center px-4 py-3 text-xs font-semibold text-white/80 hover:text-white transition-colors self-center">
                Bridging Terms →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process: Understand / Introduce / Coordinate */}
      <section className="sky-container mb-16">
        <div className="bg-white p-8 sm:p-12 rounded-[28px] border border-[var(--border-hairline)] shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="sky-pill-badge mb-3">STRUCTURED APPROACH</div>
            <h2 className="sky-h2 text-2xl sm:text-3xl">How Funding Is Connected</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="text-xs font-bold tracking-wider text-[var(--accent-blue)]">01 — UNDERSTAND</div>
              <h3 className="sky-h3 text-xl">Establish Parameters</h3>
              <p className="sky-body text-sm leading-relaxed">
                Establish the asset, structure, timing and objectives before approaching any prospective funding counterparty.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-xs font-bold tracking-wider text-[var(--accent-blue)]">02 — INTRODUCE</div>
              <h3 className="sky-h3 text-xl">Targeted Alignment</h3>
              <p className="sky-body text-sm leading-relaxed">
                Make the appropriate introduction to authorised firms, verified funders or aligned investment principals.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-xs font-bold tracking-wider text-[var(--accent-blue)]">03 — COORDINATE</div>
              <h3 className="sky-h3 text-xl">Direct Completion</h3>
              <p className="sky-body text-sm leading-relaxed">
                Keep the process connected and communication transparent between all parties through to completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Notice Banner */}
      <section className="sky-container">
        <div className="p-8 rounded-[24px] bg-[var(--card-light)] text-[var(--ink-900)] text-xs leading-relaxed border border-[var(--border-hairline)]">
          <strong>Regulatory Notice:</strong> Prime Capital Partners is a trading name of Prime Capital Partners Group Ltd, registered in Scotland (Company No. SC902802). Prime Capital Partners is not authorised or regulated by the Financial Conduct Authority (FCA). We do not provide financial advice or arrange regulated contracts. We act strictly as an unregulated introducer connecting clients with authorised institutions and capital principals.
        </div>
      </section>
    </div>
  );
}
