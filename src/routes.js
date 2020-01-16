import React from 'react';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
        </Switch>        
    );
};