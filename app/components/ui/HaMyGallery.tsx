"use client";
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface HaMyImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const images: HaMyImage[] = Array.from({ length: 20 }, (_, i) => ({
  src: `/images/hamy/hamy${i + 1}.webp`,
  width: 800,
  height: 1000,
  alt: `Hà My ${i + 1}`
}));

const HaMyGallery: React.FC = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamy-gallery">
      <div className="gallery-title">
        <h2>Hà My&apos;s First Year</h2>
        <p>Những khoảnh khắc đáng yêu của bé</p>
      </div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img src={image.src} alt={image.alt} loading="eager" width="100%" height="100%" />
          </div>
        ))}
      </div>
      <div className="gallery-see-more">
        <a
          href="https://photos.app.goo.gl/PZC47jfbqfDLyjTX6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn see-more">Xem thêm</button>
        </a>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={images[photoIndex].alt}
        />
      )}
    </div>
  );
};

export default HaMyGallery; 