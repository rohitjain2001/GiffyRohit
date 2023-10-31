import React from 'react';
import styles from "./gallery.module.css";
import { Carousel } from 'react-responsive-carousel'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Gallery = ({ gifs }) => {
  const galleryStyles = {
    padding: '50px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr)',
    gap: '16px',

  };

  const gifCardStyles = {
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const imageStyles = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
  };

  return (
    
      <div style={galleryStyles}>
        <Carousel 
        className='crls'
        height={300}
        width={500}
        interval={500}
        autoFocus 
        infiniteLoop 
        centerMode
        showArrows
        useKeyboardArrows
        stopOnHover
        >
        {gifs.map((gif) => (
        
          <div key={gif.id} style={gifCardStyles} className="gif-card">
          <img src={gif.url} alt={gif.title} style={imageStyles} />
        </div>
        
      ))}
        </Carousel>
      
    </div>
    
  );
};

export default Gallery;
