import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from 'Context';
import { fetchDataById } from 'store/actions';
import { getImagePath } from 'modules/helpers';
import Tag from 'components/Tag';
import FourOFour from 'components/404';

interface IViewItemProps {
  id: any;
}

const ViewItem: React.FunctionComponent<IViewItemProps> = ({ id }: IViewItemProps) => {
  const { state } = useContext(Context);

  const data = fetchDataById(state, id);

  return data ? (
    <Container>
      <ImageContainer>
        <Tag tag={data.tag} />
        <Image src={getImagePath(data.image)} alt={data.slug} />
      </ImageContainer>
      <QuestionContainer>
        <QuestionTitle>{data.title}</QuestionTitle>

        {data.questions.map((v, i) => (
          <div key={i}>
            <QuestionNumber>Question {i + 1}</QuestionNumber>
            <Questions>{v}</Questions>
          </div>
        ))}
      </QuestionContainer>
    </Container>
  ) : (
    <FourOFour />
  );
};

const Container = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 70px;
  grid-template-columns: auto auto;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const Image = styled.img``;

const QuestionContainer = styled.div`
  width: 564px;
  margin: 0 auto;
`;

const QuestionTitle = styled.p`
  width: 100%;
  color: #1a1a1a;
  font-family: Arial;
  font-size: 64px;
  font-weight: 700;
  line-height: 68px;
  letter-spacing: -1.8px;
`;
const QuestionNumber = styled.p`
  width: 445px;
  font-family: Arial;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.5px;
`;
const Questions = styled.p`
  width: 100%;
  text-shadow: inset 0px 1px3px rgba(0, 0, 0, 0.5);
  color: #333333;
  font-family: Georgia;
  font-size: 21px;
  font-weight: 400;
  line-height: 37px;
`;

export default ViewItem;
