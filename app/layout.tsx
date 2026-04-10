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
  metadataBase: new URL("https://karmah.vercel.app"),
  title: {
    default: "Karmah | Master Your Tasks",
    template: "%s | Karmah"
  },
  description: "A minimalist task management platform designed for absolute clarity and focus.",
  keywords: ["productivity", "task management", "minimalist", "focus", "to-do list"],
  authors: [{ name: "Pranav Kale" }],
  creator: "Pranav Kale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karmah.vercel.app",
    title: "Karmah | Master Your Tasks",
    description: "A minimalist task management platform designed for absolute clarity and focus.",
    siteName: "Karmah",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Karmah Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karmah | Master Your Tasks",
    description: "A minimalist task management platform designed for absolute clarity and focus.",
    images: ["/Logo.png"],
    creator: "@pranavkale",
  },
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
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
          <Toaster richColors={true} position="top-center" />
        </Providers>
      </body>
    </html>
  )
}
