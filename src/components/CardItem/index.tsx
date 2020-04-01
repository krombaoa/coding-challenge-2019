// @flow

import React from 'react';
import styled from 'styled-components';
import { getImagePath } from 'modules/helpers';
import { Link } from 'react-router-dom';
import Tag from 'components/Tag';

interface ICardItemProps {
  id: number;
  title_long: string;
  tag: string;
  img: string;
  slug: string;
}

const CardItem: React.FunctionComponent<ICardItemProps> = ({ id, img, slug, title_long, tag }: ICardItemProps) => {
  return (
    <>
      <Container className="col-lg-6">
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
  width: 100%;
  position: relative;
  margin-bottom: 70px;
`;

const ViewLink = styled.span`
  a {
    width: 100%;
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
  width: 100%;
  color: #1a1a1a;
  font-family: Arial;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.4px;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 100%;
`;

export default CardItem;
