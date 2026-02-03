# CAM-GIFT API - Hệ Thống API Game Gắp Thú (Claw Machine)

## 📋 Thông tin chung
- **Công ty**: VCCORP (Admicro)
- **Tên dự án**: API Gắp Thú (Claw Machine) - Hệ Thống Game Tương Tác
- **Mô tả**: Nền tảng API chuyên biệt cho game gắp thú (Claw Machine) với hỗ trợ quản lý quà phẩm, tracking spin history, multi-game support, campaign tracking, user turns management, và giải thưởng linh hoạt.
- **Thời gian phát triển**: 2023 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 4-5 người

## 🛠️ Tech Stack
- **Backend**: Node.js 14+, Express.js, TypeScript
- **ORM**: TypeORM (Entity mapping cho MySQL)
- **Database**: MySQL/MariaDB
- **Caching**: Redis (ioredis)
- **Real-time**: Socket.io (WebSocket - optional)
- **Authentication**: JWT (jsonwebtoken)
- **File Handling**: Formidable, multer, jszip
- **Email**: Nodemailer, Handlebars
- **External Services**: Google Sheets API, Axios
- **Scheduling**: node-cron
- **Validation**: express-validator
- **Utilities**: date-fns, date-fns-tz, lodash, big.js
- **Logging**: Pino, Morgan
- **Deployment**: Docker, Docker Compose
- **Development**: ts-node-dev, TypeScript, ESLint, Prettier, Husky
- **Package Manager**: npm, yarn

## 📝 Mô tả Chi Tiết

API Gắp Thú (CAM-GIFT) là hệ thống backend được xây dựng để quản lý toàn bộ quy trình chơi game gắp thú trực tuyến:

- **Game Initialization**: Khởi tạo game, kiểm tra thời gian, tạo lượt chơi mặc định
- **Gift Management**: Quản lý danh sách quà phẩm, số lượng, điều kiện phát hành
- **Play Mechanics**: Xử lý logic gắp thú, random result, trao thưởng
- **Spin History Tracking**: Ghi lịch sử mỗi lần chơi chi tiết
- **Campaign Integration**: Liên kết với campaign, tracking user từ campaign nào
- **User Turns Management**: Quản lý lượt chơi, reset daily/weekly
- **Prize Distribution**: Random phần thưởng, xử lý phát hành
- **Voucher/Coupon**: Trao voucher, mã giảm giá sau khi gắp được
- **Leaderboard**: Xếp hạng người chơi theo score, lần gắp thành công
- **Game Analytics**: Thống kê chơi game, conversion rate, prize distribution
- **Multi-Game Support**: Hỗ trợ nhiều game gắp thú khác nhau
- **Rate Limiting & Security**: Chống cheat, validate thời gian chơi

## 🎯 Vấn đề Đã Giải Quyết

1. **Game Initialization & Validation**
   - Kiểm tra game tồn tại, đang active
   - Kiểm tra thời gian game (start/end date)
   - Tạo user turns mặc định nếu chưa có
   - Validate thời gian reset (daily, weekly, monthly)
   - Trả về số lượt chơi còn lại
   
2. **Gift Management & Distribution**
   - Danh sách quà phẩm với type (item, coin, voucher, lose)
   - Tracking số lượng phát hành vs tổng
   - Phân loại quà theo difficulty, rarity
   - Active/Inactive quà trong game
   - Image upload cho mỗi quà
   
3. **Play Game & Random Result**
   - Validate user có lượt chơi còn lại
   - Validate có quà còn để phát
   - Random result từ danh sách quà (weight-based)
   - Trả lịch sử khi gắp thành công/không thành công
   - Tạo mã unique code cho mỗi lần chơi
   
4. **Spin History Tracking**
   - Lưu chi tiết mỗi lần chơi (user, game, prize, timestamp)
   - Optional campaign tracking (nếu user từ campaign nào)
   - Code unique per spin
   - Timestamp chính xác (GMT+7)
   - Status: success, fail, expire
   
5. **Campaign Integration**
   - Optional campaignId trong request
   - Lưu lên database để tracking user từ campaign nào
   - Campaign-specific gift list
   - Campaign analytics (total plays, success rate, prize cost)
   
6. **User Turns Management**
   - Tạo user turns mặc định khi init
   - Quản lý giới hạn lượt chơi/ngày
   - Reset daily, weekly, monthly
   - Multiple turn types (free, premium, bonus)
   - Cron job cho reset schedule
   
7. **Prize Distribution Logic**
   - Weight-based random selection
   - Phân loại difficulty levels
   - Probability per prize item
   - Prevent over-distribution
   - Stock management
   
