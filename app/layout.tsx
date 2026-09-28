import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Prime Capital Partners | Advisory, Capital & Private Opportunities',
    template: '%s | Prime Capital Partners',
  },
  description:
    'Prime Capital connects principals, opportunities and aligned capital through discreet advisory, introductions and selected funding pathways.',
  metadataBase: new URL('https://primecapitalpartners.co.uk'),
  alternates: {
    canonical: 'https://primecapitalpartners.co.uk',
  },
  openGraph: {
    siteName: 'Prime Capital Partners',
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/images/hero-office.jpg', width: 1200, height: 630, alt: 'Prime Capital Partners' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Capital Partners | Advisory, Capital & Private Opportunities',
    description: 'Quiet capital. Clear conviction.',
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Prime Capital Partners',
  legalName: 'Prime Capital Partners Group Ltd',
  url: 'https://primecapitalpartners.co.uk',
  description: 'Private advisory and brokerage house connecting principals, opportunities and aligned capital.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressRegion: 'Scotland',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
