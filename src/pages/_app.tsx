
import '../styles/globals.css'
import { Lexend_Deca } from 'next/font/google'
import type { AppProps } from 'next/app'
import AppProvider from '../context'
import Head from 'next/head'
// import { setState } from '../utilities/storage'
// import { useEffect } from 'react'



const font = Lexend_Deca({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(()=>{
  //   window.addEventListener('beforeunload', (event) => {
  //     event.preventDefault();
  //     setState({
  //       token:undefined
  //     })
  //     event.returnValue = '';
  //   });
  // },[])
  return (
    <AppProvider>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <Component className={font.className} {...pageProps} />
    </AppProvider>
  )
}
