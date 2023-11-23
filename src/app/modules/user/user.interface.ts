export type UserName = {
  firstName: string;
  lastName: string;
};
export type Address = {
  street: string;
  city: string;
  country: string;
};
export type Orders = {
  productName: string;
  price: number;
  quantity: string;
};

export type User = {
  userId: number;
  userName: string;
  password: string;
  fullName: UserName;
  age: number;
  email: string;
  isActive: ['true', 'false'];
  hobbies: string[];
  address: Address;
  orders: Orders[];
};
