import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from 'Context';
import { fetchDataById } from 'store/actions';
import { getImagePath } from 'modules/helpers';
import Tag from 'components/Tag';
import FourOFour from 'components/404';

interface IDetailsProps {
  id: any;
}

const Details: React.FunctionComponent<IDetailsProps> = ({ id }: IDetailsProps) => {
  const { state } = useContext(Context);

  const data = fetchDataById(state, id);

  return data ? (
    <Container className="row">
      <ImageContainer className="col-lg-6">
        <Tag tag={data.tag} />
        <Image src={getImagePath(data.image)} alt={data.slug} />
      </ImageContainer>
      <QuestionContainer className="col-lg-6">
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
  display: flex;
`;
const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const QuestionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 20px 0 10%;
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
  width: 100%;
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

export default Details;
