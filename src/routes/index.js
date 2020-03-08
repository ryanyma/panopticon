import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route key="home-page" exact path="/" component={Home} />
      <Route key="about-page" exact path="/about" component={Home} />
      <Route key="manifesto-page" exact path="/manifesto" component={Home} />
      <Route key="writing-page" exact path="/writing" component={Home} />
      <Route key="writing-page" exact path="/contact" component={Home} />
      <Route key="contact-page" exact path="/privacy+policy" component={Home} />
      <Route key="contact-page" exact path="/production" component={Home} />
    </Switch>
  </BrowserRouter>
);
