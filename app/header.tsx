'use client'
import { TypographyH1 } from '@/components/layout/typography'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <TypographyH1>
          <Link href="/">Harrison King</Link>
        </TypographyH1>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-gray-800 dark:text-gray-500"
          delay={0.5}
        >
          Quant Developer | Founder
        </TextEffect>
      </div>
    </header>
  )
}
