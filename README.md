# PeerPocket Documentation


**Note: The project is not complete. While all components and routes are in place, the APIs have not been fully integrated due to time constraints. The team acknowledges that there are unlinked functionalities within the project. Thank you for your understanding and patience as we strived to provide a complete and robust Loan Request System.**

## Table of Contents

1. [Introduction](#introduction)
2. [Project Description](#project-description)
3. [Team Members](#team-members)
4. [Technologies Used](#technologies-used)
5. [Project Structure](#project-structure)
6. [Getting Started](#getting-started)
7. [System Architecture](#system-architecture)
8. [Backend Documentation](#backend-documentation)
9. [Frontend Documentation](#frontend-documentation)
10. [Data Science](#data-science)
11. [UI/UX Design](#uiux-design)
12. [Contact Information](#contact-information)

## 1. Introduction

This documentation provides an overview of the Loan Request System, a web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack, which allows individuals to request loans from other people. The system is designed to facilitate the lending and borrowing of money between users. This documentation will detail the project's functionality, team members, and technical aspects.

## 2. Project Description

The Loan Request System is a web-based platform that enables users to create loan requests and connect with potential lenders. It includes the following key features:

- User Registration and Authentication
- Loan Request Creation
- Loan Listing
- Loan Request Management
- Data Science Integration for Credit Scoring
- UI/UX Design for User-Friendly Experience
- Secure and Scalable Backend

## 3. Team Members

The project was developed by a team of skilled individuals with the following roles and contact information:

- **Bamidele Precious**
  - Role: MERN stack Developer
  - Email: bamideleprecious100@gmail.com

- **Kenneth Irechukwu**
  - Role: UI/UX Designer
  - Email: kenneth.irechukwu@gmail.com

- **Ifeoluwa Oduwaiye**
  - Role: Data Scientist
  - Email: ifeoluwaoduwaiye@gmail.com

- **Agu Bright C.**
  - Role: MERN stack Developer
  - Email: brightagu2@gmail.com

- **Akalonu Chukwuduzie Blaise**
  - Role: MERN stack Developer
  - Email: duzieblaise@outlook.com

## 4. Technologies Used

The Loan Request System utilizes the following technologies:

**Backend:**
- Node.js for server-side scripting
- Express.js for building the RESTful API
- Python for data science and machine learning integration
- MongoDB for the database

**Frontend:**
- React for building the user interface

## 5. Project Structure

The project is structured into separate folders for the frontend and backend, each with its own set of files. Here's a basic overview of the project structure:  
peerpocket/
│
├── client/ # React frontend  
│ ├── public/  
│ ├── src/  
│ ├── package.json  
│ └── ...  
│  
├── server/ # Node.js and Express.js backend  
│ ├── controllers/  
│ ├── models/  
│ ├── routes/  
│ ├── app.js  
│ ├── package.json  
│ └── ...  
│  
└── README.md  

## 6. Getting Started

To set up the project on your local machine, follow these general steps:

1. Clone the project repository from the provided source.

2. Install the necessary dependencies for both the frontend and backend using `npm install`.

3. Configure the environment variables for the backend, such as database connection details and API keys.

4. Start the frontend using `npm run dev` or similar commands and the backend servers using `nodemon app.js` or `node app.js`.

## 7. System Architecture

The Loan Request System follows a typical MERN stack architecture, where the frontend interacts with the backend through RESTful APIs. The backend communicates with the database for storing and retrieving data. Data scientists handle the credit scoring component, dispute management, onboarding process, and UI/UX design ensures a user-friendly interface.

## 8. Backend Documentation

The backend tools used in the project include axios, bcryptjs, cors, dotenv, express, express-rate-limit, express-useragent, geoip-lite, jsonwebtoken, Mongoose, Request-ip, Validator, Socket.io, Flask, NLTK, Torchvision, and Gunicorn.

### Using Postman

Postman is a powerful tool for interacting with APIs. Once the backend is running, you can use Postman to access all the available routes.

1. Open Postman.

2. Create a new request by clicking the "New" button.

3. Choose the HTTP method (GET, POST) based on the specific route you want to access.

4. Enter the route URL, for example, `http://localhost:5000/api/some-route`.

5. Add any required request headers or body data, as specified in the API documentation.

6. Click the "Send" button to make the request and view the response.

You can access and test all available routes in the backend using Postman. Refer to the API documentation or JSDoc comments in the code for details on the routes and their expected input and output.

### JSDoc for Simplicity

The backend code includes JSDoc comments to document the codebase for simplicity. These comments provide explanations and details about the functions, parameters, and return values in the code, making it easier to understand and work with the backend code.

Feel free to explore the codebase and the JSDoc comments to get a comprehensive understanding of the available routes and functions within the backend of the Loan Request System.

## 9. Frontend Documentation

**Overview**
The frontend of the Loan Request System is built using React and incorporates various libraries and technologies to create a dynamic and user-friendly user interface
