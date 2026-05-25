import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ToggleSwitchProps {
  isOn: boolean
  onToggle: (isOn: boolean) => void
  className?: string
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle, className }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={() => onToggle(!isOn)}
      className={twMerge(
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
        isOn ? 'bg-electric-blue' : 'bg-ash-cloud',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={twMerge(
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-surface-white shadow ring-0 transition duration-200 ease-in-out',
          isOn ? 'translate-x-5' : 'translate-x-0',
        )}
      />
    </button>
  )
}
