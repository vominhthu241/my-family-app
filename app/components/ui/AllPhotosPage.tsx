"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface Photo {
  src: string;
  width: number;
  height: number;
}

const allphotos: Photo[] = [
  { src: "/images/gallery/gallery-1.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-2.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-3.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-4.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-5.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-6.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-7.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-8.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-9.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-10.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-11.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-12.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-13.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-14.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-15.webp", width: 1498, height: 997 },
  { src: "/images/gallery/gallery-16.webp", width: 1498, height: 997 },
  { src: "/images/gallery/gallery-17.webp", width: 1498, height: 997 },
  { src: "/images/gallery/gallery-18.webp", width: 1498, height: 997 },
  { src: "/images/gallery/gallery-19.webp", width: 1498, height: 997 },
  { src: "/images/gallery/gallery-20.webp", width: 1498, height: 997 },
  { src: "/images/gallery/gallery-21.webp", width: 1498, height: 997 },
  { src: "/images/gallery/gallery-22.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-23.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-24.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-25.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-26.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-27.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-28.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-29.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-30.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-31.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-32.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-33.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-34.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-35.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-36.webp", width: 1512, height: 1006 },
  { src: "/images/gallery/gallery-37.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-38.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-39.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-40.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-41.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-42.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-43.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-44.webp", width: 503, height: 756 },
  { src: "/images/gallery/gallery-45.webp", width: 996, height: 1497 }
  // ... add more if needed
];

const AllPhotosPage: React.FC = () => {
  const router = useRouter();
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openLightbox = (_event: React.MouseEvent, obj: { index: number }) => {
    setCurrentPhotoIndex(obj.index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="all-photos-page">
      <button className="back-btn" onClick={handleBack}>&larr; Back</button>
      <Gallery photos={allphotos} onClick={openLightbox} />
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={allphotos[currentPhotoIndex].src}
          nextSrc={allphotos[(currentPhotoIndex + 1) % allphotos.length].src}
          prevSrc={allphotos[(currentPhotoIndex + allphotos.length - 1) % allphotos.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentPhotoIndex((currentPhotoIndex + allphotos.length - 1) % allphotos.length)
          }
          onMoveNextRequest={() =>
            setCurrentPhotoIndex((currentPhotoIndex + 1) % allphotos.length)
          }
        />
      )}
    </div>
  );
};

export default AllPhotosPage; 