import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
}from 'sequelize-typescript';

@Table({
    tableName : "entities",
    timestamps : true,
})
export class Entitie extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!:number;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    name!:string;
}