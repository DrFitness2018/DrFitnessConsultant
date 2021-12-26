/*eslint-disable*/
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


const Profiles = React.lazy(() =>
  import(/* webpackChunkName: "menu-level-3" */ './slots')
);


const Slots = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/Slots`}
      />
     
      <Route
        path={`${match.url}/Slots`}
        render={(props) => <Profiles {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Slots;
