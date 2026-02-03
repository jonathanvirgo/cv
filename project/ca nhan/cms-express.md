# CMS Express

## 📋 Thông tin chung
- **Loại dự án**: Content Management System Backend
- **Công nghệ chính**: Node.js, Express, Prisma, TypeScript
- **Mục đích**: CMS backend cho quản lý nội dung

## 🛠️ Tech Stack
- Node.js, Express
- Prisma ORM
- TypeScript
- RESTful API
- Database migrations

## 📝 Mô tả
Backend CMS Express cung cấp API cho quản lý nội dung website, bao gồm: quản lý bài viết, danh mục, tags, tác giả. Hỗ trợ API đầy đủ cho frontend consume.

## 🎯 Vấn đề đã giải quyết
1. **Content Management**: CRUD cho bài viết, danh mục
2. **Database Schema**: Optimized schema cho content
3. **API Endpoints**: Đầy đủ endpoints cho content operations
4. **Database Migrations**: Prisma migrations support

## 📊 Metrics & Thành tựu
- Content API response time: < 150ms
- Support quản lý X bài viết
- Database indexing optimized
- Query performance optimized

## 💡 Điểm nổi bật kỹ thuật
- Prisma ORM with relations
- Clean API architecture
- Database schema optimization
- Content versioning capability
- Search & filter functionality

## 📁 Cấu trúc dự án
```
cms-express/
├── src/
│   ├── controllers/   # API handlers
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   └── middleware/    # Custom middleware
├── prisma/            # Database schema
├── scripts/           # Utility scripts
├── docs/              # Documentation
└── tsconfig.json      # TypeScript config
```

## 🔗 Links (nếu có)
- Documentation: /cms-express/README.md
