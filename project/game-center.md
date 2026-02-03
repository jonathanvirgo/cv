# Game Center - Nền Tảng Quản Lý Game Campaign

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2024 - Hiện tại
- **Vai trò**: Frontend Developer
- **Team size**: 2 người

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Form Management**: React Hook Form + Zod validation
- **Image Processing**: Cropperjs, react-cropper
- **Animation**: GSAP (GreenSock Animation Platform), ScrollTrigger
- **UI Components**: Custom Bootstrap 5 components
- **HTTP Client**: Custom HTTP wrapper với JWT token management
- **Authentication**: JWT Token + Cookie-based
- **Utilities**: html-react-parser, jwt-decode, jQuery
- **Styling**: CSS Modules, custom CSS

## 📝 Mô tả
Game Center là nền tảng tạo, quản lý, và publish game campaigns. Cho phép người dùng tạo campaign mới, cấu hình game (settings, graphics), thiết kế landing page, xem preview, quản lý profile, và theo dõi dashboard. Hỗ trợ multiple game types, campaign status tracking, game configuration, và landing page customization.

## 🎯 Vấn đề đã giải quyết
1. **Campaign Management**: Quản lý multiple campaigns với status tracking (draft, published, rejected)
2. **Game Configuration**: Cấu hình chi tiết game settings, graphics, animation, assets management
3. **Landing Page Builder**: Xây dựng landing page editor với drag-drop, preview, và publish
4. **JWT Authentication**: Implement JWT token-based authentication với cookie storage, token refresh
5. **Form Validation**: Type-safe form validation qua React Hook Form + Zod schema
6. **Image Processing**: Crop, resize, optimize image assets qua Cropperjs trước khi upload
7. **Rich Animation**: Implement GSAP animations cho campaign preview, scroll animations

## 📊 Metrics & Thành tựu
- Hỗ trợ 1000+ concurrent campaign creators
- Create campaign trong <10 giây
- Landing page preview render trong <2 giây
- Support 100+ game types/templates
- Batch operations (export, download) hỗ trợ tới 10,000 items

## 💡 Điểm nổi bật kỹ thuật

### State Management
- **Redux Toolkit**: Multiple feature slices (Campaign, GameConfig, Landing, User, etc.)
- **Optimized Store**: Selector-based access để prevent unnecessary re-renders
- **DevTools Integration**: Redux DevTools trong development mode

### Authentication & Security
- **JWT Token Management**: Custom HTTP wrapper xử lý token injection vào headers
- **Token Expiration Check**: Decode JWT và kiểm tra expiration time
- **Cookie Storage**: Secure token storage via cookies với httpOnly flag
- **Protected Routes**: Middleware để protect private routes (/campaign, /dashboard, /profile)
- **Automatic Redirect**: Redirect to login khi token expired

### Form & Validation
- **React Hook Form**: Efficient form management với minimal re-renders
- **Zod Schemas**: Runtime type validation cho form data
- **Field-level Validation**: Async validation support (API calls)
- **Error Messages**: Localized error messages

### Campaign Management
- **Draft/Publish Workflow**: Save as draft, preview, publish với status tracking
- **Game Selection**: Choose từ multiple game templates khi create campaign
- **Campaign List**: Paginated list với filtering, sorting, search
- **Status Indicators**: Visual status (draft, published, rejected) với reason display

### Game Configuration
- **Game Settings**: Configure platform, orientation, award method
- **Graphics Configuration**: Manage colors, fonts, images, assets
- **Preview**: Real-time preview khi change settings
- **Draft Management**: has_draft_game flag để track incomplete configs

### Landing Page Builder
- **Landing Designer**: Visual editor để build landing page
- **Component Library**: Pre-built components (hero, features, CTA, v.v.)
- **Preview**: Desktop, tablet, mobile previews
- **Draft/Publish**: Save draft, publish, or unpublish
- **HTML Parser**: Parse server-side HTML khi load landing preview

### Image Processing
- **Image Cropper**: React-cropper cho image crop/resize
- **Aspect Ratio**: Support multiple aspect ratios
- **Real-time Preview**: See crop result in real-time
- **Optimization**: Compress image trước upload

### Animation & UX
- **GSAP Animations**: Smooth animations cho campaign showcase, transitions
- **ScrollTrigger**: Trigger animations on scroll
- **Swiper Carousel**: Swiper for screenshot gallery, image slider
- **Loading States**: Skeleton loaders cho better UX

### API Integration
- **Custom HTTP Client**: Centralized API calls qua custom http.ts
- **Error Handling**: EntityError, HttpError với detailed error payloads
- **Request Interceptors**: Auto-inject JWT token, handle auth errors
- **Endpoints**: Organized api requests (auth, campaign, dashboard, landing, user)

### Developer Features
- **Turbopack Dev Server**: Ultra-fast Next.js dev server
- **TypeScript Strict Mode**: Type-safe development
- **Path Aliases**: @/ import paths cho cleaner imports
- **ESLint**: Code quality checking
- **Middleware**: NextRequest/NextResponse handling

## 🔗 Links
- Pages:
  - Home: /
  - Login: /login
  - Forgot Password: /forgot-password
  - Dashboard: /dashboard
  - Campaign List: /campaign
  - Create Campaign: /campaign/create
  - Campaign Detail: /campaign/detail/[id]
  - Game Config: /campaign/game-config
  - Game Settings: /campaign/game-setting
  - Landing Config: /campaign/landing-config
  - Landing Settings: /campaign/landing-setting
  - Campaign Preview: /campaign/preview
  - Profile: /profile
  - Change Password: /change-password
  - Policy: /policy
  - Help: /help
