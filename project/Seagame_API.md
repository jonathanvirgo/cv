# Seagame API - Hệ Thống API Dự Đoán & Giải Thưởng SEA Games (Backup)

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Tên dự án**: Seagame API - Hệ Thống Dự Đoán Kết Quả Thi Đấu SEA Games (Phiên Bản Backup)
- **Mô tả**: Hệ thống API backend cho dự đoán kết quả SEA Games với tính năng dự đoán kết quả trận đấu, vô địch, xếp hạng, tính điểm tự động, trao giải theo rank, quay vòng may mắn, quản lý tin tức, bảng xếp hạng. Tương tự như `api_kamgift_seagame33` nhưng là phiên bản backup/alternative.
- **Thời gian phát triển**: 2024 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 4-5 người

## 🛠️ Tech Stack
- **Backend**: Node.js 20+, Express.js, TypeScript
- **Database**: MySQL 8.0+, Prisma ORM 6.19.0
- **Authentication**: JWT (Access Token 24h + Refresh Token 7d)
- **Validation**: Joi schemas
- **Logging**: Winston logger + API Request Logging
- **Documentation**: Swagger/OpenAPI
- **Security**: Helmet, CORS, Rate limiting, bcryptjs
- **Deployment**: Docker, Docker Compose
- **Testing**: Jest, ts-node
- **Package Manager**: pnpm, yarn
- **Development**: ts-node-dev, TypeScript, ESLint, Prettier, Husky

## 📝 Mô tả Chi Tiết

Seagame API là hệ thống backend được xây dựng để quản lý toàn bộ quy trình dự đoán kết quả SEA Games:

- **Dự Đoán Đa Chiều**: Dự đoán kết quả trận đấu, vô địch, xếp hạng, và các dạng khác
- **Tính Điểm Tự Động**: Hệ thống tự động so sánh dự đoán với kết quả thực tế và tính điểm
- **Trao Giải Linh Hoạt**: Trao giải tự động theo rank với số lượng giải được cấu hình
- **Quay Vòng May Mắn**: Cho phép người dùng quay vòng may mắn để nhận quà
- **Quản Lý Sự Kiện Thể Thao**: Chi tiết quản lý môn thể thao, nội dung thi đấu cụ thể (Nam, Nữ, hạng cân, khoảng cách)
- **Quản Lý Vận Động Viên**: Thông tin chi tiết về vận động viên, quốc gia tham gia, hành trang cá nhân
- **Bảng Xếp Hạng**: Xếp hạng người dùng theo điểm, thống kê dự đoán
- **Tin Tức & Thông Báo**: Quản lý tin tức sự kiện
- **Hệ Thống Phiếu Giảm Giá**: Quản lý coupon cho người dùng
- **API Dự Đoán Hôm Nay**: Lấy danh sách dự đoán đang mở trong ngày
- **Hệ Thống Điểm Thưởng**: Theo dõi điểm người dùng, lịch sử trao thưởng

## 🎯 Vấn đề Đã Giải Quyết

1. **Quản Lý Sự Kiện Thể Thao Phức Tạp**
   - Tạo cấu trúc Sport → SportEvent để quản lý môn + nội dung cụ thể
   - Hỗ trợ các loại sự kiện: team score, individual combat, individual rank, team combat
   - Lưu trữ thông tin hạng cân, khoảng cách, từng bộ môn riêng biệt
   - Liên kết trận đấu với sport events cụ thể
   
2. **Tính Điểm Tự Động & Xác Thực Dự Đoán**
   - So sánh tự động dự đoán vs kết quả thực tế
   - Tính điểm dựa trên mức độ chính xác dự đoán
   - Cập nhật bảng xếp hạng người dùng theo thời gian thực
   
3. **Trao Giải Linh Hoạt Theo Rank**
   - Xác định người chiến thắng dựa trên ranking
   - Hỗ trợ cấu hình số lượng giải động (Top 1, Top 10, Top 100,...)
   - Trao giải tự động khi sự kiện kết thúc
   - Random phần thưởng từ danh sách phần quà
   
