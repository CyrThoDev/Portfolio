import React from "react"
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
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
    <Link href="/prestations">Prestations</Link>
    <Link href="/projets">Projets</Link>
    <Link href="/apropos">A propos</Link>
    </div>
    </div>
    </>
  )
}

export default Header