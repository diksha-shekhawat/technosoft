# RM Technosoft — Premium Digital Services Platform

> **🌐 Live Website:** [technosoft-sigma.vercel.app](https://technosoft-sigma.vercel.app)

> [!NOTE]
> **Personal Note:** This is my **first freelance project**. The client requested a **frontend-only** build — no backend or database integration. All service flows, transaction history, and tracking are handled entirely on the client side using local React state.

A modern, full-featured fintech utility web dashboard built for local retailers, Common Service Center (CSC) operators, and digital service providers across India. RM Technosoft empowers merchant agents with a one-stop platform for all utility payments, money transfers, and travel bookings.

---

## ✨ Features

- **📱 Mobile Recharge** — Prepaid & postpaid recharges for all major operators
- **⚡ Electricity Bill Payment** — Pay electricity bills across multiple state boards
- **💧 Water Bill Payment** — Municipal water bill payments
- **🔥 LPG Gas Booking** — Book gas cylinders online
- **📡 DTH Recharge** — Recharge all major DTH providers
- **🌐 Broadband Bill Payment** — Pay broadband & landline bills
- **💸 Domestic Money Transfer** — Send money across India securely
- **🚗 FASTag Recharge** — Recharge FASTag wallets instantly
- **✈️ Travel Booking** — Bus, train, and flight bookings
- **📦 Courier Booking** — Book courier shipments from the dashboard
- **📊 Transaction History** — View, filter, and manage all past transactions
- **🔍 Status Tracker** — Real-time tracking of ongoing transactions

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI Framework |
| **Vite 8** | Build Tool & Dev Server |
| **Lucide React** | Icon Library |
| **Vanilla CSS** | Styling (custom design system) |
| **Vercel** | Deployment & Hosting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18.x`
- npm `>=9.x`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/technosoft.git
cd technosoft

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
technosoft/
├── public/               # Static assets (favicon, etc.)
├── src/
│   ├── assets/           # Images & logos
│   ├── components/
│   │   ├── Navbar.jsx        # Top navigation bar
│   │   ├── HeroSection.jsx   # Landing hero with search
│   │   ├── Dashboard.jsx     # Service grid & quick-pay panel
│   │   ├── ServiceFlows.jsx  # All service form flows
│   │   ├── Tracker.jsx       # Transaction status tracker
│   │   ├── History.jsx       # Transaction history
│   │   ├── About.jsx         # About page
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Site footer
│   ├── data/             # Static data / service configs
│   ├── App.jsx           # Root component & routing logic
│   ├── main.jsx          # App entry point
│   └── index.css         # Global design system & styles
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
└── package.json
```

---

## 🌍 Deployment

This project is deployed on **Vercel**.

🔗 **Live URL:** [https://technosoft-sigma.vercel.app](https://technosoft-sigma.vercel.app)

To deploy your own instance:

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite and deploys instantly

---

## 📬 Contact & Support

| | |
|---|---|
| **Email** | support@rmtechnosoft.in |
| **Address** | Govindpura, Jhotwara, Jaipur, Rajasthan |

---

## 📄 License

© 2026 RM Technosoft. All rights reserved.
