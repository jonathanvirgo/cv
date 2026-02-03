# API Service

## 📋 Thông tin chung
- **Loại dự án**: Backend API Service
- **Công nghệ chính**: Node.js, Express, TypeScript, Prisma
- **Mục đích**: API service chính cho ứng dụng

## 🛠️ Tech Stack
- Node.js, Express
- TypeScript
- Prisma ORM
- Playwright (E2E Testing)
- Jest/Testing framework

## 📝 Mô tả
Dịch vụ API backend chính cung cấp các endpoint để xử lý logic business, quản lý dữ liệu, và kết nối với cơ sở dữ liệu. Bao gồm các test E2E với Playwright.

## 🎯 Vấn đề đã giải quyết
1. **API Routing**: Tổ chức các route rõ ràng
2. **Database operations**: Sử dụng Prisma ORM cho type-safe queries
3. **E2E Testing**: Setup Playwright cho testing
4. **Request validation**: Validation middleware

## 📊 Metrics & Thành tựu
- API response time: < 200ms
- Database query optimization
- Test coverage: E2E testing automation
- Support multiple endpoints

## 💡 Điểm nổi bật kỹ thuật
- Type-safe database queries với Prisma
- E2E testing automation setup
- Clean API architecture
- Error handling middleware
- Request/Response logging

## 📁 Cấu trúc dự án
```
api-service/
├── src/              # Source code
├── tests/            # Test files
├── prisma/           # Database schema
├── scripts/          # Utility scripts
├── playwright.config.ts  # Playwright E2E config
└── tsconfig.json     # TypeScript config
```

## 🔗 Links (nếu có)
- Documentation: /api-service/README.md
