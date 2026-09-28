import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Prime Capital Partners terms of use and regulatory disclaimer.',
  alternates: {
    canonical: 'https://primecapitalpartners.co.uk/terms',
  },
};

export default function TermsPage() {
  const sections = [
    {
      heading: 'About This Platform',
      body: 'This website is operated by Prime Capital Partners Group Ltd, registered in Scotland (Company No. SC902802). Prime Capital Partners is not authorised or regulated by the Financial Conduct Authority (FCA).',
    },
    {
      heading: 'No Regulated Financial Advice',
      body: 'Nothing on this website constitutes financial, investment, tax or legal advice. We do not arrange or administer regulated credit or mortgage contracts. Prime Capital Partners acts strictly as an unregulated introducer connecting verified counterparties.',
    },
    {
      heading: 'Introductions & Advisory Scope',
      body: 'Where Prime Capital Partners makes an introduction to an FCA-authorised firm, the authorised firm is solely responsible for all regulated activity, execution advice and documentation. You should obtain independent professional advice prior to entering binding commitments.',
    },
    {
      heading: 'Accuracy & Indicative Terms',
      body: 'While we strive to ensure all information is accurate and up to date, indicative mandate criteria and market figures are illustrative only and subject to formal underwriting and verification.',
    },
    {
      heading: 'Governing Law',
      body: 'These terms and any interactions originating from this platform are governed by and construed in accordance with the Laws of Scotland.',
    },
  ];

  return (
    <div className="sky-page-wrapper">
      <section className="sky-container max-w-3xl mb-12">
        <div className="sky-pill-badge mb-4">LEGAL &amp; REGULATORY</div>
        <h1 className="sky-display mb-8">Terms of Use</h1>

        <div className="bg-white p-8 sm:p-12 rounded-[28px] border border-[var(--border-hairline)] shadow-sm flex flex-col gap-8">
          {sections.map((s, idx) => (
            <div key={s.heading} className={idx > 0 ? 'pt-8 border-t border-[var(--border-hairline)]' : ''}>
              <h2 className="sky-h3 text-xl font-bold text-[var(--text-heading)] mb-3">{s.heading}</h2>
              <p className="sky-body text-base leading-relaxed text-[var(--text-body)]">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
