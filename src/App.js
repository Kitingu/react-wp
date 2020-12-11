import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Blogs } from './components/blog';
import { Blogpost } from './components/blogpost';
import BlogState from './context/blog/blogState';
import './styles/styles.scss';



export default function App() {
  
  return (
    <BlogState>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Blogs} />
            <Route exact path="/:blog" component={Blogpost} />
          </Switch>
        </div>
      </Router>
    </BlogState>
  );
}
