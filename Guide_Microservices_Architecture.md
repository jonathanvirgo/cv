# Hướng Dẫn Chi Tiết: Kiến Trúc Microservices

Dành cho vị trí yêu cầu thiết kế hệ thống lớn, phân tán.

## 1. Cơ Bản Về Microservices
*   **Định nghĩa:** Chia nhỏ ứng dụng Monolith (nguyên khối) thành các dịch vụ nhỏ, độc lập, mỗi dịch vụ phụ trách 1 nghiệp vụ (User Service, Product Service, Order Service).
*   **Ưu điểm:** Scale độc lập (Service nào nhiều tải thì scale service đó), công nghệ đan xen (Service A dùng Node, Service B dùng Java), lỗi service này không làm sập toàn bộ hệ thống.
*   **Nhược điểm:** Phức tạp trong vận hành (DevOps), khó debug, dữ liệu phân tán.

## 2. Giao Tiếp Giữa Các Services (Communication)
*   **Sync (Đồng bộ):** Service A gọi Service B và chờ kết quả.
    *   **RESTful API:** Dễ dùng, chuẩn chung.
    *   **gRPC:** Dùng Protobuf, nhanh hơn REST, type-safe, thường dùng cho giao tiếp nội bộ backend-to-backend.
*   **Async (Bất đồng bộ - Event Driven):** Service A bắn tin nhắn "Vừa trù tiền xong" -> Service B (Gửi mail) và Service C (Ship hàng) nhận tin và tự xử lý.
    *   **Message Broker:** RabbitMQ, Kafka.
    *   **Pattern:** Fire-and-forget, Publish/Subscribe.

## 3. Các Mẫu Thiết Kế Quan Trọng (Design Patterns)
*   **API Gateway:**
    *   Là "người gác cổng" duy nhất mà Client (Frontend/Mobile) gọi vào.
    *   Nhiệm vụ: Router request tới đúng service, Authentication (Check token), Rate Limiting (chống spam), Load Balancing.
*   **Circuit Breaker:**
    *   Vấn đề: Service A gọi Service B. Service B chết. Service A cứ gọi mãi -> chết theo (cascading failure).
    *   Giải pháp: Ngắt cầu dao. Nếu B lỗi 5 lần liên tiếp -> A tự trả về lỗi luôn không gọi B nữa, chờ 1 lúc mới thử lại.
*   **Saga Pattern (Distributed Transactions):**
    *   Trong Monolith: `BEGIN TRANSACTION` -> Trừ tiền -> Tạo đơn -> `COMMIT`.
    *   Trong Microservices: Tiền ở User Service, Đơn ở Order Service. Làm sao để atomicity?
    *   Cách làm: Chuỗi các transaction cục bộ. Nếu bước 2 lỗi -> Kích hoạt transaction bù (Compensating Transaction) để hoàn tiền bước 1.

## 4. Câu Hỏi Phỏng Vấn
1.  *Làm sao handle transaction giữa 2 microservices?* -> Nhắc tới Saga Pattern hoặc Two-phase commit (2PC).
2.  *Tại sao cần API Gateway?* -> Bảo mật, giảm số lượng request từ client, ẩn cấu trúc server bên dưới.
3.  *Phân biệt Monolith và Microservices?* -> Tính kết dính (Coupling) và khả năng deploy độc lập.
