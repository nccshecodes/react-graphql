import propTypes from 'prop-types';
import styled from 'styled-components';
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
  children: propTypes.oneOf([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export { Page };
