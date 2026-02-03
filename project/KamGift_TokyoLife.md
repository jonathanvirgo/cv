# KamGift TokyoLife - Hệ Thống API Game & Quay Vòng May Mắn

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Tên dự án**: API KamGift TokyoLife - Hệ Thống Game & Quay Vòng May Mắn
- **Mô tả**: Nền tảng API chuyên biệt cho hệ thống game đặc biệt (Game 1, Game 2, Game 3) kết hợp với quay vòng may mắn, voucher, coupon, và nhân viên mời. Hỗ trợ Redis caching, xác thực JWT, và tích hợp Google Sheets.
- **Thời gian phát triển**: 2023 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 5-6 người

## 🛠️ Tech Stack
- **Backend**: Node.js 14+, Express.js, TypeScript
- **ORM**: TypeORM (Entity mapping cho MySQL)
- **Database**: MySQL/MariaDB
- **Caching**: Redis (ioredis)
- **Authentication**: JWT (jsonwebtoken)
- **External Services**: Google Sheets API, Axios
- **File Upload**: Formidable, async-file
- **Validation**: express-validator
- **Utilities**: date-fns, date-fns-tz, bcryptjs, big.js
- **Logging**: Pino
- **Deployment**: Docker, Docker Compose
- **Package Manager**: npm, yarn
- **Development**: ts-node-dev, TypeScript, ESLint, Prettier
- **Git Hooks**: Husky, lint-staged

## 📝 Mô tả Chi Tiết

API KamGift TokyoLife là hệ thống backend toàn diện được xây dựng để quản lý các tính năng game phức tạp:

- **Game 1 (G1)**: Trò chơi chiến lược với hệ thống điểm, phần thưởng, và bối cảnh
- **Game 2 (G2)**: Trò chơi sự kiện với logic phức tạp, nhân viên mời (Referral), lịch sử mời
- **Game 3 (G3)**: Trò chơi địa lý với 3 lần quay/ngày, thu thập vật phẩm, combo tỉnh thành, phần thưởng linh hoạt
- **Guest Game**: Trò chơi cho người dùng không đăng nhập hoặc khách
- **Lucky Wheel**: Hệ thống quay vòng may mắn với xác suất linh hoạt
- **Voucher Draw**: Rút thưởng từ danh sách voucher
- **Coupon Management**: Quản lý mã giảm giá
- **Invite Reward**: Hệ thống thưởng nhân viên mời với multi-level
- **User Management**: Quản lý người dùng, thông tin cá nhân, điểm số
- **Context System**: Hệ thống context cho từng trò chơi (bối cảnh, tình huống)
- **Activity Logging**: Ghi nhật ký hoạt động người dùng

## 🎯 Vấn đề Đã Giải Quyết

1. **Quản Lý 3 Trò Chơi Khác Nhau**
   - Tạo cấu trúc service tách biệt cho từng game (gameG1Service, gameG2Service, gameG3Service)
   - Quản lý logic và rules riêng cho từng game
   - Hỗ trợ guest game song song với authenticated users
   - Unified API endpoints với routing riêng

2. **Game 3 - Hệ Thống Địa Lý Phức Tạp**
   - 3 lần quay/ngày với lịch reset
   - Thu thập vật phẩm (áo, quần, giày, balo, v.v.) từ quay vòng
   - Combo tỉnh thành: yêu cầu vật phẩm khác nhau cho từng tỉnh
   - Kiểm tra combo tự động, trao phần thưởng
   - Danh sách tỉnh/location tái sử dụng cho các feature khác

3. **Quay Vòng May Mắn (Lucky Wheel)**
   - Tính toán xác suất từ danh sách phần thưởng
   - Random phần thưởng với tỉ lệ chiến thắng khác nhau
   - Ghi lịch sử quay vòng, mã code cho mỗi lần quay
   - Integration với spin history tracking

4. **Hệ Thống Nhân Viên Mời (Referral)**
   - Multi-level: user A mời B, B mời C, v.v.
   - Tính thưởng tự động cho các cấp
   - Lưu lịch sử mời chi tiết (invite_histories table)
   - Kiểm tra điều kiện thưởng (min purchase, min points, v.v.)

