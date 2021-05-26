import { Col, Container, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

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
            </div>
          </Col>
          <Col sm={9} className="mt-3">
            <Swiper
              spaceBetween={30}
              navigation={true}
              // prettier-ignore
              breakpoints={{
                  "500": {
                    "slidesPerView": 1,
                  },
                  "768": {
                    "slidesPerView": 2,
                  },
                  "1024": {
                    "slidesPerView": 3,
                  },
                }}
              className="mySwiper pt-4 pb-5"
            >
              <SwiperSlide className="pl-1 pr-1">
                <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                  <a href="#">
                    <Image src="/images/product1.png" className="w-100 mt-1" />
                  </a>
                  <div className="rating text-center mt-3 mb-4">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="h5 text-center mb-4">Sepatu Sport NG 675</div>
                  <div className="price-discount h6 text-center">
                    <s>Rp 365.000</s>
                  </div>
                  <div className="h5 mb-4 text-center featured-price">
                    <b>Rp 150.000</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pl-1 pr-1">
                <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                  <a href="#">
                    <Image src="/images/product2.png" className="w-100 mt-1" />
                  </a>
                  <div className="rating text-center mt-3 mb-4">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="h5 text-center mb-4">Sepatu Sport NG 675</div>
                  <div className="price-discount h6 text-center">
                    <s>Rp 365.000</s>
                  </div>
                  <div className="h5 mb-4 text-center featured-price">
                    <b>Rp 150.000</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pl-1 pr-1">
                <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                  <a href="#">
                    <Image src="/images/product3.png" className="w-100 mt-1" />
                  </a>
                  <div className="rating text-center mt-3 mb-4">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="h5 text-center mb-4">Sepatu Sport NG 675</div>
                  <div className="price-discount h6 text-center">
                    <s>Rp 365.000</s>
                  </div>
                  <div className="h5 mb-4 text-center featured-price">
                    <b>Rp 150.000</b>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </Container>

    <Container fluid className="back-half-2 mt-5">
      <Container className="mt-5 pt-5 pb-5">
        <Row>
          <Col sm={9} className="mt-3 order-2 order-sm-1">
            <Swiper
              spaceBetween={30}
              navigation={true}
              // prettier-ignore
              breakpoints={{
                  "500": {
                    "slidesPerView": 1,
                  },
                  "768": {
                    "slidesPerView": 2,
                  },
                  "1024": {
                    "slidesPerView": 3,
                  },
                }}
              className="mySwiper pt-4 pb-5"
            >
              <SwiperSlide className="pl-1 pr-1">
                <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                  <a href="#">
                    <Image src="/images/product3.png" className="w-100 mt-1" />
                  </a>
                  <div className="rating text-center mt-3 mb-4">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="h5 text-center mb-4">Sepatu Sport NG 675</div>
                  <div className="price-discount h6 text-center">
                    <s>Rp 365.000</s>
                  </div>
                  <div className="h5 mb-4 text-center featured-price">
                    <b>Rp 150.000</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pl-1 pr-1">
                <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                  <a href="#">
                    <Image src="/images/product2.png" className="w-100 mt-1" />
                  </a>
                  <div className="rating text-center mt-3 mb-4">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="h5 text-center mb-4">Sepatu Sport NG 675</div>
                  <div className="price-discount h6 text-center">
                    <s>Rp 365.000</s>
                  </div>
                  <div className="h5 mb-4 text-center featured-price">
                    <b>Rp 150.000</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pl-1 pr-1">
                <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                  <a href="#">
                    <Image src="/images/product1.png" className="w-100 mt-1" />
                  </a>
                  <div className="rating text-center mt-3 mb-4">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="h5 text-center mb-4">Sepatu Sport NG 675</div>
                  <div className="price-discount h6 text-center">
                    <s>Rp 365.000</s>
                  </div>
                  <div className="h5 mb-4 text-center featured-price">
                    <b>Rp 150.000</b>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
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
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </>
);

export default ShoesCarousel;