8. **Campaign Tracking & Analytics**
   - Track user từ campaign
   - Calculate ROI per campaign
   - Prize cost tracking
   - User engagement metrics

## 📊 Metrics & Thành Tựu

- **Database Models**: 15+ TypeORM entities
- **API Endpoints**: 20+ endpoints hoàn toàn được tài liệu hóa
- **Games Support**: Unlimited games
- **Gift Items**: Unlimited items per game
- **Daily Plays**: Support 10,000+ concurrent players
- **Spin History**: Lưu 1M+ records
- **Response Time**: < 100ms average
- **Uptime**: 99.9%+ with Docker deployment
- **Code Quality**: ESLint + Prettier standard

## 💡 Điểm Nổi Bật Kỹ Thuật

1. **TypeORM Entity System**
   - Well-structured entities cho game, gift, user_spins, spin_histories
   - Relationship mapping (one-to-many, many-to-many)
   - Query optimization với index
   - Migration system

2. **Game Logic Encapsulation**
   - Validate logic tách biệt
   - Play logic phức tạp với weight-based random
   - Prize distribution engine
   - Campaign tracking

3. **Real-time Features (Optional)**
   - Socket.io cho live updates
   - Real-time leaderboard
   - Live prize notifications

4. **Time Management**
   - GMT+7 timezone support
   - Daily/Weekly/Monthly reset
   - Cron jobs scheduling
   - Turn expiration handling

5. **Campaign Integration**
   - Optional campaign tracking
   - Campaign-specific configuration
   - Analytics per campaign
   - User source tracking

6. **Performance Optimization**
   - Redis caching cho gift list
   - Efficient database queries
   - Connection pooling
   - Rate limiting

7. **Error Handling & Security**
   - Centralized error handler
   - Input validation
   - JWT authentication
   - CORS configuration

8. **Code Quality**
   - Full TypeScript coverage
   - Strict mode
   - ESLint + Prettier
   - Husky git hooks

## 📁 Cấu Trúc Project

```
src/
├── api/                          # API controller wrappers
│   ├── claw-machine.api.ts      # Claw machine endpoints
│   ├── game.api.ts              # Game management
│   ├── gift.api.ts              # Gift management
│   ├── user-turns.api.ts        # User turns
│   ├── spin-history.api.ts      # Spin history
│   └── analytics.api.ts         # Analytics endpoints
├── config/
│   ├── config.ts                # Environment config
│   ├── constant.ts              # Constants
│   ├── logger.ts                # Pino logger
│   └── morgan.ts                # Morgan middleware
├── entities/                     # TypeORM entities
│   ├── Game.ts                  # Game definition
│   ├── Gift.ts                  # Gift/Prize items
│   ├── UserSpin.ts              # User play sessions
│   ├── SpinHistory.ts           # Spin play history
│   ├── UserTurns.ts             # User turns/plays left
│   ├── Campaign.ts              # Campaign data
│   ├── Leaderboard.ts           # Ranking data
│   ├── Prize.ts                 # Prize master
│   ├── User.ts                  # User data
│   └── base/                    # Base entity classes
├── helpers/                      # Helper functions
├── middlewares/                  # Express middleware
│   ├── auth.ts                  # JWT authentication
│   ├── error.ts                 # Error handling
│   ├── validation.ts            # Input validation
│   └── rateLimiter.ts           # Rate limiting
├── routes/                       # API routes
│   ├── claw-machine.ts
│   ├── game.ts
│   ├── gift.ts
│   ├── user-turns.ts
│   ├── spin-history.ts
│   └── analytics.ts
├── services/                     # Business logic
│   ├── claw-machine.service.ts  # Play game logic
│   ├── game.service.ts          # Game management
│   ├── gift.service.ts          # Gift operations
│   ├── user-turns.service.ts    # Turns management
│   ├── spin-history.service.ts  # History tracking
│   ├── analytics.service.ts     # Analytics
│   ├── jwt.service.ts           # JWT operations
│   ├── password.service.ts      # Password hashing
│   └── common.service.ts        # Shared logic
├── jobs/                         # Background jobs
│   ├── reset-turns.job.ts       # Daily reset
│   └── cleanup-history.job.ts   # History cleanup
├── types/                        # TypeScript types
├── utils/                        # Utility functions
├── validators/                   # Input validation
├── app.ts                        # Express app setup
└── index.ts                      # Entry point
```

## 📊 Core Database Models

### Game & Gift
- **Game** - Game definition (name, duration, active status)
- **Gift** - Gift/Prize items (name, image, type, quantity)
- **GameGift** - Relationship between game & gifts

### User & Plays
- **User** - User data
- **UserSpin** - Current play session
- **SpinHistory** - Historical plays (immutable)
- **UserTurns** - Available plays left

