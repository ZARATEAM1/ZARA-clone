
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div onClick={()=>window.location.href='/Women'}>

      women
    </div>
    <div onClick={()=>window.location.href='/beauty'}> beauty</div>
    </>
  )
}