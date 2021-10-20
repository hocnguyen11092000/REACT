import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
Album.propTypes = {
  
};

function Album({album}) {
  return (
    <>
      <div className="img">
       <img src={album.thumbnail} alt="" />
      </div>
      <div className="title">
        {album.title}
      </div>
    </>
  );
}

export default Album;