// import all interfaces
import { IWrite } from '../../interfaces/IWrite';
import { IRead } from '../../interfaces/IRead';
import { Model } from 'sequelize';
import db from '../../../config/database'

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  //creating a property to use your code in all instances 
  // that extends your base repository and reuse on methods of class
  public readonly _collection: typeof Model;

  //we created constructor with arguments to manipulate mongodb operations
  constructor(modelName: string) {
    this._collection = db._[modelName] as any;
  }

  // we add to method, the async keyword to manipulate the insertOne result
  // of method.
  async create(item: T): Promise<boolean> {
    const result = await this._collection.create(
			item
		);
    // after the insert operations, we returns only acknowledged property (that haves a 1 or 0 results)
    // and we convert to boolean result (0 false, 1 true)
    return !!result.acknowledged;
  }


  update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}