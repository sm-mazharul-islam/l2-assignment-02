import { Schema, model } from 'mongoose';
import { Address, Orders, User, UserName } from './user.interface';

const fullNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is Required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is Required'],
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
  userId: { type: Number, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  fullName: {
    type: fullNameSchema,
    required: true,
  },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: {
    type: addressSchema,
    required: true,
  },
  orders: [ordersSchema],
});

export const UserModel = model<User>('User', userSchema);
