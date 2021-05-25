import React from "react";
import { Container } from "react-bootstrap";

const ShoesCarousel = () => {
  return (
    <Container fluid>
      <div className="back-half mt-5" id="product-first">
        <Container className="mt-5 pt-5 pb-5">
          <div className="row">
            <div className="col-sm-3 mt-3">
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
            </div>
            <div className="col-sm-9 col-sm-offset-3 mt-3">
              <div className="swiper-container">
                <div className="swiper-wrapper pt-4 pb-5">
                  <div className="swiper-slide pl-1 pr-1">
                    <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                      <a href="#">
                        <img
                          src="/images/product1.png"
                          className="w-100"
                          // style="margin-top:10px;"
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
                      <div
                        className="h5 mb-4 text-center"
                        // style="color: #2B2AAC;"
                      >
                        <b>Rp 150.000</b>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide pl-1 pr-1">
                    <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                      <a href="#">
                        <img
                          src="/images/product2.png"
                          className="w-100"
                          // style="margin-top:10px;"
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
                      <div
                        className="h5 mb-4 text-center"
                        // style="color: #2B2AAC;"
                      >
                        <b>Rp 150.000</b>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide pl-1 pr-1">
                    <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                      <a href="#">
                        <img
                          src="/images/product3.png"
                          className="w-100"
                          // style="margin-top:10px;"
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
                      <div
                        className="h5 mb-4 text-center"
                        // style="color: #2B2AAC;"
                      >
                        <b>Rp 150.000</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-pagination"
                  // style="margin-top: 100px !important;"
                ></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="back-half-2 mt-5">
        <Container className="mt-5 pt-5 pb-5">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3 mt-3 order-2 order-sm-1">
              <div className="swiper-container">
                <div className="swiper-wrapper pt-4 pb-5">
                  <div className="swiper-slide pl-1 pr-1">
                    <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                      <a href="#">
                        <img
                          src="/images/product1.png"
                          className="w-100"
                          // style="margin-top:10px;"
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
                      <div
                        className="h5 mb-4 text-center"
                        // style="color: #2B2AAC;"
                      >
                        <b>Rp 150.000</b>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide pl-1 pr-1">
                    <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                      <a href="#">
                        <img
                          src="/images/product2.png"
                          className="w-100"
                          // style="margin-top:10px;"
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
                      <div
                        className="h5 mb-4 text-center"
                        // style="color: #2B2AAC;"
                      >
                        <b>Rp 150.000</b>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide pl-1 pr-1">
                    <div className="shadow bg-white rounded-lg radius detail-brosur p-2">
                      <a href="#">
                        <img
                          src="/images/product3.png"
                          className="w-100"
                          // style="margin-top:10px;"
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
                      <div
                        className="h5 mb-4 text-center"
                        // style="color: #2B2AAC;"
                      >
                        <b>Rp 150.000</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-pagination"
                  // style="margin-top: 100px !important;"
                ></div>
              </div>
            </div>
            <div className="col-sm-3 mt-3 order-1 order-sm-2">
              <div className="radius mt-8">
                <div className="pt-5 spacing5"></div>
                <div
                  className="bg-white mb-4"
                  // style="width: 120px;padding: 2px;"
                ></div>
                <h2 className="text-white">Casual</h2>
                <div className="pt-3"></div>
                <p className="text-white">
                  Dengan desain kekinian buat kamu makin percaya diri
                </p>
                <div
                  className="prev bg-white border next-btn mt-4"
                  // style="font-size: 10pt;"
                >
                  <i className="fa fa-angle-left"></i>
                </div>
                <div
                  className="next bg-white border prev-btn mt-4"
                  // style="font-size: 10pt;"
                >
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default ShoesCarousel;
