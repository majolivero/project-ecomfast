import UserRepository from "../repositories/userRepository"; 
import { injectable, inject } from "tsyringe"; 
import { User } from "../models/user"; 

@injectable()  //Se usa para marcar una clase como inyectable
export default class UserService { 
  constructor(@inject(UserRepository) private userRepository: UserRepository) {} //Inject se usa para inyectar dependencias en el constructor

  async getAllUsers() { 
    return await this.userRepository.findAll(); 
  }

  async createUser(user:User) { 
    return await this.userRepository.create(user); 
  }

  async deleteUser(id:number){
    return await this.userRepository.delete(id);
  }

  async updateUser(user:User){
    return await this.userRepository.update(user);
  }

  async getUserByEmail(email:string):Promise<User | null>{
    return await this.userRepository.findByEmail(email);
  }

  async checkUserCredentials(
    email:string,
    password:string
  ):Promise<User>{
    const user = await this.getUserByEmail(email);
    if(user && user.password === password){
      return user;
    }
    throw new Error("Invalid credentials");
  }
}