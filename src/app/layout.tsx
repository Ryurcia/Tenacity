import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tenacity Construction',
  description: 'Transform your space with expert home renovations from Tenacity Construction. Our skilled team brings your vision to life, delivering top-notch craftsmanship and innovative designs. Whether you\'re revamping a kitchen, ' +
    'updating a bathroom, or remodeling your entire home, we\'re your trusted partner for quality renovations. Contact us today for a consultation and let us elevate your home with precision and style.',
  icons: {
    icon: '/icon.svg'
  }
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
