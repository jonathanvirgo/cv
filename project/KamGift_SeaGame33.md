# KamGift SeaGame 33 - Hệ Thống API Dự Đoán & Giải Thưởng

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Tên dự án**: API KamGift SeaGame 33 - Hệ Thống Dự Đoán Kết Quả Thi Đấu SEA Games 33
- **Mô tả**: Nền tảng API toàn diện cho dự đoán kết quả SEA Games 33 với tính năng tính điểm tự động, trao giải theo rank, quay vòng may mắn, và quản lý sự kiện thể thao chi tiết.
- **Thời gian phát triển**: 2024 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 5-6 người

## 🛠️ Tech Stack
- **Backend**: Node.js 20+, Express.js, TypeScript
- **Database**: MySQL 8.0+, Prisma ORM 6.19.0
- **Authentication**: JWT (Access Token 24h + Refresh Token 7d)
- **Validation**: Joi schemas
- **External Services**: Telegram Bot API, Coupon Service
- **Logging**: Winston logger + API Request Logging
- **Documentation**: Swagger/OpenAPI
- **Security**: Helmet, CORS, Rate limiting, bcryptjs
- **Deployment**: Docker, Docker Compose
- **Testing**: Jest, ts-node
- **Package Manager**: pnpm

## 📝 Mô tả Chi Tiết

API KamGift SeaGame 33 là hệ thống backend tổng hợp được xây dựng để quản lý toàn bộ quy trình dự đoán kết quả SEA Games 33 với các tính năng chính:

- **Dự Đoán Đa Chiều**: Hỗ trợ dự đoán kết quả trận đấu, vô địch, xếp hạng, và các dạng khác
- **Tính Điểm Tự Động**: Hệ thống tự động so sánh dự đoán với kết quả thực tế và tính điểm
- **Trao Giải Linh Hoạt**: Trao giải tự động theo rank với số lượng giải được cấu hình linh hoạt (Giải 1, 2, 3,...)
- **Quay Vòng May Mắn**: Cho phép người dùng quay vòng may mắn để nhận quà sau dự đoán
- **Quản Lý Sự Kiện Thể Thao**: Chi tiết quản lý môn thể thao, nội dung thi đấu cụ thể (Nam, Nữ, hạng cân, khoảng cách), các trận đấu
- **Quản Lý Vận Động Viên**: Thông tin chi tiết về vận động viên, quốc gia tham gia, hành trang cá nhân
- **Bảng Xếp Hạng**: Xếp hạng người dùng theo điểm, thống kê dự đoán
- **Tin Tức & Thông Báo**: Quản lý tin tức sự kiện, thông báo Telegram tự động
- **Hệ Thống Phiếu Giảm Giá**: Quản lý và xác nhận coupon cho người dùng
- **API Dự Đoán Hôm Nay**: Lấy danh sách các dự đoán đang mở trong ngày
- **Hệ Thống Điểm Thưởng**: Theo dõi điểm người dùng, lịch sử trao thưởng, thống kê

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
   
6. **Thông Báo Telegram Tích Hợp**
   - Tự động gửi thông báo về kết quả dự đoán đến telegram
   - Thông báo khi giải thưởng được trao
   - Cập nhật bảng xếp hạng định kỳ
   
7. **Hệ Thống Coupon/Phiếu Giảm Giá**
   - Quản lý coupon từ service bên ngoài
   - Xác nhận coupon cho người dùng
   - Tracking lịch sử sử dụng coupon

## 📊 Metrics & Thành Tựu

- **Database Models**: 20+ Prisma models được tối ưu
- **API Endpoints**: 50+ endpoints hoàn toàn được tài liệu hóa
- **Dữ Liệu SEA Games**: 32 môn thể thao, 300+ sự kiện cụ thể, 1000+ vận động viên
- **Người Dùng**: Hỗ trợ lượng người dùng lớn với ranking real-time
- **Response Time**: < 100ms cho majority requests
- **Uptime**: Docker deployment với health checks
- **Code Coverage**: Jest test suite cho modules chính

## 💡 Điểm Nổi Bật Kỹ Thuật

1. **Cấu Trúc Database Phức Tạp & Tối Ưu**
   - Mối quan hệ many-to-many (Athlete ↔ Match, User ↔ Prediction)
   - Index được apply cho query performance
   - Chuẩn hóa schema tránh dữ liệu dư thừa
   - Support seed data từ file migrations

2. **Hệ Thống Ranking Real-time**
   - Tính toán ranking động dựa trên điểm người dùng
   - Hỗ trợ query xếp hạng hiệu quả
   - Cập nhật điểm tức thì sau mỗi dự đoán

3. **Modular Architecture**
   - Tổ chức code theo modules (auth, user, seagame, worldcup, prize, coupon, kam, log)
   - Dễ dàng thêm modules hoặc tính năng mới
   - Tách biệt concerns: controllers, services, validators, routes

4. **Security & Validation**
   - Input validation với Joi schemas cho tất cả endpoints
   - API Key authentication cho service-to-service
   - Password hashing với bcryptjs
   - Rate limiting chống brute force
   - CORS configuration

5. **External Service Integration**
   - Telegram Bot API cho thông báo
   - Coupon Service cho quản lý phiếu giảm giá
   - Axios cho HTTP requests
   - Error handling cho external service failures

6. **Logging & Monitoring**
   - Winston logger cho application logs
   - API Request logging tự động vào database
   - Request/Response tracking
   - Error tracking và reporting

## 📁 Cấu Trúc Project

