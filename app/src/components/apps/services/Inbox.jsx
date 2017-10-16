import React from 'react'
import { NavLink } from 'react-router-dom'

class ServicesInbox extends React.Component {
    render() {
        return <div className="inbox-layout">
          <NavLink 
            exact={true} 
            to={{
              pathname: '/services/note',
              state: { modal: true, returnTo: this.props.location.pathname }
            }}
            className="block btn btn-primary bg-green white"
          >New Note</NavLink>
        </div>
    }
};

export default ServicesInbox
