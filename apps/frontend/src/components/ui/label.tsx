import React from 'react'

interface LabelProps {
  children: React.ReactNode
  htmlFor?: string
  className?: string
  required?: boolean
}

export function Label({ children, htmlFor, className = '', required }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-[0.875rem] font-medium text-oceanic-deep ${className}`}
    >
      {children}
      {required && <span className="text-amber-pop ml-1">*</span>}
    </label>
  )
}
