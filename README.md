# 🌙 Nightowls React

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/) 
[![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)](https://vitejs.dev/) 
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://nightowls-react.vercel.app/) 
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)

A modern **React + Vite** web application with animations, e-commerce components, and backend integration stubs.  
👉 Live demo: [nightowls-react.vercel.app](https://nightowls-react.vercel.app/)

---

## ✨ Features

- 🎨 **Custom UI Components** — headers, accordions, cards, coverflow, dark mode toggle  
- 🛒 **E-commerce Elements** — product pages, shopping cart, checkout flow  
- 📊 **Dynamic Data** — JSON-driven product catalog (`products.json`)  
- 🎭 **Animations** — powered by **Framer Motion**, **Swiper**, **Slick Carousel**  
- 🌑 **Dark Mode** — toggle between light and dark themes  
- 🖼 **Responsive Layout** — modular CSS per component  
- 🔗 **Routing** — React Router DOM  
- 🛠 **Appwrite & MongoDB Ready** — backend integrations possible  
- 🎵 **Icons & Branding** — FontAwesome, Boxicons, React Icons  

---

## 🛠 Tech Stack

- **Framework:** React 18 (with Vite 5)  
- **Routing:** React Router v6  
- **Styling:** CSS Modules  
- **Animation & UI:** Framer Motion, Swiper, React Slick, Sticky Box  
- **Icons:** FontAwesome, Boxicons, React Icons  
- **Backend (planned):** Appwrite, MongoDB  
- **Deployment:** Vercel  

---

## 📂 Project Structure
```
Nightowls_REACT/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images & media
│ ├── components/ # React components
│ │ ├── Header/
│ │ ├── Product_Page/
│ │ ├── about us/
│ │ ├── accordion/
│ │ ├── cart/
│ │ ├── checkout/
│ │ ├── contact/
│ │ ├── container/
│ │ ├── coverflow/
│ │ ├── darkmode/
│ │ ├── data/
│ │ └── HR/
│ ├── appwrite/ # Backend config
│ ├── App.jsx # Root app
│ ├── main.jsx # Entry point
│ ├── index.css # Global styles
│ └── products.json # Product catalog
├── vite.config.js # Vite config
├── vercel.json # Vercel config
├── package.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)  
- npm or yarn  

### Installation

```bash
git clone https://github.com/mohamedWF67/Nightowls_REACT.git
cd Nightowls_REACT
npm install
```

### Running Locally

Always show details

Copy code
npm run dev
➡ App runs at http://localhost:5173 by default.

Build for Production
bash
Always show details

Copy code

```bash
npm run build
npm run preview
```
## 🌍 Deployment
This project is set up for Vercel deployment.
Push to main → auto build & deploy.


Build command: npm run build

Output directory: dist

Manual deploys can be triggered from the Vercel Dashboard.

## 🤝 Contributing
Contributions are welcome!

Fork the repo

Create a branch: git checkout -b feature/YourFeature

Commit: git commit -m "Add YourFeature"

Push: git push origin feature/YourFeature

Open a Pull Request

## 📜 License
This project is licensed under the GNU General Public License v3.0 — see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Credits
Developed by Mohamed Waleed, Mayan Nassar, Habiba Harfoush

Built with React, Vite, and ❤️
