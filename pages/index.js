import Head from 'next/head'
import { Placeholder } from '@components/Placeholder'
import Header from '@components/Header'

function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Header /> */}
      <main>
        <Placeholder />
      </main>
    </div>
  )
}

export default Home
