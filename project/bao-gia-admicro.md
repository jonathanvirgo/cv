# Bao Gia Admicro - Hệ Thống Quản Lý Báo Giá

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2024 - Hiện tại
- **Vai trò**: Full Stack Developer
- **Team size**: 2 người

## 🛠️ Tech Stack

### Backend (tool-bao-gia-be)
- **Framework**: Express.js (Node.js)
- **Language**: JavaScript
- **Database**: MySQL 2
- **Authentication**: JWT + Passport.js
- **Caching**: Node-cache
- **Email**: Nodemailer
- **Utilities**: xlsx (Excel processing), md5, bcrypt, moment.js

### Frontend (tool-bao-gia-fe)
- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **UI Libraries**: Bootstrap 5, React-select, Lucide React
- **Document Processing**: Mammoth (Word), jsPDF, PDF-lib
- **File Operations**: jszip, diff (text comparison)
- **Drag & Drop**: @dnd-kit
- **Authentication**: Next-auth

### File Compare App (file-compare)
- **Framework**: Next.js 16
- **Language**: TypeScript
- **Database ORM**: Prisma
- **UI Framework**: Radix UI, Tailwind CSS
- **Form**: React Hook Form + Zod validation
- **Document Tools**: Mammoth, jsPDF-autotable, docx-preview, pdf.js
- **File Comparison**: diff library
- **Database**: MySQL (Prisma)

## 📝 Mô tả
Hệ thống Bao Gia Admicro là một nền tảng quản lý báo giá toàn diện gồm 3 ứng dụng:

1. **Tool Bao Gia**: Ứng dụng web chính cho phép người dùng tạo, quản lý, và chia sẻ các báo giá, theo dõi trạng thái báo giá, và xuất dữ liệu
2. **File Compare**: Ứng dụng chuyên dùng để so sánh 2 file (Word, PDF, Excel) để phát hiện các khác biệt trong nội dung báo giá
3. Hỗ trợ quản lý menu, người dùng, thiết bị, và lịch sử hoạt động

## 🎯 Vấn đề đã giải quyết
1. **File Comparison Engine**: Xây dựng engine so sánh 2 file khác nhau (DOCX, PDF, XLSX) để highlight các thay đổi
2. **Multi-Device Support**: Quản lý báo giá trên múi thiết bị (web, mobile) và sync trạng thái giữa các thiết bị
3. **Quote Status Tracking**: Hệ thống theo dõi trạng thái báo giá từ draft → pending → approved/rejected với lịch sử thay đổi
4. **Document Processing**: Xử lý upload, preview, và export các file văn bản (DOCX, PDF) mà không cần Office
5. **Search & Filter Optimization**: Xây dựng quote search service để tìm kiếm nhanh báo giá qua nhiều tiêu chí
6. **Caching Strategy**: Implement node-cache trên backend để cache dữ liệu menu, user permissions giảm load database

## 📊 Metrics & Thành tựu
- Hỗ trợ 1000+ báo giá đồng thời
- So sánh file trong <2 giây
- Xử lý 100+ concurrent users
- Giảm 50% database queries nhờ caching
- Support 5+ định dạng file (DOCX, PDF, XLSX, PPTX)

## 💡 Điểm nổi bật kỹ thuật

### Backend (Express.js)
- **Service Layer Architecture**: Tách logic nghiệp vụ thành services (QuoteService, FileCompareService, UserService, v.v.)
- **Dynamic CRUD Service**: Implement generic dynamicCrudService để reduce code duplication cho các CRUD operations
- **JWT Authentication**: Passport.js + JWT cho secure API endpoints
- **Caching Layer**: Node-cache cho menu, user permissions, quote metadata
- **Excel Processing**: Xử lý import/export báo giá từ file Excel
- **Audit Logging**: auditLogger.js để log tất cả actions (create, update, delete quotes)
- **Multi-Device Management**: Track devices của user để sync data

### Frontend (Next.js + React)
- **Redux State Management**: Centralized state với Redux Toolkit cho quote data, user info
- **Document Preview**: Integrate Mammoth (DOCX), PDF.js, docx-preview để preview trực tiếp
- **Diff Visualization**: Display differences giữa 2 file theo từng paragraph/table
- **Drag & Drop**: @dnd-kit library cho rearrange quote items
- **Form Validation**: React Hook Form + Zod cho type-safe form validation
- **Next-auth Integration**: Social login + JWT authentication

### File Compare App (Next.js + Prisma)
- **Prisma ORM**: Type-safe database operations qua Prisma schema
- **File Upload & Processing**: Upload file (DOCX, PDF) lên server và process để so sánh
- **Diff Algorithm**: Custom diff visualization để highlight added/removed/modified content
- **History Tracking**: Lưu lịch sử tất cả compare operations (totalChanges, added, removed, modified)
- **Radix UI Components**: Modern UI components (Dialog, Select, Tabs, Checkbox, v.v.)
- **PDF Export**: Export kết quả so sánh dưới dạng PDF

## 🔗 Links
- Git Backend: https://lab.admicro.vn/hienlm/tool-bao-gia-be
- Git Frontend: https://lab.admicro.vn/hienlm/tool-bao-gia-fe
- Live Environment: (cần cập nhật)
