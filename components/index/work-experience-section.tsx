'use client'
import { useState, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'motion/react'
import { WORK_EXPERIENCE } from '@/app/data'
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
              className="aspect-square h-32 w-32 object-cover shadow-2xl"
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
              <div className="group-hover:ring-accent ring-border/50 relative overflow-hidden rounded-md p-4 ring-1 transition-all duration-200 ring-inset before:pointer-events-none before:absolute before:inset-0 before:bg-[url('/texture-blue.svg')] before:bg-repeat before:opacity-0 before:transition-opacity before:duration-200 group-hover:before:opacity-100 dark:before:bg-[url('/texture-orange.svg')]">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="group-hover:text-accent font-normal">
                      {job.title}
                    </h4>
                    <TypographyMuted className="group-hover:text-accent">
                      {job.company}
                    </TypographyMuted>
                  </div>
                  <TypographyMuted className="group-hover:text-accent">
                    {job.start} - {job.end}
                  </TypographyMuted>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>
    </>
  )
}
