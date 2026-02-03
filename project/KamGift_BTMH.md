# KamGift BTMH - Dự Án API Quản Lý

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Tên dự án**: API KamGift BTMH (Bảo Tín Mạnh Hải)
- **Mô tả**: Hệ thống API quản lý hiện đại cho nền tảng KamGift, tích hợp quản lý giá vàng, dự đoán giá, xử lý phần thưởng và quản lý người dùng.
- **Thời gian phát triển**: 2024 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 4-5 người

## 🛠️ Tech Stack
- **Backend**: Node.js 18+, Express.js, TypeScript
- **Database**: MySQL 8.0+, Prisma ORM
- **Authentication**: JWT (Access Token 24h + Refresh Token 7d)
- **Validation**: Joi schemas
- **Logging**: Winston logger + API Request Logging
- **Documentation**: Swagger/OpenAPI
- **Security**: Helmet, CORS, Rate limiting, bcryptjs
- **Deployment**: Docker, Docker Compose
- **Testing**: Jest, ts-node
- **Package Manager**: pnpm, yarn

## 📝 Mô tả Chi Tiết

API KamGift BTMH là một hệ thống backend hiện đại xây dựng để quản lý các tính năng chính của nền tảng KamGift bao gồm:
- Quản lý người dùng (CRUD) với phân quyền (ADMIN, USER, ACCOUNT)
- Xác thực và ủy quyền dựa trên JWT
- Quản lý giá vàng thực tế và dự đoán giá vàng
- Tính toán giá vàng theo công thức phức tạp
- Hệ thống phần thưởng dựa trên streak dự đoán đúng
- Logging tự động cho tất cả API requests
- Hỗ trợ múi giờ GMT+7 (Việt Nam) trên toàn hệ thống

## 🎯 Vấn đề Đã Giải Quyết

1. **Timezone Toàn Hệ Thống**: Triển khai GMT+7 cho tất cả operations, xử lý chính xác các thao tác liên quan đến ngày tháng
   - Tạo utility functions: `getGMT7Date()`, `getGMT7Tomorrow()`, `getGMT7StartOfDay()`, v.v.
   - Áp dụng vào auth, logging, prediction services
   
2. **Quản Lý Token Chặt Chẽ**: Access tokens được lưu trong database và verify trên mỗi request
   - Giảm rủi ro token giả mạo
   - Kiểm soát token expiration chính xác
   
3. **API Logging Tự Động**: Tất cả requests tự động được log vào database
   - Theo dõi hoạt động người dùng
   - Hỗ trợ audit trail và debugging
   
4. **Xác Thực Dự Đoán Giá Vàng**: Tự động so sánh dự đoán vs giá thực tế
   - Cập nhật streak dự đoán đúng liên tiếp
   - Tính toán phần thưởng dựa trên mốc (3, 6, 9 ngày)
   
5. **Phân Quyền Người Dùng**: Role-based access control (RBAC)
   - Admin: Quản lý toàn bộ hệ thống
   - User: Người dùng thông thường
   - Account: Tài khoản kinh doanh

## 📊 Metrics & Thành Tựu

- **API Endpoints**: 30+ endpoints hoàn toàn được tài liệu hóa
- **Database Models**: 10+ Prisma models được optimize
- **Code Coverage**: Jest test suite cho modules chính
- **Response Time**: < 100ms cho majority requests
- **Uptime**: Hỗ trợ Docker deployment với health checks
- **Performance**: Sử dụng caching logic và connection pooling

## 💡 Điểm Nổi Bật Kỹ Thuật

1. **Modular Architecture**
   - Tổ chức code theo modules (auth, user, gold_price, gold_predictions, logs, kam, gold_calculation)
   - Dễ dàng thêm modules mới theo hướng dẫn HOW_TO_ADD_MODULE.md
   - Tách biệt concerns: controllers, services, validators, routes, types

2. **Database Schema Tối Ưu**
   - Sử dụng auto-increment IDs cho tất cả models
   - Relationships được thiết kế chính xác (one-to-many, many-to-many)
   - Indexes được apply cho các trường thường query
   - Support cho seed data thông qua Prisma seeding

3. **Security First**
   - Input validation với Joi schemas
   - Password hashing với bcryptjs
   - API Key authentication cho service-to-service
   - Rate limiting để chống brute force attacks
   - CORS configuration cho cross-origin requests

4. **Logging & Monitoring**
   - Winston logger tích hợp cho application logs
   - API Request logging tự động vào database
   - Request/Response tracking cho debugging
   - Error handling centralized

5. **Type Safety**
   - Full TypeScript implementation
   - Strongly typed DTOs và responses
   - Type checking tại compile-time giảm runtime errors

6. **Documentation**
   - Swagger/OpenAPI auto-generated từ code
   - Chi tiết documentation cho từng feature
   - API examples và postman collection
   - Timezone GMT+7 documentation

## 📁 Cấu Trúc Project

