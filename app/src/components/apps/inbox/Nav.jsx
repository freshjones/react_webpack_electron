import React from 'react'
import { NavLink } from 'react-router-dom'

class InboxNav extends React.Component {

  render() {
      return <nav>
        <ul className="flex list-reset m0 p0 justify-between items-center">
          <li className="py1 px2 h2 ">Inbox</li>
          <li className="py1 px2">
            <NavLink 
              to={{
                pathname: "inbox/note",
                state: { modal: true }
              }} 
              className="block btn btn-primary bg-green">
              New Note
            </NavLink>
          </li>
        </ul>
      </nav>
  }
};

export default InboxNav
