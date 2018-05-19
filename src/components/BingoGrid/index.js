/*
 * Grid to contain BingoTiles.
*/
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';

import BingoTile from '../BingoTile';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  subheader: {
    width: '100%',
  },
});

const BingoGrid = ({ cols = 3, tiles, onTileClick, ...styleProps }) => (
  <GridList cols={cols}>
    {tiles.map(tile => (
      <BingoTile
        key={tile.id}
        {...tile}
        onClick={onTileClick}
        {...styleProps}
      />
    ))}
  </GridList>
);

export default withStyles(styles)(BingoGrid);
