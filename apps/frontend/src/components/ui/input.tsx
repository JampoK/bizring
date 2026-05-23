import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-oceanic-deep">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-2.5 rounded-sm border text-[0.875rem] leading-[1.38] tracking-[0.014px]
            transition-colors duration-150
            bg-surface-white text-midnight-ink
            ${error
              ? 'border-amber-pop focus:border-amber-pop focus:shadow-focus focus:outline-none'
              : 'border-ash-cloud focus:border-oceanic-deep focus:shadow-focus focus:outline-none'
            }
            placeholder:text-stone-whisper
            disabled:bg-fog-gray disabled:text-stone-whisper
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-[0.875rem] text-amber-pop tracking-[0.014px]">{error}</p>}
        {hint && !error && <p className="text-[0.875rem] text-stone-whisper tracking-[0.014px]">{hint}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'
