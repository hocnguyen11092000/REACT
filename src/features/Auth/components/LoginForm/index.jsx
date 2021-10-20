import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from '../../../../components/form-controls/inputFields/index';
import PasswordField from '../../../../components/form-controls/passwordField/index';
import { Avatar, Button, CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyle = makeStyles(theme => ({
  submit: {
    margin: '20px 0'
  }
}))
function LoginForm(props) {
  const classes = useStyle()
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter an valid email address'),
    password: yup
      .string()
      .required('please enter your password')
  });
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema)
  })
  const handleSubmit = async (values) => {
    const { onSubmit } = props
    if (onSubmit) {
      await onSubmit(values)
    }
  }
  const { isSubmitting } = form.formState
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="email" label="Email" form={form}></InputField>
      <PasswordField name="password" label="Password" form={form}></PasswordField>
      <Button disabled={isSubmitting} type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
        {
          isSubmitting && <CircularProgress></CircularProgress>
        }
        {
          isSubmitting || 'Login'
        }
      </Button>
    </form>
  );
}

export default LoginForm;