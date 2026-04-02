'use client';

import { motion } from 'framer-motion';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 left-0 right-0 z-50 flex justify-center w-full px-4"
    >
      <div className="w-full max-w-[1000px]">
        <BootstrapNavbar expand="md" className="cinematic-pill px-6 py-3 border border-white/10 flex items-center justify-between">
          <Link href="/" className="font-headline italic text-xl tracking-tighter text-white no-underline">
            TEICHI
          </Link>
          
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none focus:outline-none">
            {/* Fallback to simple text menu if icons not loaded */}
            <span className="text-white text-sm tracking-widest uppercase">Menu</span>
          </BootstrapNavbar.Toggle>
          
          <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto flex gap-4 md:gap-8 align-items-center mt-3 mt-md-0">
              <Link href="/" className="font-label text-xs tracking-widest uppercase text-slate-400 hover:text-white transition-colors no-underline">Trang chủ</Link>
              <Link href="/about" className="font-label text-xs tracking-widest uppercase text-slate-400 hover:text-white transition-colors no-underline">Giới thiệu</Link>
              <Link href="/skills" className="font-label text-xs tracking-widest uppercase text-slate-400 hover:text-white transition-colors no-underline">Kỹ năng</Link>
              <Link href="/projects" className="font-label text-xs tracking-widest uppercase text-slate-400 hover:text-white transition-colors no-underline">Dự án</Link>
              <Link href="/contact" className="font-label text-xs tracking-widest uppercase text-slate-400 hover:text-white transition-colors no-underline">Liên hệ</Link>
            </Nav>
          </BootstrapNavbar.Collapse>

          <div className="hidden md:block">
            <button className="bg-slate-200 text-slate-900 px-5 py-2 rounded-full font-label text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-300">
              Xem CV
            </button>
          </div>
        </BootstrapNavbar>
      </div>
    </motion.div>
  );
}
