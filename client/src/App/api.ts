/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Animal } from '../features/animals/types/Animal';
import type { User, UserId, UserWithoutId } from '../features/users/types/User';

export const fetchAnimals = async (): Promise<Animal[]> => {
  const res = await fetch('/api/animals');

  if (res.status >= 400) {
    console.log(res);

    throw new Error(res.statusText);
  }
  return res.json();
};

export const fetchAnimalAdd = async (animal: FormData): Promise<Animal> => {
  const res = await fetch('/api/animals', {
    method: 'POST',
    body: animal,
  });
  return res.json();
};

export const fetchUsers = async (): Promise<{ users: User[] }> => {
  const res = await fetch('/api/users');
  return res.json();
};

export const fetchUserRemove = async (id: UserId): Promise<{ message: string }> => {
  const res = await fetch(`/api/users/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const fetchUserChangeAdminStatus = async (id: UserId): Promise<{ message: string }> => {
  const res = await fetch(`/api/users/${id}`, {
    method: 'PUT',
  });
  return res.json();
};

export const fetchLogOut = async (): Promise<{ message: string }> => {
  const res = await fetch('/api/auth/logout');
  const data: { message: string } = await res.json();
  console.log(data);

  return data;
};

export const fetchSignIn = async (user: { email: string; password: string }): Promise<User> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const fetchSignUp = async (user: UserWithoutId): Promise<User> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const fetchCheckUser = async (): Promise<{ message: string; user: User }> => {
  const res = await fetch('/api/auth/check');
  return res.json();
};
