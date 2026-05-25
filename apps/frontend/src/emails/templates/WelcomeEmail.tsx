import React from 'react';
import { EmailShell } from '../components/EmailShell';
import { EmailButton } from '../components/EmailButton';
import { Heading, Text } from '@react-email/components';

export const WelcomeEmail = ({ name }: { name: string }) => (
  <EmailShell>
    <Heading className="text-2xl font-bold text-slate-900">Selamat Datang di BizRing!</Heading>
    <Text className="text-slate-600">Halo {name},</Text>
    <Text className="text-slate-600">
      Terima kasih telah bergabung dengan marketplace B2B & investasi terpercaya di Indonesia. 
      Kami siap membantu Anda menemukan peluang bisnis, mitra strategis, dan waralaba terbaik.
    </Text>
    <EmailButton href="https://bizring.com/dashboard">Jelajahi Peluang</EmailButton>
  </EmailShell>
);