4. **Quay Vòng May Mắn (Wheel Spin)**
   - Tích hợp hệ thống quay vòng với tỉ lệ chiến thắng linh hoạt
   - Ghi nhận lịch sử quay vòng cho mỗi người dùng
   - Phần thưởng có thể chủ động thiết lập tỉ lệ chiến thắng
   
5. **Quản Lý Vận Động Viên & Quốc Gia**
   - Tạo cơ sở dữ liệu toàn diện về vận động viên tham dự
   - Lưu trữ thông tin cá nhân: chiều cao, cân nặng, tiểu sử
   - Liên kết vận động viên với quốc gia, môn thi đấu
   - Hỗ trợ dự đoán kết quả cá nhân
   
6. **Hệ Thống Coupon/Phiếu Giảm Giá**
   - Quản lý coupon từ service bên ngoài
   - Xác nhận coupon cho người dùng
   - Tracking lịch sử sử dụng coupon
   
7. **API Logging Tự Động**
   - Tất cả requests tự động được log vào database
   - Theo dõi hoạt động người dùng
   - Hỗ trợ audit trail và debugging
   
8. **Xác Thực Dự Đoán Giá Vàng**
   - Tự động so sánh dự đoán vs giá thực tế (nếu có)
   - Cập nhật streak dự đoán đúng liên tiếp (nếu áp dụng)
   - Tính toán phần thưởng dựa trên mốc

## 📊 Metrics & Thành Tựu

- **Database Models**: 20+ Prisma models được tối ưu
- **API Endpoints**: 50+ endpoints hoàn toàn được tài liệu hóa
- **Dữ Liệu SEA Games**: 32 môn thể thao, 300+ sự kiện cụ thể, 1000+ vận động viên
- **Người Dùng**: Hỗ trợ lượng người dùng lớn với ranking real-time
- **Response Time**: < 100ms cho majority requests
- **Uptime**: Docker deployment với health checks
- **Code Coverage**: Jest test suite cho modules chính

## 💡 Điểm Nổi Bật Kỹ Thuật

1. **Modular Architecture**
   - Tổ chức code theo modules
   - Dễ dàng thêm modules mới
   - Tách biệt concerns: controllers, services, validators, routes

2. **Database Schema Tối Ưu**
   - Mối quan hệ many-to-many (Athlete ↔ Match, User ↔ Prediction)
   - Index được apply cho query performance
   - Chuẩn hóa schema tránh dữ liệu dư thừa
   - Support cho seed data từ migrations

3. **Security First**
   - Input validation với Joi schemas
   - Password hashing với bcryptjs
   - API Key authentication
   - Rate limiting chống brute force
   - CORS configuration

4. **Logging & Monitoring**
   - Winston logger tích hợp
   - API Request logging tự động
   - Request/Response tracking
   - Error handling centralized

5. **Type Safety**
   - Full TypeScript implementation
   - Strongly typed DTOs
   - Type checking tại compile-time

6. **Documentation**
   - Swagger/OpenAPI auto-generated
   - Chi tiết documentation cho features
   - Seagame-specific documentation
   - Timezone GMT+7 documentation

## 📁 Cấu Trúc Project

```
src/
├── config/                    # Configuration files
│   ├── config.ts             # Environment variables
│   └── swagger.ts            # Swagger configuration
├── modules/                   # Feature modules
│   ├── auth/                 # Authentication & Authorization
│   ├── user/                 # User management & ranking
│   ├── sport/                # Sport management
│   ├── sport-event/          # Sport event management
│   ├── athlete/              # Athlete management
│   ├── match/                # Match management
│   ├── prediction/           # Prediction system
│   ├── prize/                # Prize management & distribution
│   ├── coupon/               # Coupon/Voucher service
│   ├── wheel/                # Lucky wheel
│   ├── news/                 # News management
│   └── log/                  # API logging
├── shared/                    # Shared utilities
│   ├── middleware/           # Express middleware
│   │   ├── auth.ts          # JWT authentication
│   │   ├── apiLogger.ts     # Request logging
│   │   ├── errorHandler.ts  # Error handling
│   │   ├── validation.ts    # Joi validation
│   │   └── apiKeyAuth.ts    # API Key auth
│   ├── utils/               # Utility functions
│   │   ├── jwt.ts           # JWT operations
│   │   ├── logger.ts        # Winston logger
│   │   ├── timezone.ts      # GMT+7 timezone
│   │   ├── AppError.ts      # Custom errors
│   │   └── serializeBigInt.ts
│   ├── types/               # TypeScript types
│   ├── constants/           # Constants
│   └── validators/          # Shared validators
├── tests/                    # Test setup
├── prisma/                   # Database schema & migrations
└── index.ts                  # Application entry point
```

