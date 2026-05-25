import React from 'react';
import { BaseLayout } from './BaseLayout';
import { Text, Heading, Section } from '@react-email/components';
import { Button } from './Button';

export const AdminAlertEmail = ({ event, details, url }: { event: string; details: string; url: string }) => (
  <BaseLayout>
    <Heading className="text-xl font-bold text-red-600">Admin Alert: {event}</Heading>
    <Text>Peringatan sistem memerlukan perhatian Anda segera:</Text>
    <Section className="bg-red-50 p-4 rounded-lg my-4 border-l-4 border-red-500">
      <Text className="text-slate-800 font-mono text-sm">{details}</Text>
    </Section>
    <Button href={url}>Buka Panel Admin</Button>
  </BaseLayout>
);
