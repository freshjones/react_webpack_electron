import React from 'react'
import {MemoryRouter as Router} from 'react-router-dom'

import Header from './ui/Header.jsx'
import Nav from './ui/Nav.jsx'
import Footer from './ui/Footer.jsx'
import Main from './ui/Main.jsx'

import 'basscss/css/basscss.min.css'
import 'basscss-btn/css/btn.css'
import 'basscss-btn-primary/css/btn-primary.css'
import 'basscss-btn-sizes/css/btn-sizes.css'
import './styles'

class App extends React.Component {
    render() {
        return <Router>
          <div className="wrapper">
            <Header />
            <Nav />
            <Main />
            <Footer />
          </div>
        </Router>
    }
};

export default App
