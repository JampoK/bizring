'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/Dialog'
import { Input } from '@/components/ui/Input'

export function FranchiseInquiryModal({ franchiseName }: { franchiseName: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic submit lead ke API nanti
    alert('Inquiry terkirim!')
    setIsOpen(false)
  }

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Hubungi Franchise
      </Button>

      <Dialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title={`Minat dengan ${franchiseName}?`}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="Nama Lengkap" required />
          <Input placeholder="Email" type="email" required />
          <Input placeholder="Nomor WhatsApp" required />
          <textarea 
            className="w-full border rounded-md p-2" 
            placeholder="Ada yang ingin ditanyakan?"
          />
          <Button type="submit" variant="primary" className="w-full">
            Kirim Inquiry
          </Button>
        </form>
      </Dialog>
    </>
  )
}
