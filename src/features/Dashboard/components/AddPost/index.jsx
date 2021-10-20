import React from 'react';
import { styled, createTheme, ThemeProvider, margin } from '@mui/system';
import { Avatar, Button, Typography, Snackbar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types'
import AddPostForm from './../AddPostForm/index';
import postApi from './../../../../api/postApi';


AddPost.propTypes = {
  closeDiaglog: PropTypes.func,
};
const useStyle = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
    width: '40%',
    margin: '0 auto'
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
function AddPost(props) {
  const classes = useStyle()
  const { enqueueSnackbar } = useSnackbar()
  const handleSubmit = async (values) => {
    try {
      await postApi.add(values)
        .then(() => {
          enqueueSnackbar("Add success", { variant: 'success' })
        })
    } catch (error) {
      enqueueSnackbar("Add Fail", { variant: 'error' })
    }
  }
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h3" variant="h5">Add New Post</Typography>
      <AddPostForm onSubmit={handleSubmit}></AddPostForm>
    </div>
  );
}

export default AddPost;