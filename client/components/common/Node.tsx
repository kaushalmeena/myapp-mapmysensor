import {
  Box, CardContent, CardMedia, Card,
} from '@material-ui/core';
import React from 'react';

const Node: React.FunctionComponent = (): JSX.Element => (
  <Card>
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <CardMedia image="/favicon.ico" title="Live from space album cover" />
      <CardContent>sdfsdf</CardContent>
    </Box>
  </Card>
);

export default Node;
