import propTypes from 'prop-types';
import { Header } from '../components/Header';

import { GlobalStyles } from '../components/styles/GlobalStyles';
import { InnerStyles } from '../components/styles/InnerStyles';

const Page = function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
};

Page.propTypes = {
  children: propTypes.any,
};

export { Page };
