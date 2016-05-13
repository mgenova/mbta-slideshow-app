import React from 'react';
import {RouteHanndler,Link, Route, Router, hashHistory} from 'react-router';
import Slide from '../components/Slide';





const Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Slide}>
        </Route>
    </Router>
)










export default Routes;
