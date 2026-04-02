# ⚡ INTERACTION & COMPONENT GUIDE (NEXT.JS + REACT-BOOTSTRAP)
**Framework:** Next.js, React-Bootstrap
**Mục tiêu:** Cài đặt 4 yếu tố tương tác cốt lõi cho Portfolio Cinematic.

## 1. Smooth Scrolling (Cuộn trang mượt mà)
* **CSS Toàn cục:** Trong file `globals.css` của Next.js, thêm dòng code:
    ```css
    html { scroll-behavior: smooth; }
    ```
* **Liên kết Navbar:** Sử dụng `<Nav.Link href="#section-id">` của react-bootstrap để trượt đến các section tương ứng.

## 2. Accordion / Collapsible (Section About)
* **Triển khai:** Import và sử dụng component `<Accordion>` từ `react-bootstrap`.
* **Cấu trúc:** Sử dụng `<Accordion.Item>`, `<Accordion.Header>`, và `<Accordion.Body>`.
* **Styling:** Ghi đè CSS để đổi nền thành màu tối (`#111111`) và chữ trắng, loại bỏ border mặc định của Bootstrap.

## 3. Modal & Carousel (Chi tiết AIoT Smart Garden)
* **Logic (State):** Sử dụng Hook `useState` của React để quản lý trạng thái đóng/mở Modal: `const [show, setShow] = useState(false);`
* **Trigger:** Nút `<Button onClick={() => setShow(true)}>` đặt trên Card dự án.
* **Modal Structure:** Sử dụng component `<Modal show={show} onHide={() => setShow(false)} size="lg">`.
* **Carousel:** Đặt component `<Carousel>` bên trong `<Modal.Body>`. Cài đặt tự động chạy qua 3 slide ảnh (Sơ đồ mạch, giao diện Next.js, Log hệ thống).

## 4. Interactive Contact Form
* **Triển khai:** Sử dụng component `<Form>` của react-bootstrap (`<Form.Group>`, `<Form.Control>`).
* **Cinematic Glow CSS:** ```css
    .form-control:focus {
        background-color: #111;
        color: #fff;
        border-color: #00F0FF;
        box-shadow: 0 0 8px rgba(0, 240, 255, 0.5);
    }
    ```
* **Validation:** Quản lý state của form (validated) bằng `useState` và thêm thuộc tính `noValidate validated={validated}` vào thẻ `<Form>`.