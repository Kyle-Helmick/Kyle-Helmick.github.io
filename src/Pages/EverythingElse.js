import React, { Component, Fragment } from 'react'
import CenterSection from '../Layout/CenterSection'
import Navbar from '../Layout/Navbar'

export class EverythingElse extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <CenterSection>
          <h1>Everything Else</h1>
        </CenterSection>
      </Fragment>
    )
  }
}

export default EverythingElse
