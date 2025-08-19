# Wanderlust

Wanderlust is a full-stack web application for listing, discovering, and reviewing travel destinations and accommodations. Built with Node.js, Express, MongoDB, and EJS, it allows users to create, edit, and delete listings, as well as leave reviews with star ratings and comments.

---

## Features

- **User Authentication:** Secure registration, login, and session management using Passport.js.
- **Listings Management:**  
  - Create, view, edit, and delete travel listings.
  - Each listing includes a title, description, image, price, location, and country.
  - Image uploads supported via Cloudinary.
- **Reviews System:**  
  - Users can leave reviews with star ratings and comments on listings.
  - Reviews display the reviewer’s name, rating (with gold stars), and comment.
  - Review deletion supported.
- **Flash Messages:** User feedback for actions (success, error) using connect-flash.
- **Responsive UI:** Built with Bootstrap for a modern, mobile-friendly interface.
- **Map Integration:** (Optional) Mapbox integration for displaying listing locations.
- **Robust Validation:** Joi schema validation for listings and reviews.
- **Error Handling:** Custom error pages and Express error middleware.

---

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, Bootstrap 5
- **Authentication:** Passport.js, express-session, connect-mongo
- **File Uploads:** Multer, Cloudinary
- **Validation:** Joi
- **Other:** Method-Override, Connect-Flash, Mapbox (optional)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)
- Mapbox account (if using maps)

### Installation

1. **Clone the repository:**
    ```bash
    git clone ---repo link---
    cd wanderlust
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory with the following:
    ```
    ATLASDB_URL=your_mongodb_connection_string
    SECRET=your_session_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_KEY=your_cloudinary_key
    CLOUDINARY_SECRET=your_cloudinary_secret
    MAP_TOKEN=your_mapbox_token
    ```

4. **Run the application:**
    ```bash
    npm start
    ```
    or with nodemon:
    ```bash
    nodemon app.js
    ```

5. **Visit in your browser:**
    ```
    http://localhost:8080
    ```

---

## Folder Structure

```
.
├── models/           # Mongoose schemas (Listing, Review, User)
├── routes/           # Express route handlers
├── controllers/      # Controller logic (if used)
├── views/            # EJS templates
│   ├── listings/
│   ├── includes/
│   └── ...
├── public/           # Static assets (CSS, JS, images)
├── utils/            # Utility functions (error handling, etc.)
├── schema.js         # Joi validation schemas
├── app.js            # Main application file
└── README.md
```

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [Colt Steele's YelpCamp](https://github.com/Colt/YelpCamp) for inspiration
- [Bootstrap](https://getbootstrap.com/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox](https://www.mapbox.com/)
