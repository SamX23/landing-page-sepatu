import { Accordion, Card, Container } from "react-bootstrap";

const AccordionFaq = () => {
  return (
    <Container className="faq">
      <h2 className="text-center pt-5 pb-5">FAQ</h2>
      <Accordion defaultActiveKey="0" id="accordionExample">
        <Card>
          <Accordion.Toggle
            className="accordion-button"
            as={Card.Header}
            eventKey="0"
          >
            Lokasinya dimana?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Kami berlokasi di yogyakarta tapi siap kirim keseluruh indonesia
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle
            className="accordion-button"
            as={Card.Header}
            eventKey="1"
          >
            Kualitasnya dijamin ya?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Karena produknya ori tentu kualitasnya terjaga sob
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle
            className="accordion-button"
            as={Card.Header}
            eventKey="2"
          >
            Bisa kirim semua pulau?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Sangat bisa, kami melayani pengiriman seluruh pulau di Indonesia.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle
            className="accordion-button"
            as={Card.Header}
            eventKey="3"
          >
            Gratis ongkir gak ya?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Ada nihh, belanja minimal 1 juta di toko kami anda akan
              mendapatkan fasiltas gratis ongkir{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default AccordionFaq;
