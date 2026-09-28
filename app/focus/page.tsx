import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Focus',
  description:
    'Explore Prime Capital’s selected focus across real estate, golf & experiential, mining & sustainable opportunities, and data centres.',
  alternates: {
    canonical: 'https://primecapitalpartners.co.uk/focus',
  },
  openGraph: {
    title: 'Focus | Prime Capital Partners',
    description:
      'Explore Prime Capital’s selected focus across real estate, golf & experiential, mining & sustainable opportunities, and data centres.',
    url: 'https://primecapitalpartners.co.uk/focus',
  },
};

const FOCUS_AREAS = [
  {
    id: 'real-estate',
    label: 'Real Estate',
    geo: 'London · Mayfair · International',
    image: '/images/location-london.jpg',
    body: 'Residential and commercial prime opportunities, from individual trophy assets to larger strategic portfolios. Mayfair, Knightsbridge and The City are core zones, alongside selective regional and transatlantic positions.',
    sectors: ['Residential', 'Commercial', 'Mixed-Use', 'Hospitality'],
  },
  {
    id: 'golf',
    label: 'Golf & Experiential',
    geo: 'Scotland · St Andrews · Europe',
    image: '/images/location-scotland.jpg',
    body: 'Destination assets, world-class resorts and experiential estates across selected markets. Scotland presents exceptional opportunity across historic courses, estate development, and hospitality-led mandates.',
    sectors: ['Golf Resorts', 'Estates', 'Hospitality', 'Leisure'],
  },
  {
    id: 'mining',
    label: 'Mining & Sustainable',
    geo: 'Africa · International',
    image: '/images/location-africa.jpg',
    body: 'Resource and infrastructure opportunities where strategic alignment and long-term perspective matter. The focus is on selective mandates with credible counterparties and clear sustainability considerations.',
    sectors: ['Mining', 'Infrastructure', 'Sustainable Energy', 'Natural Resources'],
  },
  {
    id: 'data',
    label: 'Data Centres',
    geo: 'Global Corridors',
    image: '/images/hero-office.jpg',
    body: 'Selected opportunities across the expanding digital-infrastructure landscape — hyperscale and edge capacity — where real-asset fundamentals and capital-intensity align with our institutional network.',
    sectors: ['Hyperscale', 'Edge Compute', 'Co-location', 'Digital Infrastructure'],
  },
];

export default function FocusPage() {
  return (
    <div className="sky-page-wrapper">
      {/* Header */}
      <section className="sky-container mb-12">
        <div className="max-w-3xl">
          <div className="sky-pill-badge mb-4">AREAS OF FOCUS</div>
          <h1 className="sky-display mb-6">
            Where capital, assets and ambition meet.
          </h1>
          <p className="sky-body text-base sm:text-lg max-w-2xl text-[var(--text-body)]">
            Focused where capital, assets and ambition align — residential &amp; commercial property, experiential hospitality, sustainable resources, and digital infrastructure.
          </p>
        </div>
      </section>

      {/* Geography Strip */}
      <section className="sky-container mb-16">
        <div className="bg-white p-6 rounded-[24px] border border-[var(--border-hairline)] shadow-sm flex flex-wrap items-center justify-between gap-6">
          {[
            { region: 'London', detail: 'Mayfair • Knightsbridge • The City' },
            { region: 'Middle East', detail: 'Dubai • Abu Dhabi • Riyadh' },
            { region: 'Africa', detail: 'South Africa • Zambia • Zimbabwe' },
            { region: 'Scotland', detail: 'Edinburgh • St Andrews • Highlands' },
          ].map((g) => (
            <div key={g.region} className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-[var(--text-heading)]">{g.region}</span>
              <span className="text-xs text-[var(--text-body)]">{g.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Focus Area Cards */}
      <section className="sky-container mb-16">
        <div className="flex flex-col gap-12">
          {FOCUS_AREAS.map((f, i) => (
            <div
              key={f.id}
              className={`bg-white p-8 sm:p-12 rounded-[32px] border border-[var(--border-hairline)] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="sky-pill-badge mb-3">{f.geo}</div>
                <h2 className="sky-h2 text-2xl sm:text-3xl text-[var(--text-heading)] mb-4">{f.label}</h2>
                <p className="sky-body text-sm sm:text-base leading-relaxed text-[var(--text-body)] mb-6">{f.body}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {f.sectors.map((s) => (
                    <span
                      key={s}
                      className="px-3.5 py-1.5 rounded-full bg-[var(--bg-page)] border border-[var(--border-hairline)] text-xs font-semibold text-[var(--text-heading)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link href="/connect" className="sky-btn-primary">
                  <span>Enquire on Sector</span>
                  <span>→</span>
                </Link>
              </div>

              <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative h-[280px] sm:h-[340px] rounded-[24px] overflow-hidden border border-[var(--border-hairline)] shadow-inner">
                  <Image
                    src={f.image}
                    alt={f.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="sky-container">
        <div className="p-8 sm:p-12 rounded-[28px] bg-[var(--card-dark)] text-white text-center flex flex-col items-center">
          <h2 className="sky-h2 text-2xl sm:text-3xl text-white mb-4">
            Have a Specific Opportunity or Mandate?
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-md mb-6 leading-relaxed">
            We evaluate opportunities based on strategic fit, jurisdictional stability, and aligned counterparty requirements.
          </p>
          <Link href="/connect" className="sky-btn-glass">
            Begin a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
