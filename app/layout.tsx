import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { Inter as FontSans } from "next/font/google"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Open Note",
  description: "Share your notes with the world!",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html>
        <body className="h-screen flex bg-gradient-to-r from-[#191919] to-[#0f0f0f] text-white">
          <header>
          </header>
          <main className="flex w-full">
            <Nav />
            <div className="w-full p-10 overflow-auto">{children}</div>  
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
