/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Container,
  Typography,
  IconButton,
  Icon,
  Fade,
  CircularProgress,
  TextField,
  InputAdornment,
  Grid
} from '@material-ui/core';
import React, { Component } from 'react';
import { Autocomplete } from '@material-ui/lab';

const data = [
  {
    id: 's001',
    name: 'Sensor1',
    status: 'Normal',
    type: 'Thermometer'
  },
  {
    id: 's002',
    name: 'Sensor2',
    status: 'Normal',
    type: 'Thermometer'
  },
  {
    id: 's003',
    name: 'Sensor3',
    status: 'Normal',
    type: 'Thermometer'
  },
  {
    id: 's004',
    name: 'Sensor4',
    status: 'Normal',
    type: 'Thermometer'
  }
];

type TestProps = {};

type TestState = {
  sensor: any;
  open: boolean;
  loading: boolean;
  showSearch: boolean;
};

class Test extends Component<TestProps, TestState> {
  constructor(props: TestProps) {
    super(props);
    this.state = {
      sensor: null,
      open: false,
      loading: false,
      showSearch: true
    };
  }

  handleToogleChange = (): void => {
    this.setState((prevState) => ({
      showSearch: !prevState.showSearch
    }));
  };

  handleOpenValue = (value: boolean) => (): void => {
    this.setState({
      open: value
    });
  };

  handleSelectChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    value: any
  ): void => {
    this.setState({
      sensor: value
    });
  };

  render(): JSX.Element {
    const {
      sensor,
      open,
      loading,
      showSearch
    } = this.state;

    return (
      <Container>
        <Box
          bgcolor="background.default"
          borderRadius={2}
          boxShadow={1}
          my={2}
          p={2}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pb={1}
          >
            <Typography variant="h6" component="span" color="textSecondary">
              Sensors
            </Typography>
            <IconButton
              aria-label="Show search"
              color={showSearch ? 'primary' : 'inherit'}
              title="Show search"
              onClick={this.handleToogleChange}
            >
              <Icon>search</Icon>
            </IconButton>
          </Box>
          <Fade in={showSearch} mountOnEnter unmountOnExit>
            <Box py={0.5}>
              <Autocomplete
                size="small"
                multiple={false}
                value={sensor}
                open={open}
                loading={loading}
                options={data}
                onOpen={this.handleOpenValue(true)}
                onClose={this.handleOpenValue(false)}
                onChange={this.handleSelectChange}
                getOptionSelected={(option, value): boolean => option.id === value.id}
                getOptionLabel={(option): string => option.name || ''}
                renderInput={(params): JSX.Element => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Search"
                    margin="none"
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          {loading && <CircularProgress color="primary" size={20} />}
                          {params.InputProps.endAdornment}
                        </>
                      )
                    }}
                  />
                )}
              />
            </Box>
          </Fade>
          <Box py={2}>
            {sensor && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>
                    {sensor.name}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    );
  }
}

export default Test;
