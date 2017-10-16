import React from 'react'
import { Route } from 'react-router-dom'

import SalesNav from './Nav'
import SalesDashboard from './Dashboard'
import SalesInbox from './Inbox'

class Sales extends React.Component {
    render() {
        return <div className="content-with-nav">
          <SalesNav />
          <div className="content p2">
            <Route exact={true} path="/sales" component={SalesDashboard} />
            <Route path="/sales/inbox" component={SalesInbox} />
          </div>
        </div>
    }
};

export default Sales
