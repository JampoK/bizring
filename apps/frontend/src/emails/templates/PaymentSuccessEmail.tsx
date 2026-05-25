import React from 'react';
import { BaseLayout } from './BaseLayout';
import { Text, Heading } from '@react-email/components';
import { Button } from './Button';

export const PaymentSuccessEmail = ({ plan, amount, date }: { plan: string; amount: string; date: string }) => (
  <BaseLayout>
    <Heading className="text-xl font-bold">Pembayaran Diterima</Heading>
    <Text>Terima kasih atas pembayaran Anda untuk paket <strong>{plan}</strong>.</Text>
    <Text>Jumlah: {amount}</Text>
    <Text>Tanggal: {date}</Text>
    <Button href="https://bizring.com/dashboard/billing">Lihat Invoice</Button>
  </BaseLayout>
);
