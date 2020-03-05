import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imageList = images.map(({ id, description, urls: { regular } }) => {
    return <ImageCard key={id} url={regular} description={description} />;
  });

  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
