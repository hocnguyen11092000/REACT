import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Grid, Skeleton, Typography } from '@mui/material';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from './../../../constants/index.js';
Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  const style = {
    'objectFit': 'cover'
  }
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.formats.thumbnail.url}`
    : `${THUMBNAIL_PLACEHOLDER}`
  return (
    <Box minHeight="260px">
      {/* <Skeleton variant="rect" width="100%" height={110}></Skeleton> */}
      <Box padding={1} minHeight="200px">
        <img
          src={thumbnailUrl}
          alt={product.name}
          width="100%"
          style={style}
        />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? `${-product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Product;