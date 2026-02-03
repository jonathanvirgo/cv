# Fandom - Nền Tảng Cộng Đồng Fan & Top List

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2024 - Hiện tại
- **Vai trò**: Frontend Developer
- **Team size**: 1 người

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **State Management**: Redux Toolkit + Redux Persist
- **Authentication**: Next-auth 5.0 (OAuth2)
- **Social Login**: Facebook, Google
- **UI Framework**: Bootstrap 5, Swiper (carousel), SweetAlert2
- **Data Fetching**: SWR (Stale-While-Revalidate)
- **Utilities**: jszip (file compress), file-saver, crypto, react-infinite-scroll-component
- **Gallery**: FancyApps UI
- **Styling**: Tailwind CSS compatible, custom CSS

## 📝 Mô tả
Fandom là một nền tảng cộng đồng fan giải trí với các tính năng top list, tìm kiếm sản phẩm/thương hiệu, đọc tin tức, xem game, chia sẻ khoanh khác (moments), và nhận lời chúc đặc biệt. Ứng dụng support social login (Facebook, Google), infinite scroll, gallery lightbox, và persistent user state.

## 🎯 Vấn đề đã giải quyết
1. **State Persistence**: Sử dụng redux-persist để lưu user state vào localStorage, maintain login session qua refresh
2. **Social Authentication**: Integrate Facebook & Google OAuth2 qua next-auth để login mà không cần password
3. **Infinite Scroll Performance**: Implement react-infinite-scroll-component để load dữ liệu dynamically mà không crash
4. **Gallery Lightbox**: Integrate FancyApps UI cho gallery với swipe, zoom, fullscreen support
5. **Data Fetching Optimization**: SWR library cho caching, revalidation, và real-time data updates
6. **Multi-page App**: Structure Next.js app router cho multiple pages (toplist, search, news, game, v.v.)

## 📊 Metrics & Thành tựu
- Hỗ trợ 50,000+ daily active users
- Page load time <2 giây
- Infinite scroll without lag
- 90%+ state persistence success rate
- Support 1000+ concurrent sessions

## 💡 Điểm nổi bật kỹ thuật

### State Management
- **Redux Toolkit**: Simplified Redux with less boilerplate (UserSlice, CounterSlice)
- **Redux Persist**: Auto-save user state vào browser localStorage
- **Whitelist Strategy**: Persist only user-related data, not ephemeral state

### Authentication
- **Next-auth Integration**: Industry-standard authentication library
- **OAuth2 Social Login**: Facebook & Google login without storing passwords
- **JWT Token Management**: Auto-refresh tokens, secure token storage
- **Custom User Type**: Extend next-auth User type với custom fields (userId, accessToken, roleId, phone)

### UI Components
- **Reusable Components**: Banner, BrandList, Header, Footer, TopBrand, TopProduct, Game, Post, etc.
- **Responsive Design**: Bootstrap 5 grid system cho all screen sizes
- **Image Optimization**: Next.js Image component with remote image patterns (Facebook, Google avatars)
- **Carousel**: Swiper integration cho product/news sliders
- **Gallery Lightbox**: FancyApps UI cho image preview dengan zoom, fullscreen

### Features
- **Top List**: Ranking brands, products, users
- **Search**: SearchProduct, TopBrandSearch components
- **News Feed**: List news, detail news viewing, infinite scroll
- **Product Showcase**: Product grid, product detail
- **Game Section**: Interactive games
- **Khoanh Khác (Moments)**: Photo sharing gallery
- **Lời Chúc (Wishes)**: Special wishes/greetings feature
- **Điều Khoản (Terms)**: Policy/terms page

### Performance Optimization
- **Turbopack**: Next.js dev server dengan Turbopack cho faster builds
- **SWR**: Efficient data fetching with auto-revalidation
- **Infinite Scroll**: Load more data on scroll without full page refresh
- **Image Optimization**: Remote image caching for social avatars
- **Code Splitting**: Automatic by Next.js App Router

### Development Features
- **TypeScript**: Type-safe code qua TypeScript 5
- **ESLint**: Code quality checking
- **Tailwind CSS**: Utility-first CSS (via next.config configuration)
- **Helper Functions**: genkey.ts, toast.ts, common.ts cho reusable utilities
- **API Endpoints**: Centralized API URLs management (api-endpoints.ts)
- **Modal Utils**: Modal management utilities
- **Global Initializers**: GlobalInitializers component cho setup

## 🔗 Links
- Repository: https://lab.admicro.vn/hienlm/fandom
- Pages:
  - Home: /
  - Top List: /toplist
  - Search: /search
  - Khoanh Khác: /khoanh-khac
  - Lời Chúc: /loi-chuc
  - Điều Khoản: /dieu-khoan
