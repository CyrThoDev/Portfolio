"use client"
import Image from 'next/image'

import Header from '@/components/Header'

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex flex-col items-center">
      <Image
      src="/LogoCyriellesite.png"
      width={500}
      height={500}
      alt="Logo"
      className=""
    />
    <p className=''>Site en cours de création - Revenez vite </p>
   </main>
    </>
  )
}
