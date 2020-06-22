import ColumnSection from '../../Layout/ColumnSection'
import Navbar from '../../Layout/Navbar'
import React, { Fragment } from 'react'
import { Element, Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Element name="section1">
        <ColumnSection>
          <h1>Hi. My name is Kyle.</h1>
          <Link
            to="section2"
            isDynamic={true}
            spy={true}
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon icon="angle-down" size="3x" />
          </Link>
        </ColumnSection>
      </Element>
      <Element name="section2">
        <ColumnSection>
          <div>
            <h3>This is my site</h3>
            <p>
              Usually I don't know what to put here, or really anywhere when it
              comes to writing but I mean, here it is.
            </p>
          </div>
        </ColumnSection>
      </Element>
    </Fragment>
  )
}

export default Home
