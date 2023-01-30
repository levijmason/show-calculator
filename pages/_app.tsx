import { Layout } from '@/components/common/Layout'
import { en_messages } from '@/languages/en'
import { Fonts } from '@/styles/Fonts'
import { NextUIProvider } from '@nextui-org/react'
import { SSRProvider } from '@react-aria/ssr'
import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'

function ShowCalculator({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <IntlProvider locale={'en-US'} messages={en_messages}>
        <NextUIProvider>
          <Fonts />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </IntlProvider>
    </SSRProvider>
  )
}

export default ShowCalculator
