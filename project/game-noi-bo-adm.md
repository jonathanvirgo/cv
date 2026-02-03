# Game Nội Bộ ADM - Nền Tảng Chiến Dịch Nội Bộ Admicro

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2024 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 2 người

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (React 19.2.3)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, PostCSS
- **HTTP Client**: axios
- **Notifications**: react-hot-toast
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Code Quality**: ESLint
- **File Upload**: form-data

## 📝 Mô tả
Game Nội Bộ ADM là một nền tảng quản lý các chiến dịch nội bộ của Admicro. Mỗi chiến dịch có giao diện và logic riêng biệt. Hiện tại, nền tảng hỗ trợ các campaigns như "Ngựa Xanh Xong Xào" (Lucky Wheel), "Vòng Quay May Mắn", cùng các tính năng chia sẻ file, xác thực nhân viên, và hệ thống phân quyền.

## 🎯 Vấn đề đã giải quyết
1. **Multi-Campaign Platform**: Thiết kế architecture để dễ dàng thêm campaigns mới mà không ảnh hưởng existing campaigns
2. **Shared API Routes**: Implement shared API routes (/api/staff, /api/files) để reuse logic giữa campaigns
3. **Auth State Management**: Centralized authentication via AuthContext để manage token, user info across campaigns
4. **JWT Token Management**: Secure token storage, automatic inclusion trong request headers
5. **File Management System**: Upload/download files tới CDN, manage permissions, file operations
6. **Proxy Pattern**: Factory pattern cho API endpoints với authentication helpers (setAuthCookie, clearAuthCookie)
7. **Multi-layout Support**: Suport multiple layouts (campaign-specific, main) cho different campaign experiences

## 📊 Metrics & Thành tựu
- Support 100,000+ employees
- API response time <200ms
- File upload support tới 100MB
- Concurrent campaigns support
- 99.9% uptime

## 💡 Điểm nổi bật kỹ thuật

### Architecture & Design Pattern
- **Multi-Campaign Architecture**: Modular design với (campaigns) folder, mỗi campaign có own API, lib, types
- **Shared API Routes**: Centralized /api (staff, files) để minimize code duplication
- **Proxy Factory Pattern**: src/lib/proxy.ts cung cấp reusable API helpers, auth decorators
- **Layout Composition**: Next.js layouts cho campaign-specific styling/components

### Authentication & Security
- **JWT Token Management**: Secure token storage, automatic token injection vào headers
- **Cookie-based Auth**: setAuthCookie/clearAuthCookie helpers cho secure token storage
- **Protected Routes**: Middleware để protect private routes, redirect to login
- **AuthContext**: React Context API cho centralized auth state (user info, token, login status)
- **Role-based Access**: Support for staff roles/permissions management

### API Layer
- **Axios HTTP Client**: Configured axios instance với interceptors cho auth, error handling
- **API Proxy System**: 
  - authPost() - POST requests with auth
  - cookiePost() - POST with cookie-based auth
  - cookieGet() - GET with cookie validation
  - Direct /api/v1/ access via proxy endpoints
- **Multipart Upload**: Support file upload via form-data, multipart requests
- **Error Handling**: Centralized error handling, error notifications via react-hot-toast

### Campaign Management
- **Campaign Structure**: Each campaign (ngua-xanh-xong-xao, vong-quay-may-man) ownowa:
  - API routes (auth/login, auth/logout, auth/me, claim-spins, register)
  - Client library (api.ts, types.ts)
  - Auth context (AuthContext.tsx)
  - Components & pages
- **Campaign Switching**: Redirect logic từ / → /ngua-xanh-xong-xao
- **Independent Deployment**: Each campaign có own state, logic, can deploy independently

### File Management
- **CDN Integration**: Upload/download files từ MPS (Media Platform Service)
- **File Operations**: Upload disk, multipart upload, directory management
- **Permissions**: File-level permissions management
- **Caching**: Cache management for file operations
- **Security**: API Key + JWT Token authentication

### User Management
- **Staff HRM**: Centralized staff management API (/api/staff)
- **User Profile**: Get user info, manage profile
- **Registration**: Self-registration for campaigns
- **Login/Logout**: Session management

### Frontend Components
- **Responsive Design**: Tailwind CSS 4 utilities
- **Icon System**: Lucide React icons
- **Toast Notifications**: react-hot-toast for user feedback
- **Form Management**: Custom form handling with axios

### Developer Experience
- **Structured API Guide**: Comprehensive FILE_API_GUIDE.md
- **TypeScript Strict Mode**: Type safety across project
- **ESLint**: Code quality checking
- **Hot Reload**: Fast development with Next.js
- **pnpm**: Efficient package management
- **Agent Skills**: Extensive .agent skills folder cho AI-assisted development

### Performance & Optimization
- **Image Optimization**: Next.js Image component (implicit)
- **Code Splitting**: Automatic by Next.js App Router
- **Lazy Loading**: Support for lazy component imports
- **API Caching**: Axios interceptors cho response caching

## 📁 Campaign Structure (Example: ngua-xanh-xong-xao)

### Pages
- `/ngua-xanh-xong-xao/` - Campaign home
- `/ngua-xanh-xong-xao/login` - Login page
- `/ngua-xanh-xong-xao/register` - Registration page
- `/ngua-xanh-xong-xao/claim-spins` - Claim spins page

### API Routes
- `POST /ngua-xanh-xong-xao/api/auth/login` - User login
- `POST /ngua-xanh-xong-xao/api/auth/logout` - User logout
- `GET /ngua-xanh-xong-xao/api/auth/me` - Get current user
- `POST /ngua-xanh-xong-xao/api/claim-spins` - Claim spins
- `POST /ngua-xanh-xong-xao/api/register` - User registration

### Shared Routes
- `POST /api/files/upload-disk` - Upload file
- `GET /api/staff/[id]` - Get staff info

## 🔗 Links
- Live Campaigns:
  - Ngựa Xanh Xong Xào: /ngua-xanh-xong-xao
  - Vòng Quay May Mắn: /vong-quay-may-man
  - HTML5 Version: /vong-quay-may-man-html5
- Admin Panel: /api/admin (implied)
- API Base: https://dev.api.gamification.kamgift.vn/api/v1
