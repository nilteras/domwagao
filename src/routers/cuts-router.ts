import { deleteCuts, getAllCuts, getCutsById, postCuts, updateCuts } from "@/controllers/cuts-controller";
import { Router } from "express";

const cutsRouter = Router();

cutsRouter.get('/services', getAllCuts)
cutsRouter.get('/services/:id', getCutsById)
cutsRouter.post('/services', postCuts)
cutsRouter.put('/services/:id', updateCuts)
cutsRouter.delete('/services/:id', deleteCuts)

export default cutsRouter;