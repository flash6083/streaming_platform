import Layout from '../components/layout'
import Router from 'next/router';
import NProgress from 'nprogress'; 

import 'nprogress/nprogress.css'; 
import 'react-multi-carousel/lib/styles.css';
import '../styles/globals.css'

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());  

function MyApp({ Component, pageProps }) {
  return (  
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
  
}

export default MyApp
