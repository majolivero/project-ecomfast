import { Request,Response } from 'express';
import { container } from 'tsyringe';
import ProductService from '../services/productService';

export default class ProductController {
    static async createProduct(req:Request, res:Response){
        const productService = container.resolve(ProductService);
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    }

    static async updateProduct(req:Request, res:Response){
        const productService = container.resolve(ProductService);
        const product = await productService.updateProduct(req.body);
        res.status(200).json(product);
    }

    static async deleteProduct(req:Request, res:Response){
        const productService = container.resolve(ProductService);
        const product = await productService.deleteProduct(parseInt(req.params.id));
        res.status(200).json(product);
    }

    static async getAllProducts(_:Request, res:Response){
        const productService = container.resolve(ProductService); //Se resuelve el servicio UserService. Utiliza el contenedor para resolver una instancia del userService. Inyección de dependencias
        const products = await productService.getAllProducts();
        res.json(products);
    }

    static async getProductsByOrderId(req:Request, res:Response){
        const productService = container.resolve(ProductService);
        const products = await productService.getProductsByOrderId(parseInt(req.params.orderId));
        res.json(products);
    }
}