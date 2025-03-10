import React from 'react'
import { useState } from 'react';

export default function GalleryImages() {

    const [activePicture, setActivePicture] = useState(null);
    const [enlargedPicture, setEnlargedPicture] = useState(null);

    const images = [
        { id: 1, src: '/images/turbosystems.jpg', alt: 'turbosystems' },
        { id: 2, src: '/images/pakosarjat.jpg', alt: 'pakosarjat' },
        { id: 3, src: '/images/img15.jpg', alt: 'jotain' },
        { id: 4, src: '/images/img1.jpg', alt:'1' },
        { id: 5, src: '/images/img2.jpg', alt:'2' },
        { id: 6, src: '/images/img3.jpg', alt:'3' },
        { id: 7, src: '/images/img15.jpg', alt:'4' },
        { id: 8, src: '/images/img5.jpg', alt:'5' },
        { id: 9, src: '/images/img6.jpg', alt:'6' },
        { id: 10, src: '/images/img7.jpg', alt:'7' },
        { id: 11, src: '/images/img8.jpg', alt:'8' },
        { id: 12, src: '/images/img9.jpg', alt:'9' },
        { id: 13, src: '/images/img10.jpg', alt:'10' },
        { id: 14, src: '/images/img11.jpg', alt:'11' },
        { id: 15, src: '/images/img12.jpg', alt:'12' },
        { id: 16, src: '/images/img13.jpg', alt:'13' },
        { id: 17, src: '/images/img14.jpg', alt:'14' },
        { id: 18, src: '/images/img4.jpg', alt:'15' }
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
      <div className="grid gap-4 grid-cols-auto md:grid-cols-2 lg:grid-cols-3 lg:ml-60 lg:mr-60 mt-8 justify-items-center justify-content-center">
        {images.map((image) => (
          <ImageWithFallback
            key={image.id}
            image={image}
            activePicture={activePicture}
            enlargedPicture={enlargedPicture}
            handlePictureClick={handlePictureClick}
            handlePictureMouseLeave={handlePictureMouseLeave}
          />
        ))}
      </div>
    );
  }

    function ImageWithFallback({ image, activePicture, enlargedPicture, handlePictureClick, handlePictureMouseLeave }) {
        const[isLoading, setIsLoading] = useState(true);
        const[src, setSrc] = useState(image.src);

        const handleLoad = () => {
            setIsLoading(false);
        };
        const handleError = () => {
            setSrc('/images/icon.png');
            setIsLoading(false);
        };

    return (
      <div style={{ position: 'relative', width: '225px', height: '300px' }}>
      {isLoading && (
        <div className="spinner" style={spinnerStyle}></div>
      )}
            <img
              key={image.id}
              src={src}
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
              onLoad={handleLoad}
              onError={handleError}
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
        </div>
      )
    }

const spinnerStyle = {
  position: 'absolute',
  top: '30%',
  left: '30%',
  width: '100px',
  height: '100px',
  border: '4px solid rgba(0, 0, 0, 0.1)',
  borderTop: '4px solid #3498db',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  transform: 'translate(-50%, -50%)',
};

const styles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);