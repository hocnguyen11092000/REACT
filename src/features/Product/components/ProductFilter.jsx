import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';

ProductFilter.propTypes = {
  filters: PropTypes.object,
  onchange: PropTypes.func,
};

function ProductFilter({ filters = {}, onchange = {} }) {
  const handleCategoryChange = (newCategoryId) => {
    const newfilter = {
      ...filters,
      'category.id': newCategoryId
    }
    if (onchange) {
      onchange(newfilter)
    }
  }
  return (
    <FilterByCategory onChange={handleCategoryChange}></FilterByCategory>
  );
}

export default ProductFilter;