import { getAllProducts, postProduct } from "./../controllers/products-controller";
import { Router } from "express";


const productsRouter = Router();

productsRouter.post('/product', postProduct);
productsRouter.get('/product', getAllProducts);
productsRouter.put('/product/:id');
productsRouter.delete('/product/:id');

export default productsRouter;