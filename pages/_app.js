import '../styles/globals.css'
import Head from 'next/head'
import Layout from "components/Layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movies Website</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Search through hundreds of thousands movies information" />
        <meta name="keywords" content="Movies, Movie, Information" />
        <meta name="author" content="Dylan Mac Yves" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout genres="hello">
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp