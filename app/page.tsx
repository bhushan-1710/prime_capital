'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroScrollAnimation from '@/components/hero/HeroScrollAnimation';

/* ──────────────────────────────────────────────
   Scroll-Reveal Hook (IntersectionObserver)
   ────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '120px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  // Reveal refs
  const servicesRef = useReveal();
  const servicesGridRef = useReveal();
  const focusRef = useReveal();
  const focusGridRef = useReveal();
  const processRef = useReveal();
  const processGridRef = useReveal();
  const fundingRef = useReveal();
  const geoRef = useReveal();
  const geoGridRef = useReveal();
  const ctaRef = useReveal();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rashid@primecapitalpartners.co.uk');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="relative overflow-x-clip">
      {/* ============================================================
          1. HERO + SCROLL ANIMATION
          "Capital, connected with discretion."
          → scrolls into "Between opportunity and capital."
          ============================================================ */}
      <HeroScrollAnimation />

      {/* ============================================================
          2. THREE SERVICES — Advisory / Brokerage / Capital
          ============================================================ */}
      <section id="services" className="sky-section">
        <div className="sky-container">
          <div ref={servicesRef} className="text-center max-w-xl mx-auto mb-14 reveal">
            <div className="sky-pill-badge mx-auto">OUR SERVICES</div>
            <h2 className="sky-h2 mb-4">
              Advisory. Brokerage. Capital.
            </h2>
            <p className="sky-body text-base max-w-lg mx-auto">
              Three disciplines, one measured approach — connecting principals with opportunities and aligned capital.
            </p>
          </div>

          <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger reveal">
            {/* Advisory */}
            <div className="sky-card sky-card-light flex flex-col justify-between gap-6 reveal-child p-7 sm:p-8 rounded-[24px]">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--icon-lavender-bg)', color: 'var(--icon-navy)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="sky-h3 text-xl mb-2">Advisory</h3>
                  <p className="sky-body text-sm leading-relaxed">
                    Strategic advice, asset positioning and transaction planning. We help principals understand their position before approaching the market.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(35,41,70,0.08)] flex flex-col gap-2">
                <div className="text-xs font-semibold text-[var(--text-heading)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                  <span>Asset positioning &amp; valuation strategy</span>
                </div>
                <div className="text-xs font-semibold text-[var(--text-heading)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                  <span>Transaction planning &amp; structuring</span>
                </div>
                <div className="text-xs font-semibold text-[var(--text-heading)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                  <span>Confidential pre-market appraisal</span>
                </div>
              </div>
            </div>

            {/* Discreet Brokerage */}
            <div className="sky-card sky-card-dark flex flex-col justify-between gap-6 reveal-child p-7 sm:p-8 rounded-[24px]">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(224, 231, 249, 0.18)', color: '#FFFFFF' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="sky-h3 text-xl mb-2" style={{ color: '#FFFFFF' }}>Discreet Brokerage</h3>
                  <p className="sky-body text-sm leading-relaxed" style={{ color: 'rgba(224, 231, 249, 0.85)' }}>
                    Private sourcing, controlled access and carefully managed introductions between qualified counterparties.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(224,231,249,0.15)] flex flex-col gap-2">
                <div className="text-xs font-semibold text-white/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Private counterparty sourcing</span>
                </div>
                <div className="text-xs font-semibold text-white/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Controlled access under strict NDA</span>
                </div>
                <div className="text-xs font-semibold text-white/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Bilateral qualified introductions</span>
                </div>
              </div>
            </div>

            {/* Capital & Execution */}
            <div className="sky-card sky-card-light flex flex-col justify-between gap-6 reveal-child p-7 sm:p-8 rounded-[24px]">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--icon-lavender-bg)', color: 'var(--icon-navy)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="sky-h3 text-xl mb-2">Capital &amp; Execution</h3>
                  <p className="sky-body text-sm leading-relaxed">
                    Equity participation, aligned capital and selected funding structures — coordinated introductions to private, family office and institutional capital.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(35,41,70,0.08)] flex flex-col gap-2">
                <div className="text-xs font-semibold text-[var(--text-heading)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                  <span>Co-investment &amp; equity syndication</span>
                </div>
                <div className="text-xs font-semibold text-[var(--text-heading)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                  <span>Islamic finance structures (Murabaha)</span>
                </div>
                <div className="text-xs font-semibold text-[var(--text-heading)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                  <span>Institutional principal introductions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. FOCUS AREAS — Real Estate / Golf / Mining / Data Centres
          ============================================================ */}
      <section id="focus" className="sky-section" style={{ paddingTop: 0 }}>
        <div className="sky-container">
          <div ref={focusRef} className="text-center max-w-xl mx-auto mb-14 reveal">
            <div className="sky-pill-badge mx-auto">FOCUS</div>
            <h2 className="sky-h2 mb-4">
              Focused where capital, assets<br />and ambition meet.
            </h2>
            <p className="sky-body text-base max-w-md mx-auto">
              Strategic deployment across sectors where fundamental asset quality and counterparty alignment determine long-term value.
            </p>
          </div>

          <div ref={focusGridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-stagger reveal">
            {/* Real Estate */}
            <div className="sky-card sky-card-white flex flex-col justify-between gap-5 reveal-child p-7 sm:p-8 rounded-[28px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="sky-icon-navy-circle mb-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--text-heading)]">
                    London · Mayfair Prime
                  </span>
                </div>
                <h3 className="sky-h3 text-xl mb-2">Real Estate</h3>
                <p className="sky-body text-sm leading-relaxed mb-5">
                  Residential and commercial opportunities, from individual trophy assets to larger strategic portfolios across prime London and key international hubs.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {['Residential', 'Commercial', 'Trophy Portfolios'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--bg-page)] text-[var(--text-heading)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/focus" className="text-xs font-bold text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1">
                  <span>Explore</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Golf & Experiential */}
            <div className="sky-card sky-card-white flex flex-col justify-between gap-5 reveal-child p-7 sm:p-8 rounded-[28px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--icon-lavender-bg)', color: 'var(--icon-navy)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                      <line x1="4" y1="22" x2="4" y2="15" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--text-heading)]">
                    Scotland · St Andrews
                  </span>
                </div>
                <h3 className="sky-h3 text-xl mb-2">Golf &amp; Experiential</h3>
                <p className="sky-body text-sm leading-relaxed mb-5">
                  Destination assets, world-class golf links, resorts and private experiential estates where heritage and international tourism converge.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {['Historic Links', 'Resorts', 'Private Estates'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--bg-page)] text-[var(--text-heading)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/focus" className="text-xs font-bold text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1">
                  <span>Explore</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Mining & Sustainable */}
            <div className="sky-card sky-card-white flex flex-col justify-between gap-5 reveal-child p-7 sm:p-8 rounded-[28px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--icon-lavender-bg)', color: 'var(--icon-navy)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M2 22L12 2l10 20H2z" strokeLinejoin="round" />
                      <line x1="12" y1="10" x2="12" y2="16" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--text-heading)]">
                    Strategic Corridors
                  </span>
                </div>
                <h3 className="sky-h3 text-xl mb-2">Mining &amp; Sustainable</h3>
                <p className="sky-body text-sm leading-relaxed mb-5">
                  Resource and infrastructure opportunities where long-term perspective, environmental governance and verified counterparties align.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {['Sustainable Resources', 'Infrastructure', 'Energy'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--bg-page)] text-[var(--text-heading)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/focus" className="text-xs font-bold text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1">
                  <span>Explore</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Data Centres */}
            <div className="sky-card sky-card-white flex flex-col justify-between gap-5 reveal-child p-7 sm:p-8 rounded-[28px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="sky-icon-navy-circle mb-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--text-heading)]">
                    Global Hyperscale
                  </span>
                </div>
                <h3 className="sky-h3 text-xl mb-2">Data Centres</h3>
                <p className="sky-body text-sm leading-relaxed mb-5">
                  Selected institutional mandates across the expanding digital-infrastructure landscape, connecting power-secured sites with international capital.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {['Hyperscale', 'Edge Compute', 'Power-Backed'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--bg-page)] text-[var(--text-heading)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/focus" className="text-xs font-bold text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1">
                  <span>Explore</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/focus" className="sky-btn-primary">
              <span>Explore All Focus Areas</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. HOW WE WORK — Understand / Introduce / Coordinate
          ============================================================ */}
      <section id="process" className="sky-section sky-section-dark">
        <div className="sky-container">
          <div ref={processRef} className="text-center max-w-xl mx-auto mb-14 reveal">
            <div className="sky-pill-badge mx-auto" style={{ backgroundColor: 'rgba(224, 231, 249, 0.12)', color: 'rgba(224, 231, 249, 0.85)', border: '1px solid rgba(224, 231, 249, 0.18)' }}>
              HOW WE WORK
            </div>
            <h2 className="sky-h2 mb-4" style={{ color: '#FFFFFF' }}>
              Understand. Introduce. Coordinate.
            </h2>
            <p className="text-sm sm:text-base text-white/75 max-w-md mx-auto">
              A disciplined, three-stage advisory methodology designed to protect confidentiality and ensure counterparty alignment.
            </p>
          </div>

          <div ref={processGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger reveal">
            {/* Step 1 */}
            <div className="p-7 sm:p-8 rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xs flex flex-col justify-between gap-5 transition-all hover:border-white/20 hover:bg-white/[0.06] reveal-child">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="w-9 h-9 rounded-full bg-white/10 text-white font-bold text-xs flex items-center justify-center">
                    01
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    Phase One
                  </span>
                </div>
                <h3 className="sky-h3 text-xl text-white">Understand</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  We establish the asset, structure, timing and strategic objectives before any introduction is considered. A poor fit wastes time, so this foundation is never rushed.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-xs text-white/60 font-medium">
                Mandate Clarification &amp; Fit Analysis
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-7 sm:p-8 rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xs flex flex-col justify-between gap-5 transition-all hover:border-white/20 hover:bg-white/[0.06] reveal-child">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="w-9 h-9 rounded-full bg-white/10 text-white font-bold text-xs flex items-center justify-center">
                    02
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    Phase Two
                  </span>
                </div>
                <h3 className="sky-h3 text-xl text-white">Introduce</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Where appropriate, we connect the mandate with relevant capital, authorised providers or principals. Introductions are conducted privately, directly and with clear alignment.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-xs text-white/60 font-medium">
                Confidential Introductions Under NDA
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-7 sm:p-8 rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xs flex flex-col justify-between gap-5 transition-all hover:border-white/20 hover:bg-white/[0.06] reveal-child">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="w-9 h-9 rounded-full bg-white/10 text-white font-bold text-xs flex items-center justify-center">
                    03
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    Phase Three
                  </span>
                </div>
                <h3 className="sky-h3 text-xl text-white">Coordinate</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  We keep communication moving between the parties through the process to completion — ensuring questions are resolved swiftly and momentum is maintained.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-xs text-white/60 font-medium">
                Execution Momentum Through Completion
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-we-work" className="sky-btn-glass text-[var(--text-heading)]">
              <span>Learn More About Our Process</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. FUNDING — Equity + Islamic Finance
          ============================================================ */}
      <section id="funding" className="sky-section">
        <div className="sky-container">
          <div ref={fundingRef} className="reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left: Copy & Snapshots */}
              <div className="lg:col-span-6 flex flex-col items-start gap-5">
                <div className="sky-pill-badge self-start">FUNDING</div>
                <h2 className="sky-h2">
                  Equity on one side.<br />Islamic finance on the other.
                </h2>
                <p className="sky-body text-sm sm:text-base leading-relaxed">
                  For selected mandates, Prime Capital can introduce aligned capital and authorised finance providers across equity participation and Islamic finance structures.
                </p>

                {/* Structured Snapshot Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full my-2">
                  <div className="p-4 rounded-2xl bg-white border border-[var(--border-hairline)] shadow-2xs">
                    <span className="text-[11px] font-bold text-[var(--accent-blue)] uppercase tracking-wider block mb-1">
                      Pillar 01
                    </span>
                    <h4 className="text-sm font-bold text-[var(--text-heading)] mb-1">Equity &amp; Participation</h4>
                    <p className="text-xs text-[var(--text-body)]">Co-investment, joint ventures and institutional capital.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[var(--border-hairline)] shadow-2xs">
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                      Pillar 02
                    </span>
                    <h4 className="text-sm font-bold text-[var(--text-heading)] mb-1">Islamic Finance</h4>
                    <p className="text-xs text-[var(--text-body)]">Murabaha property-backed bridging in Scotland.</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/funding" className="sky-btn-primary">
                    <span>Explore Funding</span>
                    <span>→</span>
                  </Link>
                  <Link href="/funding/scotland" className="text-sm font-semibold text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1">
                    <span>Scotland Pathway</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right: Architectural Image Frame with floating badge */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[360px] sm:h-[400px] rounded-[28px] overflow-hidden border border-[var(--border-hairline)] shadow-sm">
                  <Image
                    src="/images/hero-office.jpg"
                    alt="Private capital office environment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,41,70,0.55)] via-transparent to-transparent" />
                  
                  {/* Floating Metric Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-label)] block">
                        Live Scottish Facility
                      </span>
                      <span className="text-sm font-bold text-[var(--text-heading)]">
                        Islamic Bridging Finance £100K – £1M
                      </span>
                    </div>
                    <Link href="/funding/scotland/bridging" className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[var(--card-dark)] text-white hover:bg-[var(--accent-blue)] transition-colors">
                      Criteria →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. GEOGRAPHY — A private network across key corridors
          ============================================================ */}
      <section id="corridors" className="sky-section" style={{ paddingTop: 0 }}>
        <div className="sky-container">
          <div ref={geoRef} className="text-center max-w-xl mx-auto mb-14 reveal">
            <div className="sky-pill-badge mx-auto">CORRIDORS</div>
            <h2 className="sky-h2 mb-4">
              A private network across<br />key corridors.
            </h2>
            <p className="sky-body text-base max-w-md mx-auto">
              Connecting qualified principals across established financial hubs and active emerging markets.
            </p>
          </div>

          <div ref={geoGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger reveal">
            {/* London */}
            <div className="sky-card sky-card-white p-4 sm:p-5 rounded-[24px] flex flex-col gap-4 group reveal-child">
              <div className="relative h-[200px] rounded-[16px] overflow-hidden">
                <Image
                  src="/images/location-london.jpg"
                  alt="London skyline"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs">
                  UK Prime
                </span>
              </div>
              <div>
                <h3 className="sky-h3 text-lg font-bold text-[var(--text-heading)] mb-1">London</h3>
                <p className="sky-body text-xs text-[var(--text-body)]">Mayfair · Knightsbridge · The City</p>
              </div>
            </div>

            {/* Middle East */}
            <div className="sky-card sky-card-white p-4 sm:p-5 rounded-[24px] flex flex-col gap-4 group reveal-child">
              <div className="relative h-[200px] rounded-[16px] overflow-hidden">
                <Image
                  src="/images/location-middle-east.jpg"
                  alt="Dubai skyline"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs">
                  GCC
                </span>
              </div>
              <div>
                <h3 className="sky-h3 text-lg font-bold text-[var(--text-heading)] mb-1">Middle East</h3>
                <p className="sky-body text-xs text-[var(--text-body)]">Dubai · Abu Dhabi · Riyadh</p>
              </div>
            </div>

            {/* Africa */}
            <div className="sky-card sky-card-white p-4 sm:p-5 rounded-[24px] flex flex-col gap-4 group reveal-child">
              <div className="relative h-[200px] rounded-[16px] overflow-hidden">
                <Image
                  src="/images/location-africa.jpg"
                  alt="African landscape"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs">
                  Resources
                </span>
              </div>
              <div>
                <h3 className="sky-h3 text-lg font-bold text-[var(--text-heading)] mb-1">Africa</h3>
                <p className="sky-body text-xs text-[var(--text-body)]">South Africa · Zambia · Zimbabwe</p>
              </div>
            </div>

            {/* Scotland */}
            <div className="sky-card sky-card-white p-4 sm:p-5 rounded-[24px] flex flex-col gap-4 group reveal-child">
              <div className="relative h-[200px] rounded-[16px] overflow-hidden">
                <Image
                  src="/images/location-scotland.jpg"
                  alt="Scottish highlands"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs">
                  Registered Hub
                </span>
              </div>
              <div>
                <h3 className="sky-h3 text-lg font-bold text-[var(--text-heading)] mb-1">Scotland</h3>
                <p className="sky-body text-xs text-[var(--text-body)]">Edinburgh · St Andrews · Highlands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. CLOSING CTA — "Some opportunities are better handled privately."
          ============================================================ */}
      <section id="contact" className="sky-section" style={{ paddingTop: 0 }}>
        <div className="sky-container">
          <div
            ref={ctaRef}
            className="rounded-[32px] text-white relative reveal"
            style={{
              backgroundColor: 'var(--card-dark)',
              boxShadow: '0 24px 64px -16px rgba(35, 39, 66, 0.3)',
              padding: 'clamp(56px, 7vw, 84px) clamp(28px, 4vw, 56px)',
            }}
          >
            <div className="max-w-lg mx-auto text-center">
              <h2
                className="font-bold tracking-tight text-white mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                }}
              >
                Some opportunities are better handled privately.
              </h2>
              <p className="text-xs sm:text-sm mb-8" style={{ color: 'rgba(224, 231, 249, 0.75)', lineHeight: 1.7 }}>
                Tell us what you are working on. We will establish whether the mandate is relevant to our network and approach.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/connect" className="sky-btn-glass text-[var(--text-heading)]">
                  Begin a Conversation
                </Link>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs font-medium transition-colors cursor-pointer hover:text-white"
                  style={{
                    color: 'rgba(224, 231, 249, 0.75)',
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {copied ? '✓ Email copied' : 'Or email us directly →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
