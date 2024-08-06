import type { Metadata } from "next";
import './globals.sass'

export const metadata: Metadata = {
  title: "Test NextJS Blog",
  description: "Test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>Header</div>
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
