import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { Box } from '@mui/system';
import New from './../New/index';
ListNews.propTypes = {
  news: PropTypes.array,
};

function ListNews({ news = [] }) {
  return (
    <Box>
      <ul>
        {
          news.map(item => <New key={item.id} item={item}></New>)
        }
      </ul>
    </Box>
  );
}

export default ListNews;