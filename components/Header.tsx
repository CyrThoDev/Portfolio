import React, {useState} from "react"
import Link from 'next/link'
import Image from 'next/image'
import {BsFacebook}from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const Header = () => {

  return (
    <>
    <div className="bg-red text-white flex flex-col justify-between items-center px-10 tablet:flex-row">
      <div className="py-4 flex flex-col gap-4 items-center tablet:flex-row">
        <p className="">cyriellethomas.pro@gmail.com</p>
        <p>07 61 15 09 13</p>
      </div>
      <div className="py-4 flex flex-row gap-4">
        <a href="https://www.facebook.com/cyrwebdev" target="_blank"><BsFacebook /></a>
        <a href="https://www.instagram.com/cyr_webdev"target="_blank"><FaInstagramSquare/></a>
      </div>
      
    </div>
    <div className='flex flex-col items-center text-center justify-between bg-background tablet:flex-row'>
    <Link href="/">
    <Image
      src="/imagecyrlogo.png"
      width={100}
      height={100}
      alt="Logo"
      className="ml-8 pt-4 hidden tablet:flex"
    /></Link>
    <div className="flex gap-4 my-4 tablet:mr-20 ">
    <Link href="/prestations">Prestations</Link>
    <Link href="/projets">Portfolio</Link>
    <Link href="/apropos">A propos</Link>
    </div>
    </div>
    </>
  )
}

export default Header