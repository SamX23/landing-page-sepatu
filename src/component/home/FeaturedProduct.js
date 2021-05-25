import { Container } from "react-bootstrap";

const FeaturedProduct = () => {
  return (
    <Container className="text-center mt-5 featured-product">
      <h2 className="text-center">Produk Unggulan Kami</h2>
      <div className="product-name text-center">NIKE ABC</div>
      <img src="/images/sepatu2.png" alt="sepatu" className="product-image" />
      <div className="price-discount mt-5 h2 text-center">
        <s>Rp 365.000</s>
      </div>
      <div className="featured-price h1 mb-4 mt-2 text-center">
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
    </Container>
  );
};

export default FeaturedProduct;
