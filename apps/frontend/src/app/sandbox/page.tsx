import React from 'react'
import { Container } from '@/components/ui/Container'
import { PrimaryFilledButton } from '@/components/ui/PrimaryFilledButton'
import { OutlineAccentButton } from '@/components/ui/OutlineAccentButton'
import { GhostInnerButton } from '@/components/ui/GhostInnerButton'
import { ContentCard } from '@/components/ui/ContentCard'
import { NavLink } from '@/components/ui/NavLink'
import { Badge } from '@/components/ui/Badge'

export default function SandboxPage() {
  return (
    <Container className="py-8 space-y-8">
      <h1 className="text-display">Sandbox Page - UI Components</h1>

      {/* Buttons */}
      <ContentCard>
        <h2 className="text-heading mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <PrimaryFilledButton>Primary Button</PrimaryFilledButton>
          <OutlineAccentButton>Outline Accent</OutlineAccentButton>
          <GhostInnerButton>Ghost Button</GhostInnerButton>
          <PrimaryFilledButton disabled>Disabled Primary</PrimaryFilledButton>
        </div>
      </ContentCard>

      {/* Content Card */}
      <ContentCard>
        <h2 className="text-heading mb-4">Content Card</h2>
        <div className="h-32 bg-fog-gray flex items-center justify-center">
          <p className="text-body text-oceanic-deep">This is content inside a ContentCard.</p>
        </div>
      </ContentCard>

      {/* NavLink */}
      <ContentCard>
        <h2 className="text-heading mb-4">Nav Links</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <NavLink href="/sandbox" active>Active Link</NavLink>
          <NavLink href="/#">Inactive Link</NavLink>
        </div>
      </ContentCard>

      {/* Badge */}
      <ContentCard>
        <h2 className="text-heading mb-4">Badges</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge>New Feature</Badge>
          <Badge className="bg-sky-mist text-indigo-pop">Beta</Badge>
        </div>
      </ContentCard>
    </Container>
  )
}
