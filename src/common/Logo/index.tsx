// @flow
import * as React from 'react';
import styled from 'styled-components';

interface ILogoProps {
  logo: any;
}

const Logo: React.FunctionComponent<ILogoProps> = ({ logo }: ILogoProps) => {
  return (
    <Container>
      <LogoContainer>
        <Image src={logo} alt="Adrenaline Logo" />
      </LogoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: 17px;
  // float: left;
`;

const LogoContainer = styled.span`
  display: block;
`;

const Image = styled.img`
  display: block;
`;

export default Logo;
