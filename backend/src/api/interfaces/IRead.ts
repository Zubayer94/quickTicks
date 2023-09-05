export interface IRead<T> {
  getAll(item: T): Promise<T[] | null>;
  findOne(id: string): Promise<T | null>;
}