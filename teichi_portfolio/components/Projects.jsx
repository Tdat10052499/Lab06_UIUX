'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Carousel } from 'react-bootstrap';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: 'transparent' }}>
      <Container>
        <h2 className="display-4 fw-bold text-light mb-5 text-center">FEATURED PROJECTS</h2>
        
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="cinematic-card bg-dark text-light border-0 shadow-lg">
              <Card.Body className="p-5">
                <Card.Title className="display-6 fw-bold mb-4" style={{ color: '#00F0FF' }}>
                  AIoT Smart Garden
                </Card.Title>
                <Card.Text className="fs-5 mb-4" style={{ color: '#EAEAEA', lineHeight: '1.8' }}>
                  A robust, full-stack automated gardening system. This project establishes seamless, real-time communication between custom-built ESP32 hardware sensors and a highly responsive Next.js web application. It enables instant remote monitoring, data-driven analytics, and intelligent environmental controls directly from the browser.
                </Card.Text>
                
                <Button 
                  onClick={handleShow}
                  size="lg"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#00F0FF',
                    color: '#00F0FF',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.2)';
                  }}
                >
                  View Case Study
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Case Study Modal */}
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        size="lg" 
        centered
        contentClassName="bg-dark text-light border-0"
        style={{ backdropFilter: 'blur(5px)' }}
      >
        <Modal.Header closeButton closeVariant="white" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Modal.Title style={{ color: '#00F0FF' }}>Case Study: AIoT Smart Garden</Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="p-0">
          <Carousel 
            interval={3000} 
            pause="hover" 
            fade // Hiệu ứng mờ chuyển slide cho thanh lịch
          >
            {/* Slide 1: Hardware */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x450/111111/00F0FF?text=Hardware+Circuit+(ESP32)"
                alt="Hardware Circuit"
                style={{ objectFit: 'cover', height: '450px' }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3 mb-4 mx-auto" style={{ maxWidth: '80%' }}>
                <h5 className="fw-bold text-white">ESP32 Microcontroller Setup</h5>
                <p className="mb-0 text-light">Sensor integration (humidity, temp, soil) and secure Wi-Fi/MQTT communication protocols.</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            {/* Slide 2: Web UI */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x450/111111/00F0FF?text=Next.js+Web+Dashboard"
                alt="Next.js Web UI"
                style={{ objectFit: 'cover', height: '450px' }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3 mb-4 mx-auto" style={{ maxWidth: '80%' }}>
                <h5 className="fw-bold text-white">Next.js Web Interface</h5>
                <p className="mb-0 text-light">Real-time data visualization, responsive dashboard, and remote device command capabilities.</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            {/* Slide 3: Logs & Data */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x450/111111/00F0FF?text=System+Logs+%26+Analytics"
                alt="System Logs"
                style={{ objectFit: 'cover', height: '450px' }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3 mb-4 mx-auto" style={{ maxWidth: '80%' }}>
                <h5 className="fw-bold text-white">Cloud Sync & System Logs</h5>
                <p className="mb-0 text-light">Robust backend architecture ensuring low latency and persistent historical data tracking.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        
        <Modal.Footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Button variant="outline-light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Projects;
