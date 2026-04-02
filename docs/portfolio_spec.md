# 🎬 PORTFOLIO DESIGN SPECIFICATION & CONTENT OUTLINE
**Type:** Single-page Scrolling Portfolio
**Role:** Intern (Software/IoT Engineer)
**Vibe/Style:** Cinematic, Dark Mode, High Contrast, Immersive, Tech-focused.
**Tooling:** Bootstrap Studio, HTML/CSS/JS.

## 1. VISUAL DESIGN (DESIGN SYSTEM)
Phong cách Cinematic yêu cầu nền tối sâu, ánh sáng tập trung (spotlight) và độ tương phản cao để làm nổi bật các thành phần.

### 1.1 Color Palette
* **Background (Nền chính):** `#050505` (Deep Cinematic Black - tạo chiều sâu).
* **Surface (Nền phụ/Card):** `#111111` hoặc `#1A1A1A` (Tạo phân lớp với nền chính).
* **Primary Accent (Màu nhấn):** `#00F0FF` (Cyan/Neon Blue - Mang hơi hướng công nghệ, IoT, vi mạch).
* **Text Primary (Chữ chính):** `#EAEAEA` (Off-white, dễ đọc trên nền tối).
* **Text Secondary (Chữ phụ):** `#888888` (Xám nhạt).

### 1.2 Typography
* **Headings:** `Montserrat` hoặc `Inter` (Font không chân, dày, hiện đại, in hoa cho tiêu đề section).
* **Body Text:** `Roboto` hoặc `Open Sans` (Đọc mượt mà trên màn hình dài).
* **Code Snippets / Tech Stack:** `Fira Code` hoặc `JetBrains Mono` (Tạo "coder vibe" cho các đoạn log hoặc tên công nghệ).

## 2. LAYOUT & STRUCTURE (BOOTSTRAP STUDIO COMPONENTS)
Trang web sẽ là một Landing Page dài, sử dụng Container, Grid system và các Utilities của Bootstrap 5.

### 2.1 Sticky Navbar (Tương tác: Smooth Scrolling)
* **UI:** Thanh điều hướng trong suốt, có hiệu ứng blur (backdrop-filter) khi cuộn.
* **Links:** Home, About, Projects, Contact.
* **Interaction:** Khi click vào link, trang sẽ trượt mượt mà (smooth scroll) đến section tương ứng.

### 2.2 Hero Section (100vh)
* **Background:** Hình ảnh macro tối màu của vi mạch, hoặc video/GIF loop cảnh gõ code/system log mờ dần vào nền đen.
* **Content:**
    * Tagline nhỏ: `[ HI, I'M A FUTURE ]`
    * Headline (H1 lớn, in đậm): `SOFTWARE & IOT INTERN.`
    * Sub-headline: "Bridging the gap between hardware and web interfaces."
    * **Call to Action (CTA):** Nút "View My Work" (Outline button với viền Cyan, hiệu ứng glow khi hover).

### 2.3 About Section (Tương tác: Collapsible Section)
* **Layout:** Grid 2 cột (Cột trái: Ảnh chân dung phong cách low-key/tối; Cột phải: Nội dung).
* **Content:** Giới thiệu ngắn gọn về đam mê lập trình và kết nối phần cứng.
* **Interaction:** Sử dụng **Bootstrap Accordion (Collapsible)** để người dùng nhấn vào xem thêm chi tiết về:
    * *Education & Goal:* Mục tiêu thực tập sinh.
    * *Tech Stack:* C++, Python, JavaScript, React, etc.

### 2.4 Projects Section (Tương tác: Carousel & Modal)
* **Layout:** CSS Grid hoặc Bootstrap Row/Col chứa các Cards.
* **Spotlight Project: AIoT Smart Garden**
    * **Card UI:** Ảnh thumbnail tối màu, tiêu đề "AIoT Smart Garden", badge công nghệ (ESP32, Next.js).
    * **Interaction 1 (Carousel):** Bên trong Modal hoặc ngay trên trang, sử dụng **Bootstrap Carousel** để slide qua các hình ảnh: 1. Sơ đồ đi dây LED và ESP32, 2. Giao diện điều khiển web Next.js, 3. Ảnh thực tế.
    * **Interaction 2 (Modal):** Khi click "View Details" trên Card, một **Bootstrap Modal** (pop-up lớn) sẽ hiện ra. Bên trong chứa:
        * Mô tả chi tiết cách xử lý điện áp bằng adapter, cách giao tiếp dữ liệu.
        * Một đoạn code snippet hoặc system log minh họa.

### 2.5 Contact Section (Tương tác: Contact Form)
* **Layout:** Căn giữa, form tối giản trên nền Card đen nhạt.
* **Elements:** Input Name, Input Email, Textarea Message, Submit Button (Màu Cyan nổi bật).
* **Interaction:** Form có hiệu ứng focus (viền sáng lên) khi gõ. Validation đơn giản (báo đỏ nếu để trống).
* **Footer:** Các icon mạng xã hội (GitHub, LinkedIn) thiết kế dạng monochrome, sáng lên khi hover.

## 3. RESPONSIVE GUIDELINES
* **Desktop (xl, lg):** Header ngang, About 2 cột, Projects dàn hàng ngang (3 cards/hàng).
* **Tablet (md):** Projects giảm còn 2 cards/hàng. Font size giảm nhẹ.
* **Mobile (sm, xs):** Navbar chuyển thành Hamburger menu. Tất cả các cột stack thành 1 cột dọc (1 card/hàng). Accordion thu gọn để tiết kiệm không gian.