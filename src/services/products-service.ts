import { CreateProduct } from "protocols";
import { productsRepository } from "./../repositories/products-repository";

async function getAllProducts(){
    const resultProducts = await productsRepository.getAllProductsDB();

    return resultProducts;
}

async function CreateNewProduct(params: CreateProduct){
    const productData = params;
    const newProduct = await productsRepository.createProductDB(productData);

    return newProduct;
}

export const productsService = {
    getAllProducts,
    CreateNewProduct
}