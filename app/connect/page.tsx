import React from 'react';
import type { Metadata } from 'next';
import ConnectForm from '@/components/connect/ConnectForm';
import DirectEmailButton from '@/components/connect/DirectEmailButton';

export const metadata: Metadata = {
  title: 'Begin a Conversation',
  description:
    'Contact Prime Capital Partners about opportunities, aligned capital and selected funding pathways.',
  alternates: {
    canonical: 'https://primecapitalpartners.co.uk/connect',
  },
  openGraph: {
    title: 'Begin a Conversation | Prime Capital Partners',
    description:
      'Contact Prime Capital Partners about opportunities, aligned capital and selected funding pathways.',
    url: 'https://primecapitalpartners.co.uk/connect',
  },
};

export default function ConnectPage() {
  return (
    <div className="sky-page-wrapper">
      {/* Header */}
      <section className="sky-container mb-12">
        <div className="max-w-2xl">
          <div className="sky-pill-badge mb-4">BEGIN A CONVERSATION</div>
          <h1 className="sky-display mb-4">
            Begin a conversation.
          </h1>
          <p className="sky-body text-base sm:text-lg text-[var(--text-body)]">
            Whether you are bringing an opportunity, looking for aligned capital, or exploring a funding route, start with the context. We will determine whether the mandate is relevant to our network.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="sky-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Inquiry Form Card */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-[28px] border border-[var(--border-hairline)] shadow-sm">
            <ConnectForm />
          </div>

          {/* Right Direct Contact Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-[var(--card-dark)] text-white p-8 rounded-[28px] shadow-lg flex flex-col gap-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--badge-bg)]/80">
                Direct Contact
              </span>
              <h2 className="text-2xl font-bold text-white">Prefer Email?</h2>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                Prefer email? Start the conversation directly with our partner desk under strict confidentiality.
              </p>
              <div className="pt-2">
                <DirectEmailButton />
              </div>
            </div>

            <div className="bg-white p-8 rounded-[28px] border border-[var(--border-hairline)] shadow-sm flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-blue)]">
                Operational Desks
              </span>
              <h3 className="font-bold text-base text-[var(--text-heading)]">London • Edinburgh • DIFC</h3>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                Engagements conducted strictly by advance appointment. Discretion guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
