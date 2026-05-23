import React from 'react'

interface ShellProps {
  children: React.ReactNode
  className?: string
}

export function Shell({ children, className = '' }: ShellProps) {
  return (
    <div className={`container-default py-8 md:py-12 ${className}`}>
      {children}
    </div>
  )
}
