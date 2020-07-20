import ColumnSection from '../../Layout/ColumnSection'
import LongSection from '../../Layout/LongSection'
import React, { Fragment } from 'react'
import { Element, Link } from 'react-scroll'
import Navbar from '../../Layout/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Resume = () => {
  return (
    <Fragment>
      <Navbar />
      <Element name="section1">
        <ColumnSection>
          <h1>Resume</h1>
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
        <LongSection>
          <h2>Education</h2>
          <div
            style={{
              textAlign: 'left'
            }}
          >
            <SyntaxHighlighter language={'json'} style={codeStyle}>
              {`{
  "University": "University of Colorado at Boulder",
  "StartYear": 2015,
  "GraduationYear": 2019,
  "Major": {
      "Name": "Computer Science",
      "Degree": "Bachelors of Science",
      "Course Highlights": [
        "Data Structures",
        "Intro to Data Science",
        "Algorithms",
        "Machine Learning",
        "Entrepreneurial Projects",
        "Object Oriented Analysis and Design",
        "Intro to Artifical Intelligence"
      ]
  },
  "Minor": {
      "Name": "Mathematics",
      "StartYear": 2015,
      "GraduationYear": 2019,
      "Course Highlights": [
        "Calculus 1 for Engineers",
        "Calculus 2",
        "The Mathematics of Coding and Cryptography",
        "Calculus 3",
      ]
  }
}`}
            </SyntaxHighlighter>
          </div>
          <Link
            to="section3"
            isDynamic={true}
            spy={true}
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon icon="angle-down" size="3x" />
          </Link>
        </LongSection>
      </Element>
      <Element name="section3">
        <LongSection>
          <h2>Skills and Abilities</h2>
          <div
            style={{
              textAlign: 'left'
            }}
          >
            <SyntaxHighlighter language={'json'} style={codeStyle}>
              {`{
  "Environments and Languages": {
    "Languages": [
      "Python",
      "Java",
      "Typescript",
      "C-Like languages",
      "Ruby"
    ],
    "Tools": [
      "git",
      "bash/zsh",
      "no/sql",
      "Windows/UNIX",
      "AWS",
      "Azure"
    ],
    "Hardware": [
      "RaspberryPi",
      "Arduino"
    ]
  },
  "Leadership": [
    "2017 Project lead for Lockheed Cross Intern (Nationwide) Project",
    "2018 Lead Course Assistant for Data Science with Probability and Statistics",  
    "2018-19 President of Computer Science Undergraduate Advisory Council",
    "2020 Intern Mentor for AWS EC2 Security Detection"
  ]
}`}
            </SyntaxHighlighter>
          </div>
          <Link
            to="section4"
            isDynamic={true}
            spy={true}
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon icon="angle-down" size="3x" />
          </Link>
        </LongSection>
      </Element>
      <Element name="section4">
        <LongSection>
          <h2>Experience</h2>
          <div
            style={{
              textAlign: 'left'
            }}
          >
            <SyntaxHighlighter language={'json'} style={codeStyle}>
              {`{
  "WorkHistory": [
    {
      "Company": "Amazon",
      "Position": "Software Development Engineer Intern",
      "Date": "Summer 2018"
    },
    {
      "Company": "University of Colorado at Boulder",
      "Position": "Programming Projects Course Assistant",
      "Date": "Fall 2018"
    },
    {
      "Company": "University of Colorado at Boulder",
      "Position": "Data Collection Engineer",
      "Data": "Winter 2018 - Current"
    },
    {
      "Company": "Amazon",
      "Position": "Software Development Engineer",
      "Date": "Summer 2019 - Current"
    }
  ]
}`}
            </SyntaxHighlighter>
          </div>
        </LongSection>
      </Element>
    </Fragment>
  )
}

export default Resume
