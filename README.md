<div align="center">

<img src="https://github.com/dotrwt/Oak-and-Stay/blob/main/logo/main-logo%20-%20Copy.png" alt="Oak & Stay Logo" width="120" />

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%208-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](https://opensource.org/licenses/ISC)

</div>

---

## Overview

Oak & Stay is a full-stack rental listing platform where property owners can create and manage listings, and guests can browse, discover, and review unique stays. The application is built on a clean MVC architecture using Node.js and Express on the backend, MongoDB for persistence, and server-rendered EJS templates on the frontend.

Website is live on : <a src='https://rentalmarketplace.onrender.com/'>Oak and Place</a>

<img src='https://github.com/dotrwt/Oak-and-Stay/blob/main/OaP_UI.png' alt='Oak and Place UI'>

---

## Features

|     | Feature                 | Description                                                         |
| --- | ----------------------- | ------------------------------------------------------------------- |
|     | **Listing Marketplace** | Browse all available rentals on a responsive, filterable grid       |
|     | **Host Dashboard**      | Authenticated users can create, edit, and delete their own listings |
|     | **Image Uploads**       | Listing photos are uploaded and served via Cloudinary               |
|     | **Guest Reviews**       | Leave and manage reviews on any property listing                    |
|     | **Authentication**      | Secure register / login / logout with Passport.js local strategy    |
|     | **Authorisation**       | Route-level ownership checks only your content, only your control   |
|     | **Flash Notifications** | Real-time success and error feedback on every user action           |
|     | **Input Validation**    | Server-side Joi schemas validate all form submissions               |

---

## Tech Stack

### Backend

| Technology                                                                        | Version  | Purpose                          |
| --------------------------------------------------------------------------------- | -------- | -------------------------------- |
| [Node.js](https://nodejs.org/)                                                    | ≥ 18.0.0 | JavaScript runtime               |
| [Express](https://expressjs.com/)                                                 | ^5.1.0   | Web framework                    |
| [Mongoose](https://mongoosejs.com/)                                               | ^8.18.0  | MongoDB ODM                      |
| [Passport.js](https://www.passportjs.org/)                                        | ^0.7.0   | Authentication middleware        |
| [passport-local](https://github.com/jaredhanson/passport-local)                   | ^1.0.0   | Local username/password strategy |
| [passport-local-mongoose](https://github.com/saintedlama/passport-local-mongoose) | ^9.0.1   | Mongoose plugin for Passport     |
| [express-session](https://github.com/expressjs/session)                           | ^1.18.2  | Session management               |
| [connect-flash](https://github.com/jaredhanson/connect-flash)                     | ^0.1.1   | Flash message middleware         |
| [Joi](https://joi.dev/)                                                           | ^18.0.2  | Schema-based input validation    |
| [method-override](https://github.com/expressjs/method-override)                   | ^3.0.0   | HTTP verb override for forms     |
| [dotenv](https://github.com/motdotla/dotenv)                                      | ^17.2.3  | Environment variable management  |

### Frontend & Templating

| Technology                                          | Version | Purpose                            |
| --------------------------------------------------- | ------- | ---------------------------------- |
| [EJS](https://ejs.co/)                              | ^3.1.10 | Server-side templating engine      |
| [ejs-mate](https://github.com/JacksonTian/ejs-mate) | ^4.0.0  | Layout and partial support for EJS |

### Storage & Media

| Technology                                                                            | Version | Purpose                                    |
| ------------------------------------------------------------------------------------- | ------- | ------------------------------------------ |
| [Cloudinary](https://cloudinary.com/)                                                 | ^1.41.3 | Cloud image storage and delivery           |
| [Multer](https://github.com/expressjs/multer)                                         | ^2.0.2  | Multipart form data / file upload handling |
| [multer-storage-cloudinary](https://github.com/affanshahid/multer-storage-cloudinary) | ^4.0.0  | Cloudinary storage engine for Multer       |

---

## Project Structure

```
Oak-and-Stay/
│
├── app.js                      # Application entry point
│                               # Express app, middleware registration,
│                               # MongoDB connection, session configuration
│
├── middleware.js               # Custom Express middleware
│                               # isLoggedIn, isOwner, isReviewAuthor,
│                               # validateListing, validateReview, wrapAsync
│
├── schema.js                   # Joi validation schemas
│                               # listingSchema, reviewSchema
│
├── cloudConfig.js              # Cloudinary + Multer configuration
│                               # Storage engine, file filter, upload instance
│
├── controller/                 # Route handler logic (MVC controllers)
│   ├── listings.js             # index, show, new, create, edit, update, destroy
│   ├── reviews.js              # createReview, destroyReview
│   └── users.js                # renderRegister, register, renderLogin,
│                               # login, logout
│
├── models/                     # Mongoose data models
│   ├── listing.js              # Listing schema (title, description, price,
│   │                           # location, images, owner, reviews)
│   ├── review.js               # Review schema (body, rating, author)
│   └── user.js                 # User schema (extends passport-local-mongoose)
│
├── routes/                     # Express routers
│   ├── listing.js              # /listings — CRUD routes
│   ├── review.js               # /listings/:id/reviews — review routes
│   └── user.js                 # /register, /login, /logout
│
├── views/                      # EJS templates
│   ├── layouts/
│   │   └── boilerplate.ejs     # Base HTML layout, navbar, footer
│   ├── listings/
│   │   ├── index.ejs           # Home page — listing grid + hero
│   │   ├── show.ejs            # Single listing detail + reviews
│   │   ├── new.ejs             # Create listing form
│   │   └── edit.ejs            # Edit listing form
│   ├── users/
│   │   ├── login.ejs           # Login page
│   │   └── register.ejs        # Registration page
│   └── error.ejs               # Error page
│
├── public/                     # Static assets (served at /)
│   ├── css/
│   │   └── style.css           # Oak & Stay design system
│   └── js/
│       └── script.js           # Client-side interactions
│
├── logo/                       # Brand assets
│   └── logo.png                # Oak & Stay logo
│
├── utils/                      # Utility helpers
│   ├── ExpressError.js         # Custom error class
│   └── wrapAsync.js            # Async error wrapper for route handlers
│
├── init/
│   └── index.js                # Database seed script (sample listings)
│
├── .gitignore
├── package.json
└── package-lock.json
```

---

## Getting Started

### Prerequisites

Ensure the following are installed and configured before proceeding:

- **[Node.js](https://nodejs.org/)** v18.0.0 or higher
- **[MongoDB](https://www.mongodb.com/)** — a local instance, or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
- **[Cloudinary account](https://cloudinary.com/)** — the free tier provides ample storage for development

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/dotrwt/Oak-and-Stay.git
cd Oak-and-Stay
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the project root. This file is excluded from version control by `.gitignore` and must never be committed.

```env
# ─── Database ──────────────────────────────────────────────
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/oak-and-stay

# ─── Cloudinary ────────────────────────────────────────────
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
```

**4. (Optional) Seed the database**

Populate the database with sample listings for local development:

```bash
node init/index.js
```

**5. Start the development server**

```bash
npm run dev
```

---

## Available Scripts

| Script  | Command       | Description                                                |
| ------- | ------------- | ---------------------------------------------------------- |
| `start` | `npm start`   | Start the server using Node.js                             |
| `dev`   | `npm run dev` | Start the server with Nodemon (hot-reload on file changes) |

---

## Environment Variables Reference

| Variable                | Required | Description                                  |
| ----------------------- | -------- | -------------------------------------------- |
| `MONGODB_URI`           | ✅       | MongoDB connection string local or Atlas URI |
| `CLOUDINARY_CLOUD_NAME` | ✅       | Cloudinary cloud name from your dashboard    |
| `CLOUDINARY_KEY`        | ✅       | Cloudinary API key                           |
| `CLOUDINARY_SECRET`     | ✅       | Cloudinary API secret                        |

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/your-feature-name`
3. Commit your changes — `git commit -m "feat: add your feature"`
4. Push to the branch — `git push origin feature/your-feature-name`
5. Open a Pull Request

Please ensure any new routes or form inputs are accompanied by appropriate middleware and Joi validation.

---

## License

Distributed under the **ISC License**. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">
  <sub>Developed by <a href="https://github.com/dotrwt">dotrwt</a> &nbsp;·&nbsp; © 2025 Oak & Stay</sub>
</div>
