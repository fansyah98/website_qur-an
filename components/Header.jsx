import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-green-300 p-3 flex justify-between items-center text-rose-50">
      <div>
        <Link href="/" className="text-lg font-bold">
          Alqur'an Digital
        </Link>
      </div>

      <div>{/* <button className="p-3 rounded-full">Dark</button> */}</div>
    </header>
  )
}
