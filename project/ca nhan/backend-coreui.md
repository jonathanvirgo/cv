# Backend CoreUI

## 📋 Thông tin chung
- **Loại dự án**: Backend with Admin Dashboard (CoreUI)
- **Công nghệ chính**: Node.js, Express, CoreUI, MySQL
- **Mục đích**: Backend kết hợp admin dashboard CoreUI

## 🛠️ Tech Stack
- Node.js, Express
- CoreUI (Admin Dashboard Framework)
- MySQL
- EJS/Views templates
- Middleware (Authentication, Authorization)

## 📝 Mô tả
Ứng dụng backend Express kết hợp admin dashboard sử dụng CoreUI framework, cung cấp giao diện quản lý dữ liệu toàn diện với các chức năng dashboard, quản lý người dùng, và báo cáo.

## 🎯 Vấn đề đã giải quyết
1. **Admin Dashboard**: Cung cấp giao diện quản lý đầy đủ
2. **Database layer**: MySQL integration với service layer
3. **Authentication**: Middleware xác thực người dùng
4. **Theme system**: Hỗ trợ custom themes (THEME_SYSTEM_README.md)

## 📊 Metrics & Thành tựu
- Dashboard rendering time: < 500ms
- Support multiple user roles
- Data management efficiency
- Responsive admin UI

## 💡 Điểm nổi bật kỹ thuật
- CoreUI integration cho professional admin dashboard
- MySQL with optimized queries
- MVC architecture clear separation
- Theme customization system
- Security: Authentication & Authorization middleware
- Session management

## 📁 Cấu trúc dự án
```
backend-coreui/
├── controller/       # Request handlers
├── routes/           # API routes
├── views/            # EJS templates
├── services/         # Business logic
├── middleware/       # Auth, validation
├── database/         # Database config
├── public/           # Static assets
├── config/           # Configuration
└── app.js            # Main app file
```

## 🔗 Links (nếu có)
- Documentation: /backend-coreui/README.md
- Theme Guide: /backend-coreui/THEME_SYSTEM_README.md
