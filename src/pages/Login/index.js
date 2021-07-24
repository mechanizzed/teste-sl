import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik';

import { signIn } from '../../store/User/user.actions';

import { Main } from './styles';

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(signIn(values));
    },
  });

  return (
    <Main>
      <Box margin="auto" boxShadow={1} width="50%" p={3}>
        <img
          src="https://www.santoslab.com/wp-content/uploads/2020/09/santoslab_logo-black.png"
          alt="SantosLab"
        />

        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Digite seu e-mail"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextField
            label="Digite sua senha"
            type="password"
            id="password"
            name="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <Button
            className="btn-send"
            type="submit"
            fullWidth
            variant="contained"
          >
            Entrar
          </Button>
        </form>
      </Box>
    </Main>
  );
};

export default Login;
