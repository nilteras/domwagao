import prisma from "./../config/database";
import { CreateProduct } from "./../protocols";

async function createProductDB(product: CreateProduct) {

    const result = await prisma.products.create({
        data: product
    });

    return result
}

async function getAllProductsDB() {
    const result = await prisma.products.findMany();

    return result;
}

async function uodateProductDB(id: number, product: CreateProduct) {
    const {description,price,id_category,quantity} = product
    const result = prisma.products.update({
        where: {
            id
        },
        data: {
            description,
            price,
            id_category,
            quantity
        }
    });

    return result;
}

async function deleteProductDB(id: number) {
    return prisma.products.delete({
        where: {
            id
        }
    });
}

export const productsRepository = {
    createProductDB,
    getAllProductsDB,
    uodateProductDB,
    deleteProductDB
}