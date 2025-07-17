import React, { useState, useEffect } from 'react';
import "./Demat.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const reviews = [
  {
    name: "Pallavi Patel",
    text: "Got good deal without agent calling or speaking to anyone!!",
    imgSrc: "https://static.pbcdn.in/cdn/images/home-v1/quote.png",
  },
  {
    name: "Neha Jain",
    text: "I did not even need help from an agent! This is very good!",
    imgSrc: "https://static.pbcdn.in/cdn/images/home-v1/quote.png",
  },
  {
    name: "Urvashi Solanki",
    text: "I did not even need help from an agent! This is very good.",
    imgSrc: "https://static.pbcdn.in/cdn/images/home-v1/quote.png",
  },
  {
    name: "Rahul Mehta",
    text: "Super simple and easy to use! Love it! This is very good.",
    imgSrc: "https://static.pbcdn.in/cdn/images/home-v1/quote.png",
  },
  {
    name: "Amit Sharma",
    text: "Quick booking, no hassle. Highly recommend!",
    imgSrc: "https://static.pbcdn.in/cdn/images/home-v1/quote.png",
  },
  {
    name: "Sneha Roy",
    text: "Great service, This is very good.saved me time and money.",
    imgSrc: "https://static.pbcdn.in/cdn/images/home-v1/quote.png",
  },
  {
    name: "Ravi Verma",
    text: "Fantastic deals, didn’t even need help from support.",
    imgSrc: "https://static.pbcdn.in/cdn/images/home-v1/quote.png",
  },
  {
    name: "Priya Sinha",
    text: "So easy and convenient, I love this platform!",
    imgSrc: "https://static.pbcdn.in/cdn/images/home-v1/quote.png",
  },
  {
    name: "Kunal Desai",
    text: "Amazing experience, everything was a breeze!",
    imgSrc: "https://static.pbcdn.in/cdn/images/home-v1/quote.png",
  },
];

const Demat = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth <= 768 ? 1 : 3; // Show only 1 item on small screens and 3 on larger ones
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) => 
          prevIndex >= reviews.length - itemsPerPage ? 0 : prevIndex + itemsPerPage
        );
      }
    }, 2000); // Change slide every 1 second

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [currentIndex, itemsPerPage, isDragging]); // Depend on currentIndex, itemsPerPage, and isDragging

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= reviews.length - itemsPerPage ? 0 : prevIndex + itemsPerPage
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX); // Get the starting X position
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.clientX - startX); // Calculate current X position
  };

  const handleMouseUp = () => {
    if (isDragging) {
      // Determine if we should slide left or right based on drag distance
      if (currentX < -100) {
        handleNext(); // Slide to next
      } else if (currentX > 100) {
        handlePrev(); // Slide to previous
      }
      setIsDragging(false);
      setCurrentX(0); // Reset currentX
    }
  };

  const currentReviews = reviews.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className='Demat-main'>
      <div className="Demat-page">
        <div className="advantage">
          <h5>What Our Customers Are Saying</h5>
        </div>

        <div className="side-btm">
          <button className="nav-button" onClick={handlePrev}><GoArrowLeft /></button>
          <button className="nav-button" onClick={handleNext}><GoArrowRight /></button>
        </div>

        <div 
          className="advantage-slider" 
          onMouseDown={handleMouseDown} 
          onMouseMove={handleMouseMove} 
          onMouseUp={handleMouseUp} 
          onMouseLeave={handleMouseUp} // Handle mouse leaving the slider area
        >
          <div className="Review-container">
            {currentReviews.map((review, index) => (
              <div key={index} className="Review">
                <h5>{review.name}</h5>
                <img src={review.imgSrc} alt="" />
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pagination">
          {Array.from({ length: Math.ceil(reviews.length / itemsPerPage) }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex / itemsPerPage === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demat;
