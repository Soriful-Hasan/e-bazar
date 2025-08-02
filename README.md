# 🛍️ E-Bazar – E-commerce Product Showcase with Checkout (SEO Optimized)

**Live Demo**: [https://e-bazar-eta.vercel.app/](https://e-bazar-eta.vercel.app/)

E-Bazar is a fully functional and SEO-optimized e-commerce frontend built with **Next.js App Router**, **Redux Toolkit**, **TypeScript**, and **Tailwind CSS**. It fetches product data from a public API and allows users to browse, view details, add to cart, and complete a simulated checkout.

---

## 🚀 Features

### ✅ Core Pages & Functionality

- **Home Page**  
  - Displays products from [FakeStore API](https://fakestoreapi.com/products)
  - Responsive grid layout with title, price, and image
  - “View Details” button for each product

- **Product Details Page** (`/product/[id]`)  
  - Shows full product information
  - "Add to Cart" button with Redux integration
  - SEO: Dynamic `<title>` and `<meta description>`

- **Cart Page** (`/cart`)  
  - View all cart items with image, quantity, and total
  - Option to remove items or clear cart
  - Link to proceed to checkout

- **Checkout Page** (`/checkout`)  
  - Form to collect full name, shipping address, and phone
  - Client-side form validation
  - Confirmation message upon submission
  - Stores orders in Redux state

- **Orders Page** (`/orders`)  
  - Displays list of placed orders
  - Shows customer info, item count, total amount, and date

---

## 🔍 SEO Optimizations

- Dynamic `<title>` and `<meta description>` using `next/head`
- Semantic HTML (`<main>`, `<section>`, etc.)
- Optimized images using `next/image` with proper `alt` attributes
- Clean and crawlable URLs (`/product/5`, `/orders`)
- Includes `robots.txt` and `sitemap.xml`

---

## 🧪 Tech Stack

- **Next.js (App Router)**
- **Redux Toolkit**
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form** (for form validation)
- **FakeStore API** (for product data)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/e-bazar.git
cd e-bazar
