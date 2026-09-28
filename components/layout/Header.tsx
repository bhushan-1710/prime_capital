'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Header / Navbar — design (1).md Section 5
 * Sticky, persists across all sections.
 * Background: transparent + subtle blur over hero photo,
 * transitions to solid light bg on scroll.
 * CTA: white/glass pill — "Begin a Conversation"
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isSolid = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Focus', href: '/focus' },
    { label: 'Funding', href: '/funding' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Connect', href: '/connect' },
  ];

  return (
    <>
      <header className={`sky-nav ${isSolid ? 'is-scrolled' : ''}`}>
        <div className="sky-container">
          <div className="sky-nav-inner">
            {/* Logo — Luxury geometric capital mark + "PRIME CAPITAL" */}
            <Link href="/" className="sky-nav-logo flex items-center gap-2.5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke={isSolid ? 'var(--card-dark)' : '#FFFFFF'} strokeWidth="1.8" />
                <path d="M7 8h6a3 3 0 0 1 0 6H7V8z" stroke={isSolid ? 'var(--card-dark)' : '#FFFFFF'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="15.5" cy="15.5" r="1.5" fill={isSolid ? 'var(--card-dark)' : '#FFFFFF'} />
              </svg>
              <span className="font-bold tracking-tight uppercase" style={{ fontSize: '0.9375rem', letterSpacing: '0.04em' }}>
                Prime Capital
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="sky-nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="sky-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right: Pill CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link href="/connect" className="sky-nav-cta hidden sm:inline-flex items-center gap-2">
                <span>Begin a Conversation</span>
              </Link>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full cursor-pointer transition-colors"
                style={{
                  backgroundColor: isSolid ? 'var(--badge-bg)' : 'rgba(255, 255, 255, 0.2)',
                  color: isSolid ? 'var(--text-heading)' : '#FFFFFF',
                  border: 'none',
                  outline: 'none',
                }}
                aria-label="Toggle navigation menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`sky-menu-overlay ${isOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2.5 rounded-full cursor-pointer text-white hover:opacity-80 transition-opacity"
          style={{ background: 'rgba(255, 255, 255, 0.12)', border: 'none' }}
          aria-label="Close menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-5 text-center">
          <div className="mb-2">
            <span className="sky-eyebrow text-white/60">PRIME CAPITAL PARTNERS</span>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-white no-underline hover:text-[#5A78D6] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/connect"
            onClick={() => setIsOpen(false)}
            className="sky-btn-glass mt-5 no-underline"
          >
            Begin a Conversation
          </Link>

          <div className="mt-6 text-[10px] text-white/40 max-w-xs text-center">
            Prime Capital Partners • Scotland Registered SC902802 • Unregulated Introducer
          </div>
        </div>
      </div>
    </>
  );
}
