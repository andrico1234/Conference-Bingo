/*
 * Grid to contain BingoTiles.
*/
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';

import BingoTile from '../BingoTile';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
});

const BingoGrid = ({ cols = 3, tileData, onTileClick, classes }) => (
  <div className={classes.root}>
    <GridList cellHeight={155} cols={3}>
      {tileData.map(tile => (
        <GridListTile
          key={tile.id}
          cols={tile.cols || 1}
        >
          <BingoTile {...tile} onClick={onTileClick} />
        </GridListTile>
      ))}
    </GridList>
  </div>
);

export default withStyles(styles)(BingoGrid);
