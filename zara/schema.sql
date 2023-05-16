Create Database Zara;
use Zara;

CREATE TABLE Products(
    id INT NOT NULL AUTO_INCREMENT,
    Gender VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT NOT NULL,
    color VARCHAR(50),
    size VARCHAR(10),
    PRIMARY KEY(id)
);

CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    order_date DATE NOT NULL,
    address VARCHAR(100),
    city VARCHAR(50),
    postal_code VARCHAR(20),
    PRIMARY KEY (id)
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
);

CREATE TABLE customers (
    id INT AUTO_INCREMENT,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);
