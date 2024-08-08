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
    return await this.userRepository.put(user);
  }

}