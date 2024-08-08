import ProductRepository from "../repositories/productRepository"; 
import { injectable, inject } from "tsyringe"; 
import { Product } from "../models/product"; 

@injectable()
export default class ProductService {
    constructor(@inject(ProductRepository) private productRepository: ProductRepository) {}

    async createProduct(product:Product) { 
        return await this.productRepository.create(product); 
    }

    async updateProduct(product:Product){
        return await this.productRepository.update(product);
    }

    async deleteProduct(id:number){
        return await this.productRepository.delete(id);
    }

    async getAllProducts() { 
        return await this.productRepository.findAll(); 
    }

    async getProductsByOrderId(orderId:number){
        return await this.productRepository.findByOrderId(orderId);
    }
    
}