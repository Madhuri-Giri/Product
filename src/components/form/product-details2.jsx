import React from "react";
import "../form/product-details1.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/footer/Footer";
import { useState } from "react";
import { Container, Row, Col, Modal, Button, Form  } from "react-bootstrap";

const ProductDetails2 = () => {
 
  const [showModal, setShowModal] = useState(false);

  // Functions to open and close the modal
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar />
      <div className="banner_img"><img src="https://www.kingsseeds.co.nz/cdn/shop/articles/Healing_Herbs_as_Natural_Medicine.jpg?v=1702246579" alt="banner-img"/></div>
      <Container>
        <div className="product_details_container">
          {/* <div className="About-us-Main">
            <div>
              <h5>Product</h5>
            </div>
            <div>home</div>
            <div>All Products</div>
            <div>Product Details</div>
          </div> */}
          <div className="product_details_boxs">
            <Row>
              <Col xs={12} md={4}>
                <div className="details_filters">
                  <h4>All Categories</h4>
                  <div className=" ">Ayurvedic Balm</div>
                  <div>Ayurvedic Drop</div>
                  <div>Ayurvedic Ointment</div>
                  <div>Ayurvedic Patent Capsule</div>
                  <div>Ayurvedic Patent Oil</div>
                  <div>Ayurvedic Patent Tablets</div>
                  <div>Herbal and Ayurvedic Syrups</div>
                  <div>Ayurvedic Classical Medicine</div>
                  <div>Ayurvedic Patent Medicine</div>
                  <div>Herbal Syrubs</div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="details_img">
                  <img
                    src="https://static.toiimg.com/photo/75474685.cms"
                    alt="product_img"
                  />
                </div>
              </Col>

              <Col xs={12} md={4}>
                <div className="scrollable-content">
                  <div className="details_box">
                    <h3>Avipattikar Churna</h3>
                  </div>
                  <div>
                    <p>
                      Avipattikar Churna is an Ayurvedic Formulation that is
                      used to get relief from many kinds of Digestive problems
                      like balances the digestive fire and eliminates natural
                      toxins from the system. It effectively solves various
                      symptoms of weak digestion such as flatulence, bloating
                      and more. Avipattikar Powder acts as Laxative,
                      carminative, cholagogue, useful in managing hyperacidity,
                      heartburn, biliousness, vomiting, indigestion, dropsy,
                      rheumatism, and digestive disorders of the Pitta type
                    </p>

                    <p>
                      Being a combination of various ingredients like Ginger,
                      black pepper, long pepper, and many more, it’s mainly used
                      to treat the imbalance in the pitta dosha in the body
                      which in turns promote better healing from various health
                      conditions such as constipation, diarrhea, gastritis,
                      heartburn, indigestion, ulcers, acid reflux. These pitta
                      dosha related issues arise because of either due to lack
                      of physical activities, unhealthy eating habits, or
                      sedentary lifestyle. Avipattikar Churna soothes the
                      stomach tissues and promotes normal, comfortable levels of
                      acidity during the digestive process and effectively
                      reduces the excess heat in the body and cools it down so
                      that the pitta dosha gets balanced.
                    </p>

                    <p>
                      A clinical study was conducted by the National Research
                      Institute of Ayurvedic Drug Development, Ministry of Ayush
                      - Govt. of India, and the National Institute of Ayurveda
                      to determine the efficacy of the use of Avipattikar Powder
                      in treating digestive disorders. The study concluded that
                      70% of the patients showed significant improvement and 30%
                      showed a moderate response.
                    </p>
                  </div>

                  <div className="product_detail_box">
                    <h4>Key Ingredients in Avipattikar Churna:</h4>
                  </div>
                  <div className="product_detail_box">
                    <p>
                      <span>Amla :</span>
                      It’s a great ingredient to cure various pitta doshas as
                      amla helps to improve digestion and accordingly helps to
                      get relief from acidity. It also helps to fight against
                      various bacterial infections.
                    </p>
                    <p>
                      <span> Behada : </span> Baheda is very useful to manage
                      and cure the problem of constipation due to its laxative
                      properties. It’s also used to fight against cough and cold
                      as it has many antimicrobial and anti-allergic properties.
                    </p>
                    <p>
                      <span> Cardamom :</span> Cardamom has many antimicrobial,
                      antioxidant and anti-inflammatory properties that’s why it
                      is also known as the queen of spices. It’s also helpful in
                      managing indigestion, flatulence, and also gives relief
                      from stomach pain.
                    </p>

                    <p>
                      <span>Black pepper :</span> It aids in weight loss and
                      improves the digestion by improving the metabolism of the
                      stomach. They help a lot to balance the pitta dosha in the
                      body.
                    </p>

                    <p>
                      <span>Ginger :</span> It’s very rich in numerous nutrients
                      and certain bioactive compounds that have a great amount
                      of medicinal benefits. Ginger also aids in weight loss and
                      increasing the metabolism activity in the stomach. Indian
                      bay leaf : Bay leaf helps to control the blood glucose
                      level of the human body and it also aids in increasing the
                      digestive activity in the stomach. This is also helpful in
                      getting relief from arthritis and other joint ailments.
                    </p>
                    <p>
                      <span>Long pepper : </span> Long pepper is also known as
                      Pipli in India and is used in managing cough and cold and
                      is also helpful in managing constipation as it also holds
                      a certain degree of laxative properties.
                    </p>
                    <p>
                      <span> Nutgrass : </span>
                      It’s also known as Nagarmotha helps to improve the
                      digestive activity due to its Deepan and Pachan properties
                      when taken in a proper dose. It’s oil is also well known
                      for managing various stomach disorders due to its
                      antispasmodic properties.
                    </p>
                    <p>
                      <span> Turpeth : </span>
                      Nisoth is the other name for this plant that aids in
                      managing constipation as it promotes the bowel movements
                      when taken with warm water. Vidanga : False black pepper
                      is the other name for this herbal medication which is used
                      to expel parasites and worms from the stomach as it holds
                      anthelmintic properties. If taken regularly and in a
                      proper quantity, it helps to improve the digestive
                      function of the body.
                    </p>
                  </div>
                  <div className="product_detail_box">
                    <h4>Key Benefits of Avipattikar Churna</h4>
                    <ul>
                      <li>Aids to manage Constipation</li>
                      <li>Useful In Diarrhea</li>
                      <li>
                        Allows relief from Heartburn and its related symptoms
                      </li>
                      <li>Ingestion problem is solved</li>
                      <li>Ulcers are also cured by using this churna</li>
                      <li>Problem of Gastritis is also cured</li>
                    </ul>
                  </div>
                  <div className="product_detail_box">
                    <h4>Business Deals for Avipattikar Churna:</h4>
                    <p>
                      Wilson Drugs is perceived as the best Ayurvedic Franchise
                      Company In India that has been successful in serving
                      people for many years by offering Avipattikar Churna. Our
                      well reputed firm also offers various business
                      opportunities like Ayurvedic PCD Franchise, Ayurvedic
                      Manufacturing, Ayurvedic Products Exporting services for
                      Avipattikar Churna across India
                    </p>
                    <ul>
                      <li>
                        Fair Price is offered for every product that we offer.
                      </li>
                      <li>
                        All the orders that we get are delivered on time as our
                        logistics team is well versed in their task.
                      </li>
                      <li>
                        All the Ayurvedic products we offer are manufactured
                        under GMP & WHO certified units.
                      </li>
                      <li>
                        DCGI & FSSAI approved Ayurvedic medications are given by
                        us.
                      </li>
                    </ul>
                    <p>Packaging Details: 100 gm.1 kg.</p>
                  </div>
                  <div>
                    <button className="detail_btn_con" onClick={handleOpen}>Quick Enquiry</button>
                  </div>
                </div>
                {/* Modal for Quick Enquiry Form */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Quick Enquiry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button style={{ color: "#ffffff", backgroundColor: "#17a2b8", border: "none" }} onClick={handleClose}>
              Submit Enquiry
            </Button>
          </Modal.Footer>
        </Modal>
              </Col>
            </Row>
          </div>
        </div>

        <div className="products_heading">
          <h4>Related categories</h4>
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
                }}
              />
            </div>
            <h5>Ayurvedic Classical Syrup</h5>
            <p>
              Useful in Mental Fatigue, Improves Learning, Concentration And
              Grasping Power. Also Improve Recall Ability
            </p>
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
              Useful in Mental Fatigue, Improves Learning, Concentration And
              Grasping Power. Also Improve Recall Ability
            </p>
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
              Useful in Mental Fatigue, Improves Learning, Concentration And
              Grasping Power. Also Improve Recall Ability
            </p>
          </div>

          {/* --------- */}
          <div className="product-boxes">
            <div className="image-pro">
              <div
                className="image"
                style={{
                  backgroundImage:
                    "url(https://static.toiimg.com/photo/75474685.cms)",
                }}
              />
            </div>
            <h5>Ayurvedic Classical Syrup</h5>
            <p>
              Useful in Mental Fatigue, Improves Learning, Concentration And
              Grasping Power. Also Improve Recall Ability
            </p>
          </div>
        </div>
        <div className="note_box">
          <p>
            Information given is only for use by registered medical
            practitioners and not for common public.
          </p>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default ProductDetails2;
