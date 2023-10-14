import { CreateService } from "@/protocols";
import prisma from "./../config/database";

async function createCutsDB(cuts: CreateService) {

    const result = await prisma.services.create({
        data: cuts
    });

    return result
}

async function getAllCutsDB() {
    const result = await prisma.services.findMany();

    return result;
}

async function getCutsByIdDB(id: number){
    const result = await prisma.services.findUnique({
        where: {
            id
        }
    });
    return result
}

async function updateCutsDB(id: number, cuts: CreateService) {
    const {description,price} = cuts;
    const result = prisma.services.update({
        where: {
            id
        },
        data: {
            description,
            price
        }
    });

    return result;
}

async function deleteCutsDB(id: number) {
    return prisma.services.delete({
        where: {
            id
        }
    });
}

export const cutsRepository = {
    createCutsDB,
    getAllCutsDB,
    getCutsByIdDB,
    updateCutsDB,
    deleteCutsDB
}