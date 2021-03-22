import Head from 'next/head'
import { Placeholder } from '@components/Placeholder'

function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Placeholder />
      </main>
    </div>
  )
}

export default Home
