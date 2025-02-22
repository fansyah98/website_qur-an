import { useEffect, useState } from 'react'
import ErrorCard from '../components/ErrorCards'
import JadwalSholatCard from '../components/JadwalSholatCard'
import Layout from '../components/Layouts'
import Loading from '../components/Loading'
import Tracker from '../components/Tracker'
import { coords } from '../constants/location'
import { indonesianDate, indonesianName } from '../utils/jadwal-sholat'

export default function JadwalSolatHariIni() {
  // Memformat tanggal
  let d = new Date()
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = d.getFullYear()

  const [jadwalSholat, setJadwalSholat] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [coordinates, setCoordinates] = useState({
    latitude: coords.lat,
    longitude: coords.lng,
  })

  const [displayMap, setDisplayMap] = useState(false)

  const [today, setToday] = useState(Number(dd))
  const [tanggal, setTanggal] = useState(indonesianDate())
  const [jam, setJam] = useState(indonesianDate(true))
  const [next, setNext] = useState({ name: '-', countDown: 0 })

  // Google Tag Manager Script
  useEffect(() => {
    // Google Tag Manager Script (GTM)
    const script = document.createElement('script')
    script.innerHTML = `
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
    document.head.appendChild(script)

    // Google Tag Manager Noscript
    const noscript = document.createElement('noscript')
    noscript.innerHTML = `
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-5R5RD4KD"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    `
    document.body.appendChild(noscript)
  }, [])

  // Fetch jadwal sholat
  useEffect(() => {
    // Query string
    const query = new URLSearchParams({
      ...coordinates,
      method: 15,
    })
    const apiURL = `https://api.aladhan.com/v1/timings/${today}-${mm}-${yyyy}?${query}`

    setLoading(true)
    fetch(apiURL)
      .then((res) => res.json())
      .then(({ data }) => {
        delete data.timings['Sunset'] // Menghapus waktu sunset, karna Sunset === Maghrib
        setJadwalSholat(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [today, coordinates])

  // Mengatur waktu tanggal, jam, hari ini.
  useEffect(() => {
    const tId = setTimeout(() => {
      setTanggal(indonesianDate())
      setJam(indonesianDate(true))

      // Sholat berikutnya.
      if (jadwalSholat) {
        if (jadwalSholat.timings) {
          // Mengambil sholat yang waktunya sudah paling dekat
          const times = Object.values(jadwalSholat.timings)
            .map((v) => new Date(`${yyyy}-${mm}-${dd}T${v}`).getTime())
            .map((v, i) => [Object.keys(jadwalSholat.timings)[i], v - Date.now()])
            .sort((a, b) => a[1] - b[1])
            .filter((v) => v[1] > 0)

          // Memperbarui tanggal jika jadwal hari ini sudah selesai
          if (times.length === 0) {
            setToday(Number(dd) + 1)
            setTanggal(indonesianDate(false, `${yyyy}-${mm}-${today}`))
          }

          // Mengatur countdown
          const distance = times[0][1]
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((distance % (1000 * 60)) / 1000)

          // Memperbarui info sholat berikutnya
          setNext({
            name: times[0][0],
            countDown: `${(hours < 10 ? '0' : '') + hours}:${
              (minutes < 10 ? '0' : '') + minutes
            }:${(seconds < 10 ? '0' : '') + seconds}`,
          })
        }
      }
    }, 1000)

    return () => clearTimeout(tId)
  })

  // Memutar audio adzan
  useEffect(() => {
    const adzan = document.getElementById('adzan')
    document.body.onclick = () => {
      adzan.play()
      adzan.pause()
    }

    const { name, countDown } = next
    switch (name) {
      case 'Fajr':
      case 'Dhuhr':
      case 'Asr':
      case 'Maghrib':
      case 'Isha':
        if (countDown === '00:00:00') adzan.play()
        break

      default:
        break
    }
  })

  return (
    <Layout name="Jadwal Sholat">
      <h1 className="text-3xl font-bold text-blue-500 mb-3">Jadwal Sholat</h1>

      {loading && <Loading message="Memuat jadwal sholat..." />}
      {error && (
        <ErrorCard message="Gagal memuat data, silakan periksa koneksi internet Anda lalu refresh halaman ini." />
      )}

      {/* Konten lainnya */}
    </Layout>
  )
}
