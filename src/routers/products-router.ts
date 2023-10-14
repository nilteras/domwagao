import { deleteProduct, getAllProducts, getProductById, postProduct, updateProduct } from "./../controllers/products-controller";
import { Router } from "express";


const productsRouter = Router();

productsRouter.post('/product', postProduct);
productsRouter.get('/product', getAllProducts);
productsRouter.get('/product/:id', getProductById);
productsRouter.put('/product/:id', updateProduct);
productsRouter.delete('/product/:id', deleteProduct);

export default productsRouter;