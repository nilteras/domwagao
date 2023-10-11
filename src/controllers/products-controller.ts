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

export async function updateProduct(req: Request, res: Response){
    const {id} = req.params
    const { description, price, id_category, quantity } = req.body;
    const result = await productsService.updateProduct(Number(id), { description, price, id_category, quantity });
    return res.status(httpStatus.OK).send(result);
}

export async function deleteProduct(req: Request, res: Response){
    const {id} = req.params
    const result = await productsService.deleteProduct(Number(id));
    return res.status(httpStatus.OK).send(result);
}