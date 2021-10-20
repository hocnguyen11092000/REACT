import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
  
};

function AlbumFeature(props) {
  const albumList = [
    {
      'id': 1,
      'title': 'Hãy trao cho anh',
      'thumbnail': 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/b/2/4/fb24f30cf3d268bff56ff3a0d22677c5.jpg'
    },
    {
      'id': 2,
      'title': 'Em của anh đừng của ai',
      'thumbnail': 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/b/2/4/fb24f30cf3d268bff56ff3a0d22677c5.jpg'
    },
    {
      'id': 3,
      'title': 'Nhạc hàn hôm nay nghe gì',
      'thumbnail': 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/b/2/4/fb24f30cf3d268bff56ff3a0d22677c5.jpg'
    }
  ]
  return (
    <div>
      <AlbumList albumList={albumList}></AlbumList>
    </div>
  );
}

export default AlbumFeature;