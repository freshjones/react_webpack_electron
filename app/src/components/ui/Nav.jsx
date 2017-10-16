import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from './../../routes'

class Nav extends React.Component {
    render() {
        return <nav className="sidebar bg-silver">
          <ul className="list-reset m0 p0">
            {routes.map(function(route,idx){
                return <li key={idx}>
                    <NavLink exact={route.exact} to={route.path} className="block px2 py2 black text-decoration-none">{route.name}</NavLink>
                </li>
            })}
          </ul>
        </nav>
    }
};

export default Nav
