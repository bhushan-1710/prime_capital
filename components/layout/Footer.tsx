'use client';

import React, { useState } from 'react';

/**
 * Footer — Prime Capital Partners
 * "Quiet capital. Clear conviction."
 * Navigation + Email + Legal identity + Regulatory notice
 */
export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rashid@primecapitalpartners.co.uk');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <footer className="sky-footer">
      <div className="sky-container">
        {/* Tagline */}
        <div className="mb-10">
          <p
            className="font-bold tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
              color: 'var(--text-heading)',
              letterSpacing: '-0.01em',
            }}
          >
            Quiet capital. Clear conviction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
          {/* Explore */}
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-label)', fontSize: '10px' }}>
              Explore
            </span>
            <a href="/about" style={{ color: 'var(--text-body)', fontSize: '12px' }}>About</a>
            <a href="/focus" style={{ color: 'var(--text-body)', fontSize: '12px' }}>Focus</a>
            <a href="/funding" style={{ color: 'var(--text-body)', fontSize: '12px' }}>Funding</a>
            <a href="/how-we-work" style={{ color: 'var(--text-body)', fontSize: '12px' }}>How We Work</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-label)', fontSize: '10px' }}>
              Contact
            </span>
            <a href="/connect" style={{ color: 'var(--text-body)', fontSize: '12px' }}>Connect</a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-left font-semibold hover:underline cursor-pointer"
              style={{ color: 'var(--accent-blue)', fontSize: '12px', background: 'none', border: 'none', padding: 0, fontFamily: 'var(--font-body)' }}
            >
              {emailCopied ? '✓ Email Copied' : 'Email Prime Capital'}
            </button>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-label)', fontSize: '10px' }}>
              Legal
            </span>
            <a href="/privacy" style={{ color: 'var(--text-body)', fontSize: '12px' }}>Privacy</a>
            <a href="/terms" style={{ color: 'var(--text-body)', fontSize: '12px' }}>Terms</a>
            <span style={{ color: 'var(--text-body)', fontSize: '12px' }}>Scotland SC902802</span>
          </div>

          {/* Entity */}
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-label)', fontSize: '10px' }}>
              Entity
            </span>
            <span style={{ color: 'var(--text-body)', fontSize: '12px' }}>Prime Capital Partners Group Ltd</span>
            <span style={{ color: 'var(--text-body)', fontSize: '12px' }}>Unregulated Introducer</span>
            <span style={{ color: 'var(--text-body)', fontSize: '12px' }}>Mayfair &amp; DIFC Desks</span>
          </div>
        </div>

        {/* Regulatory notice */}
        <div className="py-5" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
          <p className="leading-relaxed" style={{ fontSize: '10px', color: 'var(--text-label)' }}>
            Prime Capital Partners is a trading name of Prime Capital Partners Group Ltd, registered in Scotland (Company No. SC902802). Prime Capital Partners is not authorised or regulated by the Financial Conduct Authority (FCA). We act strictly as an unregulated introducer connecting clients with authorised firms and principals for regulated activities.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ fontSize: '10px', color: 'var(--text-label)' }}>
          <div className="tracking-wider uppercase">© {new Date().getFullYear()} Prime Capital Partners</div>
          <div className="tracking-wider uppercase">Quiet capital. Clear conviction.</div>
        </div>
      </div>
    </footer>
  );
}
