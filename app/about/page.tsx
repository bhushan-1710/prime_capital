import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Prime Capital Partners is a private advisory and brokerage house connecting principals, opportunities and aligned capital with discretion.',
  alternates: {
    canonical: 'https://primecapitalpartners.co.uk/about',
  },
  openGraph: {
    title: 'About Us | Prime Capital Partners',
    description:
      'Prime Capital Partners is a private advisory and brokerage house connecting principals, opportunities and aligned capital with discretion.',
    url: 'https://primecapitalpartners.co.uk/about',
  },
};

export default function AboutPage() {
  return (
    <div className="sky-page-wrapper">
      {/* Page Header Hero */}
      <section className="sky-container mb-16">
        <div className="max-w-3xl">
          <div className="sky-pill-badge mb-4">ABOUT US</div>
          <h1 className="sky-display mb-6">
            A private house for capital, discretion and trust.
          </h1>
          <p className="sky-body text-base sm:text-lg max-w-2xl text-[var(--text-body)]">
            An advisory-led firm connecting principals, opportunities and aligned capital with discretion across key international financial corridors.
          </p>
        </div>
      </section>

      {/* Main Narrative Card */}
      <section className="sky-container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-[28px] border border-[var(--border-hairline)] shadow-sm flex flex-col gap-6">
            <div className="sky-pill-badge w-fit">OUR APPROACH</div>
            <h2 className="sky-h2 text-2xl sm:text-3xl text-[var(--text-heading)]">
              Quiet Conviction &amp; Uncompromising Discretion
            </h2>
            <p className="sky-body text-base leading-relaxed text-[var(--text-body)]">
              Prime Capital Partners is a private advisory and brokerage house. We work between principals, opportunities and aligned capital — providing considered advice, managing private introductions and coordinating execution where a measured, confidential approach is essential.
            </p>
            <p className="sky-body text-base leading-relaxed text-[var(--text-body)]">
              Our core focus sectors span premium real estate, experiential hospitality, sustainable resources, and mission-critical digital infrastructure — spanning active corridors across London, Edinburgh, Mayfair, DIFC, and international financial centres.
            </p>

            <div className="pt-6 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <p className="text-xs text-[var(--text-body)]/80 max-w-md">
                Prime Capital Partners is a trading name of Prime Capital Partners Group Ltd, registered in Scotland (SC902802). Unregulated introducer.
              </p>
              <Link href="/connect" className="sky-btn-primary">
                <span>Begin a Conversation</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics / Highlights Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-[var(--card-light)] p-8 rounded-[28px] flex flex-col gap-4 text-[var(--text-heading)] border border-[var(--border-hairline)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-heading)]/70">Corridors</span>
              <h3 className="text-xl font-bold">Global Presence</h3>
              <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
                Coordinated private capital execution connecting UK, European, Middle East, and transatlantic family offices and institutional principals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] border border-[var(--border-hairline)] shadow-sm flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-blue)]">Contact Directly</span>
              <h3 className="text-lg font-bold text-[var(--text-heading)]">Mayfair &amp; Edinburgh Desks</h3>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                Enquiries are handled under strict confidentiality with direct partner engagement.
              </p>
              <Link href="/connect" className="text-xs font-semibold text-[var(--accent-blue)] hover:underline">
                Submit a Private Mandate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discretion Section */}
      <section className="sky-container">
        <div className="p-8 sm:p-12 rounded-[28px] bg-[var(--card-dark)] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Private by Design</h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              We never circulate public teasers or broadcast opportunities. Every conversation begins with direct alignment between counterparties.
            </p>
          </div>
          <Link href="/connect" className="sky-btn-glass shrink-0">
            Begin a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
