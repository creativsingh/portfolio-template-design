import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { CustomCursor } from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'CreativSingh — Product Designer (B2B/B2C SaaS)',
  description:
    'CreativSingh is a Product Designer crafting user-centered B2B/B2C SaaS experiences, and the organizer behind the PixelPeps design community.',
  keywords: [
    'CreativSingh',
    'Product Designer',
    'UX Designer',
    'B2B SaaS',
    'B2C SaaS',
    'PixelPeps',
    'Design System',
  ],
  authors: [{ name: 'CreativSingh' }],
  openGraph: {
    title: 'CreativSingh — Product Designer (B2B/B2C SaaS)',
    description:
      'Crafting user-centered B2B/B2C SaaS experiences people actually love.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-grid-pattern">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
