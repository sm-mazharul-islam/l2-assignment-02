import { Schema, model } from 'mongoose';
import { Address, Orders, User, UserName } from './user.interface';

const fullNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const ordersSchema = new Schema<Orders>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true },
});

const userSchema = new Schema<User>({
  userId: { type: Number, required: true },
  userName: { type: String, requied: true },
  fullName: fullNameSchema,
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: ['true', 'false'],
  hobbies: { type: [String], required: true },
  address: addressSchema,
  orders: [ordersSchema],
});

export const UserModel = model<User>('User', userSchema);
