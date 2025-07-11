"use client";
import React, { useState } from "react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Khánh Nhật & Minh Thư",
    name: "Chúng mình là",
    image: "/images/image1.webp"
  },
  {
    id: 2,
    text: "First trip",
    name: "6.11.2020",
    image: "/images/image2.webp"
  },
  {
    id: 3,
    text: "Hậu Covid",
    name: "17.12.2021",
    image: "/images/image3.webp"
  },
  {
    id: 4,
    text: "Siêu nhân vàng và Siêu nhân hồng",
    name: "14.02.2022",
    image: "/images/image3-1.webp"
  },
  {
    id: 5,
    text: "Đầu năm 2 nhà gặp mặt thăm hỏi",
    name: "10.02.2023",
    image: "/images/image4.webp"
  },
  {
    id: 6,
    text: "my butt was enjoyed 🚘",
    name: "18.03.2023",
    image: "/images/image4-1.webp"
  },
  {
    id: 7,
    text: "Buổi nhuộm tóc đầy gian nan",
    name: "25.5.2023",
    image: "/images/image4-2.webp"
  },
  {
    id: 8,
    text: "<3",
    name: "15.6.2023",
    image: "/images/image5-1.webp"
  },
  {
    id: 9,
    text: "Chúng tôi đính ước với nhau",
    name: "17.6.2023",
    image: "/images/image5.webp"
  }
];

const Testimonials: React.FC = () => {
  const [highlightedTestimonial, setHighlightedTestimonial] = useState<Testimonial>(testimonials[0]);

  const handleTestimonialClick = (testimonial: Testimonial) => {
    setHighlightedTestimonial(testimonial);
  };

  return (
    <div className="testimonials">
      <div className="highlighted-testimonial">
        {highlightedTestimonial && (
          <div className="testimonial-details">
            <div className="testimonial-image">
              <img src={highlightedTestimonial.image} alt={highlightedTestimonial.name} />
            </div>
            <p className="testimonial-name">{highlightedTestimonial.name}</p>
            <p className="testimonial-text">{highlightedTestimonial.text}</p>
          </div>
        )}
      </div>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`testimonial ${highlightedTestimonial.id === testimonial.id ? 'active' : ''}`}
            onClick={() => handleTestimonialClick(testimonial)}
          >
            <img src={testimonial.image} alt={testimonial.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 