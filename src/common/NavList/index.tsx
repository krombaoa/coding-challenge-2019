// @flow

import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import { TNavListProps } from '../types';
import { getConfig } from 'modules/helpers';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
interface INavProps {
  logo: any;
  location: string;
}

const NavList: React.FunctionComponent<INavProps> = ({ logo, location }: INavProps) => {
  const list = getConfig(location);
  const [isOpen, setIsOpen] = useState(location === 'footer');
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container location={location}>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <Logo logo={logo} />
        </NavbarBrand>
        <CollapseDiv location={location}>
          <NavbarToggler onClick={toggle} />
        </CollapseDiv>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-sm-auto navbar-nav" navbar>
            {list.map((data: TNavListProps, key: string) => {
              const { name, link } = data;
              return (
                <NavItem key={key}>
                  <NavLink href={link}>
                    <NavItemList>{name}</NavItemList>
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

const Container = styled.div<{ location: string }>`
  ${(p) =>
    p.location === 'header'
      ? `display: block;`
      : `
    border-top: 2px solid;
    `}

  nav {
    padding: 20px 0;
  }
`;

const CollapseDiv = styled.div<{ location: string }>`
  display: ${(p) => (p.location === 'footer' ? 'none' : 'block')};
`;

const NavItemList = styled.span`
  height: 14px;
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  line-height: 14px;
  color: black;
  padding-left: 25px;
`;

export default NavList;
