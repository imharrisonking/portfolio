import { motion } from 'motion/react'
import { PROJECTS } from '@/app/data'
import { TypographyH2 } from '../layout/typography'

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
            <div className="relative overflow-hidden rounded-2xl bg-gray-50/40 p-1 ring-1 ring-gray-200/50 transition-all duration-200 ring-inset group-hover:ring-blue-600 dark:bg-neutral-800/40 dark:ring-neutral-800/50 dark:group-hover:ring-orange-400">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="aspect-video w-full rounded-xl"
              />
            </div>
            <div className="px-1">
              <h3 className="font-base font-normal group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-orange-400">
                {project.name}
                <span className="ml-1 inline-block rotate-315 text-sm transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
                  →
                </span>
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-orange-400">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  )
}
