import { User } from '../user/user.interface';
import { UserModel } from '../user/user.model';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
