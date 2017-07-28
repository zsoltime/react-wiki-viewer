import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from 'About';
import Viewer from 'Viewer';
import 'styles';

const routes = () => (
  <Router basename={'/'}>
    <div className="wrapper">
      <Route exact path="/" component={Viewer} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default routes;
