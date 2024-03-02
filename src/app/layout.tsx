import type { Metadata } from "next";
import { DashBoard } from '@/components/Dashboard/DashBoard';
import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--roboto-font',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "NikCode",
  description: "Tech task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <DashBoard />
        {children}
      </body>
    </html>
  );
}
