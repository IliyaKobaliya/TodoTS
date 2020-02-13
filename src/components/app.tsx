import React from 'react'
import {Route, Switch, Redirect } from "react-router";

import { Routes } from '../Router/Routes'



export const App = () => (
        <Switch>
            {Routes.map(item => <Route path={item.path} component={item.component} key={item.key} />)}
            <Redirect to="/TodoPage" />
        </Switch>
)