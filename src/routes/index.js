import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ConnectedHomepage  from './../views/homepage';

const Routes = () => (
    <Switch>
        <Route
        path='/'
        exact 
        component= { ConnectedHomepage }
        />
    </Switch>
);



export default Routes;