import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import postApi from 'api/postApi'
import { Route, useRouteMatch } from 'react-router';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ListPage from './pages/listPage/index';
import DetailPage from './pages/detailPage/index';



News.propTypes = {

};

function News(props) {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={match.path} component={ListPage} exact></Route>
      <Route path={`${match.path}/:new`} component={DetailPage}></Route>
    </Switch>
  );
}

export default News;