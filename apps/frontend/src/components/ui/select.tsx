import React from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-oceanic-deep">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={`
            w-full px-4 py-2.5 rounded-sm border text-[0.875rem] leading-[1.38] tracking-[0.014px]
            transition-colors duration-150
            bg-surface-white text-midnight-ink
            ${error
              ? 'border-amber-pop focus:border-amber-pop focus:shadow-focus focus:outline-none'
              : 'border-ash-cloud focus:border-oceanic-deep focus:shadow-focus focus:outline-none'
            }
            disabled:bg-fog-gray disabled:text-stone-whisper
            ${className}
          `}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-[0.875rem] text-amber-pop">{error}</p>}
      </div>
    )
  }
)
Select.displayName = 'Select'
