import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="text-center text-white py-5">
        <h2 className="text-center text-white mb-2">Bakulsepatu</h2>
        <div className="social my-3">
          <a href="https://web.facebook.com/SamiKalamallah/" target="_blank">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/samikalamallah" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/samx23/" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://wa.me/6289657511134" target="_blank">
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
        <p>
          Modified by{" "}
          <a href="https://kalamallah.xyz" className="text-white mt-2">
            Sami Kalammallah
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
