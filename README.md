# EduGleam - Scholarship Management System

EduGleam is a Scholarship Management System that allows students to search for scholarships, filter opportunities based on their preferences, and apply seamlessly. The platform aims to provide an efficient and user-friendly experience for scholarship applications and management.
### Live URL 
https://edugleam-57b57.firebaseapp.com/

## Features
- **Home Page**: Displays scholarship categories, featured scholarships, and blogs.
- **About Page**: Our work process, payment details and Onthes important info .
- **All Scholarship**: Users can view a list of available scholarships with search By Scholarship Name, University name, and Degree name.
- **Scholarship Details Page**: Displays detailed information about a specific scholarship, including application fees, eligibility criteria, and deadlines.
- **Apply for Scholarship**: Users can apply directly, Payment with stripe and submit necessary documents, and track their application status.
- **User Authentication**: Secure login and registration using email/password authentication.
- **User Dashboard**: Allows users to view their Profile , Applied scholarships  And Given reviews
- **Admin Dashboard**:Admin profile, Add scholarship,  Manages scholarships, Manage appiled scholarship,  Manage users, reviews, All , Statistic,
- **Moderator Dashboard**:Modorator profile, Add scholarship,  Manages scholarships, Manage appiled scholarship, and  reviews, 

## Key Functionalities
### 1. Authentication
- Email and password-based authentication.
- Password validation: At least 6 characters, including a capital letter and a special character.
- Login/logout functionality with user profile display.
- Registration form with error handling for incorrect password format.

### 2.  All Scholarships  Filtering
- Users can search and scholarships based on:
  - University name
  - Available degrees
  - Scholarship name.

### 3. Scholarship Details & Reviews
- Detailed scholarship information including service charges and eligibility criteria.
- Reviews from applied user :
  - Reviewer name
  - Review date
  - Review ratings
  - Reviewer comments (displayed in a slider/carousel format).

### 4. Apply for Scholarship
- Users can apply directly through the platform.
- Payment integration for scholarships that require application fees.
- redirect to application form if payment successful
- Application requires personal details, university name, degree, and supporting documents.
- Confirmation toast notification upon successful submission.

### 5. Admin Dashboard
- Manage scholarships: Add, edit, and delete scholarships.
- View and manage user applications and chnage status ( processing ) 
- Moderate scholarship reviews and feedback.

## Deployment Guidelines
1. Ensure the project is deployed on a production server (Firbase for frontend, and a cloud-based backend like vercel).
2. Verify that all API routes are functioning correctly.
3. Implement environment variables for secure API key management.
4. Test authentication workflows and ensure secure token storage.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Auth
- **Hosting**: Firebase (Frontend), vercle (Backend)

## How to Run the Project Locally
## ALL dependecies & pakages:
```
"dependencies": {
        "@headlessui/react": "^2.2.0",
        "@heroicons/react": "^2.2.0",
        "@stripe/react-stripe-js": "^3.1.1",
        "@stripe/stripe-js": "^5.5.0",
        "@tanstack/react-query": "^5.64.1",
        "axios": "^1.7.9",
        "firebase": "^11.1.0",
        "framer-motion": "^11.18.0",
        "localforage": "^1.10.0",
        "lottie-react": "^2.4.0",
        "match-sorter": "^8.0.0",
        "react": "^18.3.1",
        "react-datepicker": "^7.6.0",
        "react-dom": "^18.3.1",
        "react-hook-form": "^7.54.2",
        "react-icons": "^5.4.0",
        "react-rating-stars-component": "^2.2.0",
        "react-router-dom": "^7.1.1",
        "react-stars": "^2.2.5",
        "react-toastify": "^11.0.2",
        "recharts": "^2.15.0",
        "sort-by": "^1.2.0",
        "sweetalert2": "^11.15.10",
        "swiper": "^11.2.1"
      },
```
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up environment variables (.env.local):
    -- Firebase configuration
   ```
   VITE_(KEYS)
   ```
   ```env
   VITE_serverUrl
   VITE_STRIPE_PUBLIC_KEY
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the application at `http://localhost:5173/`



