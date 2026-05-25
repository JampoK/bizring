import React from 'react'
import { twMerge } from 'tailwind-merge'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]
  className?: string
}

export const Select: React.FC<SelectProps> = ({ options, className, ...props }) => {
  return (
    <div className="relative">
      <select
        className={twMerge(
          'block w-full px-4 py-2 border border-ash-cloud rounded-sm',
          'focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none',
          'transition-all duration-200 appearance-none bg-surface-white pr-8', // Added pr-8 for arrow space
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Custom arrow for select */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-midnight-ink">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}
