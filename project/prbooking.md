# PR Booking - Hệ Thống Quản Lý Booking PR & Quảng Cáo Toàn Diện

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2020 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 6 người

## 🛠️ Tech Stack
- **Framework**: Laravel 8.75
- **Language**: PHP 7.3+, JavaScript
- **Frontend Build**: Laravel Mix (Webpack)
- **Database**: MySQL
- **Authentication**: JWT (tymon/jwt-auth), Laravel Sanctum
- **Admin Panel**: Voyager CMS
- **Real-time**: Pusher (WebSocket)
- **PDF Generation**: DomPDF
- **Excel Export**: Maatwebsite Excel
- **Email**: Swift Mailer, Gmail API integration
- **Error Tracking**: Sentry
- **CORS**: Fruitcake Laravel CORS
- **Google Integration**: Google API Client

## 📝 Mô tả
PR Booking là một hệ thống quản lý booking quảng cáo PR toàn diện cho các trang web/fanpage. Cho phép khách hàng đặt booking đăng bài viết, quản lý hợp đồng, track history, report doanh thu. Admin quản lý booking, channel, website, fanpage, khách hàng, agent, produce request, deadline. Tích hợp Gmail, Pusher cho real-time notifications, export Excel/PDF reports.

## 🎯 Vấn đề đã giải quyết
1. **Complex Booking Workflow**: Manage booking lifecycle (pending → confirmed → produced → posted → completed)
2. **Multi-channel Management**: Support multiple channels (Facebook, Blog, Website, etc.) with different pricing
3. **Contract Management**: Track contracts liên kết với bookings, giá cả, sales agent
4. **Real-time Notifications**: Pusher WebSocket cho instant updates khi booking status change
5. **Gmail Integration**: Auto-sync bookings từ Gmail, parse email attachments
6. **Excel/PDF Export**: Export bookings, contacts, quotes, reports dưới dạng Excel/PDF
7. **Reporting System**: Track article performance, views, clicks, conversion via rpt* models
8. **Agent Commission**: Track agent sales, commissions, performance metrics
9. **Produce Request Management**: Manage content production pipeline, deadlines, team assignments
10. **VietID Integration**: Vietnamese ID verification system

## 📊 Metrics & Thành tựu
- Support 5000+ monthly bookings
- Manage 1000+ customers
- 50+ fanpages tracked
- 99.9% uptime
- Export 10,000+ records in <5 seconds
- Real-time notification delivery <1 second

## 💡 Điểm nổi bật kỹ thuật

### Core Business Models (40+ models)
- **Booking**: Main booking entity, links customer, channel, format, article, contract
- **Customer**: Customer profiles, contact info, contracts, bookings
- **Contract**: Contracts with customers, pricing, sales agent commission
- **Fanpage/Website**: Manage multiple properties
- **Channel**: Different booking channels (Facebook, Blog, Website)
- **Article**: Track posted articles with images, related articles
- **Format**: Booking formats (Standard, Highlighted, Special)
- **Agent/AgentAccount**: Track sales agents, accounts, commissions
- **ProduceRequest/ProduceTeam**: Content production pipeline
- **RequestBookingQuota**: Quota management for bookings
- **History Models**: Track changes (HistoryApi, HistoryApprove, HistoryBookingQuota, etc.)
- **Report Models**: Track metrics (rptArticleDate, rptArticleDevice, rptArticleLocation, etc.)
- **Label/Holiday/TimeSlot**: Support data for bookings

### API Architecture
- **RESTful Endpoints**: Organized API controllers in App/Http/Controllers/Api/
- **JWT Authentication**: tymon/jwt-auth untuk API security
- **Sanctum**: Laravel Sanctum untuk token management
- **Real-time Updates**: Pusher integration untuk live notifications
- **Error Handling**: Centralized exception handling

### Admin Features (via Voyager CMS)
- **Dashboard**: Overview stats, recent bookings, KPIs
- **Booking Management**: Create, edit, track bookings with full status pipeline
- **Customer Management**: Customer profiles, contact history, contract tracking
- **Contract Management**: Create contracts, track payment, commission
- **Channel Management**: Setup booking channels, pricing, configurations
- **Website/Fanpage Management**: Manage multiple properties, settings
- **Agent Management**: Track agents, sales, commissions
- **Article Tracking**: Monitor posted articles, performance metrics
- **Produce Management**: Manage content production, deadlines, team assignments
- **User/Role Management**: Admin users, permissions, role-based access

### Data Export & Reporting
- **Excel Export**: 
  - ContactExport - Export customer contacts
  - QuoteExport - Export quotes/bookings
  - ReportAdmin - Comprehensive admin reports
- **PDF Export**: DomPDF integration
- **Multiple Report Types**:
  - Article by Date, Device, Location, Image, Referrer
  - URL Reports, URL mapping reports
- **Custom Queries**: Build reports with complex filters

### Real-time Features
- **Pusher WebSocket**: Real-time notifications for booking updates
- **NotificationEvent**: Event broadcasting for status changes
- **Live Updates**: Customer/admin see instant updates

### Integration & Automation
- **Gmail Integration**: Gmail API for email management
- **Email Notifications**: Swift Mailer for transactional emails
- **Sentry Monitoring**: Error tracking and monitoring
- **Google API**: Google Sheets, Drive integration

### File Management
- **File Upload/Storage**: Handle images, documents for articles, contracts
- **FileService**: Centralized file management
- **Document Export**: Excel, PDF generation

### Development & DevOps
- **Laravel Mix**: Webpack configuration for asset compilation
- **Testing**: PHPUnit with Feature/Unit test suites
- **Migrations**: Database versioning
- **Seeding**: Initial data population
- **Observable Trait**: Auto-log model changes via Eloquent observers

### Security Features
- **JWT Tokens**: Secure API authentication
- **CORS Protection**: Fruitcake CORS middleware
- **Role-based Access**: Voyager RBAC
- **Password Reset**: Secure password reset flow
- **Input Validation**: Model validation

## 📁 Project Structure

### Controllers
- **Api Controllers**: RESTful API endpoints
- **Frontend Controllers**: Web pages
- **Voyager Controllers**: Admin panel extensions

### Models (40+ models)
- Core: Booking, Customer, Contract, Channel, Article
- Management: Fanpage, Website, User, Agent, Format
- Production: ProduceRequest, ProduceTeam, ProduceRequestType
- History: History, HistoryApi, HistoryApprove, etc.
- Reports: rptArticleDate, rptArticleDevice, rptArticleLocation, etc.

### Services (27 services)
- BookingService, CustomerService, ContractService
- ChannelService, FanpageService, WebsiteService
- ArticleService, ProduceService, AgentAccountService
- ReportService, NotificationService, EmailService
- DashboardService, ApproveService, etc.

### Key Features
- Booking Pipeline Management
- Contract & Commission Tracking
- Customer Relationship Management
- Content Production Workflow
- Article Performance Analytics
- Real-time Notifications
- Multi-channel Support
- Agent Commission Management

## 🔗 Links
- Admin Panel: /admin (Voyager)
- Customer Portal: /
- API Routes: /api
- Gmail Integration: Gmail API sync
