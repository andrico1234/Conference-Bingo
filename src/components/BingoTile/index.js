import React from 'react';
import { Button } from '@material-ui/core';
import { lightBlue, black } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  button: {
    color: black,
    backgroundColor: lightBlue[100],
    '&:hover': {
      backgroundColor: lightBlue[300],
    },
    height: '100%',
    width: '100%',
  },
};

const BingoTile = ({ active, text, classes }) => (
  <div className={classes.root}>
    <Button className={classes.button}>{text}</Button>
  </div>
);

export default withStyles(styles)(BingoTile);
