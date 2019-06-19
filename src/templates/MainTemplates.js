import React from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/mainTheme';
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const MainTemplate = ({ children }) => (
    <div>
      <GlobalStyle />
      
      <ThemeProvider theme={theme}>

          {children}
      
      </ThemeProvider>
    </div>
  );
  
  MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
  };
  
  export default MainTemplate;
  