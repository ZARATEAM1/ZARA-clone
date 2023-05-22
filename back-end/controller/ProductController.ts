import { Request, Response } from 'express';
import { ProductModel } from '../models/ProductModel';

export class ProductController {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }
  getAll(req: Request, res: Response) {
    this.model.getAll((error: any, results: any) => {
      if (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  }

  getOne(req: Request, res: Response): void {
    const id: any = req.params.id;
    console.log(id);

    this.model.getProductById(id, (err: any, result: any) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length === 0) {
          res.status(404).json({ message: 'Product not found' });
        } else {
          res.status(200).json(result[0]);
        }
      }
    });
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
    const blazer:any=req.params.blazer
    this.model.getBlazeProducts(blazer, (err: any, result: any) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length === 0) {
          res.status(404).json({ message: 'Product not found' });
        } else {
          res.status(200).json(result);
        }
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
