import { motion } from 'motion/react'
import { PROJECTS } from '@/app/data'
import {
  TypographyH2,
  TypographyMuted,
  TypographyP,
} from '../layout/typography'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export function ProjectsSection() {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <TypographyH2>Selected Projects</TypographyH2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block space-y-2"
          >
            <div className="group-hover:ring-accent bg-background/40 ring-border relative overflow-hidden rounded-2xl p-1 ring-1 transition-all duration-200 ring-inset">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="aspect-video w-full rounded-xl"
              />
            </div>
            <div className="px-1">
              <h3 className="font-base dark:group-hover:text-accent group-hover:text-accent font-normal dark:text-gray-100">
                {project.name}
                <span className="ml-1 inline-block rotate-315 text-sm transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
                  →
                </span>
              </h3>
              <TypographyMuted className="group-hover:text-accent">
                {project.description}
              </TypographyMuted>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  )
}
