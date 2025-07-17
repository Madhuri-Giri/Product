import React from "react";
import "./CompanyProfile.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanyProfile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="company_container">
        <img
          src="https://thomasprocessing.com/wp-content/uploads/2022/06/Herbal-medicine-Leaves-bottles-and-pills-1500x430.jpg"
          alt="harbal_img"
        />
      </div>

      <Slider {...settings} className="company_slider">
        <div className="company_slide">
          <h6 className="company_heading">Nature of Business</h6>
          <h3 className="company_title">Manufacturer & Exporter</h3>
        </div>
        <div className="company_slide">
          <h6 className="company_heading">Additional Business</h6>
          <h3 className="company_title">Exporter & Service Provider</h3>
        </div>
        <div className="company_slide">
          <h6 className="company_heading">Company CEO</h6>
          <h3 className="company_title">Sazal Madan</h3>
        </div>
        <div className="company_slide">
          <h6 className="company_heading">Total Number of Employees</h6>
          <h3 className="company_title">51 to 100 People</h3>
        </div>
        <div className="company_slide">
          <h6 className="company_heading">Annual Turnover</h6>
          <h3 className="company_title">Rs. 2 - 5 Crore</h3>
        </div>
        <div className="company_slide">
          <h6 className="company_heading">Nature of Business</h6>
          <h3 className="company_title">1972</h3>
        </div>
        <div className="company_slide">
          <h6 className="company_heading">Legal Status of Firm</h6>
          <h3 className="company_title">Limited Company (Ltd./Pvt.Ltd.)</h3>
        </div>
      </Slider>
      
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="company_box">
              <img
                src="https://media.istockphoto.com/id/1387581235/video/speed-ramp-droplet-drips-over-a-green-leaf-into-a-small-bottle.jpg?s=640x640&k=20&c=l921NCKyLTMpW2-fxuz4cnLd1zAeHXEGuMmu963n44s="
                alt="harbal_img"
              />
              <div className="company_text">
                <h6>Premium quality</h6>
                <h5>Ayurvedic product</h5>
                <h3>Quality | Service | Satisfaction</h3>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="company_head">
              <h4>Welcome to Wilson Drugs & Pharmaceuticals Private Limited</h4>
              <p>
                Wilson Drugs and Pharmaceuticals Private Limited is an Ayurveda
                division of Ayurvedic and natural philosophy Established in the
                years 1972, we are driving maker and exporter of a wide scope of
                Herbal Tablets, Herbal Capsules, Herbal, and Ayurvedic Oil and
                we are offering Pharma Franchise to our customers. All of Wilson
                Drugs items are made in WHO-GMP Certified Facilities to give you
                the best quality Ayurveda items accessible on the lookout. Along
                these lines, Wilson Drugs is the best Ayurvedic PCD Franchise
                Company in India.
              </p>

              <p>
                Our Products are the most famous and requesting Ayurvedic items
                in the commercial center. Our image offers items for sicknesses,
                skincare, and individual consideration, and other medical
                problems also. Our organization is serving great quality
                Ayurvedic items in the commercial center that are exceptionally
                solid. That the primary explanation we are extremely mainstream
                for setting up the best therapeutic details produced using
                spices and that could assist with boosting better supplements
                for a solid body
              </p>

              <p>
                We have made tremendous interest in three significant
                advancement territories for example Creation Capacity, Quality
                Assurance, and Research and Development. With our steady
                undertakings in sustaining our creative abilities, we endeavor
                to be known as the most confided in business substance. Our
                image is one of the most respected and believed Ayurvedic
                organizations that offer a phenomenal scope of natural
                consideration drugs for quicker mending with extreme outcomes.
                We likewise convey an amazing and wide scope of Ayurvedic items
                in the market to meet individuals' prerequisites
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="company_range">
        <div>
          <h1>500+</h1>
          <p>Products</p>
        </div>
        <div>
          <h1>20+</h1>
          <p>Country</p>
        </div>
        <div>
          <h1>50+</h1>
          <p>Customer Satisfaction</p>
        </div>
      </div>
      <Container>
        <div className="company_info">
          <h3>Infrastructure</h3>
          <div>
            <p>
              We possess sufficient infrastructural facilities encompassing all
              essential machines & equipment along with adequate storage space
              for raw material and finished goods. All of our high-tech machines
              that are used in manufacturing medicines that are completely
              environment-friendly.
            </p>
            <h5>The following are the additional facilities:</h5>
            <ul>
              <li>Outstanding R & D Facility.</li>
              <li>Technical documentation support.</li>
              <li>Innovative cutting-edge products.</li>
              <li>Committed prompt deliveries.</li>
              <li>Customer support & quick response time.</li>
              <li>
                Committed to producing quality herbal / ayurvedic formulations.
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default CompanyProfile;
