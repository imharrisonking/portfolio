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
        'scroll-m-20 font-mono text-lg font-semibold tracking-wider text-balance text-blue-600 uppercase dark:text-blue-400',
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
        'mb-4 scroll-m-20 font-mono text-lg font-semibold tracking-wider text-balance text-gray-800 uppercase first:mt-0',
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
        'text-sm leading-7 text-gray-500 dark:text-gray-400 [&:not(:first-child)]:mt-6',
        className,
      )}
    >
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote
      className={cn(
        'mt-6 font-mono text-xs tracking-wider text-gray-600 uppercase dark:text-gray-400',
        className,
      )}
    >
      <div className="leading-none">
        <span className="text-gray-400 dark:text-gray-500">░ </span>
        Building distributed quantitative forecasting models professionally.
      </div>
      <div className="leading-none">
        <span className="text-gray-400 dark:text-gray-500">░ </span>
        Creating scalable user-centric products personally.
      </div>
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
  return (
    <p className={cn('text-muted-foreground text-sm', className)}>{children}</p>
  )
}
