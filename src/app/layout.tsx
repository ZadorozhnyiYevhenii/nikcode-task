import type { Metadata } from "next";
import { DashBoard } from '../components/Dashboard/DashBoard';
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <DashBoard />
        {children}
      </body>
    </html>
  );
}
