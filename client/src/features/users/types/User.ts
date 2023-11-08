export type User = {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean;
  password: string;
};

export type UserId = User['id'];

export type UserWithoutId = Omit<User, 'id'>;
