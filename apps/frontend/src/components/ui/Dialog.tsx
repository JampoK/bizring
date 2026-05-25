import React, { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { ContentCard } from './ContentCard'
import { GhostInnerButton } from './GhostInnerButton'
import { FiX } from 'react-icons/fi' // For close icon

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children, className }) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    } else {
      document.removeEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
          onClose()
        }
      }}
    >
      <ContentCard
        ref={dialogRef}
        className={twMerge('relative w-full max-w-md p-6 animate-fade-in', className)}
      >
        <div className="flex items-center justify-between mb-4">
          {title && <h2 className="text-heading-sm">{title}</h2>}
          <GhostInnerButton onClick={onClose} aria-label="Close dialog">
            <FiX className="h-5 w-5" />
          </GhostInnerButton>
        </div>
        <div>{children}</div>
      </ContentCard>
    </div>
  )
}
