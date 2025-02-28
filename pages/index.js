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
    <div className="nav">one</div>
      <main>
        <Header title="Welcome to HI Stratagem (SMC Pvt) Ltd" />
        <div className="container1">The web app is under development</div>
	<p className="description">
           <code>tarantula project stub </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
