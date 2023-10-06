import { Response, Request } from 'express';
import { productsService } from './../services/products-service';
import httpStatus from 'http-status';

export async function getAllProducts(req: Request, res: Response){
    const productsData = await productsService.getAllProducts();
    return res.status(httpStatus.OK).send(productsData);
}

export async function postProduct(req: Request, res: Response){
    const { description, price, id_category, quantity } = req.body;
    const result = await productsService.CreateNewProduct({ description, price, id_category, quantity });
    return res.status(httpStatus.OK).send(result);
}