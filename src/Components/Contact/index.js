import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import 'animate.css';
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [errorMessage, setErrorMessage] = useState(''); // Add error message state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user_name, last_name, email, phone, message } = form.current;

    // Check for empty values
    if (!user_name.value.trim() || !last_name.value.trim() || !email.value.trim() || !phone.value.trim() || !message.value.trim()) {
      setErrorMessage('Please fill out all required fields.');
      return;
    } else {
      setErrorMessage(''); // Clear any previous error message
    }

    setButtonText("Sending...");
    emailjs.sendForm('service_t1tsnbe', 'template_xb0x4vg', form.current, 'bOW2iun93k6bRqlxb')
      .then(() => {
        alert('Message successfully sent!');
        window.location.reload(false);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="user_name" placeholder="First Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="last_name" placeholder="Last Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input important type="email" name="email" placeholder="Email Address" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" placeholder="Phone No." />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Message"></textarea>
                        <button type="submit" value="Send"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
