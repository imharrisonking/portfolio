'use client'
import { useState, useRef, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
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
              className="group relative block rounded-2xl bg-gray-300/20 p-[1px] dark:bg-gray-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredJob(job.id)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Spotlight
                  className="from-blue-600 via-blue-600 to-blue-600 blur-2xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-100"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-neutral-800">
                  <div className="relative flex w-full flex-row justify-between">
                    <div>
                      <h4 className="font-normal dark:text-gray-100">
                        {job.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>
    </>
  )
}
