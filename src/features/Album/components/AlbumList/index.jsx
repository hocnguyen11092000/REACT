import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss'
AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
  return (
    <ul className="list">
      {
        albumList.map((album) => (
          <li>
            <Album kê={album.id} album={album}></Album>
          </li>
        ))
      }
    </ul>
  );
}

export default AlbumList;