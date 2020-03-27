import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListingView from 'components/ListingView';
import SinglePageView from 'components/SinglePageView';
import FourOFour from 'components/404'

interface IRouterComponentProps {}

const RouterComponent: React.FunctionComponent<IRouterComponentProps> = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={ListingView} />
      <Route exact path="/details/:id" component={SinglePageView} />
      <Route component={FourOFour} />
    </Switch>
  );
};

export default RouterComponent;
