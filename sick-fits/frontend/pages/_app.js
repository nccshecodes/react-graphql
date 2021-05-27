import propTypes, { arrayOf } from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';

import { Page } from './Page';

import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

MyApp.propTypes = {
  Component: propTypes.any,
  pageProps: propTypes.object,
};
