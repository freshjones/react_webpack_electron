import React from 'react'
import { Route } from 'react-router-dom'

import ServiceNav from './Nav'
import ServicesDashboard from './Dashboard'
import ServicesInbox from './Inbox'
import ServiceNote from './Note'

class Services extends React.Component {
    render() {
        return <div className="content-with-nav">
          <ServiceNav />
          <div className="content p2">
            <Route exact={true} path="/services" component={ServicesDashboard} />
            <Route path="/:inbox" component={ServicesInbox} />
            <Route path="/:note" component={ServiceNote} />
          </div>
        </div>
    }
};

export default Services
