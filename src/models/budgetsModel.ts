import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export class Budget extends Model {
  declare id: number;
  declare movieTitle: string;
  declare department: string;
  declare allocatedAmount: number;
  declare spentAmount: number;
  declare status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'EXCEEDED';
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Budget.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    movieTitle: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    allocatedAmount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    spentAmount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    status: {
      type: DataTypes.ENUM('PENDING', 'APPROVED', 'REJECTED', 'EXCEEDED'),
      allowNull: false,
      defaultValue: 'PENDING',
    },
  },
  {
    sequelize,
    tableName: 'budgets',
    timestamps: true,
  }
);
