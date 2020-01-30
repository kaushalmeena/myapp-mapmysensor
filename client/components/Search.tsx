import {
  Box, Container, Grid, Icon, TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import Node from './common/Node';

import data from './mapmysensor.json';

const columns = [
  "Name", "Category", "Type", "Action"
];

const tableData = Object.values(data.nodes);

const Search: React.FunctionComponent = (): JSX.Element => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <Box my={2}>

        <Box
          bgcolor="background.paper"
          borderRadius={2}
          boxShadow={1}
          p={2}
        >
          <MUIDataTable
            title={"Employee List"}
            data={tableData}
            columns={columns}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Search;