```
src/
├── config/                    # Configuration files
│   ├── config.ts             # Environment variables
│   └── swagger.ts            # Swagger configuration
├── modules/                   # Feature modules
│   ├── auth/                 # Authentication & Authorization
│   ├── user/                 # User management & ranking
│   ├── seagame/              # SEA Games predictions & scoring
│   ├── worldcup/             # World Cup predictions
│   ├── prize/                # Prize management & distribution
│   ├── coupon/               # Coupon/Voucher service
│   ├── kam/                  # KamGift specific features
│   └── log/                  # API logging
├── shared/                    # Shared utilities
│   ├── middleware/           # Express middleware
│   │   ├── auth.ts          # JWT authentication
│   │   ├── apiLogger.ts     # Request logging
│   │   ├── errorHandler.ts  # Error handling
│   │   ├── validation.ts    # Joi validation
│   │   ├── apiKeyAuth.ts    # API Key auth
│   │   └── upload.ts        # File upload
│   ├── services/            # Shared services
│   │   └── telegramService.ts # Telegram notifications
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
- **SportEvent** - Nội dung cụ thể (Nam, Nữ, 52kg, 100m Tự do, v.v.)
- **Match** - Trận đấu với thông tin đội/cá nhân, điểm số
- **MatchAthlete** - Liên kết vận động viên trong trận đấu

### Vận Động Viên & Quốc Gia
- **Athlete** - Thông tin vận động viên (tên, quốc gia, chiều cao, cân nặng, tiểu sử)
- **Country** - Quốc gia tham dự (tên, cờ, mã ISO)

### Dự Đoán & Điểm Số
- **PredictionQuestion** - Câu hỏi dự đoán (match result, champion, ranking, v.v.)
- **UserPrediction** - Dự đoán của từng người dùng
- **UserPredictionProgress** - Tiến trình, điểm số người dùng
- **UserRanking** - Xếp hạng người dùng theo điểm

### Giải Thưởng
- **Prize** - Danh sách phần quà
- **PredictionLevel** - Các mốc đạt giải (Top 1, Top 10, v.v.)
- **UserPrize** - Phần quà người dùng đã nhận
- **WheelSpin** - Quay vòng may mắn

### Khác
- **News** - Tin tức sự kiện
- **Sponsor** - Nhà tài trợ
- **Coupon** - Phiếu giảm giá
- **ApiLog** - Log API requests

## 🎮 Game Flow

```
1. User tham gia dự đoán SEA Games
   ├─ Chọn loại dự đoán (match result, champion, ranking)
   ├─ Chọn kết quả (team/athlete/rank)
   
2. Khi trận đấu kết thúc
   ├─ Admin nhập kết quả thực tế
   
3. Hệ thống tự động
   ├─ So sánh dự đoán vs kết quả
   ├─ Tính điểm (1, 3, 5 điểm tùy loại)
   ├─ Cập nhật ranking
   ├─ Kiểm tra điều kiện nhận giải
   
4. Trao Giải
   ├─ Xác định người chiến thắng (Top 1, 10, 100,...)
   ├─ Random phần thưởng
   ├─ Gửi thông báo Telegram
   
5. Quay Vòng May Mắn
   ├─ User quay vòng (có tỉ lệ chiến thắng)
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
- **QUICK_START.md** - Hướng dẫn nhanh
- **docs/COMPLETE_GUIDE.md** - Hướng dẫn toàn diện
- **docs/MODULES_GUIDE.md** - Hướng dẫn modules
- **docs/HOW_TO_ADD_MODULE.md** - Thêm module mới
- **docs/MEDAL_STANDINGS_API.md** - Bảng xếp hạng huy chương
- **docs/IMPLEMENTATION_SUMMARY.md** - Tóm tắt triển khai
- **docs/TIMEZONE_GMT7.md** - GMT+7 timezone

## 🚀 Deployment

### Docker Deployment
```bash
# Build image
docker build -t api-kamgift-seagame .

# Run container
docker run -p 3000:3000 --env-file .env api-kamgift-seagame

# Docker Compose
docker-compose up -d
```

### Environment Variables
```
NODE_ENV=development
PORT=3000
API_VERSION=v1
DATABASE_URL=mysql://user:password@localhost:3306/seagame
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret
TELEGRAM_BOT_TOKEN=your-telegram-token
TELEGRAM_CHAT_ID=your-chat-id
```

## 📚 Getting Started

```bash
# 1. Install dependencies
pnpm install

# 2. Setup environment
cp .env.example .env
# Edit .env với database details

# 3. Initialize database
pnpm db:push
pnpm db:generate
pnpm db:seed

# 4. Start development server
pnpm dev

# 5. Access API docs
# http://localhost:3000/api-v1/api-docs
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

## 👥 Team & Default Credentials

- **Admin Account**: admin@example.com / password123
- **User Account**: user@example.com / password123
- **Account**: account@example.com / password123

## 🔗 Links & Resources

- **Swagger Docs**: `http://localhost:3000/api-v1/api-docs`
- **Prisma Studio**: `pnpm db:studio`
- **Database**: MySQL 8.0+

## 📝 Notes

- Hỗ trợ GMT+7 (Múi giờ Việt Nam) cho tất cả timestamps
- Rate limiting: 100 requests/15 minutes mỗi IP
- Seed data bao gồm 32 môn, hàng trăm sự kiện, hàng ngàn vận động viên
- Telegram notifications được gửi tự động cho các sự kiện quan trọng
- Hỗ trợ song song quản lý dự đoán SeaGame và World Cup
