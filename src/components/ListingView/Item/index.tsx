// @flow

import React from 'react';
import styled from 'styled-components';
import { getImagePath } from 'modules/helpers';
import { Link } from 'react-router-dom';
import Tag from 'components/Tag';

interface IItemProps {
  id: number;
  title_long: string;
  tag: string;
  img: string;
  slug: string;
}

const Item: React.FunctionComponent<IItemProps> = ({ id, img, slug, title_long, tag }: IItemProps) => {
  return (
    <>
      <Container>
        <Tag tag={tag} />
        <Image src={getImagePath(img)} alt={slug} />
        <Description>{title_long}</Description>
        <ViewLink>
          <Link to={'/details/' + id}>
            <div className={'link-line'}></div>
            <span>view case study</span>
          </Link>
        </ViewLink>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 687px;
  height: 517px;
  position: relative;
`;

const ViewLink = styled.span`
  a {
    width: 213px;
    display: inline-flex;
    color: #3852f7;
    text-decoration: none;
  }

  .link-line {
    float: left;
    border-top: 1px solid;
    width: 32px;
    height: 2px;
    background: #3852f7;
  }

  span {
    padding-left: 17px;
    float: right;
    z-index: 5;
    height: 13px;
    transform: rotate(-1.001791e-5deg);
    color: #3852f7;
    font-family: Arial;
    font-size: 13px;
    font-weight: 700;
    line-height: 4px;
    text-transform: uppercase;
    letter-spacing: 0.19px;
  }
`;

const Description = styled.p`
  z-index: 4;
  width: 563px;
  height: 64px;
  color: #1a1a1a;
  font-family: Arial;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.4px;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 687px;
  height: 384px;
`;

export default Item;
