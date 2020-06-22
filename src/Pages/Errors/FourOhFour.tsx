import ColumnSection from '../../Layout/ColumnSection'
import React from 'react'
import { Link } from 'react-router-dom'

const FourOhFour = () => {
  let fourohfour_messages = [
    "Uh oh, that's weird... ",
    'Whoa. Where are we? ',
    'The server room is probably on fire. ',
    'Somewhere Kyle was just paged. He says thanks. ',
    'You found the secret page! Just kidding. ',
    'witty_joke_v4_final.jpeg '
  ]

  return (
    <ColumnSection>
      <h1>404</h1>
      <h2>
        {
          fourohfour_messages[
            Math.floor(Math.random() * fourohfour_messages.length)
          ]
        }
      </h2>
      <h2>
        Let's get you back <Link to="/">home</Link>.
      </h2>
    </ColumnSection>
  )
}

export default FourOhFour
