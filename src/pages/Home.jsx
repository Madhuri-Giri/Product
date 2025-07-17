import React from "react";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Fade from "./slider/Fade";
import Footer from "./footer/Footer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Demat from '../demat/Demat'

const Home = () => {
  const navigate = useNavigate();

  const productPage = () => {
    navigate("/products");
  };

  const ProductDetails = () => {
    navigate("/product-details");
  };

 
  const ProductDetails1 = () => {
    navigate("/product-details1");
  };

  

  const ProductDetails3 = () => {
    navigate("/product-details3");
  };


  return (
    <>
      <Navbar />
      <div>
        <div className="main-home">
          {/* ---------------------------- */}
          <div className="slider-main">
            <Fade />
          </div>
          {/* ---------------------------- */}

          <div className="About-us-Main">
            <div className="about">
              <div className="about-top">
                <h6>ABOUT US</h6>
                <span></span>
              </div>
              <div className="about-btm">
                <div className="a-left">
                  <h6>
                    Welcome to a world where ancient wisdom is infused with
                    modern aesthetic.
                  </h6>
                </div>
                <div className="a-right">
                  <h6>
                    Forest Essentials is an authentic, traditional skincare
                    brand with its foundations in the ancient science of
                    Ayurveda. A pioneer of Luxurious Ayurveda, today it has
                    become the quintessential Indian beauty brand that combines
                    the ancient beauty rituals of Ayurveda with a stylish,
                    modern aesthetic for a more relevant emphasis on efficacy,
                    sensorial experience and pleasure of usage.
                  </h6>
                </div>
              </div>
              <div className="about-last">
                <div className="a-one">
                  <div className="Aone-L">
                    <img
                      src="https://img.forestessentialsindia.com/pub/media/about-us/our-philosophy.jpg"
                      alt=""
                    />
                  </div>
                  <div className="Aone-R">
                    <h6>WHO WE ARE</h6>
                    <span></span>
                    <h5>If You Cannot Eat It, Do Not Use It On Your Skin</h5>
                    <p>
                      That is the Ayurvedic & Forest Essentials standard for
                      pure, fresh and natural. We believe that beauty products
                      made of living substances such as plants or their
                      extracts, are balanced by nature and contain the vibratory
                      energy that constitutes life. These contain all the
                      purifying, nutritive and balancing properties necessary to
                      nurture the skin and for eternal beauty. They are the
                      perfect foods for the skin.
                    </p>
                  </div>
                </div>
                <div className="a-two">
                  <div className="Aone-L">
                    <img
                      src="https://img.forestessentialsindia.com/pub/media/about-us/discover-ayurveda.jpg"
                      alt=""
                    />
                  </div>
                  <div className="Aone-R">
                    <h6>OUR PHILOSOPHY</h6>
                    <span></span>
                    <h5>
                      We have made huge investments in three major development
                      areas.
                    </h5>
                    <p>
                      That is the Ayurvedic & Forest Essentials standard for
                      pure, fresh and natural. We believe that beauty products
                      made of living substances such as plants or their
                      extracts, are balanced by nature and contain the vibratory
                      energy that constitutes life. These contain all the
                      purifying, nutritive and balancing properties necessary to
                      nurture the skin and for eternal beauty. They are the
                      perfect foods for the skin.
                    </p>
                  </div>
                </div>
              </div>
              {/* ---------------- */}
            </div>
          </div>

          {/* ------------------------------products--------------------------------------------- */}

          <div className="product-main">
            <div className="products">
              <div className="p-top">
                <h6>OUR PRODUCTS</h6>
                <span></span>
              </div>

              <div className="p-btm">
                {/* ------ */}
                <div className="product-boxes">
                  <div className="image-pro">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8842_-50g.jpg)",
                      }}
                    />
                  </div>
                  <h5>Ayurvedic Classical Syrup</h5>
                  <p>
                    Useful in Mental Fatigue, Improves Learning, Concentration
                    And Grasping Power. Also Improve Recall Ability
                  </p>

                  <div className="view-product">
                    <button onClick={ProductDetails}>
                      View Details <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
                {/* --------- */}
                <div className="product-boxes">
                  <div className="image-pro">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(https://www.gynaecworld.com/pcos/wp-content/uploads/2019/04/Herbal-Tea-min.jpg)",
                      }}
                    />
                  </div>
                  <h5>Ayurvedic Classical Syrup</h5>
                  <p>
                    Useful in Mental Fatigue, Improves Learning, Concentration
                    And Grasping Power. Also Improve Recall Ability
                  </p>
                  <div className="view-product">
                    <button onClick={ProductDetails1}>
                      View Details <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>

                <div className="product-boxes">
                  <div className="image-pro">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8845_sun_fluid_spf_50_50ml_front_copy.png)",
                      }}
                    />
                  </div>
                  <h5>Ayurvedic Classical Syrup</h5>
                  <p>
                    Useful in Mental Fatigue, Improves Learning, Concentration
                    And Grasping Power. Also Improve Recall Ability
                  </p>
                  <div className="view-product">
                    <button onClick={ProductDetails3}>
                      View Details <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-btm">
                {/* ------ */}
                <div className="product-boxes">
                  <div className="image-pro">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8842_-50g.jpg)",
                      }}
                    />
                  </div>
                  <h5>Ayurvedic Classical Syrup</h5>
                  <p>
                    Useful in Mental Fatigue, Improves Learning, Concentration
                    And Grasping Power. Also Improve Recall Ability
                  </p>

                  <div className="view-product">
                    <button onClick={ProductDetails}>
                      View Details <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
                {/* --------- */}
                <div className="product-boxes">
                  <div className="image-pro">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(https://www.gynaecworld.com/pcos/wp-content/uploads/2019/04/Herbal-Tea-min.jpg)",
                      }}
                    />
                  </div>
                  <h5>Ayurvedic Classical Syrup</h5>
                  <p>
                    Useful in Mental Fatigue, Improves Learning, Concentration
                    And Grasping Power. Also Improve Recall Ability
                  </p>
                  <div className="view-product">
                    <button onClick={ProductDetails1}>
                      View Details <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>

                <div className="product-boxes">
                  <div className="image-pro">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8845_sun_fluid_spf_50_50ml_front_copy.png)",
                      }}
                    />
                  </div>
                  <h5>Ayurvedic Classical Syrup</h5>
                  <p>
                    Useful in Mental Fatigue, Improves Learning, Concentration
                    And Grasping Power. Also Improve Recall Ability
                  </p>
                  <div className="view-product">
                    <button onClick={ProductDetails3}>
                      View Details <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-btm">
                {/* ------ */}
                <div className="product-boxes">
                  <div className="image-pro">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8842_-50g.jpg)",
                      }}
                    />
                  </div>
                  <h5>Ayurvedic Classical Syrup</h5>
                  <p>
                    Useful in Mental Fatigue, Improves Learning, Concentration
                    And Grasping Power. Also Improve Recall Ability
                  </p>

                  <div className="view-product">
                    <button onClick={ProductDetails}>
                      View Details <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
                {/* --------- */}
                <div className="product-boxes">
                  <div className="image-pro">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(https://www.gynaecworld.com/pcos/wp-content/uploads/2019/04/Herbal-Tea-min.jpg)",
                      }}
                    />
                  </div>
                  <h5>Ayurvedic Classical Syrup</h5>
                  <p>
                    Useful in Mental Fatigue, Improves Learning, Concentration
                    And Grasping Power. Also Improve Recall Ability
                  </p>
                  <div className="view-product">
                    <button onClick={ProductDetails1}>
                      View Details <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>

                <div className="product-boxes">
                  <div className="image-pro">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8845_sun_fluid_spf_50_50ml_front_copy.png)",
                      }}
                    />
                  </div>
                  <h5>Ayurvedic Classical Syrup</h5>
                  <p>
                    Useful in Mental Fatigue, Improves Learning, Concentration
                    And Grasping Power. Also Improve Recall Ability
                  </p>
                  <div className="view-product">
                    <button onClick={ProductDetails3}>
                      View Details <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-bottom">
                <button onClick={productPage}>
                  VIEW MORE PRODUCTS <IoIosArrowRoundForward />
                </button>
                <span></span>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------- */}

          {/* ----------------------------- */}
          <div className="recognition-main">
            <div className="recognition">
              <div className="r-top">
                <h6>OUR RECOGNITION</h6>
                <span></span>
              </div>

              <div className="r-btm">
                <div className="box">
                  <img
                    src="https://img.forestessentialsindia.com/pub/media/about-us/make-in-india-certificate.png"
                    alt=""
                  />
                  <h5>1150</h5>
                  <h6>make in india</h6>
                </div>

                <div className="box">
                  <img
                    src="https://img.forestessentialsindia.com/pub/media/about-us/gmp-certificate.png"
                    alt=""
                  />
                  <h5>1972</h5>
                  <h6>since we are</h6>
                </div>

                <div className="box">
                  <img
                    src="https://img.forestessentialsindia.com/pub/media/about-us/ayush-certificate.png"
                    alt=""
                  />
                  <h5>200</h5>
                  <h6>product we offer</h6>
                </div>
                <div className="box">
                  <img
                    src="https://img.forestessentialsindia.com/pub/media/about-us/cruelty-free-certificate.png"
                    alt=""
                  />
                  <h5>100</h5>
                  <h6>customer satisfaction</h6>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------ */}
          <Demat />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
