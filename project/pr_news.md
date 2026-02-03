# PR News - Hệ Thống Quản Lý PR & Tin Tức Toàn Diện

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2019 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 5 người

## 🛠️ Tech Stack
- **Framework**: Express.js (Node.js)
- **Language**: JavaScript
- **Database**: MySQL 2, TypeORM ORM
- **Session Management**: Redis + connect-redis
- **Email**: Nodemailer, Gmail API, Node-cron
- **PDF Generation**: PDFKit, pdfkit-table, pdf-creator-node, Puppeteer
- **Document Processing**: Cheerio (HTML parsing), ExcelJS (Excel)
- **Image Processing**: Sharp, Cropper.js, image-to-base64
- **Real-time Communication**: Socket.io
- **File Management**: Formidable, zip-dir, blob-stream
- **Authentication**: Passport.js, jsonwebtoken
- **Utilities**: Lodash, moment.js, validator, axios
- **Template Engine**: EJS

## 📝 Mô tả
PR News là một hệ thống quản lý PR, tin tức, quảng cáo, và đơn đặt hàng toàn diện dành cho các website/fanpage. Cung cấp admin panel để quản lý bài viết, khách hàng, hợp đồng, đơn đặt hàng, quảng cáo, booking, landing pages. Hỗ trợ tự động gửi email thông báo, xuất PDF/Excel, quản lý các website con (giadinh, nld, phunuvn), và real-time notification qua Socket.io.

## 🎯 Vấn đề đã giải quyết
1. **Multi-Website Management**: Quản lý multiple websites/fanpages qua system, mỗi website có content, ads, booking riêng
2. **Automated Email Notifications**: Cron job tự động gửi email cảnh báo khách hàng khi yêu cầu đăng quá 12h
3. **PDF Export System**: Xuất PDF các hợp đồng, hóa đơn, booking dùng PDFKit + Puppeteer
4. **Excel Report Generation**: Export data dưới dạng Excel qua ExcelJS
5. **Email Parsing**: Parse email từ Gmail để automatically extract booking/order info
6. **Redis Session Caching**: Cache session data, reduce database load
7. **Real-time Notifications**: Socket.io cho real-time notification updates
8. **Image Processing**: Crop, resize ảnh using Sharp, Cropper.js
9. **TypeORM Migrations**: Database versioning và schema management qua TypeORM

## 📊 Metrics & Thành tựu
- Hỗ trợ 500+ khách hàng đồng thời
- 10,000+ bài viết trong hệ thống
- 5+ websites con quản lý
- Gửi 1000+ emails/ngày via cron job
- PDF export <5 giây per document
- 99.9% uptime

## 💡 Điểm nổi bật kỹ thuật

### Admin Panel Features
- **Dashboard**: Overview stats, recent activities, notifications
- **Article Management**: Create/edit/publish articles, manage categories, labels
- **Booking System**: Track bookings, manage customer requests, status updates
- **Customer Management**: Customer profiles, contact history, contracts
- **Contract Management**: Create, track, update contracts
- **Advertisement Management**: Manage ads, banners, campaigns
- **Website Management**: Manage multiple websites, website settings
- **User & Role Management**: User permissions, role-based access control
- **Order Management**: Track orders, invoices, shipping
- **Landing Page Builder**: Create custom landing pages
- **Discount & Promotion**: Manage discounts, promotion campaigns
- **Email & SMS**: Send email/SMS campaigns, manage templates
- **Log Management**: Track user activities, login logs, email logs, error logs

### Web Portal Features
- **Article Publishing**: Publish articles to website
- **Booking System**: Allow customers to book services
- **Customer Portal**: View own bookings, contracts, orders
- **Email Notifications**: Automated email notifications
- **FAQ/Help**: Support documentation
- **Dashboard**: Customer dashboard with personalized info

### Technical Architecture
- **Express.js MVC**: Controllers → Models → Views pattern
- **TypeORM**: Type-safe ORM với migrations, entities, relationships
- **Sequelize**: Alternative ORM para legacy models
- **Redis Caching**: Session store, rate limiting, cache layer
- **Socket.io**: Real-time notifications, live updates
- **Nodemailer**: Email sending with custom templates
- **Gmail Integration**: Parse emails, send via Gmail API
- **PDF Generation**: 
  - PDFKit: Low-level PDF generation
  - pdfkit-table: Table support
  - pdf-creator-node: HTML to PDF
  - Puppeteer: Headless browser for complex rendering

### Data Processing & Export
- **Excel Export**: Export to .xlsx với formatting, styling
- **PDF Export**: Export contracts, invoices, reports as PDF
- **Email Parsing**: Automatically extract data from emails
- **CSV Support**: Import/export CSV data
- **Zip Creation**: Batch download files as ZIP

### Image Management
- **Image Upload**: Formidable for multipart file upload
- **Image Processing**: Sharp for resizing, cropping, compression
- **Image Cropping**: Cropper.js frontend, image-to-base64 conversion
- **Thumbnail Generation**: Auto-generate thumbnails

### Security & Authentication
- **Passport.js**: Local authentication strategy
- **JWT Tokens**: Secure API authentication
- **Role-based Access Control (RBAC)**: Admin, user, guest roles
- **Session Management**: Secure session via Redis
- **Input Validation**: Validator library
- **CORS Protection**: Enable/disable CORS per route

### Automation & Cron Jobs
- **Email Notifications**: node-cron để gửi scheduled emails
- **Overtime Warnings**: Alert khách hàng khi yêu cầu quá hạn
- **Daily Reports**: Generate daily reports
- **Cleanup Tasks**: Remove old logs, temp files

### File Management
- **Temporary Files**: /public/store/tmp for temp storage
- **Excel Files**: /public/store/excel for export
- **PDF Files**: /public/store/pdf for generated PDFs
- **Zip Download**: Batch file download as ZIP

### Developer Experience
- **TypeORM CLI**: Generate migrations, run migrations
- **Environment Config**: dotenv for configuration
- **Logging**: Morgan for HTTP logs, custom logs
- **Error Handling**: Centralized error controller
- **VSCode Config**: .vscode/settings.json for team consistency
- **Docker Support**: Dockerfile for containerization

## 📁 Project Structure

### Admin Module
- Controllers: 23 controllers (articles, customers, contracts, orders, ads, etc.)
- Models: 24 models (data access layer)
- Views: EJS templates for admin UI
- Features: Full admin panel with CRUD operations

### Web Module
- Controllers: 15 controllers (home, articles, bookings, user portal, APIs)
- Models: Data access layer
- Views: Customer-facing pages
- Router: Custom routers for fanpage, customer features
- Services: Business logic layer

### Core Config
- **db.js**: MySQL connection pool
- **redis.js**: Redis client setup
- **typeorm.js**: TypeORM datasource configuration
- **socket.js**: Socket.io server setup
- **passport.js**: Authentication strategies

## 🔗 Links
- Admin Panel: /admin
- Customer Portal: /
- API Endpoints:
  - /api/articles - Article management
  - /api/bookings - Booking API
  - /api/channels - Channel API
  - /api/posts - Post API
  - /api/orders - Order API
- Websites:
  - Gia Đình (Family): /sites/giadinh
  - NLD (News): /sites/nld
  - Phụ Nữ VN (Women): /sites/phunuvn
