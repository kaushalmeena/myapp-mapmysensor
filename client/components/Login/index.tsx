import {
  Box,
  Container,
  Icon,
  InputAdornment,
  TextField,
  Typography,
  Button,
  CircularProgress
} from '@material-ui/core';
import React, { Component } from 'react';

type LoginProps = {};

type LoginState = {
  email: string;
  password: string;
  loading: boolean;
};

enum InputEnum {
  email = 'email',
  password = 'password'
}

class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    };
  }

  handleInputChange = (name: InputEnum) => (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputValue = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [name]: inputValue
    }));
  };

  handleClick = (): void => {
    this.setState({
      loading: true
    });
  };

  render(): JSX.Element {
    const {
      email,
      password,
      loading
    } = this.state;

    return (
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Container maxWidth="xs">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            bgcolor="background.default"
            borderRadius={2}
            boxShadow={1}
            p={4}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <Typography variant="h5">
                mapmy
              </Typography>
              <Typography variant="h5" color="primary">
                sensor
              </Typography>
            </Box>
            <Box py={3}>
              <TextField
                fullWidth
                required
                size="small"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={this.handleInputChange(InputEnum.email)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon color="action">mail</Icon>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                fullWidth
                required
                size="small"
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={this.handleInputChange(InputEnum.password)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon color="action">lock</Icon>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={this.handleClick}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  color="inherit"
                />
              ) : 'Login'}
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default Login;
