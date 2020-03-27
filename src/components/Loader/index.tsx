// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import React from 'react';

export const ListItemLoader = () => (
  <>
    <ListItemLoader.Wrapper>
      <rect x="0" y="0" rx="4" ry="2" width="687" height="384" />
      <rect x="0" y="410" rx="4" ry="2" width="563" height="50" />
      <rect x="0" y="480" rx="4" ry="2" width="213" height="20" />
    </ListItemLoader.Wrapper>
    <ListItemLoader.Wrapper>
      <rect x="0" y="0" rx="4" ry="2" width="687" height="384" />
      <rect x="0" y="410" rx="4" ry="2" width="563" height="50" />
      <rect x="0" y="480" rx="4" ry="2" width="213" height="20" />
    </ListItemLoader.Wrapper>
    <ListItemLoader.Wrapper>
      <rect x="0" y="0" rx="4" ry="2" width="687" height="384" />
      <rect x="0" y="410" rx="4" ry="2" width="563" height="50" />
      <rect x="0" y="480" rx="4" ry="2" width="213" height="20" />
    </ListItemLoader.Wrapper>
    <ListItemLoader.Wrapper>
      <rect x="0" y="0" rx="4" ry="2" width="687" height="384" />
      <rect x="0" y="410" rx="4" ry="2" width="563" height="50" />
      <rect x="0" y="480" rx="4" ry="2" width="213" height="20" />
    </ListItemLoader.Wrapper>
  </>
);

ListItemLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 517px;
  margin-top: 20px;
  margin-left: 10px;
`;
