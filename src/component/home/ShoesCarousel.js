import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const ShoesCarousel = () => (
  <>
    <Container fluid className="back-half mt-5" id="product-first">
      <Container className="mt-5 pt-5 pb-5">
        <Row>
          <Col sm={3} className="mt-3">
            <div className="radius mt-8">
              <div className="pt-5 spacing5"></div>
              <div className="sportShoeBg bg-white mb-4"></div>
              <h2 className="text-white">Sports</h2>
              <div className="pt-3"></div>
              <p className="text-white">
                Sepatu original keren cocok dipakai buat lari dan olahraga
                lainnya.
              </p>
              <div className="prev bg-white border next-btn mt-4">
                <i className="fa fa-angle-left"></i>
              </div>
              <div className="next bg-white border prev-btn mt-4">
                <i className="fa fa-angle-right"></i>
              </div>
            </div>
          </Col>
          <Col sm={9} className="mt-3">
            <div className="swiper-container">
              <div className="swiper-wrapper pt-4 pb-5">
                <div className="swiper-slide pl-1 pr-1">
                  <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                    <a href="#">
                      <Image
                        src="/images/product1.png"
                        className="w-100 mt-1"
                      />
                    </a>
                    <div className="rating text-center mt-3 mb-4">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="h5 text-center mb-4">
                      Sepatu Sport NG 675
                    </div>
                    <div className="price-discount h6 text-center">
                      <s>Rp 365.000</s>
                    </div>
                    <div className="h5 mb-4 text-center featured-price">
                      <b>Rp 150.000</b>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide pl-1 pr-1">
                  <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                    <a href="#">
                      <Image
                        src="/images/product2.png"
                        className="w-100 mt-1"
                      />
                    </a>
                    <div className="rating text-center mt-3 mb-4">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="h5 text-center mb-4">
                      Sepatu Sport NG 675
                    </div>
                    <div className="price-discount h6 text-center">
                      <s>Rp 365.000</s>
                    </div>
                    <div className="h5 mb-4 text-center featured-price">
                      <b>Rp 150.000</b>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide pl-1 pr-1">
                  <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                    <a href="#">
                      <Image
                        src="/images/product3.png"
                        className="w-100 mt-1"
                      />
                    </a>
                    <div className="rating text-center mt-3 mb-4">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="h5 text-center mb-4">
                      Sepatu Sport NG 675
                    </div>
                    <div className="price-discount h6 text-center">
                      <s>Rp 365.000</s>
                    </div>
                    <div className="h5 mb-4 text-center featured-price">
                      <b>Rp 150.000</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>

    <Container fluid className="back-half-2 mt-5">
      <Container className="mt-5 pt-5 pb-5">
        <Row>
          <Col sm={9} className="mt-3 order-2 order-sm-1">
            <div className="swiper-container">
              <div className="swiper-wrapper pt-4 pb-5">
                <div className="swiper-slide pl-1 pr-1">
                  <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                    <a href="#">
                      <Image
                        src="/images/product1.png"
                        className="w-100 mt-1"
                      />
                    </a>
                    <div className="rating text-center mt-3 mb-4">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="h5 text-center mb-4">
                      Sepatu Sport NG 675
                    </div>
                    <div className="price-discount h6 text-center">
                      <s>Rp 365.000</s>
                    </div>
                    <div className="h5 mb-4 text-center featured-price">
                      <b>Rp 150.000</b>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide pl-1 pr-1">
                  <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                    <a href="#">
                      <Image
                        src="/images/product2.png"
                        className="w-100 mt-1"
                      />
                    </a>
                    <div className="rating text-center mt-3 mb-4">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="h5 text-center mb-4">
                      Sepatu Sport NG 675
                    </div>
                    <div className="price-discount h6 text-center">
                      <s>Rp 365.000</s>
                    </div>
                    <div className="h5 mb-4 text-center featured-price">
                      <b>Rp 150.000</b>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide pl-1 pr-1">
                  <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                    <a href="#">
                      <Image
                        src="/images/product3.png"
                        className="w-100 mt-1"
                      />
                    </a>
                    <div className="rating text-center mt-3 mb-4">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="h5 text-center mb-4">
                      Sepatu Sport NG 675
                    </div>
                    <div className="price-discount h6 text-center">
                      <s>Rp 365.000</s>
                    </div>
                    <div className="h5 mb-4 text-center featured-price">
                      <b>Rp 150.000</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Col>
          <Col sm={3} className="mt-3 order-1 order-sm-2">
            <div className="radius mt-8">
              <div className="pt-5 spacing5"></div>
              <div className="sportShoeBg bg-white mb-4"></div>
              <h2 className="text-white">Casual</h2>
              <div className="pt-3"></div>
              <p className="text-white">
                Dengan desain kekinian buat kamu makin percaya diri
              </p>
              <div className="prev bg-white border next-btn mt-4">
                <i className="fa fa-angle-left"></i>
              </div>
              <div className="next bg-white border prev-btn mt-4">
                <i className="fa fa-angle-right"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </>
);

export default ShoesCarousel;
