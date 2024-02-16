// import all interfaces
import { IWrite } from '../../interfaces/IWrite';
import { IRead } from '../../interfaces/IRead';
import { Mutation, Setter, Getter } from '../../types/crudOperations';

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

  delete: Setter<string, boolean> = async(id: string) => {
    const removed = await this._model.destroy({
      where: {
        id: id,
      }
    })
    return !!removed
  }

  getAll: Getter<void, T[] | null> = async() => {
    throw new Error('Method not implemented.');
  }

  findOne: Getter<string, T | null> = async id => {
    const item = await  this._model.findOne({
      where: {
        id: id
      }
    })
    return item;
  }
}
