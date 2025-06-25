'use client'
import { useState, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'motion/react'
import { WORK_EXPERIENCE } from '@/app/data'
import { TypographyH2 } from '../layout/typography'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export function WorkExperienceSection() {
  const [hoveredJob, setHoveredJob] = useState<string | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, { stiffness: 250, damping: 25 })
  const ySpring = useSpring(y, { stiffness: 250, damping: 25 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 60) // Half of w-32
      y.set(e.clientY - 60) // Half of h-32
    }

    if (hoveredJob) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [hoveredJob, x, y])

  const hoveredJobData = WORK_EXPERIENCE.find((job) => job.id === hoveredJob)

  return (
    <>
      <AnimatePresence>
        {hoveredJob && hoveredJobData && (
          <motion.div
            className="pointer-events-none fixed z-[9999] overflow-hidden rounded-xl"
            style={{
              left: xSpring,
              top: ySpring,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={hoveredJobData.image}
              alt={`${hoveredJobData.company} office`}
              className="h-32 w-32 object-cover shadow-2xl aspect-square"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <TypographyH2>Work Experience</TypographyH2>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              key={job.id}
              className="group block space-y-2"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredJob(job.id)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-50/40 p-4 ring-1 ring-gray-200/50 transition-all duration-200 ring-inset group-hover:ring-blue-600 dark:bg-neutral-800/40 dark:ring-neutral-800/50 dark:group-hover:ring-orange-400">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-orange-400">
                      {job.title}
                      <span className="ml-1 inline-block rotate-315 text-sm transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
                        →
                      </span>
                    </h4>
                    <p className="text-sm text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>
    </>
  )
}
