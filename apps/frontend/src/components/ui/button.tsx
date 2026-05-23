import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-full disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-midnight-ink text-surface-white hover:bg-oceanic-deep focus-ring active:bg-midnight-ink',
      outline: 'bg-surface-white text-oceanic-deep border border-spring-leaf hover:bg-pale-mint focus-ring-secondary active:bg-sky-mist',
      ghost: 'text-oceanic-deep hover:bg-fog-gray focus-ring-ghost active:bg-canvas',
    }

    const sizes = {
      sm: 'py-2 px-4 text-[0.875rem]',
      md: 'py-2 px-5 text-[0.875rem]',
      lg: 'py-3 px-8 text-[1rem]',
    }

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
