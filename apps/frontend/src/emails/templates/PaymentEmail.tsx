import React from 'react';
import { EmailShell } from '../components/EmailShell';
import { EmailButton } from '../components/EmailButton';
import { Heading, Text } from '@react-email/components';

export const PaymentEmail = ({ status, amount }: { status: 'success' | 'failed'; amount: string }) => (
  <EmailShell>
    <Heading className="text-xl font-bold text-slate-900">
      {status === 'success' ? 'Pembayaran Berhasil' : 'Pembayaran Gagal'}
    </Heading>
    <Text>
      {status === 'success' 
        ? `Pembayaran sejumlah ${amount} telah kami terima. Terima kasih!` 
        : `Maaf, pembayaran sejumlah ${amount} gagal diproses. Silakan coba lagi.`}
    </Text>
    <EmailButton href="https://bizring.com/billing">
      {status === 'success' ? 'Lihat Invoice' : 'Coba Lagi'}
    </EmailButton>
  </EmailShell>
);
