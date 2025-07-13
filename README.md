# Property Management App – Frontend

This is the frontend of the Property Management platform built using **React.js** and **Tailwind CSS**. It allows users to browse, add, and manage properties, with a separate admin panel for full control over the listings.

---

## Key Features

- Secure login and signup using JWT authentication
- Role-based routing for users and admins
- Create, view, and edit property listings
- Admin dashboard to manage all listings
- Responsive design using Tailwind CSS
- Image upload functionality integrated with Cloudinary
- API communication using Axios and React Context

---

## Tech Stack

| Purpose           | Tech Used             |
|-------------------|-----------------------|
| Frontend Framework | React.js             |
| Styling            | Tailwind CSS         |
| Routing            | React Router DOM     |
| HTTP Client        | Axios                |
| Auth Management    | JWT + Cookies        |

---


## Admin Access

To access the admin dashboard, you can use the following test credentials:

- Email: shaikhshaziya2828@gmail.com  
- Password: admin@123  
- AdminLogin URL:  [https://cyber-sapient-technologies-assessme-jade.vercel.app/admin]

---


### Admin Routes (Protected)

| Route                | Description            |
|----------------------|------------------------|
| `/admin`             | Admin Login            |
| `/dashboard`         | Admin Dashboard        |
| `/add-property`      | Add New Property       |
| `/edit-property/:id` | Edit Property          |
| `/adminprofile`      | Admin Profile          |

---

### User Routes (Protected)

| Route                | Description            |
|----------------------|------------------------|
| `/profile`           | User Profile           |
| `/edit-property/:id` | Edit Property          |

---

### Public Routes

| Route                 | Description               |
|-----------------------|---------------------------|
| `/`                   | Homepage                  |
| `/property`           | Property Listings         |
| `/properties/:id`     | Single Property View      |
| `/property-list`      | Property List Page        |
| `/about`              | About Us                  |
| `/privacy`            | Privacy Policy            |
| `/terms`              | Terms & Conditions        |
| `/login`              | User Login                |
| `/signup`             | User Registration         |
| `/admin`              | Admin Login Page          |

---

## Getting Started

To run this project locally:

```bash
# Clone the repo
git clone https://github.com/shaziya78/CyberSapient-Technologies-Assessment-FE.git

# Go into the project folder
cd CyberSapient-Technologies-Assessment-FE

# Install dependencies
npm install

# Start the app
npm start
