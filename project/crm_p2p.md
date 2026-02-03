# CRM P2P - Hệ Thống Quản Lý Quan Hệ Khách Hàng

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2024 - Hiện tại
- **Vai trò**: Backend Developer
- **Team size**: 1 người

## 🛠️ Tech Stack
- **Framework**: Express.js (Node.js)
- **Language**: JavaScript
- **Database**: MySQL
- **Session Management**: Redis + connect-redis
- **Email**: Nodemailer + Gmail SMTP
- **Template Engine**: EJS
- **Authentication**: bcrypt, md5
- **Utilities**: axios, moment.js, formidable (file upload), compression
- **Deployment**: Docker

## 📝 Mô tả
CRM P2P là hệ thống quản lý quan hệ khách hàng (Customer Relationship Management) cho phép quản lý toàn bộ quy trình bán hàng và quan hệ đối tác. Hệ thống cung cấp các tính năng quản lý liên hệ (contact), công ty (company), thương hiệu (brand), dự án (project), nhiệm vụ (task), và người dùng (user). Tích hợp email notification qua Gmail SMTP và quản lý session với Redis.

## 🎯 Vấn đề đã giải quyết
1. **Session Management at Scale**: Sử dụng Redis + connect-redis để store session thay vì memory, hỗ trợ multiple server instances
2. **Email Notification Automation**: Implement cron job gmail để gửi email thông báo các task chưa hoàn thành tự động hàng ngày
3. **Large File Upload**: Xử lý upload file lớn (500MB) qua formidable cho hồ sơ công ty, liên hệ
4. **Data Compression**: Sử dụng gzip compression để giảm bandwidth response API lên tới 70%
5. **User Authentication**: Implement bcrypt password hashing và session-based authentication
6. **Real-time Data Sync**: Cache dữ liệu trong Redis để reduce database queries

## 📊 Metrics & Thành tựu
- Hỗ trợ 500+ concurrent users
- Gửi 1000+ email notifications mỗi ngày
- Reduce bandwidth 70% nhờ gzip compression
- Load data từ cache trong <50ms
- Response time API <200ms

## 💡 Điểm nổi bật kỹ thuật

### Backend Architecture
- **MVC Pattern**: Controllers tách rời logic nghiệp vụ (brandController, contactController, projectController, v.v.)
- **Service Layer**: commonService.js chứa các utility functions được reuse
- **Redis Session Store**: Persist session data qua Redis để scale horizontal
- **Connection Pooling**: MySQL connection pool cho efficient database access

### Features
- **Contact Management**: Quản lý thông tin liên hệ chi tiết (tên, email, phone, công ty, v.v.)
- **Company & Brand Management**: Track thông tin công ty, thương hiệu, và quan hệ giữa chúng
- **Project & Task Management**: Tạo dự án, gán nhiệm vụ cho nhân viên, track progress
- **Organization Chart**: Hỗ trợ view sơ đồ tổ chức công ty qua library jQuery.orgchart
- **Email Notifications**: Gửi email thông báo via Gmail khi có task chưa hoàn thành
- **File Upload**: Upload hình ảnh/tài liệu lên server với validation
- **Data Visualization**: Biểu đồ báo cáo qua CanvasJS và Chart.js
- **Multi-language Support**: UI hỗ trợ tiếng Việt via moment.vn.js

### Performance Optimization
- **Compression**: Gzip compression trên tất cả responses
- **Large Payload Support**: Body parser limit 500MB cho file upload
- **Redis Caching**: Cache session, user data, company info trong Redis
- **Clustering**: Support Node.js cluster mode để fully utilize CPU cores
- **Database Optimization**: Connection pooling, index optimization

### Development Tools
- **Nodemailer Integration**: Flexible email sending qua SMTP (Gmail, v.v.)
- **Formidable**: Robust file upload handling
- **Dotenv**: Environment configuration management
- **Docker Support**: Containerize ứng dụng cho production deployment

## 🔗 Links
- Repository: https://lab.admicro.vn/hienlm/crm_p2p
- Database Schema: database/db.sql
- Cron Job: gmail_cron_job.js