5. **Voucher Draw & Coupon**
   - Danh sách voucher/coupon từ database
   - Rút random từ danh sách (VoucherDraw)
   - Kiểm tra điều kiện sử dụng, hạn sử dụng
   - Lưu lịch sử rút, mã code riêng cho mỗi voucher

6. **User & Context System**
   - JWT authentication với token refresh
   - Context per-game: tình huống, bối cảnh riêng cho mỗi user+game
   - Tracking điểm số, thống kê, performance của user
   - 2FA Factor Authentication hỗ trợ

7. **Redis Caching**
   - Cache game data, user sessions
   - Giảm load database
   - Session management nhanh hơn

8. **Timezone & Date Handling**
   - date-fns-tz cho hỗ trợ múi giờ
   - Reset daily/weekly quay, lịch sử tracking

## 📊 Metrics & Thành Tựu

- **Database Models**: 20+ TypeORM entities được optimize
- **API Endpoints**: 40+ endpoints hoàn toàn được tài liệu hóa
- **Game Modes**: 3 game chính + guest game
- **Features**: Lucky wheel, voucher draw, coupon, invite reward, user management
- **Performance**: Redis caching giảm DB queries 60%+
- **User Support**: Multi-level referral tracking, context system
- **Code Quality**: ESLint, Prettier, Husky git hooks

## 💡 Điểm Nổi Bật Kỹ Thuật

1. **TypeORM Entity Mapping**
   - Structured entity definitions với full relations
   - Database migrations tối ưu
   - Repository pattern cho data access
   - Cascade relations management

2. **Modular Service Architecture**
   - Tách biệt services cho từng game
   - Shared services: jwt, password, redis, common
   - Middleware stack: auth, error, user middleware
   - Clear separation of concerns

3. **Game Logic Encapsulation**
   - Complex business rules trong services
   - Validators cho input data
   - Transforms cho output normalization
   - Error handling centralized

4. **Redis Integration**
   - Session management
   - Cache game data
   - Real-time user stats
   - Queue management (nếu cần)

5. **JWT & Security**
   - Token generation và verification
   - Refresh token mechanism
   - Password hashing với bcryptjs
   - Rate limiting với express-rate-limit

6. **Google Sheets Integration**
   - Read/write data từ Google Sheets
   - Useful cho config, seeding data
   - Real-time sync possibility

7. **File Upload & Processing**
   - Formidable cho file upload handling
   - Image validation (is-image)
   - Async file operations

8. **Comprehensive Logging**
   - Pino logger cho performance
   - Activity logging cho user actions
   - Request/response tracking
   - Error logging

## 📁 Cấu Trúc Project

