import { Router } from 'express';
import CartController from '../controllers/cartController';

export const cartRouter = Router();

//Agregar productos al carrito de compras
cartRouter.post('/',CartController.createCart);

//Eliminar productos del carrito de compras
cartRouter.delete('/:id',CartController.deleteCart);

//Actualizar cantidad de producto en el carrito de compras
cartRouter.put('/cart/:id',CartController.updateCart);