import React from 'react';
import { Html, Head, Body, Container, Section, Text, Hr, Tailwind } from '@react-email/components';

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-slate-50 font-sans">
          <Container className="bg-white border border-slate-200 rounded-lg p-8 mx-auto my-12">
            {/* Header Placeholder */}
            {children}
            <Hr className="my-8 border-slate-200" />
            <Text className="text-xs text-slate-500 text-center">
              BizRing Marketplace © 2026. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
