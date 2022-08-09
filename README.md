
# Hi, I'm Naman Gupta! 👋


## Ecommerce API

This is an Ecommerce api which can be used as backend for storing 
product info easily by using routes.

## Run Locally

Clone the project

```bash
  git clone https://github.com/namanGupta-ar/ecommerce_api.git
```

Go to the project directory

```bash
  cd ecommerce_api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## API Reference

#### Get all products

```bash
  GET products/
```

#### Create product

```bash
  POST products/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `String` | **Required**. Name of product  |
| `quantity`      | `Number` | **Required**. Quantity of product  |



#### Delete product

```bash
  DELETE products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Number` | **Required**. Id of item to delete |



#### Update product quantity

```bash
  POST /products/:id/update_quantity/?number=10
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Number` | **Required**. Id of item to delete |
| `number`      | `Number` | **Required**. number with which we want to increase |

## Tech Stack 
**Server:** Node, Express


## Screenshots

### Show products
![App Screenshot](https://raw.githubusercontent.com/namanGupta-ar/ecommerce_api/master/screenshots/show.png)
### Create product
![App Screenshot](https://raw.githubusercontent.com/namanGupta-ar/ecommerce_api/master/screenshots//create.png)
### Delete product
![App Screenshot](https://raw.githubusercontent.com/namanGupta-ar/ecommerce_api/master/screenshots/delete.png)
### Update Quantity
![App Screenshot](https://raw.githubusercontent.com/namanGupta-ar/ecommerce_api/master/screenshots/update.png)


## 🚀 About Me
I'm a full stack developer


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://nifty-perlman-16c836.netlify.app/) 
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/naman-gupta-24b8651ba/)

