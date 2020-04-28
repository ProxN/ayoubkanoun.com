import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Fonts from './Fonts';
import Theme from '../../styles/theme.styles';
import GlobalStyles from '../../styles/global.styles';
import LayoutContainer from './styles';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <LayoutContainer>
        <GlobalStyles />
        <Fonts />
        {children}
      </LayoutContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
