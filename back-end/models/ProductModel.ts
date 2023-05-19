
import { createConnection, Connection } from 'mysql2';

export class ProductModel {
  private connection: Connection;

  constructor() {
    this.connection = createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Root',
      database: 'zara',
    });
  }

  getAllProducts(callback: (error: any, results: any) => void) {
    this.connection.query('SELECT * FROM products where gender = "women"', callback);
  }

  getBeautyProducts(callback: (error: any, results: any) => void) {
    this.connection.query('SELECT * FROM products where gender = "beauty"', callback);
  }

  getBlazeProducts(callback: (error: any, results: any) => void) {
    this.connection.query('SELECT * FROM products where (gender = "women" and category="Blaze")', callback);
  }

  getShoesProducts(callback: (error: any, results: any) => void) {
    this.connection.query('SELECT * FROM products where (gender = "women" and category="shoes")', callback);
  }

  getTShirtProducts(callback: (error: any, results: any) => void) {
    this.connection.query('SELECT * FROM products where (gender = "women" and category="tshirt")', callback);
  }
}
