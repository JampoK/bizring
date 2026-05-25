import React from 'react'
import { twMerge } from 'tailwind-merge'

interface OutlineAccentButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const OutlineAccentButton: React.FC<OutlineAccentButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'inline-flex items-center justify-center px-5 py-2 text-body font-semibold',
        'bg-surface-white text-oceanic-deep border border-spring-leaf rounded-pill',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focus-ghost',
        'transition-colors duration-200',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
