import React from 'react'
import { NavLink } from 'react-router-dom'

class ServicesNav extends React.Component {
    render() {
        return <nav>
          <ul className="flex list-reset m0 p0">
            <li>
              <NavLink exact={true} to="/services" className="block px2 py2 black text-decoration-none">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/services/inbox" className="block px2 py2 black text-decoration-none">Inbox</NavLink>
            </li>
          </ul>
        </nav>
    }
};

export default ServicesNav
