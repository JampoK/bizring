import { Button as ReactEmailButton } from '@react-email/components';
import React from 'react';

export const Button = ({ children, href }: { children: React.ReactNode, href: string }) => {
  return (
    <ReactEmailButton
      href={href}
      className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-center"
    >
      {children}
    </ReactEmailButton>
  );
};
