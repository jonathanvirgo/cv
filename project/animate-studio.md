# Animate Studio

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2017 - Hiện tại
- **Vai trò**: Developer
- **Team size**: 1 người

## 🛠️ Tech Stack
- **Frontend Framework**: Angular 2.2.1
- **Language**: TypeScript
- **Build Tool**: Webpack
- **UI Framework**: Bootstrap 3, Angular Material
- **State Management**: @ngrx/store
- **Styling**: CSS, LESS
- **Animation Library**: Custom Animation Engine
- **Additional Libraries**: jQuery, jQuery UI, ng2-dnd, moment.js, lodash

## 📝 Mô tả
Animate Studio là một ứng dụng web cho phép người dùng thiết kế, chỉnh sửa và tạo các banner hoặc animation có tính tương tác cao. Ứng dụng cung cấp các công cụ chuyên nghiệp để vẽ, tạo hiệu ứng, quản lý timeline, và xuất các sản phẩm cuối cùng.

## 🎯 Vấn đề đã giải quyết
1. **Complex State Management**: Sử dụng @ngrx/store để quản lý state phức tạp của multiple components
2. **Animation Timeline Management**: Xây dựng timeline system để quản lý animation keyframes và tween
3. **Performance Optimization**: Tối ưu rendering performance với large canvas objects
4. **Real-time Synchronization**: Đồng bộ hóa state giữa timeline, properties panel và canvas
5. **Undo/Redo Functionality**: Implement command pattern để quản lý lịch sử thay đổi

## 📊 Metrics & Thành tựu
- Hỗ trợ 1000+ layers trong một project mà vẫn giữ được performance
- Cung cấp 50+ animation effects pre-built
- Real-time preview của animation while editing
- Xuất file SVG, JSON format cho reusability

## 💡 Điểm nổi bật kỹ thuật
- **Advanced Canvas Rendering**: Sử dụng SVG canvas để rendering components với độ phân giải cao
- **Tween System**: Implement custom tween system với multiple easing functions (ease-in, ease-out, ease-in-out, v.v.)
- **Layer-based Architecture**: Quản lý hierarchical layers tương tự Photoshop
- **PSD Import**: Hỗ trợ import từ Photoshop files để tăng tốc độ workflow
- **Drag & Drop**: Implement complex drag-drop system cho timeline và canvas
- **Context Menu**: Custom context menu cho các operations trên elements
- **Responsive UI**: Dynamic property panels thay đổi theo loại element được chọn
- **Multi-Select**: Hỗ trợ select và edit multiple elements cùng lúc

## 🔗 Links
- Repository: Part of Admicro Monorepo
- Port Development: 5002
