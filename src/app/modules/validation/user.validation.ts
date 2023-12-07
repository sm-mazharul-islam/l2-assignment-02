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
  quantity: z.number(),
});

export const userValidationSchema = z.object({
  userId: z.number(),
  password: z.string(),
  username: z.string(),
  fullName: userNameSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(string()),
  address: presentAddressSchema,
  orders: z.array(orderSchema).optional(),
});

export default userValidationSchema;

// const updateUserNameSchema = z.object({
//   firstName: z.string(),
//   // .refine((value) => /^[A-Z]/.test(value), {
//   //   message: 'First Name must start with a capital letter',
//   // }),
//   lastName: z.string(),
// });

// const updatePresentAddressSchema = z.object({
//   street: z.string(),
//   city: z.string(),
//   country: z.string(),
// });

// const updateOrderSchema = z.object({
//   productName: z.string(),
//   price: z.number(),
//   quantity: z.number(),
// });

// export const updateUserValidationSchema = z.object({
//   userId: z.number().optional(),
//   password: z.string().optional(),
//   username: z.string().optional(),
//   fullName: updateUserNameSchema.optional(),
//   age: z.number().optional(),
//   email: z.string().email().optional(),
//   isActive: z.boolean().optional(),
//   hobbies: z.array(string()).optional(),
//   address: updatePresentAddressSchema.optional(),
//   orders: z.array(updateOrderSchema).optional(),
// });

// export const validationUser = {
//   userValidationSchema,
//   updateUserValidationSchema,
// };
