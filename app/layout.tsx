import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cyrielle Thomas - Développeur web freelance ',
  description: 'Création de site web sur-mesure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
