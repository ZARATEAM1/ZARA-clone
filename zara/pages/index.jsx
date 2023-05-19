// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import HomeCarousel from './components/HomeCarousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div onClick={()=>window.location.href='/Women'}> women </div>
    <div onClick={()=>window.location.href='/beauty'}> beauty</div>
    <div onClick={()=>window.location.href='/getmens'}> mens</div>
    <div onClick={()=>window.location.href='/getkids'}> kids</div>
   
    </>
  )

}