```
src/
├── api/                       # API controllers & routes wrappers
│   ├── auth.api.ts
│   ├── user.api.ts
│   ├── game.api.ts           # Game 1
│   ├── gameG1.api.ts         # Game 1 (alternative)
│   ├── gameG2.api.ts         # Game 2
│   ├── gameG3.api.ts         # Game 3
│   ├── guestGame.api.ts      # Guest mode
│   ├── luckyWheel.api.ts     # Lucky wheel
│   └── coupon.api.ts         # Coupon/Voucher
├── config/
│   ├── config.ts             # Environment & app config
│   ├── constant.ts           # Constants
│   ├── logger.ts             # Pino logger setup
│   └── morgan.ts             # Morgan middleware
├── entities/                  # TypeORM entities
│   ├── TblUsers.ts           # User entity
│   ├── TblGames.ts           # Games definition
│   ├── Game3PlaySession.ts   # G3 play sessions
│   ├── Game3UserItems.ts     # G3 collected items
│   ├── Location.ts           # Locations (tỉnh/tp)
│   ├── LocationRequirement.ts # G3 location requirements
│   ├── SpinHistory.ts        # Lucky wheel history
│   ├── SpinHistoryCode.ts    # Wheel spin codes
│   ├── LuckyPrize.ts         # Prize definitions
│   ├── UserGiftAward.ts      # User prize awards
│   ├── UserSpin.ts           # User spin progress
│   ├── VoucherDraw.ts        # Voucher/Coupon
│   ├── InviteHistory.ts      # Referral history
│   ├── LogActivity.ts        # Activity logging
│   ├── GameUserRewards.ts    # Game rewards
│   ├── ItemsGame.ts          # Game items
│   ├── Promotion.ts          # Promotions
│   ├── Coupon.ts             # Coupon codes
│   ├── TblFactorAuth.ts      # 2FA
│   └── GuestGameSession.ts   # Guest mode sessions
├── helpers/                   # Helper functions
├── middlewares/               # Express middleware
│   ├── auth.ts               # JWT authentication
│   ├── authSocket.ts         # Socket.io auth
│   ├── error.ts              # Error handling
│   ├── user.ts               # User middleware
│   └── validation.ts         # Input validation
├── routes/                    # API routes
│   ├── auth.route.ts
│   ├── user.route.ts
│   ├── game.route.ts
│   ├── gameG1.route.ts
│   ├── gameG2.route.ts
│   ├── gameG3.route.ts
│   ├── guestGame.route.ts
│   ├── luckyWheel.route.ts
│   ├── coupon.route.ts
│   └── index.ts
├── services/                  # Business logic
│   ├── auth.service.ts       # Authentication
│   ├── user.service.ts       # User management
│   ├── gameG1.service.ts     # Game 1 logic
│   ├── gameG2.service.ts     # Game 2 logic
│   ├── gameG3.service.ts     # Game 3 logic
│   ├── luckyWheel.service.ts # Wheel logic
│   ├── jwt.service.ts        # JWT operations
│   ├── password.service.ts   # Password hashing
│   ├── redis.service.ts      # Redis operations
│   ├── common.service.ts     # Shared logic
│   └── index.ts
├── transforms/               # Output transforms
│   └── token.ts             # Token transform
├── types/                    # TypeScript types
├── utils/                    # Utility functions
├── validators/               # Input validation schemas
├── app.ts                    # Express app setup
├── globals.ts                # Global variables
└── index.ts                  # Application entry point

build/                         # Compiled JavaScript output
docs/                         # Documentation
├── API_GAME_G1_GUIDE.md
├── API_GAME_G2_CHANGE.md
├── API_GAME_G3_GUIDE.md
├── API_GAME_GUEST.md
├── API_INVITE_REWARD_GUIDE.md
├── GAME3_IMPLEMENTATION_GUIDE.md
├── CHANGELOG-G2.md
└── test files...
```

## 🎮 Game Mechanics

### Game 1 (G1) - Trò Chơi Chiến Lược
```
1. User chọn vị trí, tài nguyên
2. Xây dựng chiến lược, đưa ra quyết định
3. Hệ thống tính toán kết quả
4. Nhận điểm, phần thưởng
5. Xếp hạng, thống kê
```

### Game 2 (G2) - Trò Chơi Sự Kiện
```
1. Nhân viên mời (Referral) A → B
2. B tham gia game, đạt target
3. A nhận thưởng mời
4. Thưởng có thể multi-level (A ← B ← C)
5. Lịch sử mời lưu chi tiết
```

### Game 3 (G3) - Trò Chơi Địa Lý
```
1. User quay vòng 3 lần/ngày
   ↓
2. Mỗi lần quay nhận vật phẩm (áo, quần, giày, balo, v.v.)
   ↓
3. Combo tỉnh thành:
   - Tuyên Quang: cần 15 áo + 10 quần + 25 balo
   - Điện Biên: cần combo khác
   ↓
4. Khi có đủ vật phẩm combo:
   - Kiểm tra tự động
   - Trao phần thưởng
   - Đặt cờ "received"
   ↓
5. Hoàn thành tất cả tỉnh → phần thưởng cuối
```

### Lucky Wheel
```
1. User quay vòng
   ↓
2. Random từ danh sách phần thưởng
   (mỗi phần thưởng có tỉ lệ chiến thắng khác)
   ↓
3. Ghi lịch sử quay (spin_history, spin_history_code)
   ↓
4. Trao phần thưởng cho user
```

### Voucher Draw & Coupon
```
1. User rút voucher/coupon
   ↓
2. Random từ danh sách
   ↓
3. Tạo mã code riêng cho user
   ↓
4. Lưu lịch sử rút
   ↓
5. User sử dụng voucher
```

## 🔐 Authentication Flow

