import ShowCalculator from '@/components/ShowCalculator'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Show Calculator</title>
        <meta
          name="description"
          content="Show Calculator is an app to help visualize the numbers behind a show proposal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ShowCalculator />
      </main>
    </>
  )
}
