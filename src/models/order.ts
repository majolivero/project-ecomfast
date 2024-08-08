import{
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
} from 'sequelize-typescript';
import { User } from './user';
import { ProductCart } from './productCart';

@Table({
    tableName: "orders",
    timestamps: true,
})
export class Order extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
    })
    id!: number;

    @Column({
        type :DataType.FLOAT,
        allowNull : false,
    })
    total! : number;

    @ForeignKey(() => User)
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
    })
    userId! : number;

    @ForeignKey(() => ProductCart)
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
    })
    productCartId! : number;

    @BelongsTo(() => User)
    user! : User;
}