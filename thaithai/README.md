# Thaiไทย

Thaiไทย is a website that created to be an e-commerce platform for selling products which are made in Thailand.

## Technology Stack

`Front-end: React.js`
`Back-end: Express.js`
`Database: MariaDB`
`Other: MUI and you can find others in package.js`

## Features

Features  | Description  |  
----- | ----- | 
register | create the account |
login | login to the website | 
view product | view a product
delete account | delete the account |


## To run the frontend and backend

#### Frontend / Backend

```
npm start
```

## API endpoints

### Login
URL ``POST /auth/login``

#### Request Body

Parameter  | Type  |  Description |
----- | ----- | ----- | 
email | 	string |	User's email address
password |	string |  User's password

Example
```
 email: "tongcns@gmail.com",
 password: "tong123"
```

#### Success

``200`` success
Parameter  | Type  |  Description |
----- | ----- | ----- | 
success | boolean | success status
message | string | login successful

Example
```
 message: "Login credential is correct",
 success: true
```

### Register
URL ``POST /auth/signup``

#### Request Body

Parameter  | Type  |  Description |
----- | ----- | ----- | 
firstName |	string	| User's first name
lastName | string	| User's last name
username | string	| User's username
email	| string	| User's email address
password	| string	| User's password

Example
```
 firstName: "tong",
 lastName: "cns",
 username: "tongcns",
 email: "tongcns@gmail.com",
 password: "tong123"
```

#### Success

``200`` success
Parameter  | Type  |  Description |
----- | ----- | ----- | 
message | string | Success message

Example
```
 message: "User registered successfully"
```

### Delete User
URL ``DELETE /user``

#### Query Parameters

Parameter  | Type  |  Description |
----- | ----- | ----- | 
userId |	string |	User ID

#### Success Response

``200`` success
Parameter  | Type  |  Description |
----- | ----- | ----- | 
message | string | Success message

Example
```
 message: "User deleted successfully"
```

