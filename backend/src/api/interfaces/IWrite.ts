import { Transaction } from 'sequelize'

export interface IWrite<T> {
  create(item: T, transaction: Transaction): Promise<boolean>;
  update(id: string, item: T, transaction: Transaction): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}