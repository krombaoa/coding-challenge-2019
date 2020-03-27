// @flow

import React from 'react';
import logo from './assets/adrenaline_logo.svg';
import { ContextProvider } from './Context';
import styled from 'styled-components';
import Routes from 'routes';

import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './common/NavList';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Container>
          <Content>
            <Nav location={'header'} logo={logo} />
            <BodyConent>
              <Routes />
            </BodyConent>
            <Nav location={'footer'} logo={logo} />
          </Content>
        </Container>
      </Router>
    </ContextProvider>
  );
}

const Container = styled.div`
  width: 1584px;
  background: #f5f5f5;
  margin: auto;
`;
const Content = styled.div`
  padding: 40px 90px 60px;
`;

const BodyConent = styled.div`
  padding: 60px 0;
`;

export default App;
