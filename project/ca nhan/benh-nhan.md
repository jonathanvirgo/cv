# Bệnh Nhân System

## 📋 Thông tin chung
- **Loại dự án**: Patient Management System
- **Công nghệ chính**: Node.js, Express, Prisma, TypeScript
- **Mục đích**: Quản lý thông tin bệnh nhân, lịch sử khám bệnh

## 🛠️ Tech Stack
- Node.js, Express
- Prisma ORM
- TypeScript
- PostgreSQL/MySQL
- JWT Authentication
- Playwright (E2E Testing)
- nodemon (Development)

## 📝 Mô tả
Hệ thống quản lý bệnh nhân toàn diện cho các cơ sở y tế, cho phép theo dõi thông tin bệnh nhân, lịch sử khám, điều trị, và các báo cáo liên quan. Bao gồm các tính năng xác thực JWT, test E2E, và deployment guide.

## 🎯 Vấn đề đã giải quyết
1. **Patient Data Management**: CRUD operations cho bệnh nhân
2. **Medical History**: Lưu trữ lịch sử khám chữa bệnh
3. **Authentication**: JWT-based authentication & authorization
4. **Data Security**: Encrypted sensitive data
5. **E2E Testing**: Playwright test automation

## 📊 Metrics & Thành tựu
- Support quản lý N bệnh nhân
- API response time: < 200ms
- Database query optimization
- E2E test coverage: X%
- JWT token expiration security

## 💡 Điểm nổi bật kỹ thuật
- Prisma ORM with database migrations
- JWT authentication with refresh tokens
- Role-based access control (RBAC)
- Input validation & sanitization
- E2E test automation with Playwright
- Secure password hashing
- Database indexing for performance

## 📁 Cấu trúc dự án
```
benh-nhan/
├── controllers/       # Request handlers
├── routes/            # API routes
├── services/          # Business logic
├── database/          # Database config
├── middleware/        # Auth, validation
├── tests/             # E2E tests
├── prisma/            # Database schema
├── config/            # Configuration
├── playwright.config.ts  # Playwright config
└── app.js             # Main app
```

## 🔗 Links (nếu có)
- Documentation: /benh-nhan/README.md
- Deployment Guide: /benh-nhan/JWT_DEPLOYMENT_GUIDE.md
- Test Results: /benh-nhan/test-results/
