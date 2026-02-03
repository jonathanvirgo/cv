# Gift AFamily - Frontend Web Application

## 📋 Thông tin chung
- **Công ty**: VCCORP (Admicro)
- **Tên dự án**: Frontend Web Application Gift AFamily
- **Mô tả**: Ứng dụng web frontend hiện đại xây dựng bằng Next.js 16 với Turbopack, tích hợp React 19, Redux Toolkit, NextAuth, Bootstrap 5, Tailwind CSS, React Hook Form. Cung cấp các tính năng quản lý thương mại điện tử, danh mục sản phẩm, giỏ hàng, thanh toán, quản lý đơn hàng, và tích hợp game quay vòng may mắn.
- **Thời gian phát triển**: 2024 - Hiện tại
- **Vai trò**: Frontend Developer / Full Stack Developer
- **Team size**: 3-4 người

## 🛠️ Tech Stack
- **Framework**: Next.js 16.0.7 (App Router)
- **Runtime**: React 19.0.0
- **Rendering**: Server-side Rendering (SSR), Static Generation (SSG)
- **Build Tool**: Turbopack (Next.js 16)
- **State Management**: Redux Toolkit 2.8.2, react-redux 9.2.0, redux-persist 6.0.0
- **Authentication**: NextAuth.js 5.0.0-beta.28
- **UI Framework**: Bootstrap 5.3.6 + Custom CSS
- **Styling**: Tailwind CSS 4.1.8 + PostCSS 8.5.4
- **Icons**: Lucide React 0.511.0
- **Forms**: React Hook Form 7.56.4 (Form validation & management)
- **HTTP Client**: Axios 1.13.4
- **Type Safety**: TypeScript 5
- **Code Quality**: ESLint 9, Next.js lint config
- **DOM Manipulation**: jQuery 3.7.1 (legacy support)
- **Package Manager**: npm, yarn, pnpm, bun
- **Deployment**: Vercel (recommended), Docker, any Node.js hosting

## 📝 Mô tả Chi Tiết

Gift AFamily Frontend là ứng dụng web ecommerce hiện đại được xây dựng để cung cấp giao diện người dùng toàn diện cho hệ thống bán hàng và quà tặng:

- **Product Catalog**: Duyệt danh mục sản phẩm, tìm kiếm, lọc theo loại/giá
- **Product Details**: Xem chi tiết sản phẩm, hình ảnh, mô tả, reviews
- **Shopping Cart**: Thêm/xóa sản phẩm, cập nhật số lượng, tính tổng giá
- **Checkout**: Quy trình thanh toán multi-step, lựa chọn hình thức thanh toán
- **User Authentication**: Đăng nhập, đăng ký, quên mật khẩu, reset mật khẩu
- **User Profile**: Quản lý thông tin cá nhân, địa chỉ giao hàng
- **Order Management**: Xem lịch sử đơn hàng, trạng thái giao hàng, chi tiết đơn hàng
- **Wishlist/Favorites**: Lưu sản phẩm yêu thích
- **Lucky Wheel Game**: Quay vòng may mắn nhận voucher/discount
- **Promotions**: Hiển thị khuyến mãi, mã giảm giá, flash sales
- **Reviews & Ratings**: Xem và viết đánh giá sản phẩm
- **Responsive Design**: Tương thích desktop, tablet, mobile
- **Real-time Updates**: Socket.io cho order status updates (optional)

## 🎯 Vấn đề Đã Giải Quyết

1. **Form Management & Validation**
   - React Hook Form cho form handling hiệu quả
   - Validation rules phức tạp (email, phone, address)
   - Real-time error messages
   - Form state persistence với Redux
   - Multi-step form (checkout process)
   
2. **State Management Persistence**
   - Redux Toolkit cho state centralization
   - redux-persist cho localStorage persistence
   - Cart persistence giữa sessions
   - User preferences lưu trữ
   - Form state recovery after refresh
   
3. **Authentication & Session Management**
   - NextAuth.js integration với JWT
   - Protected routes với middleware
   - Automatic token refresh
   - Session persistence
   - Role-based access control
   
4. **Product & Order Management**
   - Danh sách sản phẩm pagination
   - Filtering & sorting
   - Search functionality
   - Order history tracking
   - Order status real-time updates
   
5. **Shopping Cart System**
   - Add/remove items
   - Update quantities
   - Calculate subtotal, tax, shipping
   - Apply coupon/discount codes
   - Persistent cart storage
   
