# Navriox Frontend – Guide for Backend Developers

This frontend is a modern React application built with Vite that provides the user interface for the Navriox website. It integrates with the backend API to handle contact form submissions and displays various pages including Home, About, Services, Contact, and more.

---

## Tech Stack

- **Build Tool**: Vite (v7.2.4)
- **Framework**: React (v19.2.0)
- **Routing**: React Router DOM (v7.12.0)
- **HTTP Client**: Axios (v1.13.2)
- **Styling**: 
  - Tailwind CSS (v4.1.18)
  - CSS Variables for theming
- **UI Components**: 
  - Radix UI (various components)
  - shadcn/ui (New York style)
  - Lucide React (icons)
- **Animations**: Framer Motion (v12.25.0)
- **3D Graphics**: 
  - Three.js (v0.182.0)
  - @react-three/fiber (v9.5.0)
  - @react-three/drei (v10.7.7)
- **Notifications**: Sonner (v2.0.7)
- **Charts**: Recharts (v3.6.0)
- **Carousel**: Embla Carousel React (v8.6.0)
- **Utilities**: 
  - clsx & tailwind-merge (for className merging)
  - class-variance-authority (for component variants)

---

## Project Structure

```
Frontend/
├── src/
│   ├── main.jsx              # Entry point, sets up React Router and Toaster
│   ├── App.jsx               # Main app component with routing configuration
│   ├── index.css             # Global styles and Tailwind imports
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Getintouch.jsx
│   │   ├── Clients.jsx
│   │   ├── Projects.jsx
│   │   └── NewsAndUpdates.jsx
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Base UI components (buttons, inputs, cards, etc.)
│   │   └── blocks/          # Complex block components (hero sections, etc.)
│   ├── Components/          # Page-specific components
│   │   └── GetInTouch.jsx
│   └── lib/
│       └── utils.js         # Utility functions (cn helper for className merging)
├── public/                   # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── components.json          # shadcn/ui configuration
└── package.json             # Dependencies and scripts
```

---

## Environment Variables

The frontend requires the following environment variable (typically defined in a `.env` file at the frontend root):

- **`VITE_BASE_URL`**: The base URL of the backend API server (e.g., `http://localhost:5000` or `https://api.navriox.com`)

**Important**: In Vite, environment variables must be prefixed with `VITE_` to be accessible in the frontend code.

Example `.env` file:

```bash
VITE_BASE_URL=http://localhost:5000
```

For production:

```bash
VITE_BASE_URL=https://api.navriox.com
```

---

## Running the Frontend Locally

From the `Frontend` directory:

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Create `.env` file**

   ```bash
   VITE_BASE_URL=http://localhost:5000
   ```

   Make sure your backend server is running on the port specified in `VITE_BASE_URL`.

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The frontend will typically run on `http://localhost:5173` (Vite's default port).

4. **Build for production**

   ```bash
   npm run build
   ```

   This creates an optimized production build in the `dist/` directory.

5. **Preview production build**

   ```bash
   npm run preview
   ```

---

## Routing Structure

The application uses React Router DOM for client-side routing. All routes are defined in `src/App.jsx`:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Landing page with hero section, testimonials, and contact form |
| `/about` | `About` | About page |
| `/services` | `Services` | Services page |
| `/contact` | `ContactUs` | Contact page with contact form |
| `/getintouch` | `GetInTouch` | Alternative contact/get in touch page |

**Navigation**: The `Navbar5` component is rendered at the top of all pages, and `Footer4Col` is rendered at the bottom.

---

## API Integration

The frontend communicates with the backend API using **Axios**. All API calls use the `VITE_BASE_URL` environment variable.

### Base URL Configuration

```javascript
const BASE_URL = import.meta.env.VITE_BASE_URL;
```

### API Endpoints Used

#### 1. Submit Contact Form

**Endpoint**: `POST /api/v1/contact`

**Used in**:
- `src/components/ui/contact-2.jsx` (ContactUs page)
- `src/Components/GetInTouch.jsx` (GetInTouch page and Home page)

**Request Example**:

```javascript
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Example from contact-2.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    setLoading(true);
    
    await axios.post(`${BASE_URL}/api/v1/contact`, {
      name: formData.name.trim(),
      email: formData.email.trim(),
      contactNo: formData.contactNo.trim(),
      message: formData.message.trim(),
    });
    
    toast.success("Message sent successfully");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      contactNo: "",
      message: "",
    });
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Something went wrong"
    );
  } finally {
    setLoading(false);
  }
};
```

**Request Body**:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "contactNo": "+1-202-555-0123",
  "message": "I'd like to learn more about your services."
}
```

**Success Response (201)**:

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

**Error Response (400 - Validation Error)**:

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
    }
  ]
}
```

**Error Response (500 - Server Error)**:

