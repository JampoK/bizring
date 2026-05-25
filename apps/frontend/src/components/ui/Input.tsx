import React from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input: React.FC<InputProps> = ({ className, type = 'text', ...props }) => {
  return (
    <input
      type={type}
      className={twMerge(
        'block w-full px-4 py-2 border border-ash-cloud rounded-sm',
        'focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none',
        'transition-all duration-200',
        className,
      )}
      {...props}
    />
  )
}
