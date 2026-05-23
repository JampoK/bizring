import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-oceanic-deep">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
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
            resize-y
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-[0.875rem] text-amber-pop">{error}</p>}
        {hint && !error && <p className="text-[0.875rem] text-stone-whisper">{hint}</p>}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
