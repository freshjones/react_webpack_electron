import React from 'react'
import { Route,Switch } from 'react-router-dom'
import PouchDB from 'pouchdb';

import InboxNav from './Nav'
import InboxDashboard from './Dashboard'
import InboxNote from './Note'


class Inbox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        db: new PouchDB('notes')
      };
    }

    render() {
      const { location } = this.props
      const isModal = !!(
        location.state &&
        location.state.modal &&
        this.previousLocation !== location // not initial render
      )
      return <div className="content-with-nav">
        <InboxNav />
        <div className="content p2">{isModal}
          <Switch>
            <Route path="/inbox" component={InboxDashboard} />
          </Switch>
          {isModal ? <Route path="/:note" render={(props) => <InboxNote database={this.state.db} />} /> : null}
        </div>
      </div>
    }
};

export default Inbox
