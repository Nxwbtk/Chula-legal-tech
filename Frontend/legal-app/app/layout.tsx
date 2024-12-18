import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-kanit',
  display: 'swap',  // Added for better performance
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
