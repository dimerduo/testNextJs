import type { Metadata } from "next";
import { Roboto } from 'next/font/google'

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"
import Container from "@/components/Container/Container";

import './globals.sass'

const roboto = Roboto({
  weight: ['400','500','700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Test NextJS Blog",
  description: "Test task",
  openGraph: {
    title: "Test NextJS Blog",
    description: "Test task",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
          <Container>
            {children}
          </Container>
        <Footer />
      </body>
    </html>
  );
}
