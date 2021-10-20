import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Pagination, Paper, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import productApi from './../../../api/productApi';
import { useEffect } from 'react'
import { useState } from 'react';
import ProductSkeleton from '../components/ProductSkeleton';
import Box from '@mui/material/Box';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
import ProductFilter from './../components/ProductFilter';

ListPage.propTypes = {

};
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  left: {
    width: '250px'
  },
  right: {
    flex: '1 1 0'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    paddingBottom: '10px',
  }
}))
function ListPage(props) {
  const [productList, setProductList] = useState([])
  const [pagination, setPagination] = useState({
    limit: 8,
    total: 10,
    page: 1,
  })
  const [loading, setLoading] = useState(true)
  const [filters, setFilter] = useState({
    _page: 1,
    _limit: 8,
    _sort: 'salePrice:ASC'
  })

  const classes = useStyles()
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const { data, pagination } = await productApi.getAll(filters)
        setProductList(data)
        setPagination(pagination)
        console.log({ data, pagination });
      } catch (error) {
        console.log('Failed to fetch Product List', error);
      }
      setLoading(false)
    })()
  }, [filters])

  const handlePageChange = (e, page) => {
    setFilter(pre => ({
      ...pre,
      _page: page
    }))
  }

  const handleSortChange = (newSortValue) => {
    setFilter(pre => ({
      ...pre,
      _sort: newSortValue,
    }))
  }
  const handleFilterChange = (newFilter) => {
    setFilter(pre => ({
      ...pre,
      ...newFilter
    }))
  }
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <Box>
                <ProductFilter filters={filters} onchange={handleFilterChange}></ProductFilter>
              </Box>
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort current={filters._sort} onchange={handleSortChange}></ProductSort>
              {loading ? <ProductSkeleton></ProductSkeleton> : <ProductList data={productList}></ProductList>}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                >
                </Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;