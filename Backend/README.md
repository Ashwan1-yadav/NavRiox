## Navriox Backend – Guide for Frontend Developers

This backend is a small Express + MongoDB API that powers the contact form and admin contact submissions for the Navriox frontend.

It exposes a public endpoint to submit contact requests and an admin endpoint to list all submissions.

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express (v5)
- **Database**: MongoDB (via Mongoose)
- **Security & Middleware**:
  - **helmet** – HTTP headers hardening
  - **cors** – CORS configuration for frontend/admin origins
  - **morgan** – HTTP request logging
  - **express-validator** – request body validation
- **Environment Management**: dotenv

---

## Project Structure (Backend)

At a high level:

- **`server.js`**: Entry point; loads environment, connects to MongoDB, and starts the HTTP server.
- **`app.js`**: Express app configuration, middleware, and route mounting.
- **`config/config.db.js`**: MongoDB connection helper using `MONGO_URL`.
- **`routes/contactUs.route.js`**: Public contact form submission endpoint.
- **`routes/admin.route.js`**: Admin endpoint to fetch all contact submissions.
- **`models/contactUs.model.js`**: Mongoose model for stored contact form submissions.
- **`middlewares/error.middleware.js`**: Centralized error handler (currently used as a final middleware).

---

## Environment Variables

The backend expects the following variables (typically defined in a `.env` file at the backend root):

- **`PORT`**: Port number that the backend HTTP server listens on.
- **`MONGO_URL`**: MongoDB connection string (e.g. `mongodb+srv://...` or `mongodb://localhost:27017/arsenull`).
- **`BASE_URL`**: Allowed origin for the main frontend (used in CORS).
- **`ADMIN_BASE_URL`**: Allowed origin for the admin interface (used in CORS).

If `BASE_URL` or `ADMIN_BASE_URL` are missing or incorrect, the browser will block cross‑origin calls even if the server is running.

---

## Running the Backend Locally

From the `Backend` directory:

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Create `.env`**

   Example:

   ```bash
   PORT=5000
   MONGO_URL=mongodb://localhost:27017/navriox
   BASE_URL=http://localhost:5173        # Vite frontend
   ADMIN_BASE_URL=http://localhost:5174  # (if you have a separate admin app)
   ```

3. **Start the server**

   ```bash
   npm start
   ```

   The server will log:

   - `MongoDB connected`
   - `Server running on port : <PORT>`

4. **Health check**

   - `GET /` → returns a plain text message: `"Hello From Navriox Backend"`.

---

## Base URLs

Assuming:

- **Local**: `http://localhost:5000`
- **API Prefixes**:
  - Public API: **`/api/v1`**
  - Admin API: **`/api/admin`**

The full URLs used by the frontend will combine the server base URL with these prefixes and specific routes (see below).

---

## REST API – Public Endpoints

### 1. Submit Contact Form

- **Method**: `POST`
- **URL**: `/api/v1/contact`
- **Content-Type**: `application/json`

**Request body**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "contactNo": "+1-202-555-0123",
  "message": "I'd like to learn more about your services."
}
```

**Validation rules**

- **`name`**: required, non-empty string.
- **`email`**: required, valid email format.
- **`contactNo`**: required, valid mobile phone.
- **`message`**: required, non-empty string.

If `message` is not provided in the request body, the backend code attempts to default it to `"Contact me at <contactNo>"`. In practice, always send a non-empty `message` from the frontend to avoid relying on that internal fallback.

**Success response – 201**

```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "_id": "6790e85e7b1f2e3b1c2d3f45",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "contactNo": "+1-202-555-0123",
    "message": "I'd like to learn more about your services.",
    "createdAt": "2026-01-15T10:20:30.123Z",
    "updatedAt": "2026-01-15T10:20:30.123Z",
    "__v": 0
  }
}
```

**Validation error – 400**

```json
{
  "success": false,
  "errors": [
    {
      "type": "field",
      "value": "",
      "msg": "Name is required",
      "path": "name",
      "location": "body"
    },
    {
      "type": "field",
      "value": "not-an-email",
      "msg": "Invalid email format",
      "path": "email",
      "location": "body"
    }
  ]
}
```

**Server error – 500**

```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

## REST API – Admin Endpoints

> These endpoints are currently unauthenticated in the codebase. If you expose them publicly, consider adding auth and/or IP whitelisting.

### 2. Get All Contact Submissions

- **Method**: `GET`
- **URL**: `/api/admin/getSubmissions`

**Success response – 200**

```json
{
  "success": true,
  "message": "Contact list fetched successfully",
  "data": [
    {
      "_id": "6790e85e7b1f2e3b1c2d3f45",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "contactNo": "+1-202-555-0123",
      "message": "I'd like to learn more about your services.",
      "createdAt": "2026-01-15T10:20:30.123Z",
      "updatedAt": "2026-01-15T10:20:30.123Z",
      "__v": 0
    },
    {
      "_id": "6790e8a17b1f2e3b1c2d3f46",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "contactNo": "+44-7700-900123",
      "message": "Please contact me about your enterprise plan.",
      "createdAt": "2026-01-15T11:05:42.456Z",
      "updatedAt": "2026-01-15T11:05:42.456Z",
      "__v": 0
    }
  ]
}
```

**Server error – 500**

```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

## Contact Data Model

The `Contact` documents stored in MongoDB have the following shape:

```json
{
  "_id": "6790e85e7b1f2e3b1c2d3f45",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "contactNo": "+1-202-555-0123",
  "message": "I'd like to learn more about your services.",
  "createdAt": "2026-01-15T10:20:30.123Z",
  "updatedAt": "2026-01-15T10:20:30.123Z",
  "__v": 0
}
```

This matches the Mongoose schema:

- **`name`**: `String`, required, trimmed.
- **`email`**: `String`, required, lowercased, trimmed.
- **`contactNo`**: `String`, required.
- **`message`**: `String`, required, trimmed.

---

## How Frontend Should Call the API

- **Base URL**: derive from environment, e.g. `VITE_API_BASE_URL` on the frontend.
- For the public site:
  - **Submit contact**: `POST {API_BASE_URL}/api/v1/contact`
- For an admin dashboard (if implemented):
  - **Get submissions**: `GET {API_BASE_URL}/api/admin/getSubmissions`

Example using `fetch` in the frontend:

```js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function submitContact(payload) {
  const res = await fetch(`${API_BASE_URL}/api/v1/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to submit contact form");
  }
  return data;
}
```

---

## Error Handling Notes

- The custom `errorHandler` middleware returns JSON in the form:

  ```json
  {
    "message": "Some error message"
  }
  ```

- For consistency on the frontend, prefer to:
  - Check `res.ok` and if false, read `data.message` or `data.errors`.
  - Surface those messages to the user or log them appropriately.

