import {
  Box, Card, CardContent, CardMedia
} from '@material-ui/core';
import React from 'react';

type NodeProps = {
  name: string;
  category: string;
  type: string;
};

const Node: React.FunctionComponent<NodeProps> = (props: NodeProps): JSX.Element => (
  <Box my={1}>
    <Card>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <CardMedia image="/favicon.ico" title="Live from space album cover" />
        <CardContent>{props.name}</CardContent>
      </Box>
    </Card>
  </Box>
);

export default Node;
