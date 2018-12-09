import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';
import Layout from '..common/Layout';


export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
