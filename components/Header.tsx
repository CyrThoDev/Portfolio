import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import {BsFacebook}from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
const Header = () => {
  return (
    <>
    <div className="bg-red text-white flex flex-row justify-between px-10">
      <div className=" py-4 flex flex-row gap-4">
        <p className="">cyriellethomas.pro@gmail.com</p>
        <p>07 61 15 09 13</p>
      </div>
      <div className="py-4 flex flex-row gap-4">
        <Link href="www.facebook.com/cyrwebdev"><BsFacebook /></Link>
        <Link href="www.instagram.com/cyr_webdev"><FaInstagramSquare/></Link>
      </div>
      
    </div>
    <div className='flex flex-row 0 justify-between bg-background'>
    <Link href="/">
    <Image
      src="/imagecyrlogo.png"
      width={100}
      height={100}
      alt="Logo"
      className="ml-8 pt-4"
    /></Link>
    <div className="flex gap-4 mr-20 items-center">
    <Link href="/prestations">Prestations</Link>
    <Link href="/projets">Portfolio</Link>
    <Link href="/apropos">A propos</Link>
    </div>
    </div>
    </>
  )
}

export default Header