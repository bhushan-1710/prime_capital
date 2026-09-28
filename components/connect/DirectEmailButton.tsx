'use client';

import React, { useState } from 'react';

export default function DirectEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('rashid@primecapitalpartners.co.uk');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleCopy}
        className="sky-btn-glass text-[var(--text-heading)] w-full text-center"
      >
        {copied ? '✓ Email Copied' : 'Email Prime Capital'}
      </button>
      <span className="text-[11px] text-white/70 text-center">
        rashid@primecapitalpartners.co.uk
      </span>
    </div>
  );
}
