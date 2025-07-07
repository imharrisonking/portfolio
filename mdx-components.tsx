import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef, ReactElement } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          customStyle={{
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
            margin: '1rem 0',
            padding: '1rem',
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
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
