'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 py-12">
      <Container className="px-8 max-w-7xl mx-auto">
        <Row className="align-items-center justify-content-between gap-4 gap-md-0">
          <Col xs={12} md="auto" className="text-center text-md-start">
            <p className="font-label text-sm tracking-widest uppercase text-slate-500 mb-0">
              © {new Date().getFullYear()} Hồ Du Tuấn Đạt (Teichi)
            </p>
          </Col>
          <Col xs={12} md="auto">
            <div className="d-flex gap-4 justify-content-center justify-content-md-end">
              <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="#" className="font-label text-sm tracking-widest uppercase text-slate-500 hover:text-white transition-colors duration-500 no-underline">
                  LinkedIn
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="#" className="font-label text-sm tracking-widest uppercase text-slate-500 hover:text-white transition-colors duration-500 no-underline">
                  GitHub
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="#" className="font-label text-sm tracking-widest uppercase text-slate-500 hover:text-white transition-colors duration-500 no-underline">
                  Behance
                </Link>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
