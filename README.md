Human Resource API
Introduction
A RESTful API for managing human resource information, with endpoints for administrators and employees. Built with TypeScript, Express, PostgreSQL and Sequelize.

Endpoints
Administrators
POST /api/admin/employees - Create a new employee record
GET /api/admin/employees - Retrieve a list of all employees
GET /api/admin/employees/:id - Retrieve an employee by ID
PUT /api/admin/employees/:id - Update an employee record
DELETE /api/admin/employees/:id - Delete an employee record

POST /api/admin/departments - Create a new department
GET /api/admin/departments - Retrieve a list of all departments
GET /api/admin/departments/:id - Retrieve a department by ID
PUT /api/admin/departments/:id - Update a department
DELETE /api/admin/departments/:id - Delete a department
GET /api/admin/department/:id - Retrieve a list of all employees in the same department


Employees
GET /api/employees/department/:id - Retrieve a list of all employees in the same department

Technologies Used
TypeScript
Express
PostgreSQL
Sequelize


Prerequisites
Node.js
PostgreSQL

Installation
Clone the repository
git clone https://github.com/yalleyfred/HR-backend.git

Install dependencies
npm install

Start the development server
npm run dev

Creator
Created by Fredrick Yalley.
