import React from 'react'
import { useState } from 'react';

export default function GalleryImages() {

    const [activePicture, setActivePicture] = useState(null);
    const [enlargedPicture, setEnlargedPicture] = useState(null);

    const images = [
        { id: 1, src: '../../public/turbosystems.jpg', alt: 'turbosystems' },
        { id: 2, src: '../../public/pakosarjat.jpg', alt: 'pakosarjat' },
        { id: 3, src: '../../public/img15.jpg', alt: 'k3' },
        { id: 4, src: '../../public/img1.jpg', alt:'1' },
        { id: 5, src: '../../public/img2.jpg', alt:'2' },

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
        <div className="grid gap-4 grid-cols-auto md:grid-cols-2 lg:grid-cols-3 lg:ml-60 lg:mr-60 justify-items-center justify-content-center">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              width="225px"
              height="300px"
              alt={image.alt}
              className={`${activePicture === image.id ? 'active' : ''}`}
              style={{
                transform: enlargedPicture === image.id ? 'scale(2.5)' : 'scale(1)',
                transition: 'transform 0.25s ease',
                zIndex: enlargedPicture === image.id ? 1000 : '',
                opacity: 1,
                boxShadow: enlargedPicture === image.id ? 'none' : '0px 0px 10px rgba(0, 0, 0, 0.2)',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0px 0px 10px rgba(0, 255, 255, 0.9)';
            }}
            onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.4)';
            }}
              onClick={() => handlePictureClick(image.id)}
              onMouseLeave={() => handlePictureMouseLeave(image.id)}
            />
          ))}
        </div>
      );
    }