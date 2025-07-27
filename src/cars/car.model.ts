import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { BrandModel } from "../brands/brand.model";

@Table({
  tableName: "cars",
  timestamps: false,
})
export class CarModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  engine!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  acceleration!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  weight!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  power!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  capacity!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  quantity!: number;

  @ForeignKey(() => BrandModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  brand_id!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price!: number;
}
