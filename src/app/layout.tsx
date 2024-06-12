import React from "react";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "../globals.css"
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Lato, Roboto } from "next/font/google";

const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Parking Time",
  description:
    "Digital parking disc - directly on your mobile. A winning concept in a new, digitalized format.",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${roboto.variable} ${lato.variable}`} suppressHydrationWarning={true}>
      <NextIntlClientProvider messages={messages} >
          {children}
        </NextIntlClientProvider>
     
        <Footer />
      </body>
    </html>
  );
}
