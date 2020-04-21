import {
  Box,
  Container,
  Divider,
  Typography
} from '@material-ui/core';
import React from 'react';

const About: React.FunctionComponent = (): JSX.Element => (
  <Container>
    <Box bgcolor="background.default" borderRadius={2} boxShadow={1} my={2} p={2}>
      <Typography variant="h4" component="h1">
        mapmysensor
      </Typography>
      <Box my={1}>
        <Divider />
      </Box>
      <Typography variant="body1" paragraph>
        Web application that displays sensors, places and locations on maps and
        calculates optimal route from centre to sensors in case of emergency.
      </Typography>
    </Box>
  </Container>
);

export default About;
