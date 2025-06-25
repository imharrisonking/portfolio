'use client'
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
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <HeroSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <BlogSection />
      <ConnectSection />
    </motion.main>
  )
}