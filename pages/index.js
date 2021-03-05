import Head from 'next/head'
import { Content } from '../components/Content'
import { Placeholder } from '../components/Placeholder'

function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {/* <Content /> */}
        <Placeholder />
      </main>
    </div>
  )
}

export default Home
