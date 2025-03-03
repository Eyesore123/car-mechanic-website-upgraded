import React from 'react'
import { useState } from 'react';

export default function GalleryImages() {

    const [activePicture, setActivePicture] = useState(null);
    const [enlargedPicture, setEnlargedPicture] = useState(null);

    const images = [
        { id: 1, src: '../../public/turbosystems.jpg', alt: 'pakosarjat' },
        { id: 2, src: '../../public/pakosarjat.jpg', alt: 'pakosarjat' },
        { id: 3, src: '../../public/img15.jpg', alt: 'kolmonen' },
      ];

      const handlePictureClick = (picture) => {
        if (enlargedPicture === picture) {
          setEnlargedPicture(null);
        } else {
          setActivePicture(picture);
          setEnlargedPicture(picture);
        }
      }

      const handlePictureMouseLeave = (picture) => {
        setEnlargedPicture(null);
    };

    return (
        <div className="gallerypictures">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              width="225px"
              height="300px"
              alt={image.alt}
              className={activePicture === image.id ? 'active' : ''}
              style={{
                transform: enlargedPicture === image.id ? 'scale(2.5)' : 'scale(1)',
                transition: 'transform 0.25s ease',
                zIndex: enlargedPicture === image.id ? 1000 : '',
              }}
              onClick={() => handlePictureClick(image.id)}
              onMouseLeave={() => handlePictureMouseLeave(image.id)}
            />
          ))}
        </div>
      );
    }