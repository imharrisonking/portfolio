import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
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
    default: 'Harrison King',
    template: '%s | Harrison King',
  },
  description: `Building distributed quantitative forecasting models professionally.
  Creating scalable user-centric products personally.`,
}

const geist = Geist({
  variable: '--font-geist',
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
        className={`${geist.variable} ${departureMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
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
