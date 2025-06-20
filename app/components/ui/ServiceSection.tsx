"use client";
import React from "react";

const ServiceSection: React.FC = () => {
  return (
    <div className="service-section">
      <div className="service-container">
        <div className="service-column service-image">
          <img
            src="/images/hamy/hamy19.webp"
            alt="Ha My photo 1"
            className="service-img"
          />
        </div>
        <div className="service-column service-content">
          <h2 className="service-title">A New Chapter Begins</h2>
          <div className="service-icon">
            <img src="/images/flower-divider-2.png" alt="Ha My photo 1" className="service-img" />
          </div>
          <p className="service-description">Hà My Tròn 1 Tuổi!</p>
        </div>
        <div className="service-column service-image">
          <img
            src="/images/hamy/hamy20.webp"
            alt="Ha My photo 2"
            className="service-img"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection; 