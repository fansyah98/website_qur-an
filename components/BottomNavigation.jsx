import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const navs = [
  {
    name: 'Home',
    url: '/',
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l9-9 9 9M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-7 4h-4"
      />
    </svg>
    ),
  },
  {
    name: "Waktu Sholat",
    url: '/sholat',
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l9-9 9 9M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-7 4h-4"
      />
    </svg>
    
    ),
  },
  {
    name: "Qur'an",
    url: '/quran',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },

  {
    name: 'Asmaul Husna',
    url: '/husna',
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z"
      />
    </svg>
    
    ),
  },
]

export default function BottomNavigation() {
  const router = useRouter()
  const [active, setActive] = useState(null)
  const firstPath = '/' + router.asPath.split('/')[1]

  useEffect(() => {
    console.log('firstPath:', firstPath);
    console.log('navs:', navs);
    
    const foundNav = navs.find(({ url }) => url === firstPath);
    if (foundNav) {
        setActive(foundNav.url);
    } else {
        console.error('No matching nav found for the given path');
    }
}, []);

  return (
    <div className="fixed bottom-0 inset-x-0 bg-green-300 text-white grid grid-cols-4 text-center">
      {navs.map(({ name, icon, url }, i) => (
        <Link
          href={url}
          key={i}
          className={url === active ? 'pt-2 pb-1 bg-blue-100' : 'pt-2 pb-1'}
        >
          {icon}
          <span className="text-sm">{name}</span>
        </Link>
      ))}
    </div>
  )
}
