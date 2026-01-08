🛒 Full Stack E-Commerce Web Application

A full-stack e-commerce web application built using React (Frontend) and Node.js + Express (Backend). This project demonstrates core e-commerce functionality such as product listing, cart management, checkout, order placement, admin management, and basic authentication.

🚀 Features

👤 User Features
* Browse products with images, prices, and search functionality
* Add / remove products from cart
* Increase or decrease product quantity
* Persistent cart using LocalStorage
* Checkout with shipping address
* Payment method selection (Cash on Delivery / Card)
* Order confirmation page with full summary

🛠 Admin Features
* Secure admin login
* View all orders
* View payment method & payment status
* Delete orders
* Add new products (UI-based)

⚙ Backend Features
* REST APIs for products, users, and orders
* In-memory storage for products, users, and orders
* CORS enabled for frontend-backend communication
* Express middleware for JSON handling

🧰 Tech Stack

Frontend
* React
* React Router DOM
* JavaScript (ES6+)
* HTML5 & Inline CSS

Backend
* Node.js
* Express.js
* CORS

🔌 API Endpoints

Products
* `GET /api/products` → Fetch all products

Orders
* `POST /api/orders` → Place new order
* `GET /api/orders` → Fetch all orders (Admin)
* `DELETE /api/orders/:id` → Delete order (Admin)

🧪 Demo Flow
1. User visits homepage
2. Browses products & adds items to cart
3. Verify Cart - Products list
4. Proceeds to checkout
5. Enters shipping address
6. Selects payment method
7. Places order
8. Order stored on backend
9. Admin can view/delete orders

▶️ How to Run Locally

1️⃣ Start Backend

```bash
cd backend2️
npm install
node server.js
```
Server runs at: **[http://localhost:5000](http://localhost:5000)**

2️⃣ Start Frontend

```bash
cd frontend
npm install
npm run dev
```
Frontend runs at: **[http://localhost:5173](http://localhost:5173)** (Vite default)

## 🔐 Admin Credentials
Password: admin

📸 Screens Included
* Product listing page
* Cart page
* Checkout & payment page
* Order success page
* Admin dashboard

🧠 Learning Outcomes
* Full-stack architecture understanding
* REST API design
* React state management
* Client-side routing
* Cart & checkout logic
* Frontend-backend integration

🚧 Future Improvements
* Database integration (MongoDB / PostgreSQL)
* Authentication with JWT
* Real payment gateway (Stripe / Razorpay)
* Order status tracking
* Product image upload
* Responsive UI & better styling

💡Conclusion
This full-stack e-commerce platform demonstrates the implementation of real-world shopping features such as product listing, cart management, checkout flow, and order handling. The project highlights strong fundamentals in React, REST API development with Express, and seamless frontend–backend integration, making it a solid example of a production-style web application.This project reflects my hands-on experience in developing a full-stack e-commerce application with end-to-end functionality. From user interaction on the frontend to order processing on the backend, it demonstrates problem-solving skills, clean code practices, and real-world application development experience.
