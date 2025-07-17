
import React, { useState } from "react";
import "./Fade.css";

const Fade = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'https://img.freepik.com/free-vector/sandalwood-sticks-powder-flower-cosmetic-products-green-blurred-background-horizontal-poster-realistic-vector-illustration_1284-71361.jpg',
    },
    {
      image: 'https://www.lotusherbals.com/cdn/shop/articles/How_to_Create_a_Simple_Skincare_Routine_with_Lotus_Herbal_Products.jpg?v=1681134148',
    },
    {
      image: 'https://www.thrive.org.uk/files/images/_hero/Herbal-teas_hero-image.jpg',
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D4E12AQHfrU-IceYIYA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687436227363?e=2147483647&v=beta&t=AcbcaSVfU_2BIzUQijsY2GhzvAgmwHXWAYK2kujp96k',
    }
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={goToPreviousSlide}>
        ❮
      </button>
      <div
        className="slider-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </div>
      <button className="slider-button next" onClick={goToNextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Fade;
