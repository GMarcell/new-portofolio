import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { RiWhatsappLine } from 'react-icons/ri'
import { SiLinkedin, SiInstagram } from 'react-icons/si'
import profile from "../assets/img/profile.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ContactProfile = () => {
  return(
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={ isVisible ? "animate__animated animate__zoomIn" : ""} src={profile} alt="Contact Us" style={{borderRadius: "30px", width: "70%"}}/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} style={{textAlign: "center"}}>
                  <h2>Get In Touch With Me</h2>
                  <div className="pb-4">
                    <a className="mx-3 text-white" href="https://www.instagram.com/grandmarcell/?hl=en" target="_blank">
                      <SiInstagram size={70}/>
                    </a>
                    <a className="mx-3 text-white" href="https://www.linkedin.com/in/grandmarcell/" target="_blank">
                      <SiLinkedin size={70}/>
                    </a>
                    <a className="mx-3 text-white" href="https://wa.me/628872059062" target="_blank">
                      <RiWhatsappLine size={70}/>
                    </a>
                  </div>
                  <h4>Email : grand1310marcell@gmail.com</h4>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}