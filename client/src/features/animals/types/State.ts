import { Animal } from './Animal';
import { User } from '../../users/types/User';

export type AnimalsState = {
  animals: Animal[];
  error: string | null;
  loading: boolean;
};
export type UsersState = {
  users: User[];
};
