'use client'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import {
  HeroSection,
  ProjectsSection,
  WorkExperienceSection,
  BlogSection,
  ConnectSection,
} from '@/components/index'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function Personal() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial={false}
      animate={mounted ? "visible" : "hidden"}
    >
      <HeroSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <BlogSection />
      <ConnectSection />
    </motion.main>
  )
}