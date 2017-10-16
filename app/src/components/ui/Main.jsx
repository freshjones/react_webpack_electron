import React from 'react'
import { Route } from 'react-router-dom'

import routes from './../../routes'

class Main extends React.Component {
    render() {
        return <main>
          {routes.map(function(route,index){
            return <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          })}
        </main>
    }
};

export default Main

