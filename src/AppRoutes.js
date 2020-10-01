import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from './routes';

function AppRoutes(props) {
    return (
        <Switch>
            {
                Routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                        >
                            <route.component />
                        </Route>
                    )
                })
            }
        </Switch>
    );
}

export default AppRoutes;