```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

## Frontend Form Validation

The frontend performs client-side validation before submitting to the backend:

### Validation Rules (from GetInTouch.jsx)

- **Name**: Required, non-empty string
- **Email**: Required, valid email format (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- **Contact Number**: Required, 10-15 digits (regex: `/^[0-9]{10,15}$/`)
- **Message**: Required, non-empty, minimum 10 characters

### Validation Rules (from contact-2.jsx)

- **Name**: Required, non-empty string
- **Email**: Required, valid email format (regex: `/\S+@\S+\.\S+/`)
- **Contact Number**: Required, non-empty string
- **Message**: Required, non-empty string

**Note**: The backend also performs validation. If frontend validation passes but backend validation fails, the error message from the backend is displayed to the user.

---

## Error Handling

The frontend handles API errors using try-catch blocks and displays user-friendly error messages via toast notifications (using Sonner):

```javascript
try {
  await axios.post(`${BASE_URL}/api/v1/contact`, formData);
  toast.success("Message sent successfully");
} catch (error) {
  // Display backend error message if available
  toast.error(
    error.response?.data?.message || "Something went wrong"
  );
}
```

**Error Display**:
- Success: Green toast notification
- Error: Red toast notification
- Position: Top-right corner (configured in `main.jsx`)

---

## Component Examples

### Contact Form Component Structure

The contact form is implemented in multiple places:

1. **Contact2 Component** (`src/components/ui/contact-2.jsx`)
   - Used on the `/contact` page
   - Two-column layout with contact details on the left and form on the right

2. **GetInTouch Component** (`src/Components/GetInTouch.jsx`)
   - Used on the `/getintouch` page and embedded in the Home page
   - Centered card layout with contact information

Both components:
- Use the same API endpoint (`POST /api/v1/contact`)
- Send the same request body structure
- Handle loading states
- Display success/error toasts
- Reset form on successful submission

---

## Styling & Theming

- **Framework**: Tailwind CSS v4
- **Theme**: Dark theme (black background, white text)
- **Component Library**: shadcn/ui (New York style)
- **CSS Variables**: Used for theming (defined in `index.css`)

**Common Styling Patterns**:
- Background: `bg-black`
- Text: `text-white`
- Borders: `border-white/10` or `border-white/15`
- Input fields: `bg-black border-white/15 text-white`
- Buttons: `bg-white text-black hover:bg-gray-200`

---

## Development Notes for Backend Developers

### CORS Configuration

The backend must allow requests from the frontend origin. Ensure your backend's CORS configuration includes:

- **Development**: `http://localhost:5173` (Vite default)
- **Production**: Your frontend domain (e.g., `https://navriox.com`)

### API Response Format

The frontend expects consistent response formats:

**Success Response**:
```json
{
  "success": true,
  "message": "Success message",
  "data": { ... }
}
```

**Error Response**:
```json
{
  "success": false,
  "message": "Error message"
}
```

Or for validation errors:
```json
{
  "success": false,
  "errors": [ ... ]
}
```

### Environment Variable Setup

When deploying:

1. **Frontend**: Set `VITE_BASE_URL` to your backend API URL
2. **Backend**: Set `BASE_URL` in CORS to your frontend URL

Example for production:

**Frontend `.env`**:
```bash
VITE_BASE_URL=https://api.navriox.com
```

**Backend `.env`**:
```bash
BASE_URL=https://navriox.com
ADMIN_BASE_URL=https://admin.navriox.com
```

---

## Testing API Integration

To test the API integration locally:

1. **Start Backend**:
   ```bash
   cd Backend
   npm start
   # Server runs on http://localhost:5000
   ```

2. **Start Frontend**:
   ```bash
   cd Frontend
   # Ensure .env has: VITE_BASE_URL=http://localhost:5000
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

3. **Test Contact Form**:
   - Navigate to `http://localhost:5173/contact` or `http://localhost:5173/getintouch`
   - Fill out the form
   - Submit and verify:
     - Success toast appears
     - Form resets
     - Backend receives the request (check backend logs)
     - Data is saved in MongoDB

---

## Build & Deployment

### Build Process

```bash
npm run build
```

This creates an optimized production build in `dist/` directory.

### Deployment Considerations

- **Static Hosting**: The frontend is a static site and can be deployed to:
  - Vercel (recommended, see `vercel.json`)
  - Netlify
  - AWS S3 + CloudFront
  - Any static hosting service

- **Environment Variables**: Ensure `VITE_BASE_URL` is set in your deployment platform's environment variables.

- **Vercel Configuration**: The project includes `vercel.json` for Vercel deployment.

---

## Additional Resources

- **Vite Documentation**: https://vite.dev/
- **React Router**: https://reactrouter.com/
- **Axios**: https://axios-http.com/
- **Tailwind CSS**: https://tailwindcss.com/
- **shadcn/ui**: https://ui.shadcn.com/
- **Sonner (Toast)**: https://sonner.emilkowal.ski/

---

## Troubleshooting

### CORS Errors

If you see CORS errors in the browser console:
- Verify `VITE_BASE_URL` matches your backend URL
- Check backend CORS configuration includes your frontend origin
- Ensure backend is running and accessible

### API Connection Failed

- Verify backend server is running
- Check `VITE_BASE_URL` is correctly set
- Test backend endpoint directly (e.g., `curl http://localhost:5000/api/v1/contact`)

### Build Errors

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility (requires Node 18+)
- Verify all environment variables are set

---

## Summary

The Navriox frontend is a modern React application that:
- Uses Vite for fast development and optimized builds
- Integrates with the backend API via Axios
- Implements contact forms that submit to `POST /api/v1/contact`
- Uses React Router for client-side navigation
- Provides a dark-themed, responsive UI
- Handles errors gracefully with toast notifications

For backend developers, the key integration points are:
1. Ensure CORS is configured correctly
2. Maintain consistent API response formats
3. Handle validation errors appropriately
4. Set up environment variables for both frontend and backend
