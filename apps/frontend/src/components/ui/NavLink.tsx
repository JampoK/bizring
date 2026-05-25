import React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  active?: boolean // Prop to indicate active state
  icon?: React.ReactNode // Optional icon prop
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, className, active = false, icon }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'inline-flex items-center gap-2', // Added gap for icon and text
        'text-midnight-ink font-medium hover:underline transition-colors duration-200',
        active ? 'text-oceanic-deep underline' : '',
        className,
      )}
    >
      {icon && <span>{icon}</span>} {/* Render icon if provided */}
      {children}
    </Link>
  )
}
