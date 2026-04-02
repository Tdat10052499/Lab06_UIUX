'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function About() {
  return (
    <main className="pt-48 pb-32 min-h-screen">
      {/* SECTION 1: HEADER & BIO */}
      <section className="mb-40">
        <Container className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-headline tracking-tighter text-white"
            >
              Hành trình &amp; <span className="italic font-light text-primary text-shadow-glow">Triết lý</span>
            </motion.h1>
          </div>

          <Row className="gap-16 items-start">
            <Col md={5} className="mb-12 mb-md-0 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden relative group shadow-2xl"
              >
                {/* Fallback pattern background directly styled if no image supplied */}
                <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface-container to-surface-container-highest opacity-50" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg pointer-events-none" />
                {/* Interactive Glass overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="pt-8"
              >
                <span className="inline-block font-label text-xs tracking-[0.3em] uppercase text-primary mb-12">
                  HỒ DU TUẤN ĐẠT — INTERN
                </span>
                <div className="space-y-8">
                  <p className="text-2xl md:text-3xl font-headline leading-tight text-white mb-6">
                    Là sinh viên Đại học Văn Lang, lập trình với mình không chỉ là code, 
                    đó là quá trình kiến tạo sự liên kết giữa kỹ thuật và nghệ thuật.
                  </p>
                  <p className="text-lg font-body text-on-surface-variant leading-relaxed mb-8 max-w-xl font-light">
                    Sự tò mò dẫn dắt mình từ kiến trúc Web với Next.js đến vi điều khiển ESP32. Mục tiêu là trở thành một Kỹ sư có khả năng làm chủ sự giao thoa giữa Thiết kế, Phần mềm và Phần cứng.
                  </p>
                  
                  <div className="pt-8">
                    <button className="px-10 py-4 bg-transparent border border-outline-variant text-white rounded-full font-label text-sm uppercase tracking-widest hover:border-primary hover:bg-white/5 transition-all duration-300">
                      Tải Portfolio (PDF)
                    </button>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 2: CORE VALUES */}
      <section className="max-w-7xl mx-auto px-6">
        <Container>
          <Row className="gap-12 gap-md-0">
            {/* Value 1 */}
            <Col md={4}>
              <motion.div 
                whileHover={{ x: 10 }}
                className="border-l border-outline-variant/30 pl-8 py-4 group hover:border-primary transition-all duration-500 cursor-default"
              >
                <h4 className="text-xl font-headline text-white mb-4 group-hover:italic transition-all">Tối giản</h4>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed font-light">
                  Viết code sạch, loại bỏ sự dư thừa, tập trung vào hiệu năng tối đa và trải nghiệm người dùng tinh tế.
                </p>
              </motion.div>
            </Col>

            {/* Value 2 */}
            <Col md={4}>
              <motion.div 
                whileHover={{ x: 10 }}
                className="border-l border-outline-variant/30 pl-8 py-4 group hover:border-primary transition-all duration-500 cursor-default"
              >
                <h4 className="text-xl font-headline text-white mb-4 group-hover:italic transition-all">Hệ thống</h4>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed font-light">
                  Phân tích luồng dữ liệu một cách toàn diện từ cảm biến phần cứng đến giao diện người dùng.
                </p>
              </motion.div>
            </Col>

            {/* Value 3 */}
            <Col md={4}>
              <motion.div 
                whileHover={{ x: 10 }}
                className="border-l border-outline-variant/30 pl-8 py-4 group hover:border-primary transition-all duration-500 cursor-default"
              >
                <h4 className="text-xl font-headline text-white mb-4 group-hover:italic transition-all">Chủ động</h4>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed font-light">
                  Sẵn sàng làm chủ các môi trường mới, tự nghiên cứu công nghệ hiện đại.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
