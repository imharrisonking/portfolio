import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        'dark:text-accent text-accent font-heading scroll-m-20 text-base font-semibold tracking-wider text-balance uppercase',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        'text-foreground font-heading mb-4 scroll-m-20 text-base font-semibold tracking-wider text-balance uppercase first:mt-0 dark:text-white',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
    >
      {children}
    </h3>
  )
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
    >
      {children}
    </h4>
  )
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        'text-foreground text-sm leading-relaxed [&:not(:first-child)]:mt-6',
        className,
      )}
    >
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
  // Process children to handle both string and React elements
  const processContent = () => {
    if (!children) return null

    // If children is a string, split by newlines
    if (typeof children === 'string') {
      const lines = children.split('\n').filter((line) => line.trim())
      return lines.map((line, index) => (
        <div key={index} className="leading-none">
          <span className="dark: text-gray-400">░ </span>
          {line.trim()}
        </div>
      ))
    }

    // For other types of children, wrap in div with prefix
    return (
      <div className="leading-none">
        <span className="dark: text-gray-400">░ </span>
        {children}
      </div>
    )
  }

  return (
    <blockquote
      className={cn(
        'mt-6 font-mono text-[10px] tracking-widest text-gray-600 uppercase',
        className,
      )}
    >
      {processContent()}
    </blockquote>
  )
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p className={cn('text-muted-foreground text-xl', className)}>{children}</p>
  )
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <div className={cn('text-lg font-semibold', className)}>{children}</div>
  )
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small className={cn('text-sm leading-none font-medium', className)}>
      {children}
    </small>
  )
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return <p className={cn('text-muted text-sm', className)}>{children}</p>
}