6. **Checkout Flow**
   - Multi-step checkout (address → payment → confirm)
   - Address validation
   - Payment method selection
   - Order summary review
   - Success/error handling
   
7. **Responsive Design**
   - Bootstrap 5 grid system
   - Tailwind CSS utilities
   - Mobile-first approach
   - Touch-friendly interactions
   - Adaptive layouts
   
8. **Lucky Wheel Integration**
   - Spin wheel component
   - Prize display
   - Animation effects
   - Discount code generation
   - Win history tracking

## 📊 Metrics & Thành Tựu

- **Page Components**: 15+ major page components
- **UI Components**: 25+ reusable components
- **Forms**: 8+ complex forms with validation
- **API Integrations**: 15+ API endpoints connected
- **State Management**: 8+ Redux slices
- **Response Time**: < 2s first contentful paint
- **Mobile Support**: 100% mobile responsive
- **Type Coverage**: 95%+ TypeScript coverage
- **Lighthouse Score**: 85+ performance & SEO

## 💡 Điểm Nổi Bật Kỹ Thuật

1. **Next.js 16 with Turbopack**
   - Fast development with Turbopack bundler
   - Instant HMR (Hot Module Replacement)
   - Optimized production builds
   - Server/Client component separation
   - App Router with nested layouts

2. **Advanced Redux + Persistence**
   - Redux Toolkit simplification
   - Redux-persist for state recovery
   - Multiple reducers (product, cart, user, order, auth)
   - Middleware setup
   - DevTools integration

3. **React Hook Form Integration**
   - Efficient form handling
   - Client-side validation
   - Error message display
   - Form state management
   - Multi-step form support
   - Async validation (API calls)

4. **NextAuth.js for Authentication**
   - JWT-based sessions
   - Custom credentials provider
   - Callback functions
   - Refresh token logic
   - Secure cookie handling

5. **Component Architecture**
   - Atomic design principles
   - Presentational & container components
   - Props drilling minimization
   - Reusable component patterns
   - Custom hooks usage

6. **Responsive Design System**
   - Bootstrap 5 grid
   - Tailwind CSS utilities
   - CSS modules for scoping
   - Media query helpers
   - Mobile-first approach

7. **API Integration Layer**
   - Centralized API endpoints
   - Async API calls in Redux thunks
   - Error handling & retry logic
   - Loading states management
   - Token injection in headers

8. **Type Safety & Code Quality**
   - Full TypeScript coverage
   - Type definitions for all props
   - Custom type definitions
   - Interface for API responses
   - Strict type checking

## 📁 Cấu Trúc Project

