import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from './../../../../api/categoryApi';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange = {} }) {
  const [categoryList, setCategoryList] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const respone = await categoryApi.getAll()
        console.log(respone);

        setCategoryList(
          respone.map((item) => ({
            id: item.id,
            name: item.name,
          }))
        )
      } catch (error) {
        console.log('Fail to get Category', error);
      }
    })()
  }, [])

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id)
    }
  }
  return (
    <Box>
      <Typography>Danh mục sản phẩm: </Typography>
      <ul>
        {
          categoryList.map((category) =>
            <li
              key={category.id}
              onClick={() => { handleCategoryClick(category) }}
            >
              {category.name}
            </li>)
        }
      </ul>
    </Box>
  );
}

export default FilterByCategory;