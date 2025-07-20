import type { Metadata } from "next";
import "./globals.css";
import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: "Next",
  description: "Dummy JSON data",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        {children}
      </body>
    </html>
  );
}
