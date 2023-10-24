"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-row 0 justify-between'>

    <Link href="/">
    <Image
      src="/Logo.png"
      width={150}
      height={150}
      alt="Logo"
    /></Link>
    <div className="flex gap-2 m-2 items-center">
    <Link href="/projets">Projets</Link>
    <Link href="/apropos">A propos</Link>
    </div>
    </div>
  )
}