```
src/
├── app/                            # Next.js App Router
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page
│   ├── globals.css                 # Global styles
│   ├── api-v1/                     # API routes
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts        # NextAuth configuration
│   ├── (auth)/                     # Auth route group
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── forgot-password/
│   │       └── page.tsx
│   ├── products/                   # Products pages
│   │   ├── page.tsx                # Product listing
│   │   └── [id]/
│   │       └── page.tsx            # Product detail
│   ├── cart/                       # Shopping cart
│   │   └── page.tsx
│   ├── checkout/                   # Checkout flow
│   │   └── page.tsx
│   ├── orders/                     # Order management
│   │   ├── page.tsx                # Order history
│   │   └── [id]/
│   │       └── page.tsx            # Order detail
│   ├── profile/                    # User profile
│   │   ├── page.tsx                # Profile info
│   │   ├── addresses/
│   │   │   └── page.tsx            # Address management
│   │   └── settings/
│   │       └── page.tsx            # Settings
│   ├── wishlist/                   # Favorites
│   │   └── page.tsx
│   ├── promotions/                 # Promotions/Deals
│   │   └── page.tsx
│   ├── lucky-wheel/                # Lucky wheel game
│   │   └── page.tsx
│   ├── components/                 # Shared components
│   │   ├── Header.tsx              # Header navigation
│   │   ├── Footer.tsx              # Footer
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── ProductCard.tsx         # Product card
│   │   ├── ProductGrid.tsx         # Product grid
│   │   ├── CartSummary.tsx         # Cart summary
│   │   ├── LoginForm.tsx           # Login form
│   │   ├── RegisterForm.tsx        # Register form
│   │   ├── CheckoutForm.tsx        # Checkout form
│   │   ├── AddressForm.tsx         # Address form
│   │   ├── OrderList.tsx           # Orders list
│   │   ├── OrderDetail.tsx         # Order detail view
│   │   ├── ReviewCard.tsx          # Product review
│   │   ├── WheelSpinner.tsx        # Lucky wheel component
│   │   ├── LoadingSpinner.tsx      # Loading indicator
│   │   ├── ErrorBoundary.tsx       # Error boundary
│   │   └── Providers.tsx           # Provider wrapper
│   └── types/                      # Type definitions
│       └── next-auth.d.ts          # NextAuth types
├── libs/                           # Utility libraries
│   ├── api-endpoints.ts            # Centralized API endpoints
│   ├── authOptions.ts              # NextAuth configuration
│   ├── store.ts                    # Redux store setup
│   ├── axios-client.ts             # Axios configuration
│   ├── util.ts                     # Common utilities
│   └── provider/
│       ├── ReduxProvider.tsx       # Redux provider
│       ├── SessionProvider.tsx     # NextAuth session provider
│       └── ThemeProvider.tsx       # Theme provider
├── hooks/                          # Custom React hooks
│   ├── useCart.ts                  # Cart operations
│   ├── useProduct.ts               # Product operations
│   ├── useOrder.ts                 # Order operations
│   ├── useAuth.ts                  # Auth operations
│   └── useLocalStorage.ts          # LocalStorage wrapper
├── redux/                          # Redux slices & store
│   ├── slices/
│   │   ├── productSlice.ts         # Product state
│   │   ├── cartSlice.ts            # Cart state
│   │   ├── userSlice.ts            # User state
│   │   ├── orderSlice.ts           # Order state
│   │   ├── authSlice.ts            # Auth state
│   │   ├── uiSlice.ts              # UI state
│   │   └── promotionSlice.ts       # Promotion state
│   ├── selectors/                  # Reusable selectors
│   └── middleware/                 # Custom middleware
├── types/                          # Global type definitions
│   ├── product.ts
│   ├── order.ts
│   ├── user.ts
│   ├── cart.ts
│   └── api.ts
├── utils/                          # Utility functions
│   ├── formatters.ts               # Format price, date, etc.
│   ├── validators.ts               # Form validators
│   ├── api-client.ts               # API helper functions
│   └── constants.ts                # App constants
├── styles/                         # Global styles
│   ├── variables.css               # CSS variables
│   └── mixins.css                  # CSS mixins
├── middleware.ts                   # Next.js middleware
└── public/                         # Static assets
    ├── images/
    │   ├── products/
    │   ├── icons/
    │   └── banners/
    ├── videos/
    └── documents/
```

## 🔐 Authentication Flow

```
1. User visits login page
   ↓
2. Enters email/password
   ↓
3. Form submits to NextAuth API
   ↓
4. NextAuth verifies with backend
   ↓
5. On success:
   - JWT token generated
   - Session stored
   - Redirect to dashboard/home
   ↓
6. Protected pages check session
   - If valid: render page
   - If invalid: redirect to login
   ↓
7. Logout clears session
```

## 💾 Redux State Structure

```
store: {
  product: {
    items: Product[]
    selectedProduct: Product | null
    loading: boolean
    error: string | null
    filters: FilterState
    pagination: PaginationState
  },
  cart: {
    items: CartItem[]
    totalPrice: number
    totalQuantity: number
    couponCode: string | null
    discount: number
  },
  user: {
    id: string
    email: string
    name: string
    avatar: string
    addresses: Address[]
    preferences: UserPreferences
    loading: boolean
  },
  order: {
    items: Order[]
    selectedOrder: Order | null
    status: string
    loading: boolean
    error: string | null
  },
  auth: {
    isAuthenticated: boolean
    token: string | null
    user: User | null
    loading: boolean
  },
  ui: {
    sidebarOpen: boolean
    theme: 'light' | 'dark'
    notifications: Notification[]
  },
  promotion: {
    activePromotions: Promotion[]
    discounts: Discount[]
    flashSales: FlashSale[]
  }
}
```

## 📖 Key Features Breakdown

### 1. Product Browsing
- Category navigation
- Search & filtering (price, rating, brand)
- Pagination
- Sorting (price, newest, popularity)
- Product recommendations

### 2. Shopping Cart
- Add/remove items
- Update quantities
- Save cart to localStorage
- Restore cart on refresh
- Apply coupon codes
- Calculate total with tax/shipping

