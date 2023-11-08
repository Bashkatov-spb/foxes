import type { Animal, AnimalId } from '../features/animals/types/Animal';
import type { User, UserId } from '../features/users/types/User';

export type AnimalsState = {
  animals: Animal[];
};
export type UsersState = {
  users: User[];
};

export type AuthState = {
  user: User | undefined;
  error: string | null;
};

export type Action =
  | { type: 'animals/load'; payload: Animal[] }
  | { type: 'animals/remove'; payload: AnimalId }
  | { type: 'animals/add'; payload: Animal }
  | { type: 'users/load'; payload: User[] }
  | { type: 'users/DIE'; payload: UserId }
  | { type: 'users/changeAdminStatus'; payload: UserId }
  | { type: 'auth/checkUser'; payload: { message: string; user: User } }
  | { type: 'auth/logOut' }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'auth/sign-up'; payload: User };
// | { type: 'auth/checkUser'; payload: Animal }
// | { type: 'auth/checkUser'; payload: Animal };
