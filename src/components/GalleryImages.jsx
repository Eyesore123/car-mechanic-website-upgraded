import React from 'react'
import { useState } from 'react';

export default function GalleryImages() {

    const [activePicture, setActivePicture] = useState(null);
    const [enlargedPicture, setEnlargedPicture] = useState(null);

    const images = [
        { id: 1, src: '../../public/turbosystems.jpg', alt: 'turbosystems' },
        { id: 2, src: '../../public/pakosarjat.jpg', alt: 'pakosarjat' },
        { id: 3, src: '../../public/img15.jpg', alt: 'jotain' },
        { id: 4, src: '../../public/img1.jpg', alt:'1' },
        { id: 5, src: '../../public/img2.jpg', alt:'2' },
        { id: 6, src: '../../public/img3.jpg', alt:'3' },
        { id: 7, src: '../../public/img15.jpg', alt:'4' },
        { id: 8, src: '../../public/img5.jpg', alt:'5' },
        { id: 9, src: '../../public/img6.jpg', alt:'6' },
        { id: 10, src: '../../public/img7.jpg', alt:'7' },
        { id: 11, src: '../../public/img8.jpg', alt:'8' },
        { id: 12, src: '../../public/img9.jpg', alt:'9' },
        { id: 13, src: '../../public/img10.jpg', alt:'10' },
        { id: 14, src: '../../public/img11.jpg', alt:'11' },
        { id: 15, src: '../../public/img12.jpg', alt:'12' },
        { id: 16, src: '../../public/img13.jpg', alt:'13' },
        { id: 17, src: '../../public/img14.jpg', alt:'14' },
        { id: 18, src: '../../public/img4.jpg', alt:'15' },
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
                cursor: 'pointer',
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