import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/SD.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shrey-dhiman99/">
                        <FontAwesomeIcon icon={faLinkedin} color="#d1ccae" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/shreydhiman99">
                        <FontAwesomeIcon icon={faGithub} color="#d1ccae" />
                    </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}