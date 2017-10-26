import React from 'react'
import { NavLink } from 'react-router-dom'

class Overlay extends React.Component {
    render() {
        return <div className="overlay">
          <div className="overlay-container">
             { this.props.children }
          </div>
        </div>
    }
};

export default Overlay
