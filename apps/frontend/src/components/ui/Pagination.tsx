import React from 'react'
import { twMerge } from 'tailwind-merge'
import { GhostInnerButton } from './GhostInnerButton'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={twMerge('flex items-center justify-center space-x-2', className)}>
      <GhostInnerButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </GhostInnerButton>

      {pageNumbers.map((page) => (
        <GhostInnerButton
          key={page}
          onClick={() => onPageChange(page)}
          className={twMerge(
            page === currentPage ? 'bg-fog-gray text-midnight-ink' : '',
          )}
        >
          {page}
        </GhostInnerButton>
      ))}

      <GhostInnerButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </GhostInnerButton>
    </div>
  )
}
