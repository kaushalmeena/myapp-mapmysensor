import { User } from '../models/user';

export type JWTPayload = {
  userId: string;
};

export type Context = {
  user: User | null;
};
