import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/icons8-linkedin.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/icons8-instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="nipun"><h1>N.DEV</h1></div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end p-4">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nipun-vats-295524216"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/nipun221"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/v_a_t_s_52/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>This website belongs to @NIPUN</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
