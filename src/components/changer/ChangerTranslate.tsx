import React, { useEffect, useState, ReactNode } from 'react'
import cn from 'classnames'
import './styles.css'

interface ChangerTranslateDetailedProps {
  direction?: 'up' | 'down'
  fade?: 'in' | 'out'
  noPointer?: boolean
  children: ReactNode
}

export const ChangerTranslateDetailed = (
  props: ChangerTranslateDetailedProps,
) => {
  const { children, direction, fade, noPointer = false } = props
  const fadeIn = fade === 'in'
  const [classes, setClasses] = useState(
    cn('transition', fadeIn ? 'fade-out' : 'fade-in', {
      'translate-down': direction === 'up',
      'translate-up': direction === 'down',
    }),
  )

  useEffect(() => {
    setClasses(
      cn('transition', {
        'fade-in': fade === 'in',
        'fade-out': fade === 'out',
        ...(fadeIn
          ? {}
          : {
              'translate-down': direction === 'down',
              'translate-up': direction === 'up',
            }),
        'pointer-events-none': noPointer,
      }),
    )
  }, [direction, fade, noPointer, fadeIn])

  return <div className={classes}>{children}</div>
}
