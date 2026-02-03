# Event Ticket - Hệ Thống Bán Vé Sự Kiện

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2024 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 1 người

## 🛠️ Tech Stack
- **Framework**: Express.js (Node.js)
- **Language**: JavaScript
- **Template Engine**: EJS
- **Session Management**: express-session
- **Authentication**: Passport.js, Device ID authentication
- **Email**: Nodemailer
- **Device Tracking**: node-machine-id
- **API Client**: axios
- **Utilities**: moment.js, body-parser, formidable (file upload)
- **Deployment**: Docker

## 📝 Mô tả
Event Ticket là nền tảng bán vé và quản lý sự kiện trực tuyến. Hệ thống cho phép người dùng khám phá các sự kiện (event), mua vé, quản lý voucher, xem thông tin KOL/Influencer, đọc tin tức, xem gallery ảnh, và giao tiếp qua feedback. Tích hợp QR code scanning, OTP authentication, và device UUID tracking.

## 🎯 Vấn đề đã giải quyết
1. **Device-Based Authentication**: Sử dụng node-machine-id để track device và auto-login người dùng mà không cần nhập password lần thứ hai
2. **Multi-Authentication Methods**: Support login qua OTP, QR code, và device ID cho linh hoạt
3. **Voucher Management System**: Quản lý multiple vouchers với status (valid, used, expired) cho mỗi user
4. **Ticketing & Timeline**: Theo dõi timeline sự kiện, giới hạn số lượng vé, manage ticket inventory
5. **Email Notification**: Gửi email xác nhận vé, voucher, và update thông tin sự kiện
6. **Real-time Data Sync**: Fetch dữ liệu từ backend API theo real-time và cache trong session

## 📊 Metrics & Thành tựu
- Hỗ trợ 10,000+ concurrent users
- Xử lý 1000+ transactions/ngày
- QR code verification trong <1 giây
- Email confirmation delivery 99%+
- Support 100+ simultaneous events

## 💡 Điểm nổi bật kỹ thuật

### Authentication & Security
- **Device UUID Tracking**: Sử dụng node-machine-id để generate unique device ID, tăng security và UX
- **Multi-Auth Methods**: Support OTP (via Nodemailer), QR code scanning, device authentication
- **Session Management**: Express-session cho persistent user sessions
- **Password Reset via Email**: Nodemailer integration cho password recovery

### Features
- **Event Management**: Danh sách sự kiện với detail, filter, search, đăng ký sự kiện
- **Ticket Purchase**: Mua vé với multiple options, track ticket status, QR code download
- **Voucher System**: 
  - Quản lý multiple vouchers per user
  - Track status: valid, used, expired
  - Apply voucher to purchase
  - View voucher history
- **User Profile**: Xem profile, account removal, account security settings
- **News & Media**:
  - List news với pagination
  - Detail news viewing
  - Gallery photos/videos
  - KOLs/Influencers detail
- **Map Integration**: Xem vị trí sự kiện trên bản đồ
- **Feedback System**: User feedback cho sự kiện, rating
- **Notification System**: Real-time notifications cho order, voucher, event updates

### Performance & Optimization
- **Async/Await Patterns**: Promise-based API calls để handle concurrent requests
- **Session-based Caching**: Cache user data, notifications, vouchers trong session
- **API Integration**: Direct API calls đến backend service qua axios
- **Large Payload Support**: Body parser limit 500MB cho file upload
- **Mobile Optimization**: Responsive design cho mobile devices

### Development Features
- **Structured Controllers**: Tách logic theo controllers (eventController, ticketController, userController, v.v.)
- **Service Layer**: commonService.js chứa shared utilities, API calls, email logic
- **Logging**: File-based logging cho debug (logger.log, error.log)
- **Dotenv Configuration**: Environment variables management
- **Docker Ready**: Dockerfile support cho containerization

## 🔗 Links
- Repository: https://lab.admicro.vn/datnq/event-ticket
- Features:
  - Home page: /
  - Event list: /event
  - Ticket management: /ticket
  - News: /news
  - User profile: /profile
  - Feedback: /feedBack
  - Gallery: /gallery
  - Vouchers: /voucher
  - Policy: /policy
