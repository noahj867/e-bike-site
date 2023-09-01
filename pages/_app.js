
import '../styles/globals.css';
import '../styles/app.css';
import {Layout, FadeIn} from '../components';

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

