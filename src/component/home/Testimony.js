import { Col, Container, Row, Image } from "react-bootstrap";

const Testimony = () => (
  <Container className="testimonial mt-5">
    <Row>
      <Col sm={6} className="text-center">
        <p className="text-testi">
          Sepatunya keren, bahan berkualitas, cocok dipakai buat formal ataupun
          nongkrong, cocok juga dipakai buat olahraga karena bahannya yang
          ringan dan lentur, the best pokoknya
        </p>
        <div className="rating text-center">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <Image
          roundedCircle
          src="/images/profile_user.jpg"
          alt="profile"
          className="profile mt-4"
        />
        <div className="h4 mt-3">Jhon Doe</div>
        <p className="small">Skaters</p>
      </Col>
      <Col sm={6} className="text-center">
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
        <Image
          roundedCircle
          src="/images/profile_user2.jpg"
          alt="profile"
          className="profile mt-4"
        />
        <div className="h4 mt-3">Paijo Paul</div>
        <p className="small">Programmer</p>
      </Col>
    </Row>
  </Container>
);

export default Testimony;
