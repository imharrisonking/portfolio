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
      <TypographyP className="text-sm text-gray-900 first-letter:float-left first-letter:mr-1 first-letter:text-6xl first-letter:leading-[0.6] first-letter:font-normal dark:text-white">
        Currently I work as a Senior Quant Developer at the Low Carbon Contracts
        Company. I like building distributed quantitative forecasting models
        professionally, and creating scalable user-centric products personally.
        I love working on difficult problems and I only work on things that are
        strongly misson driven
      </TypographyP>
    </motion.section>
  )
}
