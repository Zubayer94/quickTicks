import { Model, Optional } from 'sequelize';

// We don't recommend doing this. Read on for the new way of declaring Model typings.

type UserAttributes = {
  id: number,
  name: string,
  // other attributes...
};

/*  
    we're telling the Model that 'id' is optional when creating an instance of the model (such as using Model.create()). 
*/
type UserCreationAttributes = Optional<UserAttributes, 'id'>;

class User extends Model<UserAttributes, UserCreationAttributes> {
  declare id: number;
  declare name: string;
}