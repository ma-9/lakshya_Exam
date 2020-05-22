import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AdminSide, CandidateSide } from 'pages';

const LakshyaExamRouters = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <CandidateSide />
      </Route>
      <Route exact path='/admin'>
        <AdminSide />
      </Route>
    </Switch>
  );
};

export default LakshyaExamRouters;
