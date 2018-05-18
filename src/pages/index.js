import React from 'react'
import Link from 'gatsby-link'
import CssBaseline from '@material-ui/core/CssBaseline';


import Bingo from '../components/BingoGrid'

const getMockTiles = () => {
  let mocks = []
  for (let i = 0; i < 12; i++) {
    mocks.push({ id: i, text: `Tile ${i}`, active: false })
  }
  return mocks;
}

const IndexPage = () => (
  <div>
    <Bingo tiles={getMockTiles()} />
  </div>
)

export default IndexPage