### 3. Checkout Process
- Step-by-step wizard
- Address validation
- Payment method selection
- Order review
- Confirmation email

### 4. User Management
- Profile editing
- Address book management
- Order history
- Saved items (wishlist)
- Account settings

### 5. Order Tracking
- Order history list
- Order detail view
- Tracking number
- Delivery status
- Invoice download

### 6. Lucky Wheel Game
- Spin wheel animation
- Discount code generation
- Win notification
- History tracking
- Prize catalog

## 🚀 Deployment

### Development
```bash
npm run dev
# Runs on http://localhost:3000
# With Turbopack for fast HMR
```

### Production Build
```bash
npm run build
npm start
```

### Deployment Options
1. **Vercel** (Recommended)
   - One-click deployment
   - Built-in Next.js optimization
   - Environment variables
   - Preview deployments

2. **Docker**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package.json .
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

## 📚 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables
cp .env.example .env.local
# Edit .env.local with:
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# 3. Start development server
npm run dev

# 4. Open browser
# http://localhost:3000
```

## 🧪 Testing & Code Quality

```bash
# Lint code
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📋 Environment Variables

```env
# NextAuth Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Optional OAuth
GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret
GOOGLE_CLIENT_ID=your-google-id
GOOGLE_CLIENT_SECRET=your-google-secret
```

## 🎨 Styling

### Bootstrap 5
- Grid system
- Components (buttons, forms, modals, cards)
- Utilities
- Responsive utilities

### Tailwind CSS 4
- Utility-first styling
- PostCSS processing
- Custom configuration
- Color palette

### CSS Variables
- Theme customization
- Dark/light mode support
- Consistent spacing

## 📞 API Integration

API calls to backend endpoints:
- **Products**: GET /api/products, POST /api/products/search
- **Cart**: GET /api/cart, POST /api/cart/add, DELETE /api/cart/item
- **Orders**: GET /api/orders, POST /api/orders, GET /api/orders/:id
- **User**: GET /api/user, PUT /api/user, GET /api/user/addresses
- **Auth**: POST /api/auth/login, POST /api/auth/register
- **Promotions**: GET /api/promotions, POST /api/coupons/validate

Integration via Axios client with Redux thunks.

## 🔗 Component Communication

```
Redux Store (Centralized State)
        ↓
Providers.tsx + SessionProvider + ReduxProvider
        ↓
Page Components (access via useSelector/useDispatch)
        ↓
UI Components (receive props from parent)
```

## 📝 Next.js Features Used

- ✅ **App Router** - Dynamic routing with nested layouts
- ✅ **Server Components** - Optimize data fetching
- ✅ **API Routes** - Backend endpoints (NextAuth)
- ✅ **Middleware** - Route protection & redirects
- ✅ **Image Optimization** - Next/Image component
- ✅ **Font Optimization** - Next/font
- ✅ **Turbopack** - Fast builds & HMR

## 🔐 Security Features

- ✅ **NextAuth.js** - Secure authentication
- ✅ **JWT Tokens** - Stateless sessions
- ✅ **CSRF Protection** - Built-in Next.js middleware
- ✅ **Secure Cookies** - HttpOnly, Secure flags
- ✅ **XSS Prevention** - React automatic escaping
- ✅ **Input Validation** - React Hook Form validation

## 👥 Development Team Notes

- **Code Style**: ESLint + Prettier
- **Form Validation**: React Hook Form + custom validators
- **State Management**: Redux Toolkit + redux-persist
- **Type Safety**: Strict TypeScript mode
- **Performance**: Code splitting, lazy loading
- **Lighthouse**: 85+ score target

## 🔗 Important Files

- [store.ts](src/libs/store.ts) - Redux store configuration
- [api-endpoints.ts](src/libs/api-endpoints.ts) - API route constants
- [authOptions.ts](src/libs/authOptions.ts) - NextAuth configuration
- [middleware.ts](src/middleware.ts) - Route protection & redirects

## 📝 Notes

- Sử dụng Next.js 16 với Turbopack để build nhanh
- Redux Toolkit + redux-persist cho state management
- React Hook Form cho form validation hiệu quả
- NextAuth.js beta 28 cho authentication
- Bootstrap 5 + Tailwind CSS kết hợp
- Full TypeScript type coverage
- Responsive design cho mobile/tablet/desktop
- Shopping cart persistence via localStorage
- Order tracking in real-time
- Lucky wheel game integration
- Multi-step checkout process
- Modern React 19 features
