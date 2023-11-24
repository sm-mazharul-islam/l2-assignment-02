import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  country: string;
};
export type TOrders = {
  productName: string;
  price: number;
  quantity: string;
  // _id: false; ---> _id hide korte
};

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TUserName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  orders?: TOrders[];
};

// creating static

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId: number): Promise<TUser | null>;
}

// export interface UserModel extends Model<TUser> {
//   isUserExists(userId: number): Promise<TUser | null>;
// }
