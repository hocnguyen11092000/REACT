import React from 'react';
import PropTypes from 'prop-types';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import ListPage from './pages/ListPage';


ProductFeature.propTypes = {

};

function ProductFeature(props) {
  const match = useRouteMatch()
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={ListPage}></Route>
      </Switch>
    </div>
  );
}

export default ProductFeature;