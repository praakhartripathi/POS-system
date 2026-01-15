# POS Pro - Point of Sale System Frontend

A modern, role-based Point of Sale (POS) web application interface built with React, Vite, and Tailwind CSS. Designed to mimic professional retail billing systems with a focus on speed and usability.

## 🚀 Features

### 🔐 Role-Based Access Control (RBAC)
Secure login system that redirects users to specific dashboards based on their assigned role:
- **Super Admin**: System-wide control center.
- **Admin**: User management and reporting.
- **Branch Manager**: Branch performance and operations.
- **Store Manager**: Inventory and staff overview.
- **Cashier**: Dedicated POS terminal interface.
- **User**: Customer loyalty and order history.

### 🛒 Cashier POS Terminal
A high-fidelity, full-screen POS interface designed for efficiency:
- **Keyboard Shortcuts**:
  - `F1`: Focus Search / Scan Barcode
  - `F2`: Discount Options (Mockup)
  - `F3`: Customer Selection (Mockup)
  - `Ctrl + Enter`: Proceed to Payment
- **Real-time Search**: Filter products instantly by name or category.
- **Cart Management**: Add items, update quantities, and remove items with automatic tax calculation.
- **Dark Mode**: Fully supported dark theme for low-light environments.

### 🎨 UI/UX
- **Responsive Design**: Built with Tailwind CSS for a clean, modern look.
- **Theme Support**: Light, Dark, and System preference toggles.
- **Landing Page**: Includes Home, Pricing, Testimonials, and Contact pages.

## 🛠️ Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useEffect, useRef)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd POS-system-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🔑 Default Roles for Testing
The application handles the following role strings from the backend:
- `ROLE_SUPERADMIN`, `ROLE_ADMIN`, `ROLE_BRANCH_MANAGER`, `ROLE_STORE_MANAGER`, `ROLE_CASHIER`, `ROLE_USER`