// import all interfaces
import { IWrite } from '../../interfaces/IWrite';
import { IRead } from '../../interfaces/IRead';
import { Mutation, Setter } from '../../types/crudOperations';

// that class only can be extended
// export abstract class BaseRepository<T extends Model<InferAttributes<T>, InferCreationAttributes<T>>> 
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  //creating a property to use your code in all instances 
  // that extends your base repository and reuse on methods of class
  // public readonly _collection: T;

  //we created constructor with arguments to manipulate mongodb operations
  constructor(protected readonly _model: any) {
  }
  
  create: Setter<T, boolean> = async (item, t) => {
    const result = await this._model.create(
			item
		);

    return !!result;
  }

  update: Mutation<string, T, boolean> = async (id, item, t) => {
    const result = await this._model.update(item, {
      where: {
        id: id,
      },
    })

    return !!result;
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
