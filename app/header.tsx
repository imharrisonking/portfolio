'use client'
import { TypographyH1 } from '@/components/layout/typography'
import { TextScramble } from '@/components/ui/text-scramble'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-7 flex items-center justify-between">
      <div>
        <Link href="/" className="inline-block">
          <TypographyH1 className="cursor-pointer">
            <TextScramble speed={0.5} scrambleOnHover="RETURN HOME">
              Harrison King
            </TextScramble>
          </TypographyH1>
        </Link>
        <TextScramble as="p" className="text-sm" speed={0.01} characters=".">
          Quant Developer & Founder
        </TextScramble>
      </div>
    </header>
  )
}
