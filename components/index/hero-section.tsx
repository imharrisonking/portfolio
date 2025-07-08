'use client'
import { motion } from 'motion/react'
import {
  TypographyBlockquote,
  TypographyP,
} from '@/components/layout/typography'

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
      <TypographyP className="text-foreground text-base">
        Currently a Senior Quant Developer at the Low Carbon Contracts Company,
        building quantitative forecasting models professionally, and creating
        scalable user-centric products personally. I love working on truly
        impactful, mission-driven projects.
      </TypographyP>
    </motion.section>
  )
}
