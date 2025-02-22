import { useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  useEffect(() => {
    // Google Tag Manager Script (GTM)
    const gtmScript = document.createElement('script')
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5R5RD4KD');
    `
    document.head.appendChild(gtmScript)

    // Google Tag Manager Noscript
    const gtmNoscript = document.createElement('noscript')
    gtmNoscript.innerHTML = `
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-5R5RD4KD"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    `
    document.body.appendChild(gtmNoscript)
  }, [])

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
