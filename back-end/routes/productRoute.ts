import express, { Router } from 'express';
import { ProductController } from '../controller/ProductController';

const router: Router = express.Router();
const controller: ProductController = new ProductController();

router.get('/products', controller.getAllProducts.bind(controller));
router.get('/Beauty', controller.getBeautyProducts.bind(controller));
router.get('/Blaze', controller.getBlazeProducts.bind(controller));
router.get('/shoes', controller.getShoesProducts.bind(controller));
router.get('/tshirt', controller.getTShirtProducts.bind(controller));

export default router;
