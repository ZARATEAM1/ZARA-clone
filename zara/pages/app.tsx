
import type { AppProps } from 'next/app'
import Layout from '@/pages/layout';
// import "../styles/Layout.module.css"

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}