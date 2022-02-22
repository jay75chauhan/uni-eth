import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Transaction } from '../context/Transaction'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Transaction>
      <Component {...pageProps} />
    </Transaction>
  )
}

export default MyApp
