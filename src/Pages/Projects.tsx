import ColumnSection from '../Layout/ColumnSection'
import Navbar from '../Layout/Navbar'
import React, { Fragment } from 'react'
import { Element, Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => (
  <Fragment>
    <Navbar />
    <Element name="section1">
      <ColumnSection>
        <h1>Projects</h1>
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
        <h2>Blockparty</h2>
        <p>
          Blockparty is a suite that gives an interface to Discord, and online
          player monitoring for Minecraft servers on AWS (for now). It uses
          Minecraft's rcon server to check in on players and uses a three
          strikes you're out system to safely shutdown the server once everyone
          is logged out.
        </p>
        <p>
          While it is nice, the installation can be improved and is currently in
          the works.
        </p>
        <div>
          <a
            href="https://github.com/Kyle-Helmick/Blockparty"
            style={{ color: '#111' }}
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
          <Link
            to="section3"
            isDynamic={true}
            spy={true}
            smooth={true}
            duration={500}
            style={{ paddingLeft: '1rem' }}
          >
            <FontAwesomeIcon icon="angle-down" size="2x" />
          </Link>
        </div>
      </ColumnSection>
    </Element>
    <Element name="section3">
      <ColumnSection>
        <h2>mr_dictionary</h2>
        <p>
          Mr. Dictionary, aka your friendly neighborhood 'gotcha,' is a slack
          bot that looks for questions like "What's up?", "whats wrong with your
          face", or even the classic "what are you even talking about" and makes
          sure YOU get the definition you need. Using a only a couple of apis, a
          list of words shamelessly stolen from a public and copyright free
          source, and an AWS Lambda, you can rest easy knowing that "The purpose
          of this site might mean one of the following! To turn aside : deviate"
        </p>
        <div>
          <a
            href="https://github.com/Kyle-Helmick/mr_dictionary"
            style={{ color: '#111' }}
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
          <Link
            to="section4"
            isDynamic={true}
            spy={true}
            smooth={true}
            duration={500}
            style={{ paddingLeft: '1rem' }}
          >
            <FontAwesomeIcon icon="angle-down" size="2x" />
          </Link>
        </div>
      </ColumnSection>
    </Element>
    <Element name="section4">
      <ColumnSection>
        <h2>writemeastory</h2>
        <p>
          Have you ever wondered what it would sound like if math could talk,
          but only after it learned how to from batman/superman fanfic? Now you
          can. With the ability to train on any source, writemeastory uses very
          complex (but not really) markov models to mimic source texts and maybe
          (statistically possible but very unlikely) create a new unique story
          just for you!
        </p>
        <div>
          <a
            href="https://github.com/Kyle-Helmick/writemeastory"
            style={{ color: '#111' }}
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
          <Link
            to="section5"
            isDynamic={true}
            spy={true}
            smooth={true}
            duration={500}
            style={{ paddingLeft: '1rem' }}
          >
            <FontAwesomeIcon icon="angle-down" size="2x" />
          </Link>
        </div>
      </ColumnSection>
    </Element>
    <Element name="section5">
      <ColumnSection>
        <h2>Python-JSONY</h2>
        <p>
          Python-JSONY was just a fun project. It's a JSON validator written in
          python. There's really not a lot to it and I think it's semi-bad code
          so I archived it.
        </p>
        <div>
          <a
            href="https://github.com/Kyle-Helmick/Python-JSONY"
            style={{ color: '#111' }}
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
        </div>
      </ColumnSection>
    </Element>
  </Fragment>
)

export default Projects
