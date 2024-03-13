import { UserProvider } from '@auth0/nextjs-auth0/client';
import './globals.css';

import type { Metadata } from 'next';
import { ClientLayout } from './client-layout';

export const metadata: Metadata = {
  title: 'PiedPiper',
  description: 'PiedPiper'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <UserProvider>
      <html lang='en'>
        <body className='h-screen'>
          <ClientLayout>
            {children}
          </ClientLayout>
        </body>
      </html>
    </UserProvider>
  )
}
