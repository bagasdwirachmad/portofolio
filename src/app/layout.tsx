import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./_provider/theme-provider";
import '@/styles/globals.css';
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homepage - @bagasdwi",
  description: "Homepage - Web Portfolio Bagas Dwi Rachmad Roziqin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Analytics/>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
