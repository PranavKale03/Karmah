import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import { Providers } from "./providers"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Karmah | Master Your Tasks",
  description: "A minimalist task management platform designed for absolute clarity and focus.",
  openGraph: {
    title: "Karmah",
    description: "A minimalist task management platform designed for absolute clarity and focus.",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
