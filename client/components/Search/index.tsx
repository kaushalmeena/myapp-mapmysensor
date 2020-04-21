import { Container, Box } from '@material-ui/core';
import React from 'react';
import Table from '../common/Table';

const Search: React.FunctionComponent = (): JSX.Element => (
  <Container>
    <Box bgcolor="background.default" borderRadius={2} boxShadow={1} my={2} p={2}>
      <Table />
    </Box>
  </Container>
);

export default Search;
