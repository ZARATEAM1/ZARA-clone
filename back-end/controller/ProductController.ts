import { Request, Response } from 'express';
import { ProductModel } from '../models/ProductModel';

export class ProductController {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  getAllProducts(req: Request, res: Response) {
    this.model.getAllProducts((error: any, results: any) => {
      if (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  }

  getBeautyProducts(req: Request, res: Response) {
    this.model.getBeautyProducts((error: any, results: any) => {
      if (error) {
        console.error('Error fetching beauty products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  }

  getBlazeProducts(req: Request, res: Response) {
    this.model.getBlazeProducts((error: any, results: any) => {
      if (error) {
        console.error('Error fetching Blaze products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  }

  getShoesProducts(req: Request, res: Response) {
    this.model.getShoesProducts((error: any, results: any) => {
      if (error) {
        console.error('Error fetching shoes products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  }

  getTShirtProducts(req: Request, res: Response) {
    this.model.getTShirtProducts((error: any, results: any) => {
      if (error) {
        console.error('Error fetching t-shirt products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  }
}
