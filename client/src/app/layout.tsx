import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/sections/Navbar";
import PageWrapper from "@/components/wrappers/Page-Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "fashion retailers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageWrapper>
          <Navbar />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
