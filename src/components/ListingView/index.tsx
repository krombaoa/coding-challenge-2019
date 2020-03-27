// @flow
import React, { useContext } from 'react';
import styled from 'styled-components';
import Item from './Item';
import { Context } from 'Context';
import { ListItemLoader } from 'components/Loader';

interface IListingProps {}

interface IData {
  id: number;
  title_long: string;
  tag: string;
  thumb: string;
  slug: string;
}

const Listing: React.FunctionComponent<IListingProps> = (props) => {
  const { state } = useContext(Context);

  return (
    <Container>
      {state.data.length !== 0 ? (
        state.data.map((data: IData, key: number) => {
          const { id, title_long, tag, thumb, slug } = data;
          return <Item key={key} id={id} title_long={title_long} tag={tag} img={thumb} slug={slug} />;
        })
      ) : (
        <ListItemLoader />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 70px;
  grid-template-columns: auto auto;
`;

export default Listing;
