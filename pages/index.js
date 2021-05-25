import Layout from "../src/component/layout";
import AccordionFaq from "../src/component/home/Accordion";
import Footer from "../src/component/home/Footer";
import Navigation from "../src/component/home/Navigation";
import Padding from "../src/component/padding";

export default function Home() {
  const title = "Bakul Sepatu";
  const desc = "A simple Landing page using next";

  return (
    <Layout title={title} desc={desc}>
      <header>
        <Navigation />
        <div className="container hero text-center text-white">
          <div className="row">
            <div className="col-sm-12 mt-5 mb-5">
              <div className="h1">BAKULSEPATU</div>
              <h1 className="mt-4 hero-title">
                Cari Sepatu Kasual Keren dan Kekinian?
              </h1>
              <p className="mt-4">
                Bakul sepatu aja, sepatu berkualitas original dengan gaya
                kekinian dengan harga murah, plus banyak promonya!
              </p>
              <a href="#product-first" className="btn mybtn mb-5 mt-3 px-5">
                Lihat Produk
              </a>
              <div className="pb-5"></div>
              <div className="pb-2"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="shoesimg text-center mb-5">
        <img src="/images/sepatu2.png" alt="sepatu" />
      </div>
      <Padding className="pb-2" />
      <div className="container testimonial mt-5">
        <div className="row">
          <div className="col-sm-6 text-center">
            <p className="text-testi">
              Sepatunya keren, bahan berkualitas, cocok dipakai buat formal
              ataupun nongkrong, cocok juga dipakai buat olahraga karena
              bahannya yang ringan dan lentur, the best pokoknya
            </p>
            <div className="rating text-center">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <img
              src="/images/profile_user.jpg"
              alt="profile"
              className="profile mt-4"
            />
            <div className="h4 mt-3">Jhon Doe</div>
            <p className="small">Skaters</p>
          </div>
          <div className="col-sm-6 text-center">
            <p className="text-testi">
              Nyaman banget dipake, apa lagi dengan disainnya yang keren, jadi
              tambah PD pake sepatu ini. Harganya juga murah produknya original,
              bakul sepatu ter da beess lah
            </p>
            <div className="rating text-center">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <img
              src="/images/profile_user2.jpg"
              alt="profile"
              className="profile mt-4"
            />
            <div className="h4 mt-3">Paijo Paul</div>
            <p className="small">Programmer</p>
          </div>
        </div>
      </div>
      <Padding className="pb-5" />
      <div className="container-fluid back-half mt-5" id="product-first">
        <div className="container mt-5 pt-5 pb-5">
          <div className="row">
            <div className="col-sm-3 mt-3">
              <div className="radius mt-8">
                <div className="pt-5 spacing5"></div>
                <div
                  className="bg-white mb-4"
                  // style="width: 120px;padding: 2px;"
                ></div>
                <h2 className="text-white">Sports</h2>
                <div className="pt-3"></div>
                <p className="text-white">
                  Sepatu original keren cocok dipakai buat lari dan olahraga
                  lainnya.
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
        </div>
      </div>
      <div className="container-fluid back-half-2 mt-5">
        <div className="container mt-5 pt-5 pb-5">
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
        </div>
      </div>

      <Padding className="pb-5" />
      <Padding className="pb-5" />
      <div className="container text-center mt-5 featured-product">
        <h2 className="text-center">Produk Unggulan Kami</h2>
        <div className="product-name text-center">NIKE ABC</div>
        <img src="/images/sepatu2.png" alt="sepatu" className="product-image" />
        <div className="price-discount mt-5 h2 text-center">
          <s>Rp 365.000</s>
        </div>
        <div
          className="h1 mb-4 mt-2 text-center"
          // style="color: #2B2AAC;"
        >
          <b>Rp 150.000</b>
        </div>
        <p>
          Sepatu ini memiliki desain keren dan kekinian dengan harga yang murah
          kamu bisa dapet sepatu original ini dan buat kamu tambah percaya diri.
          Dengan bahan berkaulitas sepatu ini akan awet dipakai untuk berbagai
          keperluan mulai dari formal, santai, bahkan juga bisa dipakai saat
          olahraga
        </p>

        <a
          href="https://wa.me/6289657511134"
          target="_blank"
          className="btn btn-buy mb-5 mt-3 px-5"
        >
          Beli Sekarang
        </a>
      </div>
      <Padding className="pt-5" />
      <div className="container">
        <div
          className="row"
          // style="border:1px solid #eee;border-radius: 10px;"
        >
          <div className="col-sm-3">
            <img src="/images/garansi.png" alt="garansi" className="w-100" />
          </div>
          <div className="col-sm-9 p-4">
            <h3>Garansi Uang Kembali</h3>
            <p className="mt-4">
              Kami selalu menjaga kualitas produk kami sehingga kami memberikan
              jaminan kepada para calon pembeli jika calon pembeli tidak puas
              dengan produk yang diterima, hal ini membuktikan produk kami
              tentunya harus berkualitas tinggi!
            </p>
          </div>
        </div>
      </div>
      <Padding className="pt-5" />
      <div
        className="container-fluid mt-5"
        // style="background-color: #4D69D1;"
      >
        <div className="p-2"></div>
        <h2 className="text-center text-white pt-5 pb-5">
          Kelebihan Bakulsepatu
        </h2>
        <div className="p-5"></div>
        <div className="p-4"></div>
      </div>
      <div className="container value-product">
        <div className="row">
          <div className="col-sm-4 box-value">
            <div className=" shadow-lg p-4 bg-white">
              <h3>Produk Original</h3>
              <p className="mt-3">
                produk yang kami tawarkan dijamin orinya! jadi pembeli gak perlu
                khawatir tentang produk yang kami punya
              </p>
            </div>
          </div>
          <div className="col-sm-4 box-value">
            <div className=" shadow-lg p-4 bg-white">
              <h3>Ringan & Solid</h3>
              <p className="mt-3">
                {" "}
                Dengan bahan yang bekualitas sepatu kami didesain sempurna
                sehingga memiliki fitur istimewa yaitu ringan namun tetap solid
              </p>
            </div>
          </div>
          <div className="col-sm-4 box-value">
            <div className=" shadow-lg p-4 bg-white">
              <h3>Bahan Awet</h3>
              <p className="mt-3">
                Karena bahannya yang mantap, sepatu kami memiliki ketahanan yang
                cukup tinggi untuk dipakai segala kegiatan.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Padding className="pt-5" />
      <Padding className="pt-3" />
      <AccordionFaq />
      <Padding className="p-5" />
      <Padding className="p-2" />
      <Footer />
    </Layout>
  );
}
