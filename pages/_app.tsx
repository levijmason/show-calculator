import { Layout } from '@/components/common/Layout'
import { en_messages } from '@/languages/en'
import { darkTheme, lightTheme } from '@/styles'
import { Fonts } from '@/styles/Fonts'
import { NextUIProvider } from '@nextui-org/react'
import { SSRProvider } from '@react-aria/ssr'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'

function ShowCalculator({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <IntlProvider locale={'en-US'} messages={en_messages}>
        <NextThemesProvider
          defaultTheme="dark"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider>
            <Fonts />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NextUIProvider>
        </NextThemesProvider>
      </IntlProvider>
    </SSRProvider>
  )
}

export default ShowCalculator
