
import '../styles/globals.css'
import { Lexend_Deca } from 'next/font/google'
import type { AppProps } from 'next/app'
import AppProvider from '../context'
import Head from 'next/head'



const font = Lexend_Deca({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <Component className={font.className} {...pageProps} />
    </AppProvider>
  )
}
