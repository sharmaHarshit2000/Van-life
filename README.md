# 🚐 VanLife

A React application built with React Router DOM that simulates a van rental service, allowing users to browse vans, view details, and manage their hosted vans.

---

## ✨ Features

- **Browse Vans:** Explore a list of available vans with their details.
- **Van Details:** View comprehensive information for each van, including description, price, and type.
- **Host Dashboard:** (Mocked) A dedicated section for hosts to manage their listed vans.
- **Authentication:** (Mocked) User login functionality.
- **Responsive Design:** Optimized for various screen sizes.
- **Mock API:** Uses Mirage.js to simulate backend API calls for development.

---

## 🚀 Technologies Used

- **React** – JavaScript library for building user interfaces.
- **React Router DOM** – Declarative routing for React.
- **Vite** – Fast build tool for modern web projects.
- **Mirage.js** – API mocking library used to simulate backend responses.
- **React Icons** – Popular icon pack for React.
- **CSS** – Styling the application.

---

## 🛠️ Installation and Setup

To get this project running locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sharmaHarshit2000/Van-life.git
    cd van-life
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

    The app will typically run at `http://localhost:5173`.

---

## 📂 Project Structure

van-life/
├── public/
├── src/
│   ├── assets/
│   │   └── images/ # App images (about-hero.png, home-hero.png, etc.)
│   ├── components/ # Reusable UI components
│   │   ├── Error.jsx
│   │   ├── Footer.js
│   │   ├── Header.jsx
│   │   ├── HostLayout.jsx
│   │   └── Layout.jsx
│   ├── pages/ # Main pages
│   │   ├── Host/ # Host-specific pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── HostVanDetail.jsx
│   │   │   ├── HostVanInfo.jsx
│   │   │   ├── HostVanPhotos.jsx
│   │   │   ├── HostVanPricing.jsx
│   │   │   ├── HostVans.jsx
│   │   │   ├── Income.jsx
│   │   │   └── Reviews.jsx
│   │   ├── Vans/ # Van listing pages
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── NotFound.jsx
│   ├── api.js # API utility or Mirage integration
│   ├── index.css # Global styles
│   ├── index.html # Main HTML
│   ├── index.jsx # App entry point
│   ├── server.js # MirageJS mock server
│   └── utils.js # Utility functions
├── .gitattributes
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

---

## 💡 Usage

- Navigate the app using the top header links.
- Explore available vans on the "Vans" page.
- View and manage hosted vans on the "Host" section.
- Log in with the mock credentials below:

    ```
    Email: h@gmail.com
    Password: 123456
    ```

---

## 🌐 Live Demo

🚀 Deployed on **Vercel**:  
🔗 [View Live Site](https://your-vercel-url.vercel.app)  

---