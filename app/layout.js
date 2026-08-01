import { Montserrat, Open_Sans } from 'next/font/google';
import { Navbar } from '@/components/ui';
import '../styles/globals.css';

/* ─── Font Loading ──────────────────────────────────────────── */
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
  weight: ['300', '400', '500', '600', '700', '800'],
  preload: true,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
});

/* ─── Site-wide Metadata ────────────────────────────────────── */
export const metadata = {
  metadataBase: new URL('https://stratosinfrastructure.com'),

  title: {
    default: 'Stratos Infrastructure & Construction',
    template: '%s | Stratos Infrastructure & Construction',
  },

  description:
    'Stratos Infrastructure & Construction delivers world-class engineering solutions — from large-scale civil works to precision commercial builds. Trusted by governments and Fortune 500 companies across four continents.',

  keywords: [
    'infrastructure construction',
    'civil engineering',
    'commercial construction',
    'industrial construction',
    'project management',
    'Stratos Infrastructure',
    'large-scale construction',
    'construction company',
  ],

  authors: [{ name: 'Stratos Infrastructure & Construction' }],
  creator: 'Stratos Infrastructure & Construction',
  publisher: 'Stratos Infrastructure & Construction',

  // ─── Open Graph ───────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stratosinfrastructure.com',
    siteName: 'Stratos Infrastructure & Construction',
    title: 'Stratos Infrastructure & Construction',
    description:
      'Engineering the future with precision and purpose. World-class infrastructure solutions across civil, commercial, and industrial sectors.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stratos Infrastructure & Construction',
      },
    ],
  },

  // ─── Twitter Card ─────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Stratos Infrastructure & Construction',
    description:
      'Engineering the future with precision and purpose.',
    images: ['/images/og-image.jpg'],
    creator: '@StratosBuilds',
  },

  // ─── Robots ───────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ─── Icons ────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
  },

  // ─── Manifest ─────────────────────────────────────────────────
  // manifest: '/site.webmanifest',

};

/* ─── Viewport Configuration ────────────────────────────────── */
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
    { media: '(prefers-color-scheme: light)', color: '#0d1117' },
  ],
};

/* ─── Root Layout ───────────────────────────────────────────── */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-neutral-900 antialiased overflow-x-hidden">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="
            sr-only focus:not-sr-only
            fixed top-4 left-4 z-[9999]
            bg-primary-600 text-white
            px-4 py-2 rounded-lg text-sm font-semibold
            focus:outline-none focus:ring-2 focus:ring-primary-400
          "
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content" className="flex flex-col min-h-dvh">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
