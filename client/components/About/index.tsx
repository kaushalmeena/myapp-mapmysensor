import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

const About: React.FunctionComponent = (): JSX.Element => (
  <Container>
    <Box bgcolor="grey[100]" borderRadius={2} boxShadow={1} my={2} p={2}>
      <Typography variant="h4">mapmysensor</Typography>
      <Typography color="textSecondary" variant="subtitle1">
        v4.1
      </Typography>
      <Typography variant="body1">
        Web application that displays sensors, places and locations on maps
        and calculates optimal route from centre to sensors in case of
        emergency.
      </Typography>
    </Box>
  </Container>
);

export default About;
