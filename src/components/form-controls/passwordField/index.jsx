import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react/cjs/react.development';
import { ErrorOutline, VisibilityOff } from '@material-ui/icons';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disable } = props;
  const { control, formState } = form;
  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = () => {
    setShowPassword(x => !x)
  }
  const { errors } = formState
  const hasError = errors[name]
  return (
    <FormControl error={!!hasError} margin="normal" fullWidth variant="outlined">
      <InputLabel htmlFor={name}>{name}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
          <div>
            <OutlinedInput
              margin="dense"
              variant="outlined"
              name={name}
              fullWidth
              label={label}
              error={invalid}
              id={name}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              disabled={disable}
            />
            <FormHelperText error={!!hasError}>{error?.message}</FormHelperText>
          </div>
        )}
      ></Controller>

    </FormControl >
  );
}

export default PasswordField;
