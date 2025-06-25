'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="font-mono text-lg font-medium text-black uppercase dark:text-white"
        >
          Harrison King
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Quant Developer | Founder
        </TextEffect>
      </div>
    </header>
  )
}
