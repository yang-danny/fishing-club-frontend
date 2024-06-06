import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../../components/Navbar";
import ToasterProvider from "@/lib/providers/ToastProvider";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fishing Club | Always fishing as master!",
  description:
    "Fishing Club for talented and experienced anglers base in Sydney NSW Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-white dark:bg-sky-900 ">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <ClerkProvider>
              <ToasterProvider />
              <Navbar />
              {children}
              <Footer />
            </ClerkProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
