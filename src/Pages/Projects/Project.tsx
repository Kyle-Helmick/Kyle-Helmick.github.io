import ColumnSection from '../../Layout/ColumnSection'
import React from 'react'
import { Element, Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface ProjectInterface {
  title: string
  description: Array<string>
  link: string
  fontAwesomeIcon: any // Because FontAwesome doesn't want a string for their IconName type that's just strings :(
}

export interface ProjectProps {
  project: ProjectInterface
  projectIndex: number
  lastIndex: boolean
  key: string
}

const Project = (props: ProjectProps) => (
  <Element name={`project${props.projectIndex}`}>
    <ColumnSection>
      <h2>{props.project.title}</h2>
      {props.project.description.map((d, index) => (
        <p key={`${props.project.title}-desc-${index}`}>{d}</p>
      ))}
      <div>
        {props.project.link !== '' ? (
          <a href={props.project.link} style={{ color: '#111' }}>
            <FontAwesomeIcon
              icon={['fab', props.project.fontAwesomeIcon]}
              size="2x"
            />
          </a>
        ) : null}

        {!props.lastIndex ? (
          <Link
            to={`project${props.projectIndex + 1}`}
            isDynamic={true}
            spy={true}
            smooth={true}
            duration={500}
            style={{ paddingLeft: '1rem' }}
          >
            <FontAwesomeIcon icon="angle-down" size="2x" />
          </Link>
        ) : null}
      </div>
    </ColumnSection>
  </Element>
)

export default Project
