"use client";
import React, { useState, useEffect } from "react";
import ServiceSection from "./ServiceSection";
import HaMyGallery from "./HaMyGallery";
import Testimonials from "./Testimonials";
import GalleryGrid from "./GalleryGrid";
import WeddingDay from "./WeddingDay";

const BrideAndGroom: React.FC = () => {
  const currentDay = new Date();
  const targetDate = new Date("2023-07-26"); // Replace with your target date and time
  const timeDifference = targetDate.getTime() - currentDay.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  const [countdown, setCountdown] = useState<string | number>(daysDifference);
  const [scrollY, setScrollY] = useState<number>(0);
  // const textRef = useRef<HTMLDivElement>(null);
  // const [isCopied, setIsCopied] = useState(false);

  // Handle copy to clipboard
  // const handleCopy = () => {
  //   if (textRef.current) {
  //     const range = document.createRange();
  //     range.selectNode(textRef.current);
  //     window.getSelection()?.removeAllRanges();
  //     window.getSelection()?.addRange(range);
  //     document.execCommand("copy");
  //     window.getSelection()?.removeAllRanges();
  //     setIsCopied(true);
  //   }
  // };

  useEffect(() => {
    // Update the countdown every second
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (typeof prevCountdown === "number") {
          return prevCountdown - 1;
        }
        return prevCountdown;
      });
      // Check if the target date has passed
      if (daysDifference === 0) {
        setCountdown("Hôm nay là ngày thành hôn của chúng mình");
      } else if (daysDifference < 0) {
        const ceremonyDate = Math.ceil((currentDay.getTime() - targetDate.getTime()) / (1000 * 3600 * 24));
        setCountdown(`Chúng mình đã kết hôn được ${ceremonyDate} ngày`);
      } else {
        setCountdown(`Còn ${daysDifference} ngày nữa là đến sự kiện`);
      }
    }, 100);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform based on scroll position
  const transformY = Math.min(Math.max(scrollY * 0.5, 0), 400);
  const bannerStyle = {
    transform: `translate3d(0, ${transformY}px, 0)`
  };

  return (
    <div className="wd-container">
      <div className="page-section">
        <div className="banner">
          <div className="banner-image" style={bannerStyle}>
            <img
              src="/images/banner.png"
              alt="Wedding Banner"
              width="100%"
              height="100%"
            />
          </div>
          <div className="banner-svg">
            <svg preserveAspectRatio="none" data-bbox="10 20 180 161" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="10 20 180 161" role="presentation" aria-hidden="true">
              <g><polygon points="190,33 177,33 177,20 25,20 25,33 10,33 10,169 25,169 25,181 177,181 177,169 190,169 "></polygon></g>
            </svg>
          </div>
          <div className="hero-wrapper banner-text">
            <p className="countdown">{countdown}</p>
            <h1 className="hero-title">We got married!</h1>
            <p className="hero-time">Bây giờ, chúng mình có thêm hạnh phúc mới</p>
          </div>
        </div>
      </div>
      <div className="page-section">
        <ServiceSection />
      </div>
      <div className="page-section">
        <HaMyGallery />
      </div>
      <div className="story-container">
        <div className="testimonials-container">
          <div className="testimonials-column">
            <Testimonials />
          </div>
        </div>
      </div>
      <div className="gallery-container">
        <GalleryGrid />
      </div>
      <div className="day-container">
        <WeddingDay />
      </div>
      <div className="footer">
        <div className="footer-text">
          <h1>Adrian &amp; Anna</h1>
        </div>
        <div className="copyright">
          <p>©  {new Date().getFullYear()} Created by Thư &amp; Nhật. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom; 