import React from 'react';
import { EmailShell } from '../components/EmailShell';
import { EmailButton } from '../components/EmailButton';
import { Heading, Text, Section } from '@react-email/components';

export const InquiryEmail = ({ bizName, user, msg }: { bizName: string; user: string; msg: string }) => (
  <EmailShell>
    <Heading className="text-xl font-bold text-slate-900">Pesan Baru: {bizName}</Heading>
    <Text>Halo, Anda menerima pesan baru dari <strong>{user}</strong>:</Text>
    <Section className="bg-slate-50 p-4 rounded-lg my-4 italic text-slate-700">
      {msg}
    </Section>
    <EmailButton href="https://bizring.com/dashboard/inquiries">Balas Pesan</EmailButton>
  </EmailShell>
);
