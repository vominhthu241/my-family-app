"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface HaMyImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const images: HaMyImage[] = Array.from({ length: 18 }, (_, i) => ({
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
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images}
        plugins={[Zoom]}
      />
    </div>
  );
};

export default HaMyGallery; 