### Campaign & Analytics
- **Campaign** - Campaign data
- **SpinCampaignTracking** - Link spin to campaign
- **Leaderboard** - User ranking
- **GameAnalytics** - Game statistics

### Configuration
- **Prize** - Prize master data
- **TurnConfig** - Turn configuration (daily/weekly)

## 🎮 Game Flow

```
1. User opens Claw Machine game
   ↓
2. Call POST /claw-machine/init
   ├─ Validate user, game
   ├─ Check game duration (start/end)
   ├─ Get user turns (plays left)
   └─ Return play count
   
3. Display gift list
   ├─ Call GET /claw-machine/gifts
   ├─ Get all active gifts
   └─ Display with images
   
4. User attempts to catch prize
   ├─ Call POST /claw-machine/play
   ├─ Validate user has turn left
   ├─ Random prize (weight-based)
   ├─ Generate unique code
   ├─ Save to spin_history
   └─ Return result (success/fail)
   
5. If success:
   ├─ Award prize (item, voucher, coin)
   ├─ Send notification
   ├─ Update leaderboard
   └─ Trigger prize claim
   
6. If fail:
   ├─ Show fail message
   ├─ Save to history
   └─ Check turns left
   
7. Game end:
   ├─ No turns left
   ├─ Daily reset available
   └─ Show results/leaderboard
```

## 🔐 Authentication Flow

```
1. User Login
   ↓
2. Get JWT token
   ↓
3. Include in Authorization header
   ↓
4. Middleware verify token
   ↓
5. Access game APIs
   ↓
6. Token expires → Refresh or re-login
```

## 📖 Key Documentation Files

- **CLAW_MACHINE_API.md** - Detailed Claw Machine API
- **README.md** - Setup guide
- **docs/** - Additional documentation

## API Endpoints

### 1. Initialize Game
**POST** `/claw-machine/init`
- Body: `{ gameId, campaignId? }`
- Return: `{ spin_counts }`

### 2. Get Gift List
**GET** `/claw-machine/gifts?gameId=123`
- Return: Gift list with images, types, quantities

### 3. Play Game
**POST** `/claw-machine/play`
- Body: `{ gameId, campaignId? }`
- Return: `{ success, prize, code }`

### 4. Spin History
**GET** `/claw-machine/history`
- Query: `{ gameId, limit, offset }`
- Return: List of user spins

### 5. Leaderboard
**GET** `/claw-machine/leaderboard?gameId=123`
- Return: Top players by score/success rate

### 6. Game Analytics
**GET** `/claw-machine/analytics?gameId=123`
- Return: Game statistics, conversion rate, prize cost

## 🚀 Deployment

### Docker Deployment
```bash
# Build image
docker build -t cam-gift-api .

# Run with compose
docker-compose up -d
```

### Environment Variables
```
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=cam_gift
JWT_SECRET=your-jwt-secret
REDIS_HOST=localhost
REDIS_PORT=6379
TIMEZONE=Asia/Ho_Chi_Minh
```

## 📚 Getting Started

```bash
# 1. Install dependencies
npm install

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

# TypeORM operations
npm run typeorm:generate -n <MigrationName>
npm run typeorm:migrate
npm run typeorm:revert
```

## 💾 Key Features

### Gift Management
- Create, update, delete gifts
- Image upload per gift
- Quantity tracking
- Type classification (item, coin, voucher, lose)
- Active/Inactive status

### Play System
- Validate turns available
- Weight-based random selection
- Atomic transaction for play
- Immediate history recording
- Unique code generation

### Turns Management
- Create default turns
- Daily/Weekly reset
- Multiple turn types
- Cron-based reset
- Turn expiration

### Campaign Tracking
- Optional campaignId in play request
- Link spin to campaign
- Campaign-specific analytics
- User source tracking

### Analytics
- Total plays per game
- Success rate
- Prize distribution stats
- User engagement metrics
- Campaign ROI

## 🔗 Integration Points

- **Frontend**: Call `/claw-machine/init` → `/claw-machine/play`
- **Backend Campaign API**: Get campaignId from user context
- **Voucher System**: Generate voucher code after winning
- **Email Service**: Send prize notification email
- **Analytics Dashboard**: Query `/claw-machine/analytics`

## 📝 Notes

- Hỗ trợ GMT+7 timezone
- Weight-based random selection (configurable)
- Campaign tracking tùy chọn
- Spin history immutable (audit trail)
- Redis caching cho gift list
- Rate limiting để chống cheat
- Daily turn reset via cron
- Multiple game support
- Leaderboard real-time (Redis)
- Analytics queryable
