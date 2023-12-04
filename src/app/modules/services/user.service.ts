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

const getSingleUserFromDB = async (userId: number) => {
  const result = await User.findOne({ userId });
  return result;
};

const updateUser = async (
  userId: number | string,
  userData: TUser,
): Promise<TUser | null> => {
  const result = await User.findOneAndUpdate({ userId }, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUser = async (userId: number): Promise<TUser | null> => {
  const result = await User.findOneAndDelete({ userId });
  // console.log(result, 'deleted successfully');
  return result;
};

const getSingleOrder = async (userId: number) => {
  const result = await User.findOne({ userId }, 'orders');
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateOrder = async (userId: number, orderData: any[]) => {
  const result = await User.findOneAndUpdate(
    { userId },
    { $addToSet: { orders: orderData } },
    {
      new: true,
    },
  );
  return result;
};

const calculateTotal = async (userId: number) => {
  const findOrder = await User.findOne({ userId }, 'orders');
  const result = findOrder?.orders?.reduce(
    (allPrice, order) => allPrice + order.price,
    0,
  );
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUser,
  deleteUser,
  getSingleOrder,
  updateOrder,
  calculateTotal,
};
