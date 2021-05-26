import { Col, Container, Image, Row } from "react-bootstrap";

const Guarantee = () => (
  <Container>
    <Row className="guarantee-section">
      <Col sm={3} className="d-flex">
        <Image src="/images/garansi.png" alt="garansi" />
      </Col>
      <Col sm={9} className="p-4">
        <h3>Garansi Uang Kembali</h3>
        <p className="mt-4">
          Kami selalu menjaga kualitas produk kami sehingga kami memberikan
          jaminan kepada para calon pembeli jika calon pembeli tidak puas dengan
          produk yang diterima, hal ini membuktikan produk kami tentunya harus
          berkualitas tinggi!
        </p>
      </Col>
    </Row>
  </Container>
);

export default Guarantee;
