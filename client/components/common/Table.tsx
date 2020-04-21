import {
  Box,
  Fade,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  ListSubheader,
  MenuItem,
  TextField,
  Typography
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { Component } from 'react';
import CATEGORIES from '../../constants/categories';
import STATUSES from '../../constants/statuses';
import TYPES from '../../constants/types';
import Node from './Node';

type TableProps = {
  columns?: {
    name: string;
  }[];
};

type TableState = {
  search: string;
  category: string;
  type: string;
  status: string;
  page: number;
  rowsPerPage: number;
  showSearch: boolean;
  showFilters: boolean;
};

enum SelectEnum {
  category = 'category',
  type = 'type',
  status = 'status'
}

enum ToogleEnum {
  showSearch = 'showSearch',
  showFilters = 'showFilters'
}

class Table extends Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      search: '',
      category: '',
      type: '',
      status: '',
      page: 0,
      rowsPerPage: 5,
      showSearch: true,
      showFilters: false
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      search: event.target.value
    });
  };

  handleSelectChange = (name: SelectEnum) => (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const selectValue = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [name]: selectValue
    }));
  };

  handleToogleChange = (name: ToogleEnum) => (): void => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  handlePageChange = (_event: unknown, newPage: number): void => {
    this.setState({
      page: newPage
    });
  };

  render(): JSX.Element {
    const {
      search,
      category,
      type,
      status,
      showFilters,
      showSearch
    } = this.state;

    return (
      <>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pb={1}
        >
          <Typography variant="h6" component="span" color="textSecondary">
            Nodes
          </Typography>
          <Box display="flex" flexDirection="row">
            <IconButton
              aria-label="Show search"
              color={showSearch ? 'primary' : 'inherit'}
              title="Show search"
              onClick={this.handleToogleChange(ToogleEnum.showSearch)}
            >
              <Icon>search</Icon>
            </IconButton>
            <IconButton
              aria-label="Show filters"
              color={showFilters ? 'primary' : 'inherit'}
              title="Show filters"
              onClick={this.handleToogleChange(ToogleEnum.showFilters)}
            >
              <Icon>filter_list</Icon>
            </IconButton>
          </Box>
        </Box>
        <Fade in={showSearch} mountOnEnter unmountOnExit>
          <Box py={0.5}>
            <TextField
              fullWidth
              size="small"
              label="Search"
              type="search"
              margin="none"
              variant="outlined"
              value={search}
              onChange={this.handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon color="action">search</Icon>
                  </InputAdornment>
                )
              }}
            />
          </Box>
        </Fade>
        <Fade in={showFilters} mountOnEnter unmountOnExit>
          <Box py={0.5}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  label="Category"
                  margin="none"
                  variant="outlined"
                  value={category}
                  onChange={this.handleSelectChange(SelectEnum.category)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon color="action">filter_list</Icon>
                      </InputAdornment>
                    )
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {CATEGORIES.map((item: string) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  label="Type"
                  margin="none"
                  variant="outlined"
                  value={type}
                  onChange={this.handleSelectChange(SelectEnum.type)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon color="action">filter_list</Icon>
                      </InputAdornment>
                    )
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {category === ''
                    ? CATEGORIES.map((categoryItem) => [
                      <ListSubheader key={`type-subheader-${categoryItem}`}>
                        {categoryItem}
                      </ListSubheader>,
                      TYPES[categoryItem].map((item: string) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))
                    ])
                    : TYPES[category].map((item: string) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  label="Status"
                  margin="none"
                  variant="outlined"
                  value={status}
                  onChange={this.handleSelectChange(SelectEnum.status)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon color="action">filter_list</Icon>
                      </InputAdornment>
                    )
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {category === ''
                    ? CATEGORIES.map((categoryItem) => [
                      <ListSubheader key={`status-subheader-${categoryItem}`}>
                        {categoryItem}
                      </ListSubheader>,
                      STATUSES[categoryItem].map((item: string) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))
                    ])
                    : STATUSES[category].map((item: string) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </Fade>
        <Box py={1}>
          {[].map((row) => (
            <Node
              key={row.id}
              name={row.name}
              category={row.category}
              type={row.type}
            />
          ))}
        </Box>
        <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }}>
          <Pagination onChange={this.handlePageChange} />
        </Box>
      </>
    );
  }
}

export default Table;
