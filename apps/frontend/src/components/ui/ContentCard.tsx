import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const ContentCard: React.FC<ContentCardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(
        'bg-surface-white p-8 rounded-none', // p-8 corresponds to 32px padding, rounded-none for 0px radius
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
