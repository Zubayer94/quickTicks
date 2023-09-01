import { Transaction } from 'sequelize'

export type Getter<T, R = unknown> = (data: T) => Promise<R>
export type Setter<T, R = any> = (data: T, transaction: Transaction | null) => Promise<R>
export type Mutation<I, T, R = any> = (id: I, data: T, transaction: Transaction | null) => Promise<R>