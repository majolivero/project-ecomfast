import { Router } from 'express';
import { orderRouter,productRouter,userRouter,cartRouter} from './';

const router = Router();

router.use('/user',userRouter);
router.use('/product',productRouter);
router.use('/order',orderRouter);
router.use('/cartRouter',cartRouter);

export default router;