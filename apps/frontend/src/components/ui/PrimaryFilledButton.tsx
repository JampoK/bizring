import React from 'react'
import { twMerge } from 'tailwind-merge'

interface PrimaryFilledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const PrimaryFilledButton: React.FC<PrimaryFilledButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'inline-flex items-center justify-center px-5 py-2 text-body font-semibold',
        'bg-midnight-ink text-surface-white rounded-pill',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focus',
        'transition-colors duration-200',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
