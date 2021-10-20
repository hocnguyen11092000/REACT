import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import postApi from './../../../../api/postApi';
import Skelaton from 'features/News/components/Skelaton';
import './style.scss'
import ListNews from 'features/News/components/listNews';
ListPage.propTypes = {

};

function ListPage(props) {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const respone = await postApi.getAll()

        setNews(respone.data)
        setLoading(false)
      } catch (error) {
        console.log('Fail to fetch Post', error)
      }
    })()
  }, [])
  return (
    <div className="wrapper">
      {loading ? <Skelaton length={5}></Skelaton> : <ListNews news={news}></ListNews>}
    </div>
  );
}

export default ListPage;