import { cutsService } from '@/services/cuts-service';
import { Response, Request } from 'express';
import httpStatus from 'http-status';

export async function getAllCuts(req: Request, res: Response){
    const cutsData = await cutsService.getAllCuts();
    return res.status(httpStatus.OK).send(cutsData);
}

export async function getCutsById(req: Request, res: Response){
    const {id} = req.params
    const cutsData = await cutsService.getCutsById(Number(id));
    return res.status(httpStatus.OK).send(cutsData);
}

export async function postCuts(req: Request, res: Response){
    const { description, price } = req.body;
    const result = await cutsService.CreateNewCuts({ description, price });
    return res.status(httpStatus.OK).send(result);
}

export async function updateCuts(req: Request, res: Response){
    const {id} = req.params
    const { description, price } = req.body;
    const result = await cutsService.updateCuts(Number(id), { description, price });
    return res.status(httpStatus.OK).send(result);
}

export async function deleteCuts(req: Request, res: Response){
    const {id} = req.params
    const result = await cutsService.deleteCuts(Number(id));
    return res.status(httpStatus.OK).send(result);
}