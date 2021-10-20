import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import InputField from './../../../../components/form-controls/inputFields/index';
import './style.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
AddPostForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyle = makeStyles(theme => ({
  submit: {
    margin: '20px 0'
  }
}))
function AddPostForm(props) {
  const [data, setData] = useState('')
  const classes = useStyle()
  const schema = yup.object().shape({
    TieuDe: yup
      .string()
      .required('Please enter ...'),
    idChuDe: yup
      .number()
      .integer('Please enter numberic'),
    TrichDan: yup
      .string()
      .required('Please enter ...'),
    // NoiDung: yup
    //   .string()
    //   .required('Please enter ...'),
    Anh: yup
      .string()
      .required('Please enter ...'),
    TrangThai: yup
      .number()
      .integer('Please enter numberic'),
    TacGia: yup
      .number()
      .integer('Please enter numberic'),
    NgayDang: yup
      .string()
      .required('Please enter ...'),
    LuotXem: yup
      .number()
      .integer('Please enter numberic'),
  });
  const form = useForm({
    defaultValues: {
      TieuDe: '',
      idChuDe: '',
      TrichDan: '',
      // NoiDung: '',
      Anh: '',
      TrangThai: '',
      TacGia: '',
      NgayDang: '',
      LuotXem: '',
    },
    resolver: yupResolver(schema)
  })
  const handleCKChange = (event, editor) => {
    const ck_data = editor.getData()
    setData(ck_data)
  }
  const handleSubmit = async (values) => {
    values.NoiDung = data
    console.log(values);
    const { onSubmit } = props
    if (onSubmit) {
      await onSubmit(values)
    }
  }
  const { isSubmitting } = form.formState
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} >
      <div className="add-form">
        <InputField className="add-input" name="TieuDe" label="TieuDe" form={form}></InputField>
        <InputField className="add-input" name="idChuDe" label="idChuDe" form={form}></InputField>
        <InputField className="add-input" name="TrichDan" label="TrichDan" form={form}></InputField>
        <CKEditor className="ck-editer"
          editor={ClassicEditor}
          // data="<p>Hello from CKEditor 5!</p>"
          // onReady={editor => {
          //   // You can store the "editor" and use when it is needed.
          //   console.log('Editor is ready to use!', editor);
          // }}
          onChange={handleCKChange}
        // onBlur={(event, editor) => {
        //   console.log('Blur.', editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log('Focus.', editor);
        // }}
        />
        <InputField className="add-input" name="Anh" label="Anh" form={form}></InputField>
        <InputField className="add-input" name="TrangThai" label="TrangThai" form={form}></InputField>
        <InputField className="add-input" name="TacGia" label="TacGia" form={form}></InputField>
        <InputField className="add-input" name="NgayDang" label="NgayDang" form={form}></InputField>
        <InputField className="add-input" name="LuotXem" label="LuotXem" form={form}></InputField>
      </div>
      <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
        Add
      </Button>
    </form>
  );
}

export default AddPostForm;