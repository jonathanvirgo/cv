# Hướng Dẫn Chi Tiết: Frontend ReactJS & Next.js

Vì bạn đã có nền tảng Angular, việc chuyển sang React/Next.js chủ yếu là thay đổi tư duy từ "Two-way binding" sang "One-way data flow".

## 1. React Core Concepts
*   **Component-Based:** Chia nhỏ UI thành các mảnh ghép độc lập (Header, Footer, ProductCard).
*   **Virtual DOM:** React tạo ra 1 bản sao DOM ảo. Khi state thay đổi, nó so sánh (Diffing) với bản gốc và chỉ update những điểm thay đổi -> Tối ưu hiệu năng.
*   **Hooks (Quan trọng nhất):**
    *   `useState`: Khai báo biến trạng thái.
    *   `useEffect`: Xử lý side-effects (gọi API, subscription) thay cho `componentDidMount`.
    *   `useMemo` / `useCallback`: Cache giá trị/hàm để tránh tính toán lại không cần thiết.
*   **One-way Data Flow:** Dữ liệu chỉ truyền từ Cha xuống Con (qua Props). Con muốn đổi dữ liệu Cha? -> Cha phải truyền xuống 1 callback function.

## 2. Next.js (The React Framework)
JD yêu cầu Next.js vì khả năng SEO và Performance.
*   **CSR (Client-Side Rendering):** Tải JS về -> Browser render HTML. (Chậm load đầu, SEO kém). React thuần làm kiểu này.
*   **SSR (Server-Side Rendering):** Server render ra HTML hoàn chỉnh -> Gửi về Browser. (Load nhanh, SEO tốt, nhưng tốn tài nguyên Server).
*   **SSG (Static Site Generation):** Build ra file HTML tĩnh ngay lúc deploy. (Siêu nhanh, nhưng chỉ dùng cho nội dung ít thay đổi như Blog).
*   **File-system Routing:** Tạo file trong folder `/pages` hoặc `/app` tự động thành route, không cần config Router phức tạp như Angular.

## 3. State Management
*   **Redux Toolkit:**
    *   **Store:** Kho chứa dữ liệu chung toàn app.
    *   **Slice:** Chia nhỏ Store theo feature (UserSlice, CartSlice).
    *   **Dispatch Action:** Gửi lệnh để sửa đổi Store.
*   **Context API:** Giải pháp built-in của React cho các state đơn giản (Theme Light/Dark, User Info) để tránh "Prop Drilling".

## 4. Frontend Optimization
*   **Code Splitting:** Dùng `React.lazy()` và `Suspense` để chỉ tải component khi người dùng cuộn tới nó.
*   **Image Optimization:** Next.js có `<Image />` component tự động resize, nén ảnh, lazy load.

## 5. Câu Hỏi Phỏng Vấn
1.  *Lifecycle của React Hooks là gì?* -> Tập trung vào `useEffect`.
2.  *SSR vs CSR khác gì nhau?* -> Thời điểm sinh ra HTML (Server vs Browser).
3.  *Làm sao tránh re-render thừa trong React?* -> `React.memo`, `useCallback`, quản lý state hợp lý.
