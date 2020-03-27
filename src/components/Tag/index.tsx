import * as React from 'react';
import styled from 'styled-components';

interface ITagProps {
  tag: string;
}

const Tag: React.FunctionComponent<ITagProps> = ({ tag }: ITagProps) => {
  return (
    <TagDiv>
      <TagText>{tag}</TagText>
    </TagDiv>
  );
};

const TagDiv = styled.div`
  position: absolute;
  text-transform: uppercase;
  transform: rotate(90deg);
  transform-origin: bottom left;
  color: #6c6c6c;
  font-family: Arial;
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
  text-align: right;
  background: #f5f5f5;
  height: 24px;
  top: -24px;
`;

const TagText = styled.div`
  transform: rotate(180deg);
  padding: 0 0 12px 11px;
`;
export default Tag;
