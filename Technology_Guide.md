# Hướng Dẫn Công Nghệ & Lộ Trình Ôn Tập (Dựa trên JD)

Tài liệu này tổng hợp các từ khóa công nghệ quan trọng từ Mô tả công việc (JD) mà bạn cần phân tích hoặc ôn tập để chuẩn bị cho phỏng vấn.

## 1. Backend (Trọng Tâm: Scalability & Performance)
JD yêu cầu: Java/Golang/NodeJS. Với nền tảng Node.js của bạn, hãy tập trung sâu vào:

### A. Node.js Advanced
*   **Event Loop & Architecture:** Hiểu sâu về cơ chế đơn luồng (single-thread), non-blocking I/O.
*   **Worker Threads:** Cách xử lý các tác vụ nặng (CPU-intensive) trong Node.js.
*   **Streams & Buffers:** Xử lý dữ liệu lớn (file sytem, HTTP requests) hiệu quả.

### B. Kiến Trúc Microservices (Rất quan trọng)
*   **API Gateway:** Cổng vào duy nhất cho các request (Authentication, Rate limiting).
*   **Communication:**
    *   *Đồng bộ (Sync):* RESTful API, **gRPC** (hiệu năng cao, nên đọc thêm).
    *   *Bất đồng bộ (Async):* Message Queue (**RabbitMQ** hoặc **Kafka**) cho kiến trúc Event-driven.
*   **Distributed Transactions:** Saga Pattern hoặc 2-Phase Commit (cách xử lý giao dịch đảm bảo tính toàn vẹn dữ liệu giữa các services).

### C. Database & Caching
*   **RDBMS (MySQL):**
    *   **Indexing:** B-Tree, Indexing strategies (khi nào đánh index, khi nào không).
    *   **Transaction Isolation:** Hiểu về Dirty read, Phantom read.
    *   **Sharding/Partitioning:** Chia nhỏ database khi dữ liệu quá lớn.
*   **NoSQL & Caching:**
    *   **Redis:** Chiến lược Caching (Cache-aside, Write-through), dùng Redis làm Message Broker.
    *   **MongoDB:** Document store, phù hợp cho dữ liệu cấu trúc linh động (log, product catalog).

## 2. Frontend (Trọng tâm: ReactJS & Performance)

### A. ReactJS & Next.js
*   **React Hooks:** Sử dụng thành thạo `useMemo`, `useCallback` để tránh re-render không cần thiết.
*   **Next.js (SSR/SSG):** Hiểu khi nào dùng Server-side Rendering (SSR) vs Static Site Generation (SSG) để tối ưu SEO và tốc độ tải trang đầu.
*   **State Management:**
    *   **Redux (Toolkit):** Quản lý luồng dữ liệu phức tạp.
    *   **Zustand:** Giải pháp nhẹ nhàng hơn (đang là xu hướng).

### B. Performance Optimization
*   **Web Vitals:** LCP, CLS, FID (các chỉ số đo lường trải nghiệm người dùng của Google).
*   **Lazy Loading & Code Splitting:** Chỉ tải code JS/CSS khi cần thiết.
*   **Bundle Size:** Sử dụng Webpack/Vite analyzer để giảm kích thước file build.

## 3. DevOps & Tooling
*   **Docker:** Container hóa ứng dụng (viết Dockerfile multi-stage build để giảm dung lượng image).
*   **CI/CD:** Quy trình tự động Build -> Test -> Deploy (GitHub Actions, Jenkins).
*   **Testing:**
    *   **Unit Test:** Jest (Test logic hàm lẻ).
    *   **E2E Test:** Cypress (Test luồng người dùng).

## 4. Từ Khóa Đặc Biệt Trong JD
*   **"System Design"**: Chuẩn bị cho câu hỏi "Thiết kế hệ thống bán vé/booking chịu tải cao".
*   **"Incident Response"**: Quy trình xử lý khi hệ thống bị sập (Log tracing, Monitoring, Rollback).
