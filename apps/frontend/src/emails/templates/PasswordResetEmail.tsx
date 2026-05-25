import React from 'react';
import { BaseLayout } from './BaseLayout';
import { Text, Heading } from '@react-email/components';
import { Button } from './Button';

export const PasswordResetEmail = ({ url, name }: { url: string; name: string }) => (
  <BaseLayout>
    <Heading className="text-xl font-bold">Reset Password BizRing</Heading>
    <Text>Halo {name},</Text>
    <Text>Kami menerima permintaan untuk mereset password akun Anda. Klik tombol di bawah untuk melanjutkannya:</Text>
    <Button href={url}>Reset Password</Button>
    <Text className="text-slate-500 text-sm mt-8">Tautan ini akan kedaluwarsa dalam 1 jam.</Text>
  </BaseLayout>
);
