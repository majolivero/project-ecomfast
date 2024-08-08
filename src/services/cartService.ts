import CartRepository from "../repositories/cartRepository"; 
import { injectable, inject } from "tsyringe"; 
import { Cart } from "../models/cart"; 

@injectable()
export default class CartService {
    constructor(@inject(CartRepository) private cartRepository: CartRepository) {}

    async createCart(cart:Cart) { 
        return await this.cartRepository.create(cart); 
    }

    async deleteCart(id:number){
        return await this.cartRepository.delete(id);
    }

    async updateCart(cart:Cart){
        return await this.cartRepository.put(cart);
    }
}