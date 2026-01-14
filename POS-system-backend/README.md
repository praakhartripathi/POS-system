# POS System Backend

A robust Point of Sale (POS) system backend built with Spring Boot, designed to handle business billing, inventory management, sales tracking, and multi-store operations.

## 🚀 Features

*   **Authentication & Authorization**: Secure JWT-based authentication with role-based access control (RBAC).
    *   Roles: `ROLE_USER`, `ROLE_ADMIN`, `ROLE_CASHIER`, `ROLE_BRANCH_MANAGER`, `ROLE_STORE_MANAGER`, `ROLE_SUPERADMIN`.
*   **User Management**: Sign up, sign in, password management (forgot/update), and profile handling.
*   **Store Management**: Create and manage stores, including support for parent stores and branches.
*   **Product Management**:
    *   Create, update, delete products.
    *   Categorize products.
    *   Search products by name, description, or brand.
    *   Filter products by store.
*   **Inventory Control**: Track stock levels (SKU based).
*   **Order Processing**: (Structure present, implementation in progress) Manage orders and order items.

## 🛠️ Tech Stack

*   **Java 17+**
*   **Spring Boot 3.5.9**
*   **Spring Security** (JWT Authentication)
*   **Spring Data JPA** (Hibernate)
*   **Database**: MySQL (Production), H2 (Development/Testing)
*   **Build Tool**: Maven
*   **Other Libraries**:
    *   Lombok (Boilerplate reduction)
    *   Razorpay (Payment integration - dependency included)
    *   Java Mail Sender (Email notifications)

## 📂 Project Structure

```
com.POS_system_backend
├── configuration   # Security & JWT config
├── controller      # REST API Endpoints (Auth, Product, Store, User, Category)
├── dto             # Data Transfer Objects
├── entity          # JPA Entities (User, Product, Store, Order, etc.)
├── mapper          # Entity <-> DTO Mappers
├── repository      # Data Access Layer
├── service         # Business Logic Interfaces
└── service.impl    # Business Logic Implementations
```

## 🔌 API Endpoints

### Authentication
*   `POST /api/auth/signup` - Register a new user.
*   `POST /api/auth/signin` - Login and receive JWT.
*   `POST /api/auth/forgot-password` - Initiate password reset.
*   `POST /api/auth/update-password` - Change password.

### Products
*   `POST /api/products` - Create a new product.
*   `PUT /api/products/{productId}` - Update an existing product.
*   `DELETE /api/products/{productId}` - Delete a product.
*   `GET /api/products/store/{storeId}` - Get all products for a specific store.
*   `GET /api/products/store/{storeId}/search?keyword={term}` - Search products in a store.

### Categories
*   `POST /api/categories` - Create a new product category.

### Stores
*   (Endpoints available in `StoreController`)

## ⚙️ Setup & Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd POS-system-backend
    ```

2.  **Configure Database**
    *   Update `src/main/resources/application.properties` with your MySQL credentials.
    *   Alternatively, the project is configured to use H2 in-memory database by default for dev/test if no profile is active (check dependencies).

3.  **Build the project**
    ```bash
    ./mvnw clean install
    ```

4.  **Run the application**
    ```bash
    ./mvnw spring-boot:run
    ```
    The server will start on `http://localhost:5000` (or configured port).

## 🧪 Testing

You can test the APIs using **cURL** or **Postman**.

**Example: Create Product**
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <YOUR_JWT_TOKEN>" \
  -d '{
    "name": "Smartphone X",
    "sku": "SMX-001",
    "description": "Latest model",
    "mrp": 999.99,
    "sellingPrice": 899.99,
    "brand": "TechBrand",
    "categoryId": 1,
    "storeId": 1
  }'
```

## 🤝 Contributing

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.
