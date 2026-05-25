import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface TabItem {
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: TabItem[]
  className?: string
}

export const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={twMerge('w-full', className)}>
      <div className="flex border-b border-ash-cloud">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={twMerge(
              'px-4 py-2 text-body font-medium transition-colors duration-200',
              activeTab === index
                ? 'text-midnight-ink border-b-2 border-electric-blue'
                : 'text-stone-whisper hover:text-midnight-ink',
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">{tabs[activeTab].content}</div>
    </div>
  )
}
