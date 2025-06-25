'use client'

import { useEffect, useRef, useState } from 'react'

interface TextScrambleProps {
  children: string
  className?: string
  as?: React.ElementType
  speed?: number
  trigger?: boolean
  onHoverStart?: () => void
  onHoverEnd?: () => void
  onScrambleComplete?: () => void
  scrambleOnHover?: string
  characters?: string
}

export function TextScramble({
  children,
  className = '',
  as: Component = 'span',
  speed = 0.03,
  trigger = false,
  onHoverStart,
  onHoverEnd,
  onScrambleComplete,
  scrambleOnHover,
  characters = '!<>-_\\/[]{}—=+*^?#________',
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children)
  const [isScrambling, setIsScrambling] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)
  const [currentText, setCurrentText] = useState(children)
  const frameRef = useRef<number | undefined>(undefined)
  const resolveRef = useRef<(() => void) | undefined>(undefined)

  const scramble = (text: string) => {
    return new Promise<void>((resolve) => {
      resolveRef.current = resolve
      let frame = 0
      const maxFrame = Math.max(50, text.length * 10)

      const update = () => {
        let output = ''
        let complete = 0

        for (let i = 0; i < text.length; i++) {
          if (frame > i * 5 + 20) {
            output += text[i]
            complete++
          } else if (frame > i * 5) {
            output += characters[Math.floor(Math.random() * characters.length)]
          } else {
            // Use a non-breaking space to prevent layout shift
            output += '\u00A0'
          }
        }

        setDisplayText(output)

        if (complete === text.length) {
          resolve()
          return
        }

        frame++
        frameRef.current = requestAnimationFrame(update)
      }

      update()
    })
  }

  // Initial scramble on mount
  useEffect(() => {
    if (!hasInitialized) {
      setHasInitialized(true)
      setIsScrambling(true)
      scramble(children).then(() => {
        setIsScrambling(false)
      })
    }
  }, [hasInitialized, children])

  // Handle hover events
  const handleMouseEnter = () => {
    if (!isScrambling && scrambleOnHover && currentText !== scrambleOnHover) {
      setIsScrambling(true)
      scramble(scrambleOnHover).then(() => {
        setIsScrambling(false)
        setCurrentText(scrambleOnHover)
      })
    }
    onHoverStart?.()
  }

  const handleMouseLeave = () => {
    if (!isScrambling && scrambleOnHover && currentText !== children) {
      setIsScrambling(true)
      scramble(children).then(() => {
        setIsScrambling(false)
        setCurrentText(children)
      })
    }
    onHoverEnd?.()
  }

  // Cleanup
  useEffect(() => {
    return () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current)
      }
      if (resolveRef.current) {
        resolveRef.current()
      }
    }
  }, [])

  return (
    <Component
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </Component>
  )
}