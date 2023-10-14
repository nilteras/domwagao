import { CreateProduct } from "protocols";
import { productsRepository } from "./../repositories/products-repository";

async function getAllProducts(){
    const resultProducts = await productsRepository.getAllProductsDB();

    return resultProducts;
}

async function getProductById(id: number){
    const resultProduct = await productsRepository.getProductByIdDB(id);

    return resultProduct;
}


async function CreateNewProduct(params: CreateProduct){
    const newProduct = await productsRepository.createProductDB(params);

    return newProduct;
}

async function updateProduct(id: number, params: CreateProduct){
    const productUpdated = await productsRepository.uodateProductDB(id, params);

    return productUpdated;
}

async function deleteProduct(id: number){
    const productDeleted = await productsRepository.deleteProductDB(id);

    return productDeleted;
}

export const productsService = {
    getAllProducts,
    CreateNewProduct,
    updateProduct,
    deleteProduct,
    getProductById
}