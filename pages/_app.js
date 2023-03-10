import Layout from '../components/Layout'
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
