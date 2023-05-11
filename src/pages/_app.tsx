import type { AppProps } from "next/app"
import Head from "next/head"
import { SWRConfig } from "swr"
import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { CacheProvider, EmotionCache } from "@emotion/react"

import Layout from "@/components/Layout"
import fetcher from "@/utils/fetcher"
import createEmotionCache from "@/lib/emotionCache"
import lightTheme from "@/styles/muiTheme"
import "@/styles/globals.css"
import "nprogress/nprogress.css"

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={lightTheme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <CssBaseline />
        </ThemeProvider>
      </CacheProvider>
      <Toaster />
    </SWRConfig>
  )
}
