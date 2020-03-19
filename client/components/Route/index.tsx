import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

const Route: React.FunctionComponent = (): JSX.Element => (
  <Container>
    <Box bgcolor="grey[100]" borderRadius={2} boxShadow={1} my={2} p={2}>
      hello
    </Box>
  </Container>
);

export default Route;
