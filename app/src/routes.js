import React from 'react'

import Dashboard from './components/ui/Dashboard'
import Inbox from './components/apps/inbox'
import Sales from './components/apps/sales/Sales'
import Services from './components/apps/services/Services'
import Expenses from './components/apps/expenses/Expenses'
import Clients from './components/apps/clients/Clients'
import Company from './components/apps/company/Company'

const routes = [
    {
        path: '/',
        name:'Dashboard',
        exact: true,
        main: Dashboard
    },
    {
        path: '/inbox',
        name:'Inbox',
        main: Inbox
    },
    {
        path: '/sales',
        name:'Sales',
        main: Sales
    },
    {
        path: '/services',
        name:'Service',
        main: Services
    },
    {
        path: '/expenses',
        name:'Expenses',
        main: Expenses
    },
    {
        path: '/clients',
        name:'Clients',
        main: Clients
    },
    {
        path: '/company',
        name:'Company',
        main: Company
    }
];

export default routes

