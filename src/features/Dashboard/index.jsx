import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddPost from './components/AddPost/index';
import ListPagePost from './pages/ListPagePost/index';

Dashboard.propTypes = {

};

function Dashboard(props) {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={match.path} exact component={AddPost}></Route>
      <Route path={`${match.path}/list`} component={ListPagePost}></Route>
    </Switch>
  );
}

export default Dashboard;