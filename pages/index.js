import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hassun Information Stratagem SMC Pvt Ltd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my site" />
        <p className="description">
        The website is under heavy development !
           <code> This is an automated stub for the tarantula project </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
