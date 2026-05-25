import React from 'react';
import { Html, Head, Body, Container, Tailwind, Hr, Text } from '@react-email/components';

export const EmailShell = ({ children }: { children: React.ReactNode }) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-slate-50 font-sans p-4">
        <Container className="bg-white border border-slate-200 rounded-xl p-8 mx-auto max-w-xl">
          {children}
          <Hr className="my-8 border-slate-100" />
          <Text className="text-center text-xs text-slate-400">
            BizRing Marketplace © 2026. Semua hak dilindungi.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
