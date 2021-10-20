import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from './../../../../components/form-controls/inputFields/index';
import PasswordField from './../../../../components/form-controls/passwordField/index';
import { Avatar, Button, CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyle = makeStyles(theme => ({
  submit: {
    margin: '20px 0'
  }
}))
function RegisterForm(props) {
  const classes = useStyle()
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter your full name')
      .test('Should has at least two words', 'please enter at least two words', values => {
        return values.split(' ').length >= 2
      }),
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter an valid email address'),
    password: yup
      .string()
      .required('please enter your password')
      .min(6, 'Please enter at least 6 character'),
    password_confirmation: yup.string().required('Please retype your password').oneOf([yup.ref('password')], 'Password dose not match')
  });
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
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
      <InputField name="name" label="Full name" form={form}></InputField>
      <InputField name="email" label="Email" form={form}></InputField>
      <PasswordField name="password" label="Password" form={form}></PasswordField>
      <PasswordField name="password_confirmation" label="password_confirmation" form={form}></PasswordField>
      <Button disabled={isSubmitting} type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
        {
          isSubmitting && <CircularProgress></CircularProgress>
        }
        {
          isSubmitting || 'Create an Acount'
        }
      </Button>
    </form>
  );
}

export default RegisterForm;