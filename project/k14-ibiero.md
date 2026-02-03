# iBiero - Hệ Thống E-Commerce & CMS Quản Lý Bán Hàng

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2024 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 3 người

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (React 19.2.3, App Router)
- **Language**: TypeScript
- **Database**: MySQL / MariaDB
- **ORM**: Prisma 7.3.0 (với adapter MariaDB)
- **Authentication**: Custom Session-based auth
- **Styling**: Tailwind CSS 4, PostCSS
- **UI Components**: Lucide React (Icons), SweetAlert2 (Notifications)
- **Validation**: Zod
- **Security**: bcryptjs (password hashing)
- **Utilities**: axios, dotenv
- **Deployment**: Docker standalone mode

## 📝 Mô tả
iBiero là một hệ thống e-commerce và CMS toàn diện cho phép quản lý cửa hàng trực tuyến. Cung cấp customer-facing frontend để xem sản phẩm, đặt hàng, cùng với admin panel CMS để quản lý sản phẩm, đơn hàng, thương hiệu, và thống kê doanh thu. Sử dụng Prisma ORM với MariaDB database, custom session-based authentication, middleware để bảo vệ admin routes.

## 🎯 Vấn đề đã giải quyết
1. **Type-Safe Database Access**: Sử dụng Prisma ORM để generate type-safe database clients
2. **Session-based Authentication**: Custom session management với cookies, verify via middleware
3. **Protected Admin Routes**: Next.js middleware để protect /admin routes, redirect to login
4. **Multi-table Relationships**: Prisma schema với relationships (Brand ↔ Product, Order ↔ OrderItem)
5. **Password Security**: bcryptjs for password hashing, never store plain passwords
6. **JSON Data Storage**: Store JSON specs, features trong Product model
7. **Order Management**: Track order status lifecycle (pending → confirmed → shipping → delivered → cancelled)
8. **Promotion System**: Gift/promotion tracking với probability-based rewards
9. **Docker Deployment**: Standalone Next.js build mode cho efficient container deployment

## 📊 Metrics & Thành tựu
- Support 10,000+ products
- Manage 50,000+ orders
- 1000+ concurrent customers
- Admin response time <200ms
- 99.9% uptime SLA

## 💡 Điểm nổi bật kỹ thuật

### Database Schema (Prisma)
- **Brand Model**: Thương hiệu sản phẩm
- **Product Model**:
  - Dynamic specs, features (JSON fields)
  - Hover image support
  - Relationship to Brand
  - Timestamps (createdAt, updatedAt)
- **Order Model**:
  - Customer info (name, phone, email, address, city)
  - Payment method tracking
  - Status lifecycle management
  - Total/discount/final amount
  - Order items relationship
- **OrderItem Model**:
  - Link Product ↔ Order
  - Quantity & price snapshot
  - Cascade delete on order delete
- **User Model**:
  - Admin user management
  - Role-based access (default: admin)
  - Password hashing
- **Session Model**:
  - Session-based authentication
  - Expiration tracking
  - User relationship with cascade delete
- **Setting Model**:
  - Key-value configuration
- **Gift Model**:
  - Promotion/gift management
  - Probability-based rewards (ratio field)
  - Quantity tracking
  - Type: VOUCHER, ITEM, LOSS

### Authentication & Security
- **Session-based Auth**: Custom session tokens via cookies
- **Password Hashing**: bcryptjs for secure password storage
- **Middleware Protection**: Protect /admin routes, verify session_id cookie
- **Session Verification**: API call to /api/auth/me for session validation
- **Automatic Redirect**: Unauthorized users redirect to /admin/login
- **Session Expiration**: Tracks expiresAt, clean up expired sessions

### Frontend Features
- **Product Display**: Home page with product showcase
- **Product Details**: View detailed product info, specs, features
- **Shopping Workflow**: Add to cart, checkout flow
- **Order Placement**: Customer info form, order submission

### Admin CMS Features
- **Dashboard**: Overview stats (revenue, orders, products), visual charts
- **Product Management**:
  - CRUD operations
  - Price management
  - Image handling (image + hoverImage)
  - Specs & features (JSON)
  - Ingredients/description
  - Brand assignment
- **Brand Management**: Organize products by brand
- **Order Management**:
  - List all orders
  - View order details
  - Update order status
  - Track customer info
  - View order items with pricing
- **Admin Login**: Session-based login with password verification
- **User Management**: Admin user roles and permissions

### API Architecture
- **RESTful Endpoints**:
  - `/api/auth/login` - User authentication
  - `/api/auth/me` - Session verification
  - `/api/auth/logout` - Session cleanup
  - `/api/products` - Product CRUD
  - `/api/orders` - Order management
  - `/api/brands` - Brand management
- **Type-safe Responses**: Zod validation for request/response
- **Error Handling**: Centralized error responses
- **Session Validation**: Middleware checks session before API access

### Deployment & DevOps
- **Docker Support**: Dockerfile + .dockerignore
- **Standalone Mode**: Next.js standalone output for efficient containers
- **Environment Config**: dotenv for environment management
- **Database Migrations**: Prisma migrate for schema versioning
- **Database Seeding**: prisma/seed.ts for initial data
- **Prisma Studio**: Interactive database browser for development

### Developer Experience
- **TypeScript Strict Mode**: Type safety across project
- **Prisma CLI Commands**:
  - `db:migrate` - Run migrations
  - `db:seed` - Seed database
  - `db:studio` - Open Prisma Studio
- **Zod Validation**: Runtime schema validation
- **Lucide Icons**: Comprehensive icon library
- **SweetAlert2**: Beautiful alerts & confirmations
- **ESLint**: Code quality checking
- **Comprehensive Docs**: nextjs-prisma-auth-guide.md with best practices

### AI Agent Toolkit
- **20 Specialist Agents**: Backend, Frontend, Database, DevOps, Security, SEO, etc.
- **36 Skills Modules**: Domain-specific knowledge (API patterns, database design, etc.)
- **11 Workflows**: Slash command procedures for automation
- **Validation Scripts**: Auto-verification for code quality
- **.agent Architecture**: Complete AI agent capability expansion toolkit

### Performance & Optimization
- **Prisma Query Optimization**: Efficient database access
- **Image Optimization**: Next.js Image component (implicit)
- **Code Splitting**: Automatic by Next.js App Router
- **Standalone Build**: Optimized Docker image size

## 📁 Project Structure

### App Routes
- `/` - Home page (product listing)
- `/products/[id]` - Product detail page
- `/checkout` - Order checkout
- `/admin` - Admin dashboard
- `/admin/login` - Admin login
- `/admin/products` - Product management
- `/admin/brands` - Brand management
- `/admin/orders` - Order management

### API Routes
- `/api/auth/login` - Authentication
- `/api/auth/me` - Current user
- `/api/auth/logout` - Logout
- `/api/products` - Product CRUD
- `/api/orders` - Order CRUD
- `/api/brands` - Brand CRUD
- `/api/settings` - System settings

## 🔗 Links
- Database Schema: [prisma/schema.prisma](prisma/schema.prisma)
- Auth Guide: [docs/nextjs-prisma-auth-guide.md](docs/nextjs-prisma-auth-guide.md)
- Client Routes: /
- Admin Routes: /admin (protected by middleware)
- API Base: /api/v1/
