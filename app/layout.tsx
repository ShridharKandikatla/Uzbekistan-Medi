import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uzbekistan Medi - MBBS in Uzbekistan | Medical Education",
  description:
    "Study MBBS in Uzbekistan with top medical universities. Get quality education, affordable fees, and worldwide recognized degrees. Expert guidance for your medical career.",
  keywords:
    "MBBS in Uzbekistan, medical education, study abroad, medical universities, affordable education, medical degree",
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

