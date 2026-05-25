import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { ContentCard } from '@/components/ui/ContentCard'
import { Input } from '@/components/ui/Input'
import { PrimaryFilledButton } from '@/components/ui/PrimaryFilledButton'
import { OutlineAccentButton } from '@/components/ui/OutlineAccentButton'
import { ToggleSwitch } from '@/components/ui/ToggleSwitch' // Import ToggleSwitch
import { Select } from '@/components/ui/Select' // Import Select

export default function SettingsPage() {
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(true)
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(false)
  const [profileVisibility, setProfileVisibility] = useState('public')
  const [dataSharingEnabled, setDataSharingEnabled] = useState(true)

  const profileVisibilityOptions = [
    { value: 'public', label: 'Public' },
    { value: 'connections', label: 'Only Connections' },
    { value: 'private', label: 'Private' },
  ]

  return (
    <Container className="py-8 space-y-8">
      <h1 className="text-display">Settings</h1>

      <ContentCard>
        <h2 className="text-heading-sm mb-4">General Settings</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="language" className="block text-body font-medium text-midnight-ink mb-1">
              Language
            </label>
            <Input type="text" id="language" name="language" defaultValue="English (US)" />
          </div>
          <div>
            <label htmlFor="timezone" className="block text-body font-medium text-midnight-ink mb-1">
              Timezone
            </label>
            <Input type="text" id="timezone" name="timezone" defaultValue="GMT+7 (Jakarta)" />
          </div>
          <div className="flex gap-4 pt-4">
            <PrimaryFilledButton type="submit">Save Changes</PrimaryFilledButton>
            <OutlineAccentButton type="button">Cancel</OutlineAccentButton>
          </div>
        </form>
      </ContentCard>

      <ContentCard>
        <h2 className="text-heading-sm mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="emailNotifications" className="text-body font-medium text-midnight-ink">
              Email Notifications
            </label>
            <ToggleSwitch
              isOn={emailNotificationsEnabled}
              onToggle={setEmailNotificationsEnabled}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="pushNotifications" className="text-body font-medium text-midnight-ink">
              Push Notifications
            </label>
            <ToggleSwitch
              isOn={pushNotificationsEnabled}
              onToggle={setPushNotificationsEnabled}
            />
          </div>
        </div>
        <div className="flex gap-4 pt-4">
          <PrimaryFilledButton type="submit">Update Notifications</PrimaryFilledButton>
          <OutlineAccentButton type="button">Cancel</OutlineAccentButton>
        </div>
      </ContentCard>

      <ContentCard>
        <h2 className="text-heading-sm mb-4">Privacy Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="profileVisibility" className="text-body font-medium text-midnight-ink">
              Profile Visibility
            </label>
            <Select
              id="profileVisibility"
              name="profileVisibility"
              options={profileVisibilityOptions}
              value={profileVisibility}
              onChange={(e) => setProfileVisibility(e.target.value)}
              className="w-48"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="dataSharing" className="text-body font-medium text-midnight-ink">
              Data Sharing
            </label>
            <ToggleSwitch
              isOn={dataSharingEnabled}
              onToggle={setDataSharingEnabled}
            />
          </div>
        </div>
        <div className="flex gap-4 pt-4">
          <PrimaryFilledButton type="submit">Update Privacy</PrimaryFilledButton>
          <OutlineAccentButton type="button">Cancel</OutlineAccentButton>
        </div>
      </ContentCard>
    </Container>
  )
}
