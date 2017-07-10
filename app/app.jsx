import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Wrapper from 'Wrapper';
import About from 'About';
import Viewer from 'Viewer';
import 'styles';

render(
  <Router basename={'/'}>
    <Wrapper>
      <Route exact path="/" component={Viewer} />
      <Route path="/about" component={About} />
    </Wrapper>
  </Router>,
  document.getElementById('app')
);
