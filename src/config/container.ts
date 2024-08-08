import { container } from 'tsyringe';
import UserService from '../services/userService';
import UserRepository from '../repositories/userRepository';
import ProductRepository from '../repositories/productRepository';
import ProductService from '../services/productService';
import OrderRepository from '../repositories/orderRepository';
import OrderService from '../services/orderService';
import CartRepository from '../repositories/cartRepository';
import CartService from '../services/cartService';

container.registerSingleton<UserRepository>(UserRepository); //registerSingleton es un método del contenedor que registra una clase o un valor como una única instancia (singleton). Esto significa que cada vez que se solicite una instancia de esta clase, se devolverá la misma instancia.
container.registerSingleton<UserService>(UserService);
container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);
container.registerSingleton<OrderRepository>(OrderRepository);
container.registerSingleton<OrderService>(OrderService);
container.registerSingleton<CartRepository>(CartRepository);
container.registerSingleton<CartService>(CartService);