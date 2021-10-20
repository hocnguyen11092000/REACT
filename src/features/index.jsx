import React,{useState} from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function TodoFeature(props) {
  const match = useRouteMatch()
  return (
    <div>
        UI TODO
      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route path={`${match.path}/:todo`} component={DetailPage}></Route>
      </Switch>
    </div>
  );
}

export default TodoFeature;