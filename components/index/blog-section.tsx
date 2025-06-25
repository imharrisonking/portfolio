'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { BLOG_POSTS } from '@/app/data'
import { TypographyH2, TypographyH3 } from '../layout/typography'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export function BlogSection() {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <TypographyH2>Blog</TypographyH2>
      <div className="flex flex-col space-y-0">
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-blue-50 dark:bg-blue-900/80"
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
        >
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              className="-mx-3 rounded-xl px-3 py-3"
              href={post.link}
              data-id={post.uid}
            >
              <div className="flex flex-col space-y-1">
                <h4 className="font-normal dark:text-gray-100">{post.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </motion.section>
  )
}
