import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
      src="/LogoCyriellesite.png"
      width={500}
      height={500}
      alt="Logo"
      className=""
    />
    <div className='flex flex-col gap-4 items-center'>
        <p className="tracking-widest text-4xl">Créons ensemble votre site web ! </p>
        <p className="text-red text-3xl">Création - Refonte  - Maintenance - SEO</p>
    </div>

    <p className='text-2xl mt-20'>Site en cours de création - Revenez vite </p>
   </div>
  )
}

export default Main