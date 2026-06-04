import type { Metadata } from 'next';
import { Syne, DM_Sans, JetBrains_Mono, Fraunces } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flinvent.net'),
  title: {
    default: 'Flinvent — Transformación digital potenciada por IA',
    template: '%s · Flinvent',
  },
  description: 'Studio boutique AI-native. UX/UI, desarrollo web y mobile, agentes IA y SaaS a medida. 15 años, 250+ proyectos. ISO 9001 & 27001.',
  openGraph: {
    type: 'website',
    url: 'https://flinvent.net',
    title: 'Flinvent — Studio boutique AI-native',
    description: 'Diseño UX/UI, desarrollo web/mobile y agentes IA. Buenos Aires, ARG.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flinvent',
    description: 'Studio boutique AI-native. Buenos Aires, ARG.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}>
      <body>
        <div className="glob-1" aria-hidden="true" />
        <div className="glob-2" aria-hidden="true" />
        <div className="glob-3" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
