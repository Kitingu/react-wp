import React, { useContext } from 'react';
import BlogContext from './context/blog/blogContext';
import BlogState from './context/blog/blogState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Blogs } from './components/blog';
import { Blogpost } from './components/blogpost';

import './styles/styles.scss';

const App = () => {
  

  return (
    <BlogState>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Blogs} />
            <Route
              exact
              path="/:blog"
              component={Blogpost}
            />
          </Switch>
        </div>
      </Router>
    </BlogState>
  );
};

export default App;