## 📊 Core Database Models

### Môn Thể Thao & Sự Kiện
- **Sport** - Môn thể thao (Bóng đá, Bơi lội, v.v.)
- **SportEvent** - Nội dung cụ thể (Nam, Nữ, 52kg, 100m, v.v.)
- **Match** - Trận đấu với thông tin đội/cá nhân
- **MatchAthlete** - Liên kết vận động viên trong trận

### Vận Động Viên & Quốc Gia
- **Athlete** - Vận động viên (tên, quốc gia, chiều cao, cân nặng, tiểu sử)
- **Country** - Quốc gia tham dự

### Dự Đoán & Điểm Số
- **PredictionQuestion** - Câu hỏi dự đoán
- **UserPrediction** - Dự đoán người dùng
- **UserPredictionProgress** - Tiến trình & điểm
- **UserRanking** - Xếp hạng

### Giải Thưởng
- **Prize** - Danh sách phần quà
- **PredictionLevel** - Các mốc (Top 1, 10, 100,...)
- **UserPrize** - Phần quà user nhận
- **WheelSpin** - Quay vòng may mắn

### Khác
- **News** - Tin tức sự kiện
- **Coupon** - Phiếu giảm giá
- **ApiLog** - Log API requests

## 🎮 Game Flow

```
1. User tham gia dự đoán SEA Games
   ├─ Chọn loại dự đoán (kết quả, vô địch, xếp hạng)
   ├─ Chọn kết quả (đội/vận động viên/rank)
   
2. Khi sự kiện kết thúc
   ├─ Admin nhập kết quả thực tế
   
3. Hệ thống tự động
   ├─ So sánh dự đoán vs kết quả
   ├─ Tính điểm
   ├─ Cập nhật ranking
   ├─ Kiểm tra điều kiện nhận giải
   
4. Trao Giải
   ├─ Xác định người chiến thắng (Top 1, 10, 100,...)
   ├─ Random phần thưởng
   
5. Quay Vòng May Mắn
   ├─ User quay vòng
   ├─ Nhận thêm phần thưởng nếu trúng
```

## 🔐 Authentication Flow

```
1. User Signup/Login
   ↓
2. Server generates accessToken (24h) + refreshToken (7d)
   ↓
3. Tokens lưu vào database
   ↓
4. Client gửi Authorization: Bearer <accessToken>
   ↓
5. Middleware verify token + check database
   ↓
6. Token hết hạn → Dùng refreshToken để lấy token mới
   ↓
7. Logout → Xóa tokens khỏi database
```

## 📖 Key Documentation Files

- **README.md** - Quick start guide
- **SEAGAME_README.md** - Chi tiết SEA Games features
- **docs/MODULES_GUIDE.md** - Hướng dẫn modules
- **docs/HOW_TO_ADD_MODULE.md** - Thêm module mới

## 🚀 Deployment

### Docker Deployment
```bash
docker build -t seagame-api .
docker-compose up -d
```

### Environment Variables
```
NODE_ENV=development
PORT=3000
DATABASE_URL=mysql://user:password@localhost:3306/seagame
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret
```

## 📚 Getting Started

```bash
# 1. Install dependencies
pnpm install

# 2. Setup environment
cp .env.example .env

# 3. Initialize database
pnpm db:push
pnpm db:generate
pnpm db:seed

# 4. Start development server
pnpm dev

# 5. Access Swagger docs
# http://localhost:3000/api/v1/api-docs
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

## 📝 Notes

- Backup/alternative version của `api_kamgift_seagame33`
- All timestamps sử dụng GMT+7
- Database connection pooling được cấu hình
- Rate limiting: 100 requests/15 minutes
- API Key authentication hỗ trợ
- Seed data bao gồm 32 môn, hàng trăm sự kiện
- Full SEA Games data integration
- Production-ready deployment options
