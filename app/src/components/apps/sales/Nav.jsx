import React from 'react'
import { NavLink } from 'react-router-dom'

class SalesNav extends React.Component {
    render() {
        return <nav>
          <ul className="flex list-reset m0 p0">
            <li>
              <NavLink exact={true} to="/sales" className="block px2 py2 black text-decoration-none">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/sales/inbox" className="block px2 py2 black text-decoration-none">Inbox</NavLink>
            </li>
          </ul>
        </nav>
    }
};

export default SalesNav
