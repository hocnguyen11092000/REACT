import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import Product from './Product';
import ProductSkeleton from './ProductSkeleton';
ProductList.propTypes = {
  data: PropTypes.func,
};

function ProductList({ data = [] }) {
  return (
    <Box>
      <Grid container>
        {
          data.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Box padding={1}>
                <Product product={product}></Product>
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

export default ProductList;