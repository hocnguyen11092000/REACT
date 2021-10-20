import React from 'react';
import { styled, createTheme, ThemeProvider, margin } from '@mui/system';
import RegisterForm from './../RegisterForm/index';
import { Avatar, Button, Typography, Snackbar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { register } from './../../userSlide';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types'

Register.propTypes = {
  closeDiaglog: PropTypes.func,
};
const useStyle = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: '0 auto',
  },
  title: {
    margin: '15px 0 15px 0',
    textAlign: 'center'
  },
  submit: {
    margin: '15px 0 15px 0',
  },
}))
function Register(props) {
  const classes = useStyle()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const handleSubmit = async (values) => {
    console.log(values);
    try {

      const action = register(values)
      const resultAction = await dispatch(action)
      const user = unwrapResult(resultAction)
      console.log('New user: ', user)
      //close diaglog
      const { closeDiaglog } = props
      if (closeDiaglog) {
        closeDiaglog()
      }
      enqueueSnackbar('Register successfully', { variant: 'success' })
    } catch (error) {
      console.log('Fail to register', error)
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">Create an account</Typography>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
    </div>
  );
}

export default Register;