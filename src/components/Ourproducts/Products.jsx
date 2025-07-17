import React from "react";
import "./Products.css";
import Navbar from "../../pages/Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Footer from "../../pages/footer/Footer";

const Products = () => {
  const navigate = useNavigate();

  const ProductDetails = () => {
    navigate("/product-details");
  };

  const ProductDetails1 = () => {
    navigate("/product-details1");
  };

  const ProductDetails2 = () => {
    navigate("/product-details2");
  };

  const ProductDetails3 = () => {
    navigate("/product-details3");
  };

  return (
    <>
      <Navbar />
<div className="product_img">
  <img src="https://cafimafi.com/mag/wp-content/uploads/2022/02/salvia-officinalis5.jpg" alt="banner"/>
</div>
      <div className="product-container">
        <div className="products-box">
          <div className="product-top">
            <h2>Herbal and Ayurvedic Products Range</h2>
          </div>
          {/* <div className="product_head">
            <div>All Product</div>
            <div>Home/All Product</div>
          </div> */}
          <div className="product-btm">
            {/* ------ */}
            <div className="product-boxes">
              <div className="image-pro">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8842_-50g.jpg)",
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>

              <div className="read-product">
                <button onClick={ProductDetails}>
                  Read More <IoIosArrowRoundForward />
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
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails1}>
                  Read More <IoIosArrowRoundForward />
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
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails3}>
                  Read More <IoIosArrowRoundForward />
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
                      "url(https://static.toiimg.com/photo/75474685.cms)",
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails2}>
                  Read More <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>

          <div className="product-btm">
            {/* ------ */}
            <div className="product-boxes">
              <div className="image-pro">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8842_-50g.jpg)",
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>

              <div className="read-product">
                <button onClick={ProductDetails}>
                  Read More <IoIosArrowRoundForward />
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
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails1}>
                  Read More <IoIosArrowRoundForward />
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
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails3}>
                  Read More <IoIosArrowRoundForward />
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
                      "url(https://static.toiimg.com/photo/75474685.cms)",
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails2}>
                  Read More <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>

          <div className="product-btm">
            {/* ------ */}
            <div className="product-boxes">
              <div className="image-pro">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8842_-50g.jpg)",
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>

              <div className="read-product">
                <button onClick={ProductDetails}>
                  Read More <IoIosArrowRoundForward />
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
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails1}>
                  Read More <IoIosArrowRoundForward />
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
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails3}>
                  Read More <IoIosArrowRoundForward />
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
                      "url(https://static.toiimg.com/photo/75474685.cms)",
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails2}>
                  Read More <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>

          <div className="product-btm">
            {/* ------ */}
            <div className="product-boxes">
              <div className="image-pro">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8842_-50g.jpg)",
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>

              <div className="read-product">
                <button onClick={ProductDetails}>
                  Read More <IoIosArrowRoundForward />
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
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails1}>
                  Read More <IoIosArrowRoundForward />
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
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails3}>
                  Read More <IoIosArrowRoundForward />
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
                      "url(https://static.toiimg.com/photo/75474685.cms)",
                  }} alt="Ayurvedic Classical Syrup"
                />
              </div>
              <h5>Ayurvedic Classical Syrup</h5>
              <p>
                Useful in Mental Fatigue, Improves Learning, Concentration And
                Grasping Power. Also Improve Recall Ability
              </p>
              <div className="read-product">
                <button onClick={ProductDetails2}>
                  Read More <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
