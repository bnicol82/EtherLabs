import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EtherLabs | Web3 Communication & Intelligence",
  description:
    "EtherLabs is the parent company behind EtherMail, EtherAgents, and TokenStream — building the infrastructure for decentralized communication, AI agents, and real-time token intelligence.",
  keywords: [
    "EtherLabs",
    "EtherMail",
    "EtherAgents",
    "TokenStream",
    "Web3",
    "blockchain",
    "AI agents",
  ],
  openGraph: {
    title: "EtherLabs | Web3 Communication & Intelligence",
    description:
      "The parent company powering EtherMail, EtherAgents, and TokenStream.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#08080f] text-white">
        {children}
      </body>
    </html>
  );
}
