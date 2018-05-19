/*
 * Bingo tile
 * It contains text 
 * Two states, inactive or active.
*/
import React from 'react';
import { GridListTile } from '@material-ui/core';

export default ({ active, text, ...styleProps }) => (
  <GridListTile active={active} {...styleProps}>
    {text}
  </GridListTile>
);
