import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

const geistSans = GeistSans;
const geistMono = GeistMono;



export const metadata: Metadata = {
  title: "Nagi Itoshi Portfolio",
  description: "Modern & Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

