import '../styles/global.scss'

import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { AppPropsWithLayout } from '../models/layout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (<LayoutWrapper><Component {...pageProps} /></LayoutWrapper>)
}

export default MyApp
