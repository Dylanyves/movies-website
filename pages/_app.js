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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout genres="hello">
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp