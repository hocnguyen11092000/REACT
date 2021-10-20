import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
  onchange: PropTypes.func,
  current: PropTypes.string,
};

function ProductSort({ onchange = {}, current = '' }) {
  const [value, setValue] = React.useState(current);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onchange) {
      onchange(newValue)
    }
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab value="salePrice:ASC" label="Giá thấp tới cao" />
      <Tab value="salePrice:DESC" label="Giá cao xuống thấp" />
    </Tabs>
  );
}

export default ProductSort;