import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';

const createUserIntoDB = async (userData: TUser) => {
  if (await User.isUserExists(userData.userId)) {
    throw new Error('User Already Exists!');
  }
  const result = await User.create(userData);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDB = async (userId: number | string) => {
  const result = await User.findOne({ userId });
  return result;
};

const updateUser = async (
  userId: number,
  userData: TUser,
): Promise<TUser | null> => {
  const result = await User.findOneAndUpdate(userData, { new: true });
  return result;
};

const deleteUser = async (userId: number | string): Promise<TUser | null> => {
  const result = await User.findOneAndDelete({ userId });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUser,
  deleteUser,
};
