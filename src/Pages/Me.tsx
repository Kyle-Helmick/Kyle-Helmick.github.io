import ColumnSection from '../Layout/ColumnSection'
import Navbar from '../Layout/Navbar'
import React, { Fragment } from 'react'
import { Element, Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Me = () => {
  return (
    <Fragment>
      <Navbar />
      <Element name="section1">
        <ColumnSection>
          <h1>It's all about me</h1>
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
          <p>
            Hey, it's me Kyle. I'm an Amazon dev by day, and a just regular dev
            by night.
          </p>
          <p>
            I graduated from the University of Colorado at Boulder with a
            Bachelors of Science in Computer Science and a Minor in Mathematics.
          </p>
          <Link
            to="section3"
            isDynamic={true}
            spy={true}
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon icon="angle-down" size="2x" />
          </Link>
        </ColumnSection>
      </Element>
      <Element name="section3">
        <ColumnSection>
          <p>
            Right now I'm interested in a couple things like mountain biking,
            rock climbing, cooking, and hiking.
          </p>
          <p>
            Ok now that this is sounding like a dating profile, (aren't you glad
            I didn't say long walks on the beach) I'd recommend to go check out
            other parts of this site.
          </p>
        </ColumnSection>
      </Element>
    </Fragment>
  )
}

export default Me
