import './globals.css'
import type { Metadata } from 'next'
import {Arapey} from '@next/font/google';

const arapey=Arapey({
  subsets :['latin'],
  style :['normal'],
  variable :'--font-arapey',
  weight : ['400'],
})
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
      <body className ={`${arapey.variable} bg-background font-arapey`}>{children}</body>
    </html>
  )
}
