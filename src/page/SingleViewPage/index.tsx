import * as React from 'react';
import ViewItem from 'components/Details';
import { useParams } from 'react-router-dom';

interface IDetailsPageProps {}

const DetailsPage: React.FunctionComponent<IDetailsPageProps> = (props) => {
  const { id } = useParams();
  return <ViewItem id={id} />;
};

export default DetailsPage;
