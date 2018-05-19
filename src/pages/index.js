import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data: { contentfulAuthors: { author } } }) => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>We are {`${author[0]} and ${author[1]}`}</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query rootQuery {
    contentfulAuthors {
      author
    }
  }
`;