
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LoadProvider } from "@/contexts/load-context";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Júlio Alves | Full stack Developer",
  description: "Interactive 3D spinning laptop built with React Three Fiber",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="font-sans antialiased">
        <LoadProvider>{children}</LoadProvider>
      </body>
    </html>
  );
}
