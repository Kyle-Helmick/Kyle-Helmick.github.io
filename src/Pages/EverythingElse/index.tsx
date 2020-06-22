import ColumnSection from '../../Layout/ColumnSection'
import Navbar from '../../Layout/Navbar'
import React, { Fragment } from 'react'
import { Element, Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const firstStyle = {
  color: '#111',
  '&:hover': {
    color: '#456'
  }
}

const nStyle = {
  ...firstStyle,
  paddingLeft: '1rem'
}

const EverythingElse = () => (
  <Fragment>
    <Navbar />
    <Element name="section1">
      <ColumnSection>
        <h1>Everything Else</h1>
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
          Honestly this is just a space to plug all of my social media links and
          I didn't want to put it on my about me page.
        </p>
        <p>So here you go:</p>
        <div className="d-flex flex-row">
          <a href="https://github.com/Kyle-Helmick" style={firstStyle}>
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
          <a href="https://twitter.com/dude___what" style={nStyle}>
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
          </a>
          <a href="https://instagram.com/dude___what/" style={nStyle}>
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/kyle-helmick/" style={nStyle}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
        </div>
      </ColumnSection>
    </Element>
  </Fragment>
)

export default EverythingElse
