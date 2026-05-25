import React from 'react';
import { BaseLayout } from './BaseLayout';
import { Text, Heading, Section } from '@react-email/components';
import { Button } from './Button';

export const InquiryNotificationEmail = ({ businessName, userName, message, url }: { 
  businessName: string; 
  userName: string; 
  message: string;
  url: string;
}) => (
  <BaseLayout>
    <Heading className="text-xl font-bold text-slate-900">Ada Pertanyaan Baru untuk {businessName}!</Heading>
    <Text>Halo, Anda baru saja menerima pertanyaan baru di BizRing dari {userName}:</Text>
    <Section className="bg-slate-50 p-4 rounded-lg my-4 italic border-l-4 border-blue-500">
      <Text className="text-slate-700">"{message}"</Text>
    </Section>
    <Text>Segera tanggapi pesan ini untuk meningkatkan peluang kerja sama Anda.</Text>
    <Button href={url}>Lihat Dashboard Bisnis</Button>
  </BaseLayout>
);
