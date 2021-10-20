import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../components/form-controls/inputFields';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string()
    .required('Nhập cái gì đó đê bạn ê')
    .min(5, 'Viết thêm đê bạn ơi')
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema)
  })
  const handleSubmit = (values) => {
    const {onSubmit} = props
    if(onSubmit){
     onSubmit(values)
    }
  }
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form}></InputField>
    </form>
  );
}

export default TodoForm;