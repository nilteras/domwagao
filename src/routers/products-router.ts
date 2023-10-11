import { deleteProduct, getAllProducts, postProduct, updateProduct } from "./../controllers/products-controller";
import { Router } from "express";


const productsRouter = Router();

productsRouter.post('/product', postProduct);
productsRouter.get('/product', getAllProducts);
productsRouter.put('/product/:id', updateProduct);
productsRouter.delete('/product/:id', deleteProduct);

export default productsRouter;