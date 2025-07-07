import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef, ReactElement } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  stackoverflowDark,
  stackoverflowLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python'
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash'
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'

// Register languages
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('js', javascript)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    pre: ({ children }: ComponentPropsWithoutRef<'pre'>) => {
      if (!children) return null

      // Handle the code element inside pre
      const child = children as ReactElement<{
        className?: string
        children?: string
      }>
      if (!child?.props) return null

      const language = child.props.className?.replace('language-', '') || 'text'
      const code = child.props.children || ''

      return (
        <div className="relative">
          {/* Dark theme code block */}
          <div className="hidden dark:block">
            <SyntaxHighlighter
              language={language}
              style={stackoverflowDark}
              customStyle={{
                borderRadius: '0.5rem',
                fontSize: '0.625rem !important',
                margin: '1rem 0',
                padding: '1rem',
                fontFamily:
                  'IBM Plex Mono, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
              }}
            >
              {code.trim()}
            </SyntaxHighlighter>
          </div>
          {/* Light theme code block */}
          <div className="block dark:hidden">
            <SyntaxHighlighter
              language={language}
              style={stackoverflowLight}
              customStyle={{
                borderRadius: '0.5rem',
                fontSize: '0.625rem !important',
                margin: '1rem 0',
                padding: '1rem',
                fontFamily:
                  'IBM Plex Mono, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
              }}
            >
              {code.trim()}
            </SyntaxHighlighter>
          </div>
        </div>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      // For inline code (not in pre blocks)
      return (
        <code
          className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm dark:bg-gray-800"
          {...props}
        >
          {children}
        </code>
      )
    },
  }
}
