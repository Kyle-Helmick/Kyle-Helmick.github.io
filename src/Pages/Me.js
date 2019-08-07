import React, { Component, Fragment } from 'react'
import CenterSection from '../Layout/CenterSection'
import Navbar from '../Layout/Navbar'

export class Me extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <CenterSection>
          <h1>Me</h1>
        </CenterSection>
      </Fragment>
    )
  }
}

export default Me
