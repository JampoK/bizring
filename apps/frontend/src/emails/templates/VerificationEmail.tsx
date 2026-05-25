import React from 'react';
import { EmailShell } from '../components/EmailShell';
import { EmailButton } from '../components/EmailButton';
import { Heading, Text } from '@react-email/components';

export const VerificationEmail = ({ name, url }: { name: string, url: string }) => (
  <EmailShell>
    <Heading className="text-2xl font-bold text-slate-900">Verifikasi Email Anda</Heading>
    <Text className="text-slate-600">Halo {name},</Text>
    <Text className="text-slate-600">
      Silakan klik tombol di bawah untuk memverifikasi akun BizRing Anda.
    </Text>
    <EmailButton href={url}>Verifikasi Sekarang</EmailButton>
  </EmailShell>
);
