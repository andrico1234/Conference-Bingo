import React from 'react';
import Link from 'gatsby-link';
import '@material-ui/core/CssBaseline';

import Bingo from '../components/BingoGrid';

const getMockTiles = () => {
  let mocks = [];
  for (let i = 0; i < 12; i++) {
    mocks.push({ id: i, text: `Tile ${i}`, active: false });
  }
  return mocks;
};

const IndexPage = ({
  data: {
    contentfulAuthors: { author },
  },
}) => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>We are {`${author[0]} and ${author[1]}`}</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Bingo tileData={getMockTiles()} />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query rootQuery {
    contentfulAuthors {
      author
    }
  }
`;
