'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same structure to avoid hydration mismatch
    return (
      <div className="bg-muted inline-flex gap-0.5 rounded-lg p-0.5">
        {THEMES_OPTIONS.map((theme) => (
          <button
            key={theme.id}
            className="data-[checked=true]:text-accent inline-flex h-7 w-7 items-center justify-center transition-colors duration-100 focus-visible:outline-2"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            disabled
          >
            {theme.icon}
          </button>
        ))}
      </div>
    )
  }

  return (
    <AnimatedBackground
      className="bg-accent/5 pointer-events-none rounded-lg"
      defaultValue={theme || 'light'}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="data-[checked=true]:text-accent inline-flex h-7 w-7 items-center justify-center transition-colors duration-100 focus-visible:outline-2"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

function FooterText() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span className="text-xs">© 2025 Harrison King.</span>
  }

  return (
    <TextLoop className="text-xs">
      <span>© 2025 Harrison King.</span>
      <span>Made by me.</span>
    </TextLoop>
  )
}

export function Footer() {
  return (
    <footer className="border-border mt-24 border-t px-0 py-4">
      <div className="flex items-center justify-between">
        <a href="https://github.com/ibelick/nim" target="_blank">
          <FooterText />
        </a>
        <div className="text-xs text-gray-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
