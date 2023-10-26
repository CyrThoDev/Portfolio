"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='flex flex-row 0 justify-between bg-background'>

    <Link href="/">
    <Image
      src="/imagecyrlogo.png"
      width={100}
      height={100}
      alt="Logo"
    /></Link>
    <div className="flex gap-2 mr-20 items-center">
    <Link href="/projets">Projets</Link>
    <Link href="/apropos">A propos</Link>
    </div>
    </div>
    <main className="flex flex-col items-center">
    
      <Image
      src="/LogoCyriellesite.png"
      width={500}
      height={500}
      alt="Logo"
      className=""
    />
    <p className=''>Créons ensemble votre site internet</p>
   </main>
    </>
  )
}
