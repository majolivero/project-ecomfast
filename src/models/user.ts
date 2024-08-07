import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    ForeignKey,
}from 'sequelize-typescript';
import { Role } from './role';

@Table({
    tableName : "users",
    timestamps : true,
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id! : number;

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    email! : string;

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    password! : string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    roleId! : number;

    @BelongsTo(() => Role)
    role! : Role;
}