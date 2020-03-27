// @flow

import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import { TNavListProps } from '../types';
import { fetchFooterNav, fetchHeaderNav } from 'store/actions';
import { Link } from 'react-router-dom';

interface INavProps {
  logo: any;
  location: string;
}

const Nav: React.FunctionComponent<INavProps> = ({ logo, location }: INavProps) => {
  const list = location === 'header' ? fetchHeaderNav() : fetchFooterNav();

  return (
    <Container location={location}>
      <Link to={'/'}>
        <Logo logo={logo} />
      </Link>
      <NavList location={location}>
        {list.map((data: TNavListProps, key: string) => {
          const { name, link } = data;
          return (
            <NavItemList key={key}>
              <NavLink>
                <Link to={link}>{name}</Link>
              </NavLink>
            </NavItemList>
          );
        })}
      </NavList>
    </Container>
  );
};

const Container = styled.div<{ location: string }>`
  ${(p) =>
    p.location === 'header'
      ? `display: block;`
      : `
    border-top: 2px solid;
    padding-top: 26px;`}
`;

const NavList = styled.ul<{ location: string }>`
  z-index: 3;
  width: 434.8px;
  height: 14px;
  display: inline-flex;
  list-style: none;
  justify-content: space-between;
  float: right;
  margin: ${(p) => (p.location === 'header' ? `0 0px 0 0` : `0`)};
`;

const NavItemList = styled.li`
  z-index: 6;
  height: 14px;
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  line-height: 14px;
`;

const NavLink = styled.span`
  a {
    text-decoration: none;
    color: black;
  }
`;

export default Nav;
