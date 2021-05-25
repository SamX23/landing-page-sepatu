import { Col, Container, Row } from "react-bootstrap";
import Separator from "../separator";

const Hero = () => {
  return (
    <Container className="hero text-center text-white">
      <Row>
        <Col sm={12} className=" mt-5 mb-5">
          <div className="h1">BAKULSEPATU</div>
          <h1 className="mt-4 hero-title">
            Cari Sepatu Kasual Keren dan Kekinian?
          </h1>
          <p className="mt-4">
            Bakul sepatu aja, sepatu berkualitas original dengan gaya kekinian
            dengan harga murah, plus banyak promonya!
          </p>
          <a href="#product-first" className="btn mybtn mb-5 mt-3 px-5">
            Lihat Produk
          </a>
          <Separator className="pb-5" />
          <Separator className="pb-2" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
