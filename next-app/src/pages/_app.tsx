import * as React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@material-ui/core/styles'
import { CacheProvider } from '@emotion/react'
import { AnimatePresence } from 'framer-motion'
import CssBaseline from '@material-ui/core/CssBaseline'
import createCache from '@emotion/cache'
import { title, keywords, description } from '@/lib/seo'
import theme from '@/lib/theme/theme'
import '@/styles/globals.scss'

export const cache = createCache({ key: 'css', prepend: true })

export default function MyApp (props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()

  return (
    <CacheProvider value={cache}>
      <Head>
        <meta charSet='utf-8' />
        <link rel='apple-touch-icon' sizes='180x180' href='favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='favicons/favicon-16x16.png' />
        <link rel='manifest' href='favicons/site.webmanifest' />
        <link rel='mask-icon' href='favicons/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <title>{title}</title>
      </Head>
      <AnimatePresence>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} key={router.route} />
        </ThemeProvider>
      </AnimatePresence>
    </CacheProvider>
  )
}
