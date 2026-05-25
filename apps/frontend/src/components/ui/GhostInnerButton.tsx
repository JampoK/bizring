import React from 'react'
import { twMerge } from 'tailwind-merge'

interface GhostInnerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const GhostInnerButton: React.FC<GhostInnerButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'inline-flex items-center justify-center py-0 px-2 text-body font-semibold',
        'bg-transparent text-oceanic-deep',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focus-secondary', // Using focus-secondary as it's a tertiary action, less prominent than primary/accent
        'transition-colors duration-200',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
