# shop
#### Video Demo:  https://youtu.be/-eq7bPwYY6w
#### Description:
# Simple E-Commerce Shop with Next.js, Tailwind CSS, NextAuth.js, and MongoDB

## Overview

Welcome to my simple e-commerce shop built with Next.js version 14, Tailwind CSS, NextAuth.js, and MongoDB. This project aims to provide a seamless shopping experience with a modern frontend, robust backend functionality, and secure user authentication. Whether you're a developer exploring my codebase or a user interacting with the shop, this `README.md` will guide you through the project's structure, functionality, and setup.

## Project Structure

### Frontend

The frontend of my e-commerce shop is primarily built using Next.js and styled with Tailwind CSS. Below are key files within the `app` directory:

- **`page.js`**: This is the main landing page of the e-commerce shop, displaying featured products and categories.

- **`items/[itemId]/page.js`**: Individual product pages, dynamically generated based on product IDs.

- **`components/Cart.js`**: Manages the user's shopping cart, displaying selected items and facilitating the checkout process.

### Backend

The backend of the shop is powered by NextAuth.js for secure authentication and MongoDB for data storage. Key files within the `app/api/auth/[...nextauth]` directory include:

- **`route.js`**: Configuration file for NextAuth.js, handling user authentication and authorization.

- **`dbConnect.js`**, **`fetchDataById.js`**, **`fetchDataByName.js`**: Establishes the connection to the MongoDB database, ensuring seamless interaction with product and user data.

## Setting Up the Project

To run the e-commerce shop locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/WriteCodeHaveFun/shop.git

2. Set up environment variables:
   Create a .env file in the root directory and add the necessary variables for MongoDB and NextAuth.js.

1. Run the development server:

   ```bash
   npm run dev
   Visit http://localhost:3000 in your browser to explore the e-commerce shop locally.

##Conclusion
My simple e-commerce shop demonstrates the power and flexibility of Next.js, Tailwind CSS, NextAuth.js, and MongoDB. I've focused on creating a seamless shopping experience while ensuring secure user authentication and efficient data management. Feel free to explore the codebase, and if you have any questions or feedback, don't hesitate to reach out. Happy shopping!