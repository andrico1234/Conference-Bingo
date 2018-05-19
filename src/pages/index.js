import React from 'react';
import Link from 'gatsby-link';
import '@material-ui/core/CssBaseline';

import Bingo from '../components/BingoGrid';

const getTileData = ({ edges }) => (
  edges.map(item => {
    return {
      id: item.node.id,
      active: item.node.isActive,
      text: item.node.itemName,
    }
  })
);

const IndexPage = ({
   data: {
     contentfulAuthors: { author },
     allContentfulBingoItem,
   },

 }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>We are {`${author[0]} and ${author[1]}`}</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <Bingo tiles={getTileData(allContentfulBingoItem)}/>
    </div>
  </div>
);

export default IndexPage;

export const query = graphql`
  query rootQuery {
    contentfulAuthors {
      author
    }

    allContentfulBingoItem {
      edges {
        node {
          id
          isActive
          itemName
        }
      }
    }
  }
`;
