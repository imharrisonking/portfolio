'use client'
import { motion } from 'motion/react'
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
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <TypographyH2>Work Experience</TypographyH2>
      <div className="flex flex-col space-y-2">
        {WORK_EXPERIENCE.map((job) => (
          <a
            className="relative overflow-hidden rounded-2xl bg-gray-300/20 p-[1px] dark:bg-gray-600/30"
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            key={job.id}
          >
            <Spotlight
              className="from-blue-600 via-blue-600 to-blue-600 blur-2xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-100"
              size={64}
            />
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-gray-950">
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
          </a>
        ))}
      </div>
    </motion.section>
  )
}
