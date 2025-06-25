import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Serif } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://harrisonk.ing'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Harrison King | Quant Developer & Founder',
    template: '%s | Harrison King',
  },
  description: `Building distributed quantitative forecasting models professionally.
  Creating scalable user-centric products personally.`,
  icons: {
    icon: [
      {
        type: 'image/ico',
        media: '(prefers-color-scheme: light)',
        url: '/icon-light.ico',
      },
      {
        type: 'image/ico',
        media: '(prefers-color-scheme: dark)',
        url: '/icon-dark.ico',
      },
    ],
  },
}

const imbPlexSerif = IBM_Plex_Serif({
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const departureMono = localFont({
  src: '../fonts/DepartureMono-Regular.woff2',
  variable: '--font-mono',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${imbPlexSerif.variable} ${departureMono.variable} bg-background text-foreground tracking-tight antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-sans">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
