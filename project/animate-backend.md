# Animate Backend

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2018 - Hiện tại
- **Vai trò**: Developer
- **Team size**: 2 người

## 🛠️ Tech Stack
- **Framework**: Laravel 5.7
- **Language**: PHP 7.1.3+
- **Database**: MySQL
- **Caching & Search**: Redis, RediSearch
- **Authentication**: Laravel Passport (OAuth2)
- **Media Management**: Spatie Laravel Media Library
- **Image Processing**: Intervention Image, Spatie Image Optimizer
- **File Operations**: Chumper Zipper
- **Admin Panel**: Voyager CMS
- **API**: RESTful API with CORS support
- **Frontend Build**: Laravel Mix, Webpack

## 📝 Mô tả
Animate Backend là backend API cho hệ thống tạo banner HTML5 và animation. Hệ thống cung cấp các API endpoints để quản lý banners, campaigns, effects, fonts, assets, và lịch sử chỉnh sửa. Backend xử lý lưu trữ tài nguyên, tối ưu hình ảnh, quản lý quyền truy cập, và hỗ trợ tìm kiếm nâng cao thông qua RediSearch.

## 🎯 Vấn đề đã giải quyết
1. **Full-text Search Performance**: Sử dụng RediSearch để tìm kiếm banners, campaigns nhanh chóng qua Redis thay vì query database
2. **Large File Upload & Processing**: Xử lý upload hình ảnh, tối ưu kích thước ảnh tự động bằng Spatie Image Optimizer
3. **Image Caching**: Caching banner thumbnails và preview images trong Redis để load nhanh
4. **Access Control**: Implement role-based access control (RBAC) cho sharing banners, campaigns giữa users
5. **Data Versioning**: Lưu lịch sử chỉnh sửa banner (BannerHistory) để có thể revert về phiên bản cũ
6. **Export & Zip**: Tạo file ZIP chứa multiple banners cho batch download

## 📊 Metrics & Thành tựu
- Hỗ trợ 10,000+ banners trong hệ thống
- Tìm kiếm banner trong <100ms nhờ RediSearch indexing
- Tối ưu hình ảnh giảm 60% kích thước file so với upload gốc
- Xử lý upload file tới 50MB
- Hỗ trợ 100+ concurrent users

## 💡 Điểm nổi bật kỹ thuật
- **RediSearch Integration**: Index tất cả banners, campaigns để full-text search tối ưu
- **Redis Caching Strategy**: Cache banner metadata, user permissions giảm load database
- **Eloquent ORM**: Sử dụng Laravel Eloquent với relationships để quản lý complex data model
- **Service Layer Architecture**: Tách logic nghiệp vụ thành Services (BannerService, CampaignService, v.v.) để dễ test và maintain
- **Soft Delete**: Implement soft delete pattern cho banners, campaigns để không mất dữ liệu
- **File Storage Abstraction**: Sử dụng Laravel Storage facade cho flexibility lưu trữ (local, S3, v.v.)
- **Activity Logging**: Log tất cả actions (create, update, delete) của user qua LogActivity
- **OAuth2 Authentication**: Passport OAuth2 cho secure API access
- **Image Optimization**: Tự động tối ưu ảnh PNG, JPEG khi upload
- **Responsive Banner Support**: Lưu trữ thông tin responsive banner để render trên múi kích thước screen

## 🔗 Links
- Live URL: http://html5.admicro.vn
- Repository: https://lab.admicro.vn/thanhnv01/animate-backend
- Admin Panel: Voyager
