import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../containers/Homepage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
