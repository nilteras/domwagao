import { CreateService } from "@/protocols";
import { cutsRepository } from "@/repositories/cuts-repository";


async function getAllCuts(){
    const resultCuts = await cutsRepository.getAllCutsDB();

    return resultCuts;
}

async function getCutsById(id: number){
    const resultCuts = await cutsRepository.getCutsByIdDB(id);

    return resultCuts;
}


async function CreateNewCuts(params: CreateService){
    const newCuts = await cutsRepository.createCutsDB(params);

    return newCuts;
}

async function updateCuts(id: number, params: CreateService){
    const cutsUpdated = await cutsRepository.updateCutsDB(id, params);

    return cutsUpdated;
}

async function deleteCuts(id: number){
    const cutsDeleted = await cutsRepository.deleteCutsDB(id);

    return cutsDeleted;
}

export const cutsService = {
    getAllCuts,
    getCutsById,
    CreateNewCuts,
    updateCuts,
    deleteCuts
}