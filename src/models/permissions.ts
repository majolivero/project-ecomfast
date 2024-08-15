import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
}from 'sequelize-typescript';
import { Role } from './role';
import { Entities } from './entities';

@Table({
    tableName : "permissions",
    timestamps : true,
})
export class Permissions extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id! : number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull : false,
    })
    canCreate! : boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull : false,
    })
    canUpdate! : boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull : false,
    })
    canDelete! : boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull : false,
    })
    canGet! : boolean;

    @Column({
        type:DataType.BOOLEAN,
    })
    canGetByOne! : boolean;

    @ForeignKey(() => Role)
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
    })
    roleId! : number;

    @ForeignKey(() => Entities)
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
    })
    entityId! : number;
}