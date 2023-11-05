# FoodApp (MERN Stack)

FoodApp is a full-stack web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This project serves as a robust example of a NoSQL database-driven application with MongoDB at its core. The application allows users to browse, search, and order food online, and it leverages MongoDB for efficient data storage and retrieval.

## Database Schema

![Database Schema](![image](https://github.com/shashankpandey2411/FoodApp-using-MERN/assets/84517279/6513b542-b61e-48ff-9290-da6de50df81e)
)

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Getting Started

### Prerequisites

Before you can run the FoodApp, you need to have the following software and tools installed on your system:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (Make sure it's up and running)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/foodapp.git
   cd foodapp
   ```

2. Install the server-side dependencies:

   ```bash
   npm install
   ```

3. Install the client-side dependencies:

   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in the `server` directory and provide the necessary environment variables, including your MongoDB connection URL, secret key for JWT, and any other configuration values required.

5. To fetch the food items in your mongoDB

   ```bash
   npm run data:import
   ```

7. Start the server:

   ```bash
   npm start
   or
   npm run server
   ```

8. Start the client:

   ```bash
   cd client
   npm start
   ```

The FoodApp should now be running. You can access it at `http://localhost:3000`.

## Usage

You can use the FoodApp to:

- Browse a list of available food items.
- Search for specific food items.
- Add items to your cart and place orders.

Explore the app and enjoy your food ordering experience!

## Testing

For detailed information about testing the backend routes, please refer to our [Postman Documentation](https://documenter.getpostman.com/view/28037604/2s9YXfa2v4).

## Project Report

For a detailed review and analysis of our project, please check our [Final Project Report](https://github.com/yourusername/foodapp/blob/main/REVIEW-3.pdf).
