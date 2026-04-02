'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  // Cấu hình hiệu ứng Fade-In Up cho framer-motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section id="hero" className="d-flex align-items-center min-vh-100 pb-5" style={{ backgroundColor: 'transparent' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="display-3 fw-bold text-light mb-3">
                SOFTWARE & IOT INTERN
              </h1>
              
              <p className="typewriter-text lead mb-5" style={{ color: '#EAEAEA' }}>
                Bridging the gap between hardware and web interfaces.
              </p>
              
              <Button 
                href="#projects"
                size="lg"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#00F0FF',
                  color: '#00F0FF',
                  padding: '0.75rem 2rem',
                  letterSpacing: '1px',
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
                View My Work
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
