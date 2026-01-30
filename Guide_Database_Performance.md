# Hướng Dẫn Chi Tiết: Database & Performance

Tối ưu hóa dữ liệu là kỹ năng bắt buộc cho Senior Developer.

## 1. RDBMS (MySQL/PostgreSQL) Optimization
*   **Indexing (Đánh chỉ mục):**
    *   Là gì: Giống như mục lục sách, giúp tìm kiếm nhanh hơn.
    *   Lưu ý: Index giúp `SELECT` nhanh nhưng làm `INSERT/UPDATE/DELETE` chậm (vì phải cập nhật cả index). Không nên index bừa bãi.
    *   **Composite Index:** Index trên nhiều cột cùng lúc (VD: `WHERE status = 1 AND created_at > ...`).
*   **N+1 Query Problem:**
    *   Lỗi kinh điển khi dùng ORM (như Laravel Eloquent hay Prisma).
    *   Ví dụ: Lấy danh sách 10 User -> Loop qua từng User để query lấy Address. Tổng: 1 query User + 10 query Address = 11 queries.
    *   Fix: Dùng `Eager Loading` (VD: `User.find().populate('address')` hoặc `.with('address')`) -> Chỉ mất 2 queries.
*   **Partitioning/Sharding:**
    *   Partitioning: Chia bảng to thành các bảng nhỏ hơn trên cùng 1 server (VD: chia theo năm).
    *   Sharding: Chia dữ liệu ra nhiều server vật lý khác nhau (Database Scaling).

## 2. NoSQL & Caching Strategies
*   **Redis (In-memory Key-Value):**
    *   **Tốc độ:** Siêu nhanh vì lưu trên RAM.
    *   **Cache-Aside Pattern:**
        1. App check Cache.
        2. Nếu có -> Trả về Client (Cache Hit).
        3. Nếu không -> Query Database -> Trả về Client -> Lưu vào Cache (Cache Miss).
    *   **Cache Invalidation:** Khó nhất là khi nào xóa cache? (TTL - Time to live, hoặc xóa chủ động khi Update Data).
*   **MongoDB:**
    *   Dùng khi dữ liệu không có cấu trúc cố định (Unstructured), cần ghi (write) cực nhanh.

## 3. Application Performance
*   **Connection Pooling:** Không mở mới connection DB cho mỗi request. Dùng 1 pool các kết nối mở sẵn để tái sử dụng.
*   **Load Balancing:** Phân tải request đều ra nhiều server (Round-robin, Least connections).

## 4. Câu Hỏi Phỏng Vấn
1.  *Làm thế nào để tối ưu một câu query chậm?* -> Dùng `EXPLAIN` để xem execution plan, check index, giảm bớt join, select đúng cột cần lấy.
2.  *Phân biệt SQL và NoSQL? Khi nào dùng cái nào?* -> SQL: Cần transaction chặt chẽ (hoá đơn, tiền). NoSQL: Cần tốc độ cao, dữ liệu linh hoạt (Log, Feed, Chat).
3.  *Vấn đề N+1 là gì?* -> Đã giải thích ở trên.
