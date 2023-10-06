import prisma from "./../config/database";
import { CreateProduct } from "./../protocols";

async function createProductDB(product: CreateProduct){
   
    const result = await prisma.products.create({
        data: product
    });

    return result
}

async function getAllProductsDB(){
    const result = await prisma.products.findMany();

    return result;
}



export const productsRepository = {
    createProductDB,
    getAllProductsDB
}