import { injectable } from "tsyringe";
import { Permissions } from "../models"

@injectable()
export default class PermissionRepository{
    async getPermissionsByRoleId(roleId:number): Promise<Permissions[]>{
        try{
            const permissions = await Permissions.findAll({
                where: {roleId}
            });
            return permissions;
        } catch(error){
            console.error("Error fetching permissions by roleId",error);
            throw error;
        }
    }
}