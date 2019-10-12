import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { EverythingElse, FourOhFour, Home, Me, Projects } from './Pages'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/me' component={Me} />
          <Route path='/projects' component={Projects} />
          <Route path='/everythingelse' component={EverythingElse} />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
