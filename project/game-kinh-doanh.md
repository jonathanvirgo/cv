# Game Kinh Doanh - Trò Chơi Mô Phỏng Kinh Doanh

## 📋 Thông tin chung
- **Công ty**: VCCORP
- **Thời gian**: 2024 - Hiện tại
- **Vai trò**: Frontend Developer
- **Team size**: 2 người

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (React 19.2)
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Animation**: Framer Motion
- **UI Development**: Lucide React icons
- **Real-time UI Tuning**: Leva (debug panel)
- **Styling**: Tailwind CSS 4, PostCSS
- **Compiler**: Babel React Compiler (optimization)
- **Code Quality**: ESLint
- **Utilities**: crypto (built-in)

## 📝 Mô tả
Game Kinh Doanh là một trò chơi mô phỏng kinh doanh tương tác cho phép người chơi quản lý các khía cạnh kinh doanh như quản lý nhân sự (team), giao công việc (task), xem biểu đồ tiến độ, và tương tác với bản đồ SVG động. Trò chơi kết hợp gameplay mechanics với chỉ tiêu BOM (Bill of Materials) và hệ thống kinh doanh chi tiết.

## 🎯 Vấn đề đã giải quyết
1. **Dynamic SVG Map**: Render bản đồ SVG tương tác với hover effects, click handling, color change
2. **Team & Member Management**: Quản lý team, member với state management qua Redux
3. **Task Assignment & Tracking**: Assign tasks đến team members, track progress
4. **Real-time Progress Visualization**: Progress circles, gauges, timeline visualization
5. **Performance Optimization**: React Compiler để optimize component re-renders
6. **Number Formatting**: Format large numbers (K, M, B) cho hiển thị dữ liệu lớn
7. **BOM Management**: Quản lý Bill of Materials với chi tiết chi phí, sản phẩm

## 📊 Metrics & Thành tựu
- Support 100+ team members
- Real-time state updates <100ms
- SVG map rendering smooth với 60fps
- Task progress tracking across multiple dimensions
- Support 1000+ SKU (Stock Keeping Units) trong BOM

## 💡 Điểm nổi bật kỹ thuật

### State Management
- **Redux Toolkit**: Multiple feature slices (TeamSlice, MemberSlice, TitleSlide, TaskSlice)
- **Optimized Selectors**: Memoized selectors để prevent unnecessary re-renders
- **Dispatch-based Updates**: Set team colors, member IDs, task IDs, title IDs

### SVG & Visualization
- **Interactive SVG Map**: Custom SVG map component với:
  - Hover states on regions
  - Click handlers cho regions
  - Color mapping (team colors → region colors)
  - Dynamic re-render on state change
- **Progress Visualization**:
  - Progress circles with CSS custom properties
  - Percentage display
  - Smooth animations with Framer Motion
  - Timeline visualization

### Data Formatting & Utilities
- **Number Formatting**: Format 1M, 1K, 1B from raw numbers
- **Date Formatting**: Format ISO dates to Vietnamese locale (vi-VN)
- **Data Aggregation**: Sum values across team/members
- **Threshold Calculations**: Calculate percentages, progress metrics

### UI Components
- **Custom Components**: Home, MapSVG, ProgressCircle
- **Responsive Layout**: Tailwind CSS responsive utilities
- **Icon System**: Lucide React icons cho consistent UI
- **Smooth Animations**: Framer Motion cho page transitions, hover effects

### Developer Experience
- **Leva Debug Panel**: Real-time UI tuning via Leva (adjust colors, values without code change)
- **React Compiler**: Automatic optimization of expensive renders
- **TypeScript**: Type-safe component props, Redux state
- **Tailwind CSS**: Utility-first CSS untuk rapid development
- **Script Loading**: Next.js Script component cho third-party scripts (Bootstrap, Swiper, sticky.js)

### Game Mechanics
- **Chi Tiêu BOM**: Bill of Materials module cho:
  - Product cost breakdown
  - Material tracking
  - Supplier management
  - Cost analysis
  
- **Kinh Doanh System**: Business management features:
  - Revenue tracking
  - Expense tracking
  - Profit margins
  - Performance metrics

### Performance Features
- **React Compiler**: Automatic memoization và optimization
- **Next.js Turbopack**: Fast dev server với Turbopack
- **Code Splitting**: Automatic code splitting by routes
- **Image Optimization**: Next.js Image component (implicit)
- **Third-party Script Loading**: Controlled loading strategy (afterInteractive)

## 🔗 Links
- Pages:
  - Home: /
  - Kinh Doanh (Business): /kinh-doanh
  - Chi Tiêu BOM: /chi-tieu-BOM
  - Common: /common
- Components:
  - SVG Map: src/app/components/SVGMap/MapSVG.tsx
  - Progress Visualization: Progress circles, progress gauges
  - Home Dashboard: Comprehensive business overview

## 📋 Key Features

### Team & Member System
- Create/edit teams
- Assign members to teams
- Track member roles and titles
- Color-coded team identification

### Task Management
- Create tasks
- Assign to team members
- Track task status
- Set deadlines
- View task history

### Interactive Map
- SVG-based interactive map
- Hover/click interactions
- Color-coded regions by team
- Real-time updates

### Business Dashboard
- Revenue/Expense overview
- Profit margin analysis
- Team performance metrics
- Progress tracking
- Historical data visualization
