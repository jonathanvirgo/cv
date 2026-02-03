# A80 API - Hệ thống API đa chức năng

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Dự án**: A80 API (Multi-featured Game & Marketing Platform)
- **Thời gian**: 2024
- **Vai trò**: Backend Developer
- **Team size**: 3-4 người

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js 5.1.0
- **Database**: MySQL, Sequelize ORM 6.37.7
- **Authentication**: JWT (jsonwebtoken 9.0.2), bcrypt 6.0.0
- **File Handling**: Multer 2.0.2, Archiver 7.0.1, Form-data
- **Real-time**: Socket.io 4.8.1
- **Validation**: express-validator 7.2.1
- **Utilities**: axios, slugify, mime-types, morgan, dotenv
- **Dev Tools**: Nodemon 3.1.10

## 📝 Mô tả
A80 API là backend API đa chức năng hỗ trợ các feature như quản lý trò chơi, coupon, media, ảnh booth, brand, category, product, post, wishlist, và xác thực người dùng. Hệ thống sử dụng Sequelize ORM để quản lý MySQL database, JWT để xác thực, và Socket.io để xử lý real-time communication. API được bảo vệ bằng middleware xác thực API key và token.

## 🎯 Vấn đề đã giải quyết
1. **Xác thực API**: Triển khai middleware apiAuth để kiểm tra API key, giới hạn truy cập public API
2. **Quản lý File**: Sử dụng Multer để upload file (ảnh, video), Archiver để tạo file ZIP, form-data để xử lý multipart requests
3. **Real-time Updates**: Socket.io để push notification và cập nhật real-time cho game, spin wheel events
4. **Database Scalability**: Sequelize ORM giúp quản lý 25+ models, tối ưu query, tránh N+1 problems
5. **Password Security**: Bcrypt hashing cho tất cả password, không lưu plaintext

## 📊 Metrics & Thành tựu
- Hỗ trợ 25+ API endpoints cho các feature khác nhau
- Xử lý concurrent uploads với Multer
- Real-time game event broadcasting qua Socket.io
- Quản lý JWT token refresh mechanisms
- RESTful API design với consistent error handling

## 💡 Điểm nổi bật kỹ thuật

### Architecture
- **Service Layer Pattern**: Controllers gọi service layer, service gọi models (clean separation)
- **Middleware Pipeline**: apiAuth → verifyToken → route handler (flexible auth)
- **Route Organization**: Tách routes thành các module (auth, coupon, product, etc.)

### Security
- **API Key Authentication**: apiAuth middleware validate API key trước khi access
- **JWT Token**: Token-based auth cho secure endpoints, refresh token strategy
- **Password Hashing**: Bcrypt với salt rounds để lưu password safely
- **Input Validation**: express-validator để validate request body, query params

### Database
- **Sequelize ORM**: 25+ models mapping với MySQL tables
- **Transaction Support**: Xử lý complex business logic với transaction consistency
- **Relationship Management**: Proper associations (hasMany, belongsTo, belongsToMany)
- **Query Optimization**: Eager loading, indexes cho frequently queried fields

### File Management
- **Multer Uploads**: Efficient file upload handling với destination/filename customization
- **Archive Generation**: Archiver để create ZIP files cho bulk exports
- **MIME Type Detection**: mime-types package để validate uploaded file types

### Real-time Features
- **Socket.io Integration**: Persistent WebSocket connections cho game events
- **Event Broadcasting**: Emit events tới connected clients (game results, promotions)
- **Room Management**: Socket rooms cho game lobbies, match pairing

## 📂 Project Structure
```
a80_api/
├── app/
│   ├── config/
│   │   └── sequelize.js          # Database connection config
│   ├── controllers/              # Route handlers (15+ controllers)
│   │   ├── auth.controller.js
│   │   ├── game.controller.js
│   │   ├── coupon.controller.js
│   │   └── ...
│   ├── models/                   # Sequelize models (25+ models)
│   │   ├── user.model.js
│   │   ├── game.model.js
│   │   └── ...
│   └── services/                 # Business logic layer
├── routes/                       # Express routes (10+ route files)
├── middlewares/
│   ├── apiAuth.js               # API key validation
│   ├── verifyToken.js           # JWT verification
│   └── ...
├── public/
│   ├── uploads/                 # User uploaded files
│   └── download/                # Generated downloadable files
├── configs/
│   └── socket.config.js         # Socket.io configuration
├── utils/                        # Helper functions
├── app.js                        # Express app setup
├── server.js                     # Server entry point
└── package.json
```

## 🔗 Links
- Documentation: Xem trong folder `/docs`
- Socket Events: Xem trong `/file/GAME_G1_FLOW.md`
- API Testing: `/file/test-socket.html` (WebSocket test)
