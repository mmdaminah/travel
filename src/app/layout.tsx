import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useLocale } from 'next-intl';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Find cheap flights & plane tickets',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let messages;
  try {
    messages = (await import(`@/messages/en.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/booking.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale="en" messages={messages}>
          <div className="h-screen w-full bg-[#F5F5F5]">
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
