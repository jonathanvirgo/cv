# Hướng Dẫn Chi Tiết: Node.js Advanced

Tài liệu này đi sâu vào các khái niệm nâng cao của Node.js cần thiết cho vị trí Senior Backend.

## 1. Event Loop & Kiến Trúc Bất Đồng Bộ (Asynchronous)
*   **Single Thread but Scalable:** Giải thích tại sao Node.js chỉ chạy trên 1 luồng nhưng vẫn xử lý được hàng nghìn request (nhờ libuv và cơ chế Non-blocking I/O).
*   **Phases của Event Loop:**
    1.  **Timers:** `setTimeout()`, `setInterval()`.
    2.  **Pending Callbacks:** Các I/O callback bị hoãn.
    3.  **Idle, Prepare:** Dùng nội bộ.
    4.  **Poll:** Lấy I/O events mới, thực thi scripts liên quan.
    5.  **Check:** `setImmediate()`.
    6.  **Close Callbacks:** `socket.on('close', ...)`.
*   **Macrotask vs Microtask:** `Promise.nextTick()` và `Promise` (Microtask) luôn chạy trước `setTimeout` (Macrotask).

## 2. Xử Lý Tác Vụ Nặng (CPU Architecture)
*   **Vấn đề:** Node.js rất tệ với tính toán CPU nặng (thao tác ảnh, nén file, thuật toán phức tạp) vì nó chặn Event Loop.
*   **Giải pháp:**
    *   **Worker Threads:** Tạo đa luồng trong Node.js để chạy code JS song song (chia sẻ bộ nhớ qua `SharedArrayBuffer`).
    *   **Cluster Module:** Fork ra nhiều process con, mỗi process chạy 1 instance của app trên 1 core CPU khác nhau (Tận dụng multi-core).
    *   **Child Process:** Dùng `spawn`, `exec` để gọi script bên ngoài (ví dụ gọi Python để xử lý AI).

## 3. Quản Lý Memory & Streams
*   **Streams:** Xử lý dữ liệu lớn mà không cần tải hết vào RAM.
    *   *Readable:* Đọc file.
    *   *Writable:* Ghi file.
    *   *Duplex/Transform:* Vừa đọc vừa ghi (ví dụ nén Gzip luồng dữ liệu).
    *   *Pipe:* `readStream.pipe(writeStream)`.
*   **Memory Leaks:**
    *   Cách phát hiện: Dùng Chrome DevTools (Heap Snapshot) hoặc `node --inspect`.
    *   Nguyên nhân phổ biến: Biến toàn cục (Global variables), Closures không được giải phóng, Event listeners không được remove (`off`).

## 4. Câu Hỏi Phỏng Vấn Thường Gặp
1.  *Node.js xử lý concurrency như thế nào?* -> Trả lời về Event Loop và Libuv thread pool.
2.  *Sự khác nhau giữa `process.nextTick()` và `setImmediate()`?* -> `nextTick` chạy ngay sau operation hiện tại (trước khi event loop quay lại), `setImmediate` chạy ở phase Check.
3.  *Khi nào dùng Node.js, khi nào không nên dùng?* -> Dùng cho I/O intensive, Real-time (Chat). Không dùng cho CPU intensive (nếu không có worker threads).
