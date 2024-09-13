import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../app/globals.css';
import StarsCanvas from "@/components/ui/stars-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venai's Portfolio",
  description: "Venai's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // synthwave, dracula, night, winter, sunset
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
      
    </html>
  );
}