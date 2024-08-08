import { Router } from 'express';
import ProductController from '../controllers/productController';

export const productRouter = Router();

//Creación de productos
productRouter.post('/',ProductController.createProduct);

//Actualización de productos
productRouter.put('/',ProductController.updateProduct);

//Eliminación de productos
productRouter.delete('/:id',ProductController.deleteProduct);

//Obtención de todos los productos
productRouter.get('/',ProductController.getAllProducts);

//Obtener todos los productos por ID de orden
productRouter.get('/product/orderId',ProductController.getProductsByOrderId);

