'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState } from 'react'

function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base bg-accent/5 flex items-center gap-1 rounded-md px-1 py-1.5 text-center text-sm transition-colors"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="bg-backround pointer-events-none fixed top-0 left-0 z-10" />
      <ScrollProgress
        className="bg-accent fixed top-0 z-20 h-0.5"
        springOptions={{
          bounce: 0,
        }}
      />

      {/* <div className="absolute top-24 right-4">
        <CopyButton />
      </div> */}
      <main className="prose prose-gray dark:prose-invert prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:font-medium prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-medium prose-h4:text-lg prose-h4:font-medium prose-strong:font-medium mt-20 pb-20">
        {children}
      </main>
    </>
  )
}
