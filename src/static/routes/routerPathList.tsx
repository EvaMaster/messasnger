import React from 'react';
import Registration from "../../components/Registration";
import Login from "../../components/Login";
import Dashboard from "../../components/Dashboard";
import {routesProps} from "../../interfaces";

export const routes: routesProps[] = [
    {
        path: 'dashboard/:id',
        component: <Dashboard />,
    },
    {
        path: '/registration',
        component: <Registration />,
    },
    {
        path: '/',
        component: <Login />,
    },
    {
        path: '/login',
        component: <Login />,
    },
];
