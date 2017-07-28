import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from 'About';
import Nav from 'Nav';
import Viewer from 'Viewer';
import 'styles';

const routes = () => (
  <Router basename={'/'}>
    <div className="wrapper">
      <Nav />
      <Route exact path="/" component={Viewer} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default routes;
