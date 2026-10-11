import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SimulationProvider } from "@/context/SimulationContext";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MineGuard | AI Mine Safety Platform",
  description: "Real-time underground mine subsidence monitoring & prediction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <SimulationProvider>
          <div className="flex h-screen overflow-hidden">
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
              <Header />
              <main className="flex-1 overflow-hidden p-2 md:p-4 bg-slate-50/50">
                {children}
              </main>
            </div>
          </div>
        </SimulationProvider>
      </body>
    </html>
  );
}
