import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Melkie Yilk - MERN Stack Developer",
  description:
    "Full-stack developer specializing in MongoDB, Express, React, and Node.js. Building scalable, modern web applications.",
  keywords: "MERN Stack Developer, Full Stack Developer, React, Node.js, MongoDB, Express, Web Developer, JavaScript",
  authors: [{ name: "Melkie Yilk" }],
  openGraph: {
    title: "Melkie Yilk - MERN Stack Developer",
    description: "Full-stack developer specializing in MongoDB, Express, React, and Node.js.",
    url: "https://melkie-yilk.vercel.app",
    siteName: "Melkie Yilk Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Melkie Yilk - MERN Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melkie Yilk - MERN Stack Developer",
    description: "Full-stack developer specializing in MongoDB, Express, React, and Node.js.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className={`${jetbrainsMono.className} antialiased`}>{children}</body>
    </html>
  )
}
