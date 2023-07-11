
import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/app.css';

import { Layout } from '../components';

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

