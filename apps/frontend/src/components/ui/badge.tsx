import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'accent'
  size?: 'sm' | 'md'
  dot?: boolean
  className?: string
}

export function Badge({ children, variant = 'default', size = 'sm', dot = false, className = '' }: BadgeProps) {
  const variants: Record<string, string> = {
    default: 'bg-fog-gray text-slate-grille',
    success: 'bg-pale-mint text-deep-teal',
    warning: 'bg-warm-mist text-amber-pop',
    danger: 'bg-warm-mist text-amber-pop',
    info: 'bg-sky-mist text-deep-teal',
    accent: 'bg-pale-mint text-oceanic-deep',
  }

  const sizes: Record<string, string> = {
    sm: 'px-2.5 py-0.5 text-[0.75rem]',
    md: 'px-3 py-1 text-[0.875rem]',
  }

  const dotColors: Record<string, string> = {
    default: 'bg-slate-grille',
    success: 'bg-spring-leaf',
    warning: 'bg-amber-pop',
    danger: 'bg-amber-pop',
    info: 'bg-deep-teal',
    accent: 'bg-spring-leaf',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
      {children}
    </span>
  )
}
