import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@mui/material';
import './style.scss'
New.propTypes = {
  item: PropTypes.object,
};

function New(item = {}) {
  console.log(item.item);
  return (
    <Box mb={2}>
      <Paper className="paper" elevation={0} >
        <img className="image" src={item.item.Anh} alt="" />
        <Typography fontWeight="bold"> {item.item.TieuDe}</Typography>
        <p>{item.item.NoiDung}</p>
      </Paper>
    </Box>
  );
}

export default New;