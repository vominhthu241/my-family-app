"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const WeddingDay: React.FC = () => {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openModal1 = () => setIsModal1Open(true);
  const closeModal1 = () => setIsModal1Open(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openModal2 = () => setIsModal2Open(true);
  const closeModal2 = () => setIsModal2Open(false);

  return (
    <div className="section the-wedding">
      <div className="wedding__day-title">
        <div className="rich-text" data-testid="richTextElement">
          <span className="rich-text__text">THE</span>
        </div>
        <div className="rich-text" data-testid="richTextElement">
          <span className="rich-text__text">Wedding</span>
        </div>
        <div className="rich-text" data-testid="richTextElement">
          <span className="rich-text__text">DAY</span>
        </div>
      </div>
      <div className="wedding__day-content">
        <div className="wedding__day-list">
          <div className="wd-list-item">
            <div className="wd-list-item-image">
              <div className="zoom-image-container">
                <img src="/images/event-1.jpeg" alt="Tư gia nhà gái" width="100%" />
              </div>
            </div>
            <div className="wd-list-item-text">
              <div className="short-date">Chủ nhật, 23 tháng 7, 11:30 AM</div>
              <div className="short-event">Tiệc nhà gái</div>
              <div className="short-map">
                {/* <button onClick={openModal1}>Xem bản đồ</button> */}
                <a href="https://photos.app.goo.gl/gmkBwhk8zfJziSic6" target="_blank" rel="noopener noreferrer">
                  <button>Xem hình ảnh</button>
                </a>
              </div>
            </div>
          </div>
          <div className="wd-list-item">
            <div className="wd-list-item-image">
              <div className="zoom-image-container">
                <img src="/images/event-2.jpeg" alt="Tư gia nhà trai" width="100%" />
              </div>
            </div>
            <div className="wd-list-item-text">
              <div className="short-date">Thứ 4, 26 tháng 7, 11 AM</div>
              <div className="short-event">Tiệc nhà trai</div>
              <div className="short-map">
                {/* <button onClick={openModal2}>Xem bản đồ</button> */}
                <a href="https://photos.app.goo.gl/145Di3i7mbBosgNv5" target="_blank" rel="noopener noreferrer">
                  <button>Xem hình ảnh</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {isModal1Open && (
          <Modal isOpen={isModal1Open} onClose={closeModal1}>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.279054117643!2d108.20932287583118!3d16.051002639924217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b85cefa3f5%3A0xf3ebcf4b0fde40a8!2zVHJ1bmcgdMOibSBI4buZaSBuZ2jhu4smVGnhu4djIGPGsOG7m2kgTWluaCBDaMOidSBWaeG7h3Q!5e0!3m2!1svi!2s!4v1687706542355!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                title="Ban do nha gai"
              ></iframe>
            </div>
          </Modal>
        )}
        {isModal2Open && (
          <Modal isOpen={isModal2Open} onClose={closeModal2}>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2106.383410445994!2d107.45637930153289!3d16.660838599905436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314105bd67b4aa03%3A0xeeedf83aeaa72c5a!2zTmjDoCBWxINuIEhvw6EgVGjDtG4gOA!5e0!3m2!1svi!2s!4v1687706955226!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                title="Ban do nha trai"
              ></iframe>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default WeddingDay; 