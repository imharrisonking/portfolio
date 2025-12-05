'use client'
import { motion } from 'motion/react'
import { TypographyP } from '@/components/layout/typography'

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

export function HeroSection() {
    return (
        <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
        >
            <TypographyP className="text-foreground text-base">
                Currently working on high-performance distributed systems for
                climate impact. Also building Propagate, a platform to help
                fitness creators launch their own mobile apps.
            </TypographyP>
        </motion.section>
    )
}
