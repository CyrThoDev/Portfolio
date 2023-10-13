import Image from 'next/image'

export default function Home() {
  return (
    <>
    <h1>Coucou</h1>
    <div className="flex flex-row">
    <Image
      src="/Logo.png"
      width={250}
      height={250}
      alt="Logo"
    />
    <p> coucou</p>
    </div>
    </>
  )
}
