# 🎥 ADVANCED CINEMATIC EFFECTS & ANIMATIONS
**Mục tiêu:** Nâng cấp trải nghiệm UI/UX bằng các hiệu ứng chuyển động mượt mà, mang phong cách không gian mạng (cyber/tech) và phần cứng IoT.
**Công cụ đề xuất:** Framer Motion (Next.js) hoặc CSS Keyframes.

## 1. Typewriter / System Log Effect (Hiệu ứng gõ Code)
**Vị trí:** Sub-headline ở Hero Section hoặc bên trong Modal hiển thị log hệ thống của dự án AIoT.
**Mô tả:** Chữ không hiện ra cùng lúc mà xuất hiện từng ký tự một, giống như terminal đang in ra dữ liệu hệ thống từ cảm biến.
**Cách triển khai (CSS thuần):**
```css
.typewriter-text {
  overflow: hidden; 
  border-right: .15em solid #00F0FF; /* Con trỏ nhấp nháy màu Cyan */
  white-space: nowrap; 
  margin: 0 auto;
  letter-spacing: .1em;
  animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing { from { width: 0 } to { width: 100% } }
@keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #00F0FF; } }