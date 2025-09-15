import type { AppProps } from 'next/app'
import "./globals.css"

import { JetBrains_Mono } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
export const jetbrains = JetBrains_Mono({ subsets: ['latin'] })
export const grotesk = Space_Grotesk({ subsets: ['latin'], weight: ["300"] })

export default function App({ Component, pageProps }: AppProps) {
  return <div className={'h-screen w-screen ' + grotesk.className}>
    <Component {...pageProps} />
  </div>
}