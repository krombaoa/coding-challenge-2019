// @flow

import React from 'react';
import logo from './assets/adrenaline_logo.svg';
import { ContextProvider } from './Context';
import styled from 'styled-components';
import Routes from 'routes';

import { BrowserRouter as Router } from 'react-router-dom';

import NavHeader from './common/NavList';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Container className="container">
          <Content>
            <NavHeader location={'header'} logo={logo} />
            <BodyConent>
              <Routes />
            </BodyConent>
            <NavHeader location={'footer'} logo={logo} />
          </Content>
        </Container>
      </Router>
    </ContextProvider>
  );
}

const Container = styled.div`
  max-width: 1400px;
  margin: auto;
`;
const Content = styled.div`
  display: block;
`;

const BodyConent = styled.div`
  padding: 20px 0px;
`;

export default App;
