import React, { Component } from 'react'
import CenterSection from '../Layout/CenterSection'

import { Link } from 'react-router-dom'

export class FourOhFour extends Component {
  fourohfour_messages = [
    "Uh oh, that's weird... ",
    'Whoa. Where are we? ',
    'The server room is probably on fire. ',
    'Somewhere Kyle was just paged. He says thanks. ',
    'You found the secret page! Just kidding. ',
    'witty_joke_v4_final.jpeg '
  ]

  render() {
    return (
      <CenterSection>
        <h1>404</h1>
        <h2>
          {
            this.fourohfour_messages[
              Math.floor(Math.random() * this.fourohfour_messages.length)
            ]
          }
        </h2>
        <h2>
          Let's get you back <Link to='/'>home</Link>.
        </h2>
      </CenterSection>
    )
  }
}

export default FourOhFour
