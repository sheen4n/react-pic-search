import React, { useRef, useEffect, useState } from 'react';

const ImageCard = ({ description, url }) => {
  const imageRef = useRef(null);
  const [span, setSpan] = useState(0);

  useEffect(() => {
    const { current } = imageRef;

    const setSpans = () => {
      const height = current.clientHeight;

      setSpan(Math.ceil(height / 10));
    };

    current.addEventListener('load', setSpans);

    return () => {
      current.removeEventListener('load', setSpans);
    };
  });

  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img src={url} alt={description} ref={imageRef} />
    </div>
  );
};

export default ImageCard;
