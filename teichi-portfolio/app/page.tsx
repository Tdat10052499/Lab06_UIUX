'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Video overlay replacement -> Using gradients and glass for performance */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-surface-dim mix-blend-multiply" />
        <div className="absolute top-[20%] left-1/4 w-96 h-96 bg-surface-container-highest rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-surface-container-high rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="relative z-20 w-full pt-32 pb-24 text-center">
        <Container className="px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="font-headline text-5xl md:text-8xl lg:text-[10rem] tracking-tight leading-[0.9] max-w-5xl mx-auto mb-8 text-white">
              Nơi <em className="italic font-light text-primary">đam mê</em><br />
              kiến tạo <em className="italic font-light text-primary">giá trị.</em>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant leading-relaxed mb-16 font-light">
              Xin chào, mình là Hồ Du Tuấn Đạt (Teichi), sinh viên trường Đại học Văn Lang. Khát khao kiến tạo hệ thống bằng sự kết hợp giữa thiết kế phần mềm và lập trình IoT.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6"
          >
            <Link href="/about" className="no-underline">
              <button className="px-10 py-4 bg-primary text-on-primary rounded-full font-label text-sm font-semibold tracking-widest uppercase flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(198,198,199,0.2)] hover:shadow-[0_0_30px_rgba(198,198,199,0.4)]">
                Về bản thân
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </Link>

            <Link href="/projects" className="no-underline group flex items-center gap-3 font-label tracking-widest uppercase text-xs font-bold text-on-surface hover:text-white transition-all py-4">
              XEM DỰ ÁN
              <span className="w-12 h-[1px] bg-outline-variant group-hover:w-20 group-hover:bg-primary transition-all duration-500"></span>
            </Link>
          </motion.div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-label text-[10px] tracking-[0.3em] uppercase">Khám phá</span>
        <motion.div 
          animate={{ height: ['0px', '48px', '0px'], y: [0, 24, 48] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-[1px] bg-gradient-to-b from-primary to-transparent"
          style={{ height: '48px' }}
        />
      </motion.div>
    </main>
  );
}
