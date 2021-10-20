import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton } from '@mui/material';

Skelaton.propTypes = {
  length: PropTypes.number,
};

function Skelaton({ length = 5 }) {
  return (
    <Box>
      {
        Array.from(new Array(length)).map((item, index) => (
          <Box mb={4}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="text" />
            <Skeleton variant="rectangular" width={880} height={100} />
          </Box>
        ))
      }
    </Box>
  );
}

export default Skelaton;