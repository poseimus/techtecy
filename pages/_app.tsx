import MySection from '@/components/MySection'
import Header from '@/layout/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { Suspense } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <MySection>
          <Header />
          <Component {...pageProps} />
        </MySection>
      </Suspense>
    </React.StrictMode>

  </>
}
