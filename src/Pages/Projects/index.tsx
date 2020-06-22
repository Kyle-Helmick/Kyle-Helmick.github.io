import ColumnSection from '../../Layout/ColumnSection'
import Navbar from '../../Layout/Navbar'
import React, { Fragment } from 'react'
import { Element, Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _projects from './projects.json'
import Project, { ProjectInterface } from './Project'

const Projects = () => {
  const project_jsons: ProjectInterface[] = _projects

  const projext_jsxs = project_jsons.map((project, index, projects) => {
    const lastIndex = index === projects.length - 1
    return (
      <Project
        project={project}
        projectIndex={index}
        lastIndex={lastIndex}
        key={`project${index}`}
      />
    )
  })

  return (
    <Fragment>
      <Navbar />
      <Element name="projects">
        <ColumnSection>
          <h1>Projects</h1>
          <Link
            to="project0"
            isDynamic={true}
            spy={true}
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon icon="angle-down" size="3x" />
          </Link>
        </ColumnSection>
      </Element>
      {projext_jsxs}
    </Fragment>
  )
}

export default Projects
