import Layout from '../components/Layout';
import '../styles/globals.css';
function MainApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}
export default MainApp;
