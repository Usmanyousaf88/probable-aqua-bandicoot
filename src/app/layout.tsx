import React from "react";
import "@/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "DeepAgents - AI Innovation Platform",
  description: "The World's First AI-Powered Idea Generation Ecosystem",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-['Segoe_UI',system-ui]">{children}</body>
    </html>
  );
}
