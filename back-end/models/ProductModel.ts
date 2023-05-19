
import { createConnection, Connection } from 'mysql2';

export class ProductModel {
  private connection: Connection;

  constructor() {
    this.connection = createConnection({
      host: 'localhost',
      user: 'root',
      password: '23647619rbk',
      database: 'zara',
    });
  }
  getAll(callback: (error: any, results: any) => void) {
    this.connection.query('SELECT * FROM products ', callback);
  }
  

getProductById = (id: any, callback: (err: any, result: any) => void): void => {
  const sql: string = `SELECT * FROM products WHERE id="${id}"`;
  this.connection.query(sql, callback);
};


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
