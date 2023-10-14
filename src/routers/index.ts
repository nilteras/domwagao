import { Router } from "express";
import productsRouter from "./products-router";
import cutsRouter from "./cuts-router";


const router = Router();

router.use(productsRouter);
router.use(cutsRouter)

export default router;