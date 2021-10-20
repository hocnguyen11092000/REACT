import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
ProductSkeleton.propTypes = {
  length: PropTypes.string,
};

function ProductSkeleton({ length = 8 }) {
  return (
    <Box>
      <Grid container>
        {
          Array.from(new Array(length)).map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Box padding={1}>
                <Skeleton variant="rect" width="100%" height={200}></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton width="60%"></Skeleton>
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

export default ProductSkeleton;