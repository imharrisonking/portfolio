'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { PROJECTS } from '@/app/data'
import { TypographyH2 } from '../layout/typography'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-gray-50 p-1 ring-1 ring-gray-200/50 ring-inset dark:bg-gray-950 dark:ring-gray-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-gray-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export function ProjectsSection() {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <TypographyH2>Selected Projects</TypographyH2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div key={project.name} className="space-y-2">
            <div className="relative rounded-2xl bg-gray-50/40 p-1 ring-1 ring-gray-200/50 ring-inset dark:bg-gray-950/40 dark:ring-gray-800/50">
              <ProjectVideo src={project.video} />
            </div>
            <div className="px-1">
              <a
                className="font-base group relative inline-block font-normal dark:text-gray-100"
                href={project.link}
                target="_blank"
              >
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-gray-900 transition-all duration-200 group-hover:max-w-full dark:bg-gray-50"></span>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
