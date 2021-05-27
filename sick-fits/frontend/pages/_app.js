import propTypes, { arrayOf } from 'prop-types';
import { Page } from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

MyApp.propTypes = {
  Component: propTypes.any,
  pageProps: arrayOf(propTypes.string),
};