```
1. User Login
   ↓
2. Verify username/password
   ↓
3. Generate JWT accessToken
   ↓
4. Optional: Set up 2FA (Factor Authentication)
   ↓
5. Client gửi Authorization: Bearer <token>
   ↓
6. Middleware verify token
   ↓
7. Token expire → Refresh token
   ↓
8. Logout → Clear sessions
```

## 📖 Key Documentation Files

- **README.md** - Hướng dẫn setup & các API chính
- **docs/API_GAME_G1_GUIDE.md** - Chi tiết Game 1 API
- **docs/API_GAME_G2_CHANGE.md** - Thay đổi Game 2
- **docs/API_GAME_G3_GUIDE.md** - Chi tiết Game 3 API
- **docs/API_GAME_GUEST.md** - Guest mode API
- **docs/API_INVITE_REWARD_GUIDE.md** - Nhân viên mời (Referral)
- **docs/GAME3_IMPLEMENTATION_GUIDE.md** - Hướng dẫn triển khai G3
- **docs/CHANGELOG-G2.md** - Thay đổi Game 2

## 🚀 Deployment

### Docker Deployment
```bash
# Build image
docker build -t api-kamgift-tokyolife .

# Run with compose
docker-compose up -d

# Check logs
docker logs -f <container-id>
```

### Environment Variables
```
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=tokyolife
JWT_SECRET=your-jwt-secret
REDIS_HOST=localhost
REDIS_PORT=6379
GOOGLE_SHEETS_API_KEY=your-key
```

## 📚 Getting Started

```bash
# 1. Install dependencies
npm install
# or
yarn install

# 2. Setup environment
cp .env.example .env
# Edit .env với database details

# 3. Setup database (TypeORM)
npm run typeorm:migrate

# 4. Start development server
npm run start:dev

# 5. Access API at
# http://localhost:3000
```

## 🧪 Testing & Development

```bash
# Lint code
npm run lint
npm run lint:fix

# Format code
npm run format

# Build for production
npm run build

# Start production server
npm start

# TypeORM migrations
npm run typeorm:generate -n <MigrationName>
npm run typeorm:migrate
npm run typeorm:revert
```

## 💾 Database Models

### Core Entities
- **TblUsers** - Người dùng hệ thống
- **TblGames** - Định nghĩa các trò chơi
- **TblFactorAuth** - 2FA settings
- **LogActivity** - Ghi nhật ký hoạt động

### Game Specific
- **Game3PlaySession** - Phiên chơi Game 3
- **Game3UserItems** - Vật phẩm thu thập Game 3
- **GuestGameSession** - Phiên chơi khách

### Locations & Items
- **Location** - Tỉnh thành
- **LocationRequirement** - Yêu cầu vật phẩm
- **ItemsGame** - Vật phẩm trò chơi

### Rewards & Prizes
- **LuckyPrize** - Định nghĩa phần thưởng
- **UserGiftAward** - Phần thưởng user nhận
- **SpinHistory** - Lịch sử quay vòng
- **SpinHistoryCode** - Mã code quay vòng
- **GameUserRewards** - Phần thưởng trò chơi

### Vouchers & Coupons
- **VoucherDraw** - Voucher/thưởng rút
- **Coupon** - Mã giảm giá
- **UserSpin** - Tiến trình quay người dùng

### Referral & Promotions
- **InviteHistory** - Lịch sử mời nhân viên
- **Promotion** - Chương trình khuyến mãi

## 👥 Development Notes

- **Husky Git Hooks**: Tự động format & lint trước khi commit
- **TypeScript**: Full type-safety với strict mode
- **Express Rate Limiting**: Chống brute force attacks
- **CORS**: Cross-origin support configured
- **Sessions**: Express-session + Cookie parser
- **Error Handling**: Centralized error middleware
- **Validation**: express-validator + custom schemas

## 🔗 Links & Resources

- **API Base URL**: `http://localhost:3000`
- **TypeORM Docs**: https://typeorm.io/
- **Express Docs**: https://expressjs.com/
- **Redis Docs**: https://ioredis.readthedocs.io/

## 📝 Notes

- Hỗ trợ GMT+7 với date-fns-tz
- Redis cache cho performance tối ưu
- Multi-level referral tracking chi tiết
- Game 3 hỗ trợ danh sách tỉnh/location flexible
- Lucky wheel với xác suất custom
- Coupon/voucher code unique per user
