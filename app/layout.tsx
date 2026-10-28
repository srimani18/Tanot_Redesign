import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tanot Solutions | SEO that moves business forward',
  description:
    'A responsive homepage redesign concept for Tanot Solutions, focused on search visibility, authority building, and measurable business growth.',
  metadataBase: new URL('https://tanotsolutions.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Tanot Solutions | SEO that moves business forward',
    description: 'Turn search visibility into real growth.',
    type: 'website',
    url: 'https://tanotsolutions.com/',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#14251f',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
