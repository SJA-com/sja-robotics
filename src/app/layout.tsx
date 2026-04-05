import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robotics | Empowering Everyday Life Through Automation",
  description:
    "SJA Robotics is at the forefront of integrating AI and automation into everyday devices. Discover Atiana, Sueen, and our suite of intelligent products.",
  keywords: [
    "SJA Robotics",
    "AI",
    "automation",
    "Atiana Robot",
    "Sueen Drone",
    "smart home",
    "robotics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
