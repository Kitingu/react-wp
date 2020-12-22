import React, { useContext } from 'react';
import BlogState from './context/blog/blogState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Blogs } from './components/blog';
import { Blogpost } from './components/blogpost';

import './styles/styles.scss';
import UserState from './context/user/userState';
import Author from './components/author';

const App = () => {
  return (
    <BlogState>
      <UserState>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Blogs} />
              <Route exact path="/:blog" component={Blogpost} />
              <Route exact path="/author/:id" component={Author} />
            </Switch>
          </div>
        </Router>
      </UserState>
    </BlogState>
  );
};

export default App;
