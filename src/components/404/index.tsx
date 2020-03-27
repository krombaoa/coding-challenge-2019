import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IFourOFourProps {}

const FourOFour: React.FunctionComponent<IFourOFourProps> = (props) => {
  return (
    <Container>
      <h1>404 - Page not Found</h1>
      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <BackButton>
        <Link to={'/'}>Back to Home</Link>
      </BackButton>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  width: 400px;
  margin: auto;
`;

const BackButton = styled.div`
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
`;

export default FourOFour;
