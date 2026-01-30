import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MemoryVault - Digital Time Capsules for Your Precious Memories',
  description: 'Create interactive digital time capsules with photos, videos, voice notes and text that unlock on future dates. Perfect for preserving memories and creating surprise experiences.',
  keywords: 'time capsule, digital memories, photo storage, family memories, future messages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}