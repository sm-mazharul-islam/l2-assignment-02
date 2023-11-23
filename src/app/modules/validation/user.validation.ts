import { string, z } from 'zod';

const userNameSchema = z.object({
  firstName: z.string(),
  // .refine((value) => /^[A-Z]/.test(value), {
  //   message: 'First Name must start with a capital letter',
  // }),
  lastName: z.string(),
});

const presentAddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const orderSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.string(),
});

export const userValidationSchema = z.object({
  userId: z.number(),
  password: z.string(),
  userName: z.string(),
  fullName: userNameSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(string()),
  address: presentAddressSchema,
  orders: z.array(orderSchema),
});

export default userValidationSchema;
