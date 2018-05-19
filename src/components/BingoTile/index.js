import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    alignItems: 'center',
    backgroundColor: 'aliceblue',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
};

const BingoTile = ({ active, text, classes }) => (
  <div className={classes.root}>{text}</div>
);

export default withStyles(styles)(BingoTile);