# Hướng Dẫn Chi Tiết: DevOps & CI/CD

Developer hiện đại không chỉ code mà phải biết code chạy ở đâu và deploy thế nào.

## 1. Docker (Containerization)
*   **Concept:** Đóng gói code + môi trường (Node version, OS library) vào 1 cái hộp (Container). Code chạy trên máy Dev thế nào thì lên Server chạy y hệt.
*   **Dockerfile:** File công thức để build ra Image.
    ```dockerfile
    FROM node:18-alpine
    WORKDIR /app
    COPY . .
    RUN npm install
    CMD ["npm", "start"]
    ```
*   **Docker Compose:** Chạy nhiều container cùng lúc (App + Database + Redis) chỉ với 1 lệnh `docker-compose up`.

## 2. CI/CD (Continuous Integration / Continuous Deployment)
*   **CI (Tích hợp liên tục):**
    *   Mỗi khi Push code lên Git -> Tự động chạy Test -> Tự động Build.
    *   Mục đích: Phát hiện lỗi sớm, không để code lỗi merge vào nhánh chính.
*   **CD (Triển khai liên tục):**
    *   Sau khi CI xanh -> Tự động deploy code mới lên Server (staging/production).
    *   Công cụ: GitHub Actions, GitLab CI, Jenkins.

## 3. Linux Command Line (Cơ bản nhưng quan trọng)
*   `ssh`: Kết nối vào server.
*   `grep`, `cat`, `tail -f`: Xem log server, tìm kiếm text trong log.
*   `top`, `htop`: Xem CPU/RAM server đang bị chiếm dụng bởi process nào.
*   `chmod`, `chown`: Phân quyền file.
*   `nginx`: Cấu hình Reverse Proxy (đứng trước Node.js để hứng request port 80/443).

## 4. Monitoring & Logging
*   **Logging:** Không dùng `console.log` trên production. Dùng thư viện log chuẩn (Winston, Pino) để log ra file hoặc đẩy về hệ thống log tập trung (ELK Stack).
*   **PM2:** Process Manager cho Node.js. Giúp app tự khởi động lại khi crash, chạy cluster mode.

## 5. Câu Hỏi Phỏng Vấn
1.  *Docker khác gì máy ảo (Virtual Machine)?* -> Docker nhẹ hơn, dùng chung OS kernel với host, khởi động giây tính bằng giây.
2.  *Quy trình CI/CD bạn từng làm là gì?* -> Push code -> GitHub Actions chạy lint/test -> Build Docker Image -> Push Image lên Registry -> SSH vào server pull image mới về và restart container.