```
src/
├── config/                    # Configuration files
│   ├── config.ts             # Environment variables
│   └── swagger.ts            # Swagger configuration
├── modules/                   # Feature modules
│   ├── auth/                 # Authentication & Authorization
│   ├── user/                 # User management
│   ├── gold_price/           # Gold price management
│   ├── gold_calculation/     # Gold price calculations
│   ├── gold_predictions/     # Gold price predictions
│   ├── kam/                  # KamGift specific features
│   └── log/                  # API logging
├── shared/                    # Shared utilities
│   ├── middleware/           # Express middleware
│   │   ├── auth.ts          # JWT authentication
│   │   ├── apiLogger.ts     # Request logging
│   │   ├── errorHandler.ts  # Centralized error handling
│   │   ├── validation.ts    # Joi validation
│   │   ├── apiKeyAuth.ts    # API Key authentication
│   │   └── upload.ts        # File upload handling
│   ├── utils/               # Utility functions
│   │   ├── jwt.ts           # JWT operations
│   │   ├── logger.ts        # Winston logger
│   │   ├── timezone.ts      # GMT+7 timezone utilities
│   │   ├── AppError.ts      # Custom error class
│   │   └── serializeBigInt.ts
│   ├── types/               # TypeScript types
│   ├── constants/           # Application constants
│   └── services/            # Shared services
├── tests/                    # Test configurations
├── prisma/                   # Database schema & migrations
└── index.ts                  # Application entry point
```

## 🔐 Authentication Flow

```
1. User Signup/Login
   ↓
2. Server generates accessToken (24h) + refreshToken (7d)
   ↓
3. Tokens lưu vào database (access_tokens table)
   ↓
4. Client gửi requests với Authorization: Bearer <accessToken>
   ↓
5. Middleware verify token + check database
   ↓
6. Token hết hạn → Dùng refreshToken để lấy token mới
   ↓
7. Logout → Xóa tokens khỏi database
```

## 🎮 Game Mechanics (Gold Prediction)

```
User dự đoán giá vàng ngày mai:
├─ UP (tăng) hoặc DOWN (giảm)
│
Hệ thống so sánh:
├─ Giá bán (cell) hôm nay vs hôm qua
│
Kết quả:
├─ Dự đoán đúng → Tăng streak
├─ Dự đoán sai → Reset streak = 0
│
Phần thưởng (Mốc streak):
├─ 3 ngày liên tiếp → 🥉 Tân thủ bảo tín
├─ 6 ngày liên tiếp → 🥈 Cao thủ bảo tín
├─ 9 ngày liên tiếp → 🥇 Vô địch bảo tín
│
Random phần thưởng dựa trên win_rate của prize
```

## 📖 Key Documentation Files

- **README.md** - Quick start guide
- **docs/IMPLEMENTATION_SUMMARY.md** - Tóm tắt triển khai
- **docs/MODULES_GUIDE.md** - Hướng dẫn sử dụng modules
- **docs/HOW_TO_ADD_MODULE.md** - Hướng dẫn thêm module mới
- **docs/API_KEY_AUTHENTICATION.md** - API Key auth setup
- **docs/GOLD_PRICE_UPDATE_API.md** - Gold price API documentation
- **docs/TIMEZONE_GMT7.md** - GMT+7 timezone implementation

## 🚀 Deployment

### Docker Deployment
```bash
# Build image
docker build -t api-kamgift-btmh .

# Run container
docker run -p 3000:3000 --env-file .env api-kamgift-btmh
```

### Environment Variables
```
NODE_ENV=development
PORT=3000
DATABASE_URL=mysql://user:password@localhost:3306/kamgift
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret
API_KEY_SECRET=your-api-key-secret
```

## 📚 Getting Started

```bash
# 1. Install dependencies
pnpm install

# 2. Setup environment
cp .env.example .env
# Edit .env with your database details

# 3. Initialize database
pnpm db:push
pnpm db:generate
pnpm db:seed

# 4. Start development server
pnpm dev

# 5. Access Swagger documentation
# Open http://localhost:3000/api/v1/api-docs
```

## 🧪 Testing

```bash
# Run tests
pnpm test

# Watch mode
pnpm test:watch

# Linting
pnpm lint
pnpm lint:fix

# Format code
pnpm format
```

## 👥 Team & Credentials

- **Admin Account**: admin@example.com / password123
- **User Account**: user@example.com / password123
- **Account**: account@example.com / password123

## 🔗 Links & Resources

- **Swagger Docs**: `http://localhost:3000/api/v1/api-docs`
- **Prisma Studio**: `pnpm db:studio`
- **Example Requests**: [gold-prices-api-examples.md](./examples/gold-prices-api-examples.md)

## 📝 Notes

- All timestamps sử dụng GMT+7 (Múi giờ Việt Nam)
- Database connection pooling được cấu hình trong Prisma
- Rate limiting được áp dụng: 100 requests/15 minutes mỗi IP
- API Key authentication cần được thiết lập cho service-to-service communication
