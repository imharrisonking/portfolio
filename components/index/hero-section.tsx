'use client'
import { motion } from 'motion/react'
import { TypographyBlockquote } from '@/components/layout/typography'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export function HeroSection() {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className="flex-1">
        <TypographyBlockquote>
          {`Building distributed quantitative forecasting models professionally.
Creating scalable user-centric products personally.`}
        </TypographyBlockquote>
      </div>
    </motion.section>
  )
}
