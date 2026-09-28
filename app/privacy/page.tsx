import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Prime Capital Partners privacy policy, data protection and confidentiality notice.',
  alternates: {
    canonical: 'https://primecapitalpartners.co.uk/privacy',
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      heading: 'Who We Are',
      body: 'Prime Capital Partners is a trading name of Prime Capital Partners Group Ltd, registered in Scotland (Company No. SC902802). When this policy refers to "we", "us" or "our", it refers to Prime Capital Partners Group Ltd.',
    },
    {
      heading: 'Information We Collect',
      body: 'We collect information you provide directly — for example, when you complete an enquiry form or contact us via confidential email. This may include your name, company, email address, and transaction or mandate parameters.',
    },
    {
      heading: 'How We Use Your Information',
      body: 'We use the information you provide solely to respond to your inquiry and evaluate counterparty alignment. We never sell your data to third parties, circulate details without written consent, or utilize automated profiling.',
    },
    {
      heading: 'Data Retention & Security',
      body: 'We retain enquiry information for a strictly limited duration required to correspond with you and fulfill compliance obligations, after which it is securely permanently expunged.',
    },
    {
      heading: 'Your Legal Rights',
      body: 'You retain full rights under UK GDPR to request access to the personal data we hold, request immediate erasure, or request correction. To exercise these rights, email us at rashid@primecapitalpartners.co.uk.',
    },
  ];

  return (
    <div className="sky-page-wrapper">
      <section className="sky-container max-w-3xl mb-12">
        <div className="sky-pill-badge mb-4">LEGAL &amp; COMPLIANCE</div>
        <h1 className="sky-display mb-8">Privacy Policy</h1>

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
