import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { EverythingElse, FourOhFour, Home, Me, Projects } from './Pages'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons/'
import { library } from '@fortawesome/fontawesome-svg-core'
import './App.css'

library.add(faAngleDown, faGithub, faTwitter, faInstagram, faLinkedin)

const App: React.FC = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/me" component={Me} />
          <Route path="/projects" component={Projects} />
          <Route path="/everythingelse" component={EverythingElse} />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
