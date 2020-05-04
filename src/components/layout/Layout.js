import 'normalize.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import Fonts from './components/Fonts';
import Seo from './components/Seo';
import Loader from '../loader';
import Theme from '../../styles/theme.styles';
import GlobalStyles from '../../styles/global.styles';
import LayoutContainer, { Wrapper } from './styles';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider theme={Theme}>
      <LayoutContainer>
        <GlobalStyles />
        <Fonts />
        <Seo />
        {isLoading ? (
          <Loader finish={() => setIsLoading(false)} />
        ) : (
          <Wrapper>
            <Header />
            {children}
          </Wrapper>
        )}
      </LayoutContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
