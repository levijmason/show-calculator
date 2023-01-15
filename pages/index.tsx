import Head from 'next/head'
import Content from '../components/Content'

export default function Home() {
  return (
    <>
      <Head>
        <title>Show Calculator</title>
        <meta
          name="description"
          content="Trip the Fan is a music management firm based out of Oklahoma City."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Content />
      </main>
    </>
  )